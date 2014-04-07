module.exports = function (app) {
  app.get('/', function (req, res, next) {
    var locals = {
      title: 'Accueil',
      rib: '533ef75d6b4e6b8e943aa9d8',
      errors: req.flash('error')
    }
    res.render('home', locals)
  })
}
