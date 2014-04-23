var config = require('../config')
var debug = require('debug')('email')
var nodemailer = require('nodemailer')
var secrets = require('../secrets')

var transport = nodemailer.createTransport('SMTP', {
    service: 'Gmail',
    auth: secrets.gmail
})

/**
 * Send an email message.
 *
 *   var message = {
 *     from: '"Stanislas Marion" <stan@balancetonrib.com>',
 *     to: '"Stanislas Marion" <stan@balancetonrib.com>',
 *     subject: 'Subject',
 *     text: '',
 *     html:'<p><b>Hello</b> to myself</p>'
 *   }
 *
 * @param  {Object}   message
 * @param  {function=} cb
 */
module.exports.send = function(message, cb) {
    cb || (cb = function() {})

    debug('Sending email: ' + message.subject)

    transport.sendMail(message, cb)
}

var FROM = '"BalanceTonRib" <stan@balancetonrib.com>'
var TO = '"Stanislas Marion" <stan@balancetonrib.com>'

module.exports.notifyAdmin = function(subject, obj) {
    if (!config.isProd) return debug('Skipping admin notification email (dev)')

    var message = {
        from: FROM,
        to: TO,
        subject: subject,
        text: JSON.stringify(obj, null, '\t')
    }

    if (obj.name) {
        message.subject += ': ' + obj.name
    }

    if (obj.absoluteUrl) {
        message.text = obj.absoluteUrl + '\n\n' + message.text // prepend
    }

    module.exports.send(message, function(err) {
        if (err) {
            console.error('ERROR: Could not send admin notification email')
            console.error(err.stack)
        }
    })
}

module.exports.notifyOnException = function(obj) {
    var err = obj.err
    var req = obj.req

    if (!config.isProd) return debug('Skipping exception notification email (dev)')

    if (err && err.status === 400) return console.log('No notify for 400 error (client fault)')

    if (req && /trackback/.test(req.url)) return console.log('No notify for /trackback/ bots')

    var message = {
        from: FROM,
        to: TO,
        subject: 'Uncaught Exception',
        text: ''
    }

    // Don't email about 403 Forbidden Errors
    // Ignores PROPFIND, POST without CSRF, etc.
    if (err && err.status === 403) {
        return
    }

    if (err) {
        message.subject += ' [' + err.name + ']'

        message.text += err.stack
        message.text += '\n\n'

        // Debug
        message.text += 'Error object:'
        message.text += JSON.stringify(err)
        message.text += '\n\n'
    }

    if (req) {
        message.subject += ' ' + req.url

        message.text += req.method + ': ' + config.siteOrigin + req.url
        message.text += '\n\n'

        message.text += 'HTTP HEADERS: '
        message.text += JSON.stringify(req.headers, null, '\t')
        message.text += '\n\n'

        if (req.params) {
            message.text += 'HTTP GET PARAMETERS: '
            message.text += JSON.stringify(req.params, null, '\t')
            message.text += '\n\n'
        }

        if (req.body) {
            message.text += 'HTTP BODY: '
            message.text += JSON.stringify(req.body, null, '\t')
        }
    }

    module.exports.send(message, function(err) {
        if (err) {
            console.error('ERROR: Could not send exception notification email')
            console.error(err.stack)
        }
    })
}
