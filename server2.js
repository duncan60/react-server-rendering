require('node-jsx').install()

var path  = require('path');
var express = require('express');

var React = require('react');
var AppStart = require('./AppStart');

var app = express();

app.get('/', function(req, res) {
   var startHTML = React.renderToString(React.createElement(AppStart));

  res.send(startHTML);
});

app.listen(3000);