var _ = require('lodash')
var async = require('async')
var auth = require('../lib/auth')
var model = require('../model')

module.exports = function (app) {
  app.post('/ribs', auth.ensureAuth, function (req, res, next) {
    var Rib = new model.Rib()
    Rib.bank = req.body.bank
    Rib.counter = req.body.counter
    Rib.accountNumber = req.body.accountNumber.toUpperCase()
    Rib.key = req.body.key
    Rib.canonical = Rib.bank + Rib.counter + Rib.accountNumber + Rib.key
    Rib._user = req.user.facebook
    Rib.save(function (err, rib) {
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
