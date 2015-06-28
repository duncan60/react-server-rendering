import React from 'react';

class DefaultPage extends React.Component {

    render() {
        return (
        	<html>
        		<head>
                    <meta charset="utf-8" />
                    <title>starter-et-app</title>
                    <meta name="description" content="" />
                    <meta name="viewport" content="width=device-width" />
        		</head>
        		<body>
                    <header>
                        <h1>react server rendering</h1>
                        <nav>
                            <ul>
                                <li><a href="/">index</a></li>
                                <li><a href="/pageA">PageA</a></li>
                                <li><a href="/pageB">pageB</a></li>
                            </ul>
                        </nav>
                    </header>
        			<div id="content"></div>
        			<script src="//localhost:8080/build/common.js"></script>
                    <script src={this.props.jsPath}></script>
        		</body>
        	</html>
        );
    }
};


export default DefaultPage;