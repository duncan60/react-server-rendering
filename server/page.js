/** @jsx React.DOM */
var React = require("react");
var AppStart = require("../app/AppStart");

var AppPage = React.createClass({

    render: function() {
        return (
        	<html>
        		<head>

        		</head>
        		<body>
        			<div id="content">
        				server render
        			</div>
        			<script src="//localhost:8080/build/bundle.js"></script>
        		</body>
        	</html>
        );
    }
});


module.exports = AppPage;