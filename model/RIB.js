var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate

var RIB = mongoose.Schema({
  bank: {
    type: String,
    validate: [
      validate({ message: '5 chiffres' }, 'isLength', 5, 5),
      validate({ message: 'des chiffres' }, 'isNumeric')
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  indicator: {
    type: String,
    validate: [
      validate({ message: '5 chiffres' }, 'isLength', 5, 5),
      validate({ message: 'des chiffres' }, 'isNumeric')
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  accountNumber: {
    type: String,
    validate: [
      validate({ message: '11 chiffres/lettres' }, 'isLength', 11, 11),
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  key: {
    type: Number,
    required: true,
    min: 1,
    max: 97
  },
  user: {
    type: String,
    ref: 'User',
    index: true,
    required: true
  }
})

RIB.plugin(plugin.modifyDate)
RIB.plugin(plugin.createDate)

module.exports = RIB
