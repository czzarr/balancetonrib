var async = require('async')
var config = require('./config')
var debug = require('debug')('BalanceTonRib:site')
var express = require('express')
var http = require('http')
var model = require('./model')
var path = require('path')

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
app.use(express.static(path.join(__dirname, 'static')))
app.use(slashes(false))
app.use(favicon())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cookieParser())
app.use(csrf())
//app.use(app.router)

require('./routes')(app)

var server = http.createServer(app)

async.series([
  model.connect,
  function (cb) {
    server.listen(config.port, cb)
  }
], function (err) {
  if (!err) {
    debug('BalanceTonRib listening on ' + config.port)
    //if (!config.isProd) util.triggerLiveReload()
  }
  done(err)
})
