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
    type: String,
    validate: [
      validate({ message: 'Le code BIC doit être composé de caractères alphanumériques uniquement' }, 'isAlphanumeric'),
      validate({ message: 'Le code BIC ne peut pas être vide' }, 'notEmpty')
    ]
  },
  country: String,
  ibankey: String,
  bank: String,
  counter: String,
  accountNumber: String,
  ribkey: String,
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
