var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate
var checkIban = require('../lib/rib').checkIban

var Rib = mongoose.Schema({
  iban: {
    type: String,
    unique: true,
    sparse: true,
    validate: [
      validate({ message: 'L\'IBAN doit être composé de caractères alphanumériques uniquement' }, 'isAlphanumeric'),
      { validator: checkIban, msg: 'IBAN invalide, veuillez vérifier.' },
      validate({ message: 'L\'IBAN ne peut pas être vide' }, 'notEmpty')
    ]
  },
  bic: {
    type: String
  },
  main: {
    type: Boolean,
    default: false
  },
  country: String,
  name: String,
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
