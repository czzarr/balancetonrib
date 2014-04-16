module.exports = function (app) {
  app.get('/', function (req, res, next) {
    if (req.user)
      res.render('home')
    else
      res.render('landing')
  })
}
