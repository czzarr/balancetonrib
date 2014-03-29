var jquery = require('jquery')
require('selectize')
var request = require('browser-request')

var token = '?access_token=CAACEdEose0cBALMZCN4zugwiIAZCIiJGMT4l0ZBVYL9OXz79NVm2K7HoEyaGtQAL7OcPrMgDdZAGqhDs74AP2BPYVq4hXiQblct9afUZCmczlmebtdzLZCUoynZBipfLD2S3Fs5kJYf9LfV4TNCvOrWysjGBgFqeHdvjVUqnS2i519zqxX7ESRCl6Ni9xxKFyAZD'
var endpoint = 'https://graph.facebook.com/me'
var query = '&fields=friends.fields(name,picture)'

request(endpoint+token+query, function (err, res, body) {
  data = JSON.parse(body).friends.data
  $('#e1').selectize({
    create: false,
    valueField: 'name',
    searchField: 'name',
    labelField: 'name',
    load: function (query, callback) {
      callback(data)
    },
    render: {
      option: function (item, escape) {
            return '<div>' +
                '<span class="title">' +
                    '<span class="name">' + escape(item.name) + '</span>' +
                '</span>' +
            '</div>';
      }
    }

  })
})
