var config = require('../config')

module.exports = function (app) {
  require('./home')(app)
  //require('./static')(app)

  //// Accounts
  //require('./signup')(app)
  //require('./login')(app)

  //// Submit
  //require('./submit')(app)

  //// Search
  //require('./search')(app)
  //require('./autocomplete')(app)

  //// Dynamic
  //require('./rib')(app)
  //require('./user')(app)

  //// Error pages
  //require('./error')(app)
}
