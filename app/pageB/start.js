var React = require('react');
var Page = require('./page');

var Start = React.createClass({
    render: function() {
        return (
            <div>
                <Page />
            </div>
        );
    }
});

module.exports = Start;

// if (typeof window !== 'undefined') {
//   window.onload = function() {
//     React.renderComponent(AppStart(), document);
//   }
// }
