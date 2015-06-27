require('node-jsx').install()

var express = require('express');

var React   = require('react');
var Page    = require("./page.js");

var app = express();
var bundle = require('./webpack-server');
    bundle();
app.get('/', function(req, res) {
   res.end(React.renderToString(React.createElement(Page)));
});

app.listen(3000,function(){
} );