var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate
var checkIban = require('../lib/rib').checkIban
var checkRib = require('../lib/rib').checkRib

var Rib = mongoose.Schema({
  iban: {
    type: String,
    unique: true,
    validate: [
      validate({ message: 'L\'IBAN doit être composé de 27 caractères alphanumériques' }, 'len', 27, 27),
      validate({ message: 'L\'IBAN doit être composé de 27 caractères alphanumériques' }, 'isAlphanumeric'),
      validate({ message: 'L\'IBAN doit être composé de 27 caractères alphanumériques' }, 'notEmpty'),
      { validator: checkIban, msg: 'IBAN invalide, veuillez vérifier.' }
    ]
  },
  bic: {
    type: String,
    required: true,
    validate: [
      validate({ message: 'Le code BIC doit être composé de entre 8 et 11 caractères alphanumériques' }, 'len', 8, 11),
      validate({ message: 'Le code BIC doit être composé de entre 8 et 11 caractères alphanumériques' }, 'isAlphanumeric'),
      validate({ message: 'Le code BIC doit être composé de entre 8 et 11 caractères alphanumériques' }, 'notEmpty')
    ]
  },
  bank: {
    type: String,
    validate: [
      validate({ message: 'Le code banque doit être composé de 5 chiffres' }, 'len', 5, 5),
      validate({ message: 'Le code banque doit être composé de 5 chiffres' }, 'isNumeric'),
      validate({ message: 'Le code banque doit être composé de 5 chiffres' }, 'notEmpty')
    ]
  },
  counter: {
    type: String,
    validate: [
      validate({ message: 'Le code guichet doit être composé de 5 chiffres' }, 'len', 5, 5),
      validate({ message: 'Le code guichet doit être composé de 5 chiffres' }, 'isNumeric'),
      validate({ message: 'Le code guichet doit être composé de 5 chiffres' }, 'notEmpty')
    ]
  },
  accountNumber: {
    type: String,
    validate: [
      validate({ message: 'Le numéro de compte doit être composé de 11 chiffres/lettres' }, 'len', 11, 11),
      validate({ message: 'Le numéro de compte doit être composé de 11 chiffres/lettres' }, 'notEmpty')
    ]
  },
  key: {
    type: Number,
    validate: [
      validate({ message: 'La clé doit être un nombre compris entre 1 et 97' }, 'notEmpty'),
      validate({ message: 'La clé doit être un nombre compris entre 1 et 97' }, 'isNumeric'),
      { validator: function (key) { return key > 1 && key < 97 }, msg: 'La clé doit être un nombre compris entre 1 et 97' }
    ]
  },
  canonical: {
    type: String,
    validate: [
      { validator: checkRib, msg: 'RIB invalide, veuillez vérifier.' }
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
