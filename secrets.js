var config = require('./config')

module.exports = {
  session: process.env.BTR_SESSION_SECRET,
  facebook: {
    clientID: process.env.BTR_FACEBOOK_CLIENT_ID,
    clientSecret: process.env.BTR_FACEBOOK_CLIENT_SECRET,
    callbackURL: '/login/facebook/callback'
  },
  gmail: {
    user: process.env.BTR_GMAIL_USER,
    pass: process.env.BTR_GMAIL_PASS
  },
  sentry: {
    cliendID: process.env.SENTRY_CLIENT_ID,
    clientSecret: process.env.SENTRY_CLIENT_SECRET,
    appID: process.env.SENTRY_APP_ID
  }
}
