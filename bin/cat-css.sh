#!/bin/bash
cat bower_components/bootstrap/dist/css/bootstrap.min.css <(echo) \
  bower_components/font-awesome/css/font-awesome.min.css <(echo) \
  bower_components/bootflat/css/bootflat.css <(echo) \
  bower_components/bootstrap-social/bootstrap-social.css <(echo) \
  bower_components/selectize/dist/css/selectize.bootstrap3.css <(echo) \
  out/main.css > out/balancetonrib.css
