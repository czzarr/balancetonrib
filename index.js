var jquery = require('jquery')
require('select2')
var request = require('browser-request')


request("https://graph.facebook.com/me?access_token=CAALZCAspK6yMBAIXf75wJQSb9m34GM4lo7V2nlaZCh0imrFxbZCZBwDuodskYWnfcoMUocSAeMOZAVQCorZAQV61sZCR4l5KDTt2Hj9vAbKGLChsIFXJ80zKyrzpHBmdlBKRbZC0C0YY6156FUXwkNeLLXtYUj3PTMQWmbUGzH8QIRhD8ZC7LKIhamZAMrZAvJY2bgZD&fields=friends.fields(name,picture)", function (err, res, body) {
  function format (item) {
    return item.name
  }
  data = JSON.parse(body).friends.data
  $('#e1').select2({
    data: { results: data, text: 'name' },
    formatSelection: format,
    formatResult: format
  })
})
