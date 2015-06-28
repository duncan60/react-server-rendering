var React = require('react');

var  Page = React.createClass({
	testClick: function() {
		console.log('Page B click');
	},
	render: function() {
		return (
			<div>
				Hello Page B!!!
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
