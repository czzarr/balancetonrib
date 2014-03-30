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
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a provider id or email.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

/**
 * Sign in with Facebook.
 */

module.exports.facebookStrategy = new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
  User.findOne({ facebook: profile.id }, function(err, existingUser) {
    if (existingUser) return done(null, existingUser)
    User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
      if (existingEmailUser) {
        req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' })
        done(err)
      } else {
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
})

