//var bcrypt = require('bcrypt')
var config = require('../config')
var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate

var User = new mongoose.Schema({
  facebook: String,
  email: {
    type: String,
    unique: true,
    validate: [
      validate({ message: 'Your email address is invalid.' }, 'isEmail'),
      validate({ message: 'An email address is required.' }, 'notEmpty')
    ]
  },
  //password: {
    //type: String,
    //validate: [
      //validate({ message: 'Your password must be at least 6 characters.' }, 'len', 6, 255),
      //validate({ message: 'You need a password, silly!' }, 'notEmpty')
    //]
  //}
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

//User.pre('save', function (next) {
  //var user = this
  //if (!user.isModified('password')) return next()

  //bcrypt.hash(user.password, 10, function (err, hash) {
    //if (err) return next(err)
    //user.password = hash
    //next()
  //})
//})

//User.methods.comparePassword = function (password, cb) {
  //bcrypt.compare(password, this.password, cb)
//}

User.plugin(plugin.modifyDate)
User.plugin(plugin.createDate)

module.exports = User
