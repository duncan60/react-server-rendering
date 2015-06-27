/** @jsx React.DOM */
var React = require('react');

var  HelloWorld = React.createClass({
	testClick: function() {
		console.log('testClick');
	},
	render: function() {
		return (
			<div>
				Hello React Render Node Server!!!
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = HelloWorld;
