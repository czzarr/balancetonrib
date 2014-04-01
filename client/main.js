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
