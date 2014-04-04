var jquery = require('jquery')
require('selectize')

$('#friends').selectize({
  create: false,
  placeholder: 'Sélectionner un(e) ami(e)...',
  render: {
    option: function (item, escape) {
      return '<div><img src="' + escape(item.pic) + '"><span style="margin-left: 5px;">' + escape(item.text) + '</div>'
    }
  }
})

$('#add-rib').click(function () {
  $('#rib-form').show()
})

$('#cancel-rib').click(function () {
  $('#rib-form').hide()
})

$('#rib-form').submit(function (event) {
  event.preventDefault()
  var data = {}
  data.bank = $('#bank').val()
  data.counter = $('#counter').val()
  data.accountNumber = $('#accountNumber').val()
  data.key = $('#key').val()
  $.ajax({
    url: '/ribs', 
    type: 'POST',
    data: data,
    dataType: 'json'
  })
   .done(function () {
     $('#rib-form').hide()
     $('#success').show()
   })
   .fail(function () {
     $('#error').show()
   })
})

