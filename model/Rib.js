var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate
var checksum = require('../lib/rib').checksum

var Rib = mongoose.Schema({
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
    unique: true,
    validate: [
      { validator: checksum, msg: 'RIB invalide, veuillez vérifier.' }
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
