module.exports = function (app) {
  app.get('/cgu', function (req, res) {
    res.render('cgu', {
      url: '/cgu',
      title: 'Conditions générales d\'utilisation',
    })
  })
}
