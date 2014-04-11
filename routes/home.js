module.exports = function (app) {
  app.get('/', function (req, res, next) {
    var locals = {
      title: 'Accueil',
      errors: req.flash('error')
    }
    res.render('home', locals)
  })
}
