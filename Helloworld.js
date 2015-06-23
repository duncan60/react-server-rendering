var React = require('react');

var  HelloWorld = React.createClass({
	render: function() {
		return (
			<div>
				Hello React Render Node Server!
			</div>
		);
	}
});

module.exports = HelloWorld;