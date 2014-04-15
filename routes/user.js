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

        var friend = res.locals.friends[req.params.fbId]
        res.render('user', {
          ribs: r.ribs,
          title: friend.name,
          friend: friend
        })
    })
  })
}
