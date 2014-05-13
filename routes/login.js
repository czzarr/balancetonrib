var auth = require('../lib/auth')
var passport = require('passport')
var ssl = require('../lib/ssl')

module.exports = function (app) {
  app.get(
    '/login/facebook',
    ssl.ensureSSL,
    passport.authenticate('facebook', { scope: ['email'] })
  )
  app.get(
    '/login/facebook/callback',
    ssl.ensureSSL,
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/')
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}
