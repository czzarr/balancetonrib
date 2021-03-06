var async = require('async')
var auth = require('../lib/auth')
var model = require('../model')
var ssl = require('../lib/ssl')

module.exports = function (app) {
  app.get(
    '/',
    ssl.ensureSSL,
    auth.returnTo,
    function (req, res, next) {
    if (req.user)
      async.auto({
          ribs: function (cb) {
            model.Rib
              .find({ _user: req.user.facebook })
              .exec(cb)
          },
          friendsWithRib: function (cb) {
            var friends = Object.keys(res.locals.indexedFriends)
            model.User
              .find({ hasRib: { $gt: 0 }, facebook : { $in: friends } })
              .select('profile facebook')
              .limit(10)
              .exec(cb)
          }
        }, function (err, r) {
          if (err) return next(err)
          res.render('home', {
            errors: req.flash('error'),
            success: req.flash('success'),
            info: req.flash('info'),
            ribs: r.ribs,
            friendsWithRib: r.friendsWithRib
          })
      })
    else
      res.render('landing')
  })
}
