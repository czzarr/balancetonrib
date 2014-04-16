var jquery = require('jquery')
require('selectize')
require('bootstrap')

$('#friends').selectize({
  create: false,
  placeholder: 'Sélectionner un(e) ami(e)...',
  render: {
    option: function (item, escape) {
      return '<div><img class="selectize-dropdown-img" src="' + escape(item.pic) + '"><span style="margin-left: 5px;">' + escape(item.text) + '</div>'
    }
  },
  onChange: function (value) {
    window.location.href = '/u/' + value
  }
})
