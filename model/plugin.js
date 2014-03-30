var config = require('../config')
var mongoose = require('mongoose')

module.exports.modifyDate = function (schema, opts) {
  schema.add({ modifiedAt: Date })

  schema.pre('save', function (next) {
    this.modifiedAt = new Date()
    next()
  })

  if (opts && opts.index) {
    schema.path('modifiedAt').index(opts.index)
  }
}

module.exports.createDate = function (schema, opts) {
  schema.add({ createdAt: Date })

  schema.pre('save', function (next) {
    if (!this.createdAt) this.createdAt = new Date()
    next()
  })

  if (opts && opts.index) {
    schema.path('createdAt').index(opts.index)
  }
}
