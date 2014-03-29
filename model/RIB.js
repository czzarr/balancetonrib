var _ = require('underscore')
var model = require('./')
var mongoose = require('mongoose')
var plugin = require('./plugin')
var validate = require('mongoose-validator').validate
var util = require('../util')

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

// Trim whitespace
RIB.pre('validate', function (next) {
  var essay = this
  essay.name = essay.name.trim()
  next()
})

RIB.virtual('url').get(function () {
  var essay = this
  var collegeSlug = essay.populated('college') || essay.college
  return '/' + collegeSlug + '/' + essay._id + '/'
})

RIB.virtual('searchDesc').get(function () {
  var essay = this
  var collegeSlug = essay.populated('college') || essay.college
  var college = model.cache.colleges[collegeSlug]

  return college.shortName + ' Admissions RIB'
})

// Sanitize essay to strip bad html before saving
RIB.pre('save', function (next) {
  var essay = this
  if (essay.isModified('body')) {
    essay.body = util.sanitizeHTML(essay.body)
  }
  if (essay.isModified('prompt')) {
    essay.prompt = util.sanitizeHTML(essay.prompt)
  }
  next()
})

RIB.plugin(plugin.modifyDate)
RIB.plugin(plugin.createDate)

module.exports = RIB
