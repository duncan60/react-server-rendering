var React = require('react');
var HelloWorld = require('./Helloworld');

var AppStart = React.createClass({

    render: function() {
    	console.log('AppStart')
        return (
            <div>
                <HelloWorld />
            </div>
        );
    }
});

module.exports = AppStart;

// if (typeof window !== 'undefined') {
//   window.onload = function() {
//     React.renderComponent(AppStart(), document);
//   }
// }
