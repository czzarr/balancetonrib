var _ = require('lodash')
var async = require('async')
var auth = require('./lib/auth')
var bodyParser = require('body-parser')
var config = require('./config')
var compress = require('compression')
var cookieParser = require('cookie-parser')
var csrf = require('csurf')
var debug = require('debug')('site')
var express = require('express')
var favicon = require('static-favicon')
var flash = require('connect-flash')
var friendsdb = require('./lib/friends')
var http = require('http')
var logger = require('morgan')
var model = require('./model')
var MongoStore = require('connect-mongo')(express)
var passport = require('passport')
var path = require('path')
var request = require('request')
var run = require('./run')
var secrets = require('./secrets')
var session = require('express-session')
var static = require('serve-static')
var url = require('url')

function Site (opts, cb) {
  var self = this
  //if (opts) util.extend(self, opts)

  /** @type {number} port */
  self.port || (self.port = config.ports.site)

  self.start(cb)
}

Site.prototype.start = function (done) {
  var self = this
  done || (done = function () {})

  self.app = express()
  self.server = http.createServer(self.app)

  // Trust the X-Forwarded-* headers from nginx
  self.app.enable('trust proxy')

  // Templating
  self.app.set('views', path.join(__dirname, 'views'))
  self.app.set('view engine', 'jade')
  self.app.locals.config = config

  // Logging
  self.app.use(logger('dev'))

  // Headers
  self.app.use(self.addHeaders)
  self.app.use(compress())

  // Static
  self.serveStatic()

  // Sessions and auth
  self.setupSessions()

  // Template locals
  self.app.use(self.addTemplateLocals)
  self.app.use(self.fetchFriends)

  // Errors propagate through flash
  self.app.use(flash())
  self.app.use(function (req, res, next) {
    //debug('messages', req.flash())
    //debug('error', res.locals.req.flash('error'))
    next()
  })

  // Routing
  require('./routes')(self.app)

  async.series([
    model.connect,
    function (cb) {
      self.server.listen(self.port, cb)
    }
  ], function (err) {
    if (!err) {
      debug('BalanceTonRib listening on ' + self.port)
    }
    done(err)
  })
}

Site.prototype.addHeaders = function (req, res, next) {
  var extname = path.extname(url.parse(req.url).pathname)

  // Add cross-domain header for fonts, required by spec, Firefox, and IE.
  if (['.eot', '.ttf', '.otf', '.woff'].indexOf(extname) >= 0) {
    res.header('Access-Control-Allow-Origin', '*')
  }

  // Prevents IE and Chrome from MIME-sniffing a response. Reduces exposure to
  // drive-by download attacks on sites serving user uploaded content.
  res.header('X-Content-Type-Options', 'nosniff')

  // Prevent rendering of site within a frame.
  res.header('X-Frame-Options', 'DENY')

  // Enable the XSS filter built into most recent web browsers. It's usually
  // enabled by default anyway, so role of this headers is to re-enable for this
  // particular website if it was disabled by the user.
  res.header('X-XSS-Protection', '1; mode=block')

  // Force IE to use latest rendering engine or Chrome Frame
  res.header('X-UA-Compatible', 'IE=Edge,chrome=1')

  next()
}

/**
 * Fetch Facebook friends of the user so that they're available for search on every page
 * Try in LevelDB cache first, query Facebook if miss.
 *
 */
Site.prototype.fetchFriends = function (req, res, next) {
  if (!req.user) return next()
  friendsdb.get(req.user.facebook, function (err, value) {
    if (err) {
      if (err.notFound) {
        var accessToken = _.findWhere(req.user.tokens, { kind: 'facebook' }).accessToken
        var endpoint = 'https://graph.facebook.com/fql'
        var params = '?q=select mutual_friend_count,uid,name,pic_square,pic_big from user where uid in\
(select uid2 from friend where uid1=me()) order by mutual_friend_count desc\
        &access_token=' + accessToken
        var query = endpoint + params
        var _res = res
        request.get(query, function (err, res, body) {
          if (err) return next(err)
          var body = JSON.parse(body)
          var friends = body.data
          function savePagedResults (paging) {
            if (paging && paging.next) {
              debug('new page')
              request.get(paging.next, function (err, res, body) {
                var body = JSON.parse(body)
                friends.concat(body.data)
                savePagedResults(body.paging)
              })
            } else {
              // store friends object for 1 hour
              friendsdb.put(req.user.facebook, friends, { ttl: 1000 * 60 * 60 }, function (err) {
                if (err) return next(err)
                _res.locals.indexedFriends = _.indexBy(friends, 'uid')
                _res.locals.friends = friends
                next()
              })
            }
          }
          savePagedResults(body.paging)
        })
      } else {
        return next(err)
      }
    } else {
      res.locals.indexedFriends = _.indexBy(value, 'uid')
      res.locals.friends = value
      next()
    }
  })
}

/**
 * Make certain variables available to templates on this request.
 */
Site.prototype.addTemplateLocals = function (req, res, next) {
  res.locals._csrf = req.csrfToken()
  res.locals.req = req
  res.locals.user = req.user
  next()
}

Site.prototype.serveStatic = function () {
  var self = this

  var out = static(path.join(__dirname, '/out'))
  var bowerComponents = static(path.join(__dirname, '/bower_components'))
  var images = static(path.join(__dirname, '/static/images'))
  self.app.use(favicon())
  self.app.use(out)
  self.app.use(bowerComponents)
  self.app.use(images)
}

Site.prototype.setupSessions = function () {
  var self = this

  // Sessions
  self.app.use(bodyParser.json())
  self.app.use(bodyParser.urlencoded())
  self.app.use(cookieParser())
  self.app.use(session({
    secret: secrets.session,
    proxy: true,
    store: new MongoStore({
      url: config.mongo,
      auto_reconnect: true
    })
  }))
  self.app.use(csrf())

  // Passport
  self.app.use(passport.initialize())
  self.app.use(passport.session())
  passport.serializeUser(auth.serializeUser)
  passport.deserializeUser(auth.deserializeUser)
  passport.use(auth.facebookStrategy)
}

if (!module.parent) run(Site)
