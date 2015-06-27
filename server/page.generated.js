module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(1);
	var AppStart = __webpack_require__(2);

	var AppPage = React.createClass({displayName: 'AppPage',

	    render: function() {
	        return (
	        	React.DOM.html(null, 
	        		React.DOM.head(null

	        		),
	        		React.DOM.body(null, 
	        			React.DOM.div( {id:"content"} ),
	        			React.DOM.script( {src:"../app/entry.js"})
	        		)
	        	)
	        );
	    }
	});


	module.exports = AppPage;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(1);
	var HelloWorld = __webpack_require__(3);

	var AppStart = React.createClass({displayName: 'AppStart',

	    render: function() {
	        return (
	            React.DOM.div(null, 
	                HelloWorld(null )
	            )
	        );
	    }
	});

	module.exports = AppStart;

	// if (typeof window !== 'undefined') {
	//   window.onload = function() {
	//     React.renderComponent(AppStart(), document);
	//   }
	// }


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */
	var React = __webpack_require__(1);

	var  HelloWorld = React.createClass({displayName: 'HelloWorld',
		testClick: function() {
			console.log('testClick');
		},
		render: function() {
			return (
				React.DOM.div(null, 
					"Hello React Render Node Server!!!",
					React.DOM.a( {onClick:this.testClick},  " click me")
				)
			);
		}
	});

	module.exports = HelloWorld;


/***/ }
/******/ ])