var React = require('react');
var CommonChild = require('../common/common-child');

var  Page = React.createClass({
	testClick: function() {
		console.log('Page A Click');
	},
	render: function() {
		return (
			<div>
				Hello Page A!!!
				<CommonChild />
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
