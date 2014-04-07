var level = require('level')
var sub = require('level-sublevel')
var ttl = require('level-ttl')

friendsdb = level('friends.db', { valueEncoding: 'json' })
friendsdb = sub(friendsdb)
friendsdb = ttl(friendsdb)

module.exports = friendsdb
