var ssl = require('../lib/ssl')

module.exports = function (app) {
  app.get('/', ssl.ensureSSL, unction (req, res, next) {
    if (req.user)
      res.render('home')
    else
      res.render('landing')
  })
}
