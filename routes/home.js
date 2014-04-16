module.exports = function (app) {
  app.get('/', function (req, res, next) {
    var locals = {
      title: 'Accueil',
      errors: req.flash('error')
    }
    if (req.user)
      res.render('home', locals)
    else
      res.render('landing', locals)
  })
}
