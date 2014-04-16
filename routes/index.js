var config = require('../config')

module.exports = function (app) {
  require('./home')(app)
  //require('./static')(app)

  // Accounts
  //require('./account')(app)
  require('./login')(app)

  // Dynamic
  require('./rib')(app)
  require('./user')(app)

  // Error pages
  require('./error')(app)
}
