var React = require('react');

var  Page = React.createClass({
	testClick: function() {
		console.log('Index page click');
	},
	render: function() {
		return (
			<div>
				Hello INDEX!!!
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
