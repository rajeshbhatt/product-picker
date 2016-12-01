/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var config = __webpack_require__(1);
	console.log('config....', config);
	var configData = [];
	for (var _module in config) {
	  configData.push(_module);
	}

	// var aa = require('./common');
	// console.log('aaa',aa);
	// require(['./common'],function(){
	//   alert('tesy');
	// })

	var requireTest = __webpack_require__(2);
	requireTest.keys().forEach(requireTest);

	function requireAll(r) {
	  console.log('rrrrrr', r);
	  r.keys().forEach(r);
	}
	var az = requireAll(__webpack_require__(3));

	console.log('aaamsg', az);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	// // var msg = "test";
	// const msg = require('./script2');
	// require('./styles/main.scss');
	//
	// // code for configuration

	module.exports = {
	  search: true,
	  popup: true,
	  drillDown: {
	    show: true,
	    level: 2
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	function webpackContext(req) {
		throw new Error("Cannot find module '" + req + "'.");
	}
	webpackContext.keys = function() { return []; };
	webpackContext.resolve = webpackContext;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./test1.js": 4,
		"./test2.js": 5
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 3;


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function test1() {
	  alert('test1 files');
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	var msg = 'test2';
	console.log('loaded');
	module.exports = msg;

/***/ }
/******/ ]);