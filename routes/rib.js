var auth = require('../lib/auth')
var model = require('../model')

module.exports = function (app) {
  app.post('/ribs', auth.ensureAuth, function (req, res, next) {
    var Rib = new model.Rib()
    Rib.bank = req.body.bank
    Rib.counter = req.body.counter
    Rib.accountNumber = req.body.accountNumber
    Rib.key = req.body.key
    Rib.canonical = Rib.bank + Rib.counter + Rib.accountNumber + Rib.key
    Rib._user = req.user._id
    Rib.save(function (err, rib) {
      console.log('biatch');
      if (err) return next(err)
      res.json({ title: 'Home', rib: rib.canonical })
    })
  })
}
