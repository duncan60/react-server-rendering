var React = require('react');
var CommonChild = require('../common/common-child');

var  Page = React.createClass({
	testClick: function() {
		console.log('Index page click');
	},
	render: function() {
		return (
			<div>
				Hello INDEX!!!
				<CommonChild />
				<a onClick={this.testClick}> click me</a>
			</div>
		);
	}
});

module.exports = Page;
