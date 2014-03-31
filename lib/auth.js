var config = require('../config')
var debug = require('debug')('auth')
var model = require('../model')
var passport = require('passport')
var secrets = require('../secrets')
var url = require('url')
var User = model.User
var FacebookStrategy = require('passport-facebook').Strategy

/**
 * Middleware to process the `returnTo` query parameter and if it's safe, add
 * it to the session so that the user can be redirected there after they have
 * logged in or signed up.
 */
module.exports.returnTo = function (req, res, next) {
  if (!req.isAuthenticated() && req.query.returnTo) {
    // Convert relative URLs to absolute, with protocol and
    var uri = url.resolve(config.siteOrigin, req.query.returnTo)
    var origin = '//' + (url.parse(uri).host || url.parse('https:' + uri).host)
    if (origin === config.siteOrigin) {
      // Only redirect to our own domain, so we're not an "open redirector"
      req.session.returnTo = req.query.returnTo
    }
  }
  next()
}

/**
 * Middleware to ensure that the user has logged in. If they're not, redirect to
 * the sign up page.
 */
module.exports.ensureAuth = function (req, res, next) {
  if (req.isAuthenticated()) {
    next()
  } else {
    debug('Redirecting because user is not logged in')
    res.redirect(config.secureSiteOrigin + '/signup/?returnTo=' + req.url)
  }
}

/**
 * Passport serialize user function.
 */
module.exports.serializeUser = function (user, done) {
  process.nextTick(function () {
    done(null, user.id)
  })
}

/**
 * Passport deserialize user function.
 */
module.exports.deserializeUser = function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
}

/**
 * Sign in with Facebook.
 */

module.exports.facebookStrategy = new FacebookStrategy(secrets.facebook, function(accessToken, refreshToken, profile, done) {
  debug('accessToken '+accessToken)
  User.findOne({ facebook: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser)
    else {
      var user = new User()
      user.email = profile._json.email
      user.facebook = profile.id
      user.tokens.push({ kind: 'facebook', accessToken: accessToken })
      user.profile.name = profile.displayName
      user.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large'
      user.save(function(err) {
        done(err, user)
      })
    }
  })
})

