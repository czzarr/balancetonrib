var config = require('./config')

module.exports = {
  session: process.env.BTR_SESSION_SECRET,
  facebook: {
    clientID: process.env.BTR_FACEBOOK_CLIENT_ID,
    clientSecret: process.env.BTR_FACEBOOK_CLIENT_SECRET,
    callbackURL: '/login/facebook/callback'
  }
}
