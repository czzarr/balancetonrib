var debug = require('debug')('run')
//var email = require('./lib/email')

/**
 * Run the given server, passing in command line options as options.
 * @param  {function(*)} ServerConstructor
 */
module.exports = function (ServerConstructor) {
  // Create and start the server
  var opts = {}
  var server = new ServerConstructor(opts, function (err) {
    if (err) {
      console.error('Error during ' + server.serverName + ' startup. Abort.')
      console.error(err.stack)
      process.exit(1)
    }
  })

  // Catch uncaught exceptions
  process.on('uncaughtException', function (err) {
    console.error('\nUNCAUGHT EXCEPTION')
    console.error(err.stack)
    //email.notifyOnException({ err: err })
  })
}
