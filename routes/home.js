var async = require('async')
var model = require('../model')
var ssl = require('../lib/ssl')

module.exports = function (app) {
  app.get('/', ssl.ensureSSL, function (req, res, next) {
    if (req.user)
      async.auto({
          rib: function (cb) {
            model.Rib
              .find({ _user: req.user.facebook })
              .exec(cb)
          },
          friendsWithRib: function (cb) {
            var friends = Object.keys(res.locals.indexedFriends)
            model.User
              .find({ hasRib: true, facebook : { $in: friends } })
              .select('profile facebook')
              .limit(10)
              .exec(cb)
          }
        }, function (err, r) {
          if (err) return next(err)
          console.log(r.friendsWithRib);
          res.render('home', {
            errors: req.flash('error'),
            success: req.flash('success'),
            info: req.flash('info'),
            rib: r.rib[0],
            friendsWithRib: r.friendsWithRib
          })
      })
    else
      res.render('landing')
  })
}
