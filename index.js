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
var flash = require('express-flash')
var http = require('http')
var level = require('level')
var logger = require('morgan')
var model = require('./model')
var MongoStore = require('connect-mongo')(express)
var passport = require('passport')
var path = require('path')
var request = require('request')
var secrets = require('./secrets')
var session = require('express-session')
var static = require('serve-static')
var sub = require('level-sublevel')
var ttl = require('level-ttl')
var url = require('url')

var friendsdb = level('friends.db', { valueEncoding: 'json' })
friendsdb = sub(friendsdb)
friendsdb = ttl(friendsdb)

function addHeaders(req, res, next) {
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

var app = express()

app.enable('trust proxy')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(addHeaders)

app.use(logger('dev'))
app.use(compress())
app.use(flash())
var out = static(path.join(__dirname, '/out'))
var vendor = static(path.join(__dirname, '/vendor'))
app.use(serveStatic)
app.use(out)
app.use(lib)
app.use(favicon())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(session({
  secret: secrets.session,
  proxy: true,
  store: new MongoStore({
    url: config.mongo,
    auto_reconnect: true
  })
}))
app.use(csrf())
app.use(passport.initialize())
app.use(passport.session())
passport.serializeUser(auth.serializeUser)
passport.deserializeUser(auth.deserializeUser)
passport.use(auth.facebookStrategy)
app.use(function (req, res, next) {
  res.locals.user = req.user
  res.locals._csrf = req.csrfToken()
  next()
})
app.use(function (req, res, next) {
  if (!req.user) return next()
  friendsdb.get(req.user.facebook, function (err, value) {
    if (err) {
      if (err.notFound) {
        var accessToken = _.findWhere(req.user.tokens, { kind: 'facebook' }).accessToken
        //var endpoint = 'https://graph.facebook.com/me/friends'
        //var params = '?fields=name,picture' + '&access_token=' + accessToken
        var endpoint = 'https://graph.facebook.com/fql'
        var params = '?q=select mutual_friend_count,uid,name,pic_square from user where uid in\
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
              debug(req.user.facebook, friends.length, 'boo')
              friendsdb.put(req.user.facebook, friends, { ttl: 1000 * 60 * 60 }, function (err) {
                if (err) return next(err)
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
      res.locals.friends = value
      next()
    }
  })
})
app.use(function (req, res, next) {
  debug('trop damis', res.locals.friends.length)
  next()
})

require('./routes')(app)

var server = http.createServer(app)

var done = function () {}

async.series([
  model.connect,
  function (cb) {
    server.listen(config.ports.site, cb)
  }
], function (err) {
  if (!err) {
    debug('BalanceTonRib listening on ' + config.ports.site)
    //if (!config.isProd) util.triggerLiveReload()
  }
  done(err)
})
