module.exports.isProd = (process.env.NODE_ENV === 'production')

module.exports.mongo = 'mongodb://localhost:27017/balancetonrib'

module.exports.ports = {
  site: module.exports.isProd ? 7300 : 4000,
  liveupdater: module.exports.isProd ? 7301 : 4001,
  admin: 4002
}

module.exports.siteHost = module.exports.isProd
  ? 'balancetonrib.herokuapp.com'
  : 'localhost.dev:' + module.exports.ports.site

module.exports.siteOrigin = '//' + module.exports.siteHost

module.exports.secureSiteOrigin = (module.exports.isProd
  ? 'https:'
  : 'http:'
) + module.exports.siteOrigin
