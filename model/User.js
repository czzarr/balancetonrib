//var bcrypt = require('bcrypt')
var config = require('../config')
var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate

var User = new mongoose.Schema({
  facebook: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    validate: [
      validate({ message: 'Your email address is invalid.' }, 'isEmail'),
      validate({ message: 'An email address is required.' }, 'notEmpty')
    ]
  },
  profile: {
    name: { type: String, default: '' },
    picture: { type: String, default: '' }
  },
  tokens: Array
})

User.pre('validate', function (next) {
  var user = this
  user.email = user.email.trim()
  user.profile.name = user.profile.name.trim()
  next()
})

User.plugin(plugin.modifyDate)
User.plugin(plugin.createDate)

module.exports = User
