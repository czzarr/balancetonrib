#!/bin/bash
cat bower_components/bootstrap/dist/css/bootstrap.min.css <(echo) \
  bower_components/font-awesome/css/font-awesome.min.css <(echo) \
  bower_components/bootstrap-social/bootstrap-social.css <(echo) \
  bower_components/selectize/dist/css/selectize.bootstrap3.css <(echo) \
  bower_components/flag-icon-css/css/flag-icon.css <(echo) \
  out/css/main.css > out/css/balancetonrib.css

mv out/css/balancetonrib.css out/css/main.css
