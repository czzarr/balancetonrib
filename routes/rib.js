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
    Rib._user = req.user._id
    Rib.save(function (err, rib) {
      if (err && err.name === 'ValidationError') {
        _(err.errors).map(function (error) {
          req.flash('error', error.message)
        })
        res.redirect('/')
      } else if (err) {
        next(err)
      } else {
        req.flash('success', 'RIB ajouté avec succès')
        res.redirect('/')
      }
    })
  })
}
