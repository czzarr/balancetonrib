var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate
var checksum = require('../lib/rib').checksum

var Rib = mongoose.Schema({
  bank: {
    type: String,
    validate: [
      validate({ message: '5 chiffres' }, 'len', 5, 5),
      validate({ message: 'des chiffres' }, 'isNumeric'),
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  counter: {
    type: String,
    validate: [
      validate({ message: '5 chiffres' }, 'len', 5, 5),
      validate({ message: 'des chiffres' }, 'isNumeric'),
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  accountNumber: {
    type: String,
    validate: [
      validate({ message: '11 chiffres/lettres' }, 'len', 11, 11),
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  key: {
    type: Number,
    required: true,
    min: 1,
    max: 97
  },
  canonical: {
    type: String,
    unique: true,
    validate: [
      validate({ message: '23 chiffres/lettres' }, 'len', 23, 23),
      { validator: checksum, msg: 'RIB invalide, veuillez vérifier.' },
      validate({ message: 'non vide' }, 'notEmpty')
    ]
  },
  _user: {
    type: String,
    ref: 'User',
    index: true,
    required: true
  }
})

Rib.plugin(plugin.modifyDate)
Rib.plugin(plugin.createDate)

module.exports = Rib
