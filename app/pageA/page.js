var React = require('react');

var  Page = React.createClass({
	testClick: function() {
		console.log('Page A Click');
	},
	render: function() {
		return (
			<div>
				Hello Page A!!!
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
