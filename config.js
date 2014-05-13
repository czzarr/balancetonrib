var fs = require('fs')
var path = require('path')

module.exports.isProd = (process.env.NODE_ENV === 'production')

module.exports.root = __dirname
module.exports.out = path.join(module.exports.root, 'out')

module.exports.mongo = 'mongodb://localhost:27017/balancetonrib'

module.exports.ports = {
  site: module.exports.isProd ? 7300 : 4000,
  liveupdater: module.exports.isProd ? 7301 : 4001,
  admin: 4002
}

module.exports.siteHost = module.exports.isProd
  ? 'balancetonrib.com'
  : 'localhost.dev:' + module.exports.ports.site

module.exports.siteOrigin = '//' + module.exports.siteHost

module.exports.secureSiteOrigin = (module.exports.isProd
  ? 'https:'
  : 'http:'
) + module.exports.siteOrigin

var MD5_JS
var MD5_CSS
try {
  if (module.exports.isProd) {
    MD5_JS = fs.readFileSync(module.exports.out + '/js/MD5_JS').toString()
    MD5_CSS = fs.readFileSync(module.exports.out + '/css/MD5_CSS').toString()
  }
} catch (e) {}

/**
 * Final paths for JS and CSS files. Uniquely named using the MD5 hash of the
 * file contents, for cache busting.
 */
module.exports.jsPath = '/js/main' + (MD5_JS ? '-' + MD5_JS : '') + '.js'
module.exports.cssPath = '/css/main' + (MD5_CSS ? '-' + MD5_CSS : '') + '.css'
