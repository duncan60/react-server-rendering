/** @jsx React.DOM */
var React = require("react");

var AppPage = React.createClass({

    render: function() {
        return (
        	<html>
        		<head>

        		</head>
        		<body>
                    <header>
                        <nav>
                            <ul>
                                <li><a href="/">index</a></li>
                                <li><a href="/pageA">PageA</a></li>
                                <li><a href="/pageB">pageB</a></li>
                            </ul>
                        </nav>
                    </header>
        			<div id="content">
        				server render
        			</div>
        			<script src="//localhost:8080/build/common.js"></script>
                    <script src={this.props.jsPath}></script>
        		</body>
        	</html>
        );
    }
});


module.exports = AppPage;