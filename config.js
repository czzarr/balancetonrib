module.exports.mongo = 'mongodb://localhost:27017/rib'

module.exports.isProd = process.browser
  ? !/^local/.test(window.location.hostname)
  : (process.env.NODE_ENV === 'production')

module.exports.ports = {
  site: module.exports.isProd ? 7300 : 4000,
  liveupdater: module.exports.isProd ? 7301 : 4001,
  admin: 4002
}

module.exports.siteHost = module.exports.isProd
  ? 'www.balancetonrib.com'
  : 'localhost.dev:' + module.exports.ports.site

module.exports.siteOrigin = '//' + module.exports.siteHost

module.exports.secureSiteOrigin = (module.exports.isProd
  ? 'https:'
  : 'http:'
) + module.exports.siteOrigin
