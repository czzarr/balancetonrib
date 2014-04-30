var _ = require('lodash')
var async = require('async')
var model = require('../model')

module.exports = function (app) {
  app.get('/u/:fbId', function (req, res, next) {
    async.auto({
        ribs: function (cb) {
          model.Rib
            .find({ _user: req.params.fbId })
            .exec(cb)
        }
      }, function (err, r) {
        if (err) return next(err)

        if (req.user.facebook === req.params.fbId) {
          var friend = {}
          friend.name = req.user.profile.name
          friend.uid = req.user.facebook
          var me = true
        } else {
          var friend = res.locals.indexedFriends[req.params.fbId]
        }
        if (!friend) return next()

        res.render('user', {
          errors: req.flash('error'),
          success: req.flash('success'),
          info: req.flash('info'),
          ribs: r.ribs,
          title: friend.name,
          friend: friend,
          me: me
        })
    })
  })
}
