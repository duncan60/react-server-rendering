var React = require('react');
var CommonChild = require('../common/common-child');

var  Page = React.createClass({
	testClick: function() {
		console.log('Page B click');
	},
	render: function() {
		return (
			<div>
				Hello Page B!!!
				<CommonChild />
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
