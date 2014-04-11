var async = require('async')
var model = require('../model')

module.exports = function (app) {
  app.get('/u/:userId', function (req, res, next) {
    async.auto({
        friend: function (cb) {
          model.User
            .findOne({ facebook: req.params.userId })
            .exec(cb)
        },
        ribs: ['friend', function (cb, r) {
          model.Rib
            .find({ _user: r.friend._id })
            .exec(cb)
        }]
      }, function (err, r) {
        if (err) return next(err)
        if (!r.friend) return next()

        res.render('user', {
          ribs: r.ribs,
          title: r.friend.profile.name,
          friend: r.friend
        })
    })
  })
}
