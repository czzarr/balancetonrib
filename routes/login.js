var auth = require('../lib/auth')
var passport = require('passport')

module.exports = function (app) {
  app.get('/login', auth.returnTo, function (req, res) {
    if (req.user) {
      res.redirect(req.session.returnTo || '/')
    } else {
      res.render('login', {
        title: 'Login',
        errors: req.flash('error')
      })
    }
  })

  app.get(
    '/login/facebook',
    passport.authenticate('facebook', { scope: ['email'] })
  )
  app.get(
    '/login/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect(req.session.returnTo || '/')
  })

  app.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
  })
}
