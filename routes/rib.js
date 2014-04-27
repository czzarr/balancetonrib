var _ = require('lodash')
var async = require('async')
var auth = require('../lib/auth')
var email = require('../lib/email')
var model = require('../model')

module.exports = function (app) {
  app.post('/ribs', auth.ensureAuth, function (req, res, next) {
    async.auto({
      rib: function (cb) {
        var Rib = new model.Rib()
        Rib.iban = req.body.iban.toUpperCase().replace(/ /g, '')
        Rib.bic = req.body.bic.toUpperCase().replace(/ /g, '')
        Rib.bank = Rib.iban.slice(4,9)
        Rib.counter = Rib.iban.slice(9,14)
        Rib.accountNumber = Rib.iban.slice(14,25)
        Rib.key = parseInt(Rib.iban.slice(25), 10)
        Rib._user = req.user.facebook
        console.log(Rib);
        Rib.save(cb)
      },
      user: ['rib', function (cb, r) {
        model.User
          .update({ facebook: req.user.facebook }, { $set: { hasRib: true } })
          .exec(cb)
      }]
    }, function (err, r) {
      if (err && err.name === 'ValidationError') {
        _(err.errors).map(function (error) {
          req.flash('error', error.message)
        })
        req.flash('rib', req.body)
        res.redirect('/ribs/add')
      } else if (err) {
        next(err)
      } else {
        req.flash('success', 'RIB ajouté avec succès')
        res.redirect('/u/' + req.user.facebook)
        email.notifyAdmin('New RIB', r.rib)
      }
    })
  })

  app.get('/ribs/add', auth.ensureAuth, function (req, res, next) {
    res.render('addRib', {
      title: 'Ajouter un RIB',
      rib: req.flash('rib')[0],
      errors: req.flash('error')
    })
  })

  app.get('/ribs/delete/:ribId', auth.ensureAuth, function (req, res, next) {
    var ribId = req.params.ribId

    async.auto({
      rib: function (cb) {
          model.Rib
            .findById(ribId)
            .exec(cb)
      },
      permission: ['rib', function (cb, r) {
        if (r.rib._user === req.user.facebook) {// same user
          cb(null)
        } else {
          cb(new Error('Cannot delete another user\'s RIB'))
        }
      }],
      delete: ['permission', function (cb, r) {
        r.rib.remove(cb)
      }],
      user: ['delete', function (cb, r) {
        model.User
          .update({ facebook: req.user.facebook }, { $set: { hasRib: false } })
          .exec(cb)
      }]
    }, function (err, r) {
      if (err) {
        _(err.errors).map(function (error) {
          req.flash('error', error.message)
        })
        res.redirect('/')
      } else {
        req.flash('success', 'RIB supprimé avec succès')
        res.redirect('/u/' + req.user.facebook)
      }
    })
  })

}
