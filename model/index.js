var config = require('../config')
var fs = require('fs')
var mongoose = require('mongoose')
var once = require('once')
var path = require('path')
var Schema = mongoose.Schema

module.exports.models = {}

var files = fs.readdirSync(__dirname)
files.forEach(function (file) {
  var name = path.basename(file, '.js')
  if (name === 'index' || name === 'plugin') return

  var schema = require('./' + name)
  schema.set('autoIndex', config.isProd)
  var model = mongoose.model(name, schema)

  module.exports[name] = module.exports.models[name] = model
})

module.exports.connect = function (cb) {
  cb || (cb = function () {})
  cb = once(cb)
  mongoose.set('debug', !config.isProd)
  console.log(config.isProd);
  mongoose.connect(config.mongo)
  mongoose.connection.on('error', cb)
  mongoose.connection.on('open', cb)
}
