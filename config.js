module.exports.isProd = (process.env.NODE_ENV === 'production')

module.exports.mongo = module.exports.isProd
  ? process.env.MONGOHQ_URL
  : 'mongodb://localhost:27017/rib'

module.exports.ports = {
  site: module.exports.isProd ? process.env.PORT : 4000,
  liveupdater: module.exports.isProd ? 7301 : 4001,
  admin: 4002
}

module.exports.siteHost = module.exports.isProd
  ? 'balancetonrib.jit.su'
  : 'localhost.dev:' + module.exports.ports.site

module.exports.siteOrigin = '//' + module.exports.siteHost

module.exports.secureSiteOrigin = (module.exports.isProd
  ? 'http:'
  : 'http:'
) + module.exports.siteOrigin
