require('node-jsx').install()

var express = require('express');
var opn     = require('opn');
var React   = require('react');
var Page    = require("./page.js");

var app = express();
var bundle = require('./webpack-server');
    bundle();
app.get('/', function(req, res) {
   res.end(
   		React.renderToString(
   			React.createElement(
   				Page,
   				{jsPath: '//localhost:8080/build/index.js'}
   			)
   		)
   );
});

app.get('/PageA', function(req, res) {
   res.end(
   		React.renderToString(
   			React.createElement(
   				Page,
   				{jsPath: '//localhost:8080/build/pageA.js'}
   			)
   		)
   );
});

app.get('/pageB', function(req, res) {
   res.end(
   		React.renderToString(
   			React.createElement(
   				Page,
   				{jsPath: '//localhost:8080/build/pageB.js'}
   			)
   		)
   );
});

app.listen(3000,function(){
	opn('http://localhost:3000');
} );