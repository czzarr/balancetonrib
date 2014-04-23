var email = require('../lib/email')
var httpStatus = require('http-status-codes')

module.exports = function (app) {
  app.use(function(req, res) {
    res.status(404).render('error', {
      title: '404 Page Not Found',
    })
  })

  app.get('/500', function (req, res, next) {
    next(new Error('Manually visited /500'))
  })

  app.use(function (err, req, res, next) {
    console.error('\n[UNCAUGHT EXCEPTION] ' + req.method + ': ' + req.url + '\n')
    console.error(err.stack)
    console.error('\nHTTP HEADERS:')
    console.dir(req.headers)
    if (req.params) {
      console.error('\nHTTP GET PARAMETERS:')
      console.dir(req.params)
    }
    if (req.body) {
      console.error('\nHTTP BODY:')
      console.dir(req.body)
    }

    email.notifyOnException({ err: err, req: req })

    var code = 500
    if (typeof err.status === 'number') {
      code = err.status
    }

    res.status(code).render('error', {
      title: code + ' ' + httpStatus.getStatusText(code),
    })
  })
}
