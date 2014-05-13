var auto = require('run-auto')
var config = require('../config')
var cp = require('child_process')
var fs = require('fs')
var md5 = require('MD5')

auto({
  MD5_JS: function (cb) {
    calculateMd5(config.out + '/js/main.js', function (err, md5) {
      if (err) throw err
      fs.writeFile(config.out + '/js/MD5_JS', md5, function (err) {
        cb(err, md5)
      })
    })
  },

  MD5_CSS: function (cb) {
    calculateMd5(config.out + '/css/main.css', function (err, md5) {
      if (err) throw err
      fs.writeFile(config.out + '/css/MD5_CSS', md5, function (err) {
        cb(err, md5)
      })
    })
  },

  removeOldJS: function (cb) {
    cp.exec('rm ' + config.out + '/js/main-*.js ', function (err) {
      // ignore errors - doesn't matter if no file is found
      cb(null)
    })
  },

  removeOldCSS: function (cb) {
    cp.exec('rm ' + config.out + '/css/main-*.css', function (err) {
      // ignore errors - doesn't matter if no file is found
      cb(null)
    })
  },

  // Copy the JS file to a file with a unique name, based on the MD5
  jsRenameMain: ['MD5_JS', 'removeOldJS', function (cb, r) {
    var src = config.out + '/js/main.js'
    var dest = config.out + '/js/main-' + r.MD5_JS + '.js'
    cp.exec('cp ' + src + ' ' + dest, cb)
  }],

  cssRename: ['MD5_CSS', 'removeOldCSS', function (cb, r) {
    var src = config.out + '/css/main.css'
    var dest = config.out + '/css/main-' + r.MD5_CSS + '.css'
    cp.exec('cp ' + src + ' ' + dest, cb)
  }]
})

function calculateMd5 (filename, cb) {
  fs.readFile(filename, function (err, data) {
    if (err) return cb(err)
    if (!data) return cb(new Error('MD5 fail; no file data for ' + filename))
    cb(null, md5(data))
  })
}
