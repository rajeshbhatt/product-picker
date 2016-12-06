webpackJsonp([1],{

/***/ 7:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AsyncLoader.js": 6,
		"./Config.js": 5,
		"./Drawer.js": 8,
		"./Search.js": 9,
		"./Utility.js": 10,
		"./accordian.js": 11,
		"./main1.js": 12
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
	webpackContext.id = 7;


/***/ },

/***/ 11:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Accordian = function () {
	  function Accordian(config) {
	    _classCallCheck(this, Accordian);

	    this.config = {
	      expandAll: false,
	      toggle: true
	    };
	    this.handlers = {
	      accordionPanel: "",
	      accordionContentPanel: ".pe-accordion-content",
	      accordionHandle: ".pe-accordion-h"
	    };
	    this.options = $.extend({}, this.config, config);
	  }

	  _createClass(Accordian, [{
	    key: "accordionAction",
	    value: function accordionAction(e) {
	      var handler = $(e.target).closest('a'),
	          // this is changed to object
	      contentPanel = handler.next(this.handlers.accordionContentPanel);
	      if (handler.hasClass('is-active')) {
	        contentPanel.slideUp();
	        handler.removeClass('is-active');
	      } else {
	        if (this.options.toggle) {
	          $(this.handlers.accordionContentPanel).removeClass('is-open').slideUp();
	          $(this.handlers.accordionHandle).removeClass('is-active');
	          handler.addClass('is-active');
	          contentPanel.addClass('is-open').slideDown();
	        } else {
	          contentPanel.addClass('is-open').slideDown();
	        }
	      }
	    }
	  }, {
	    key: "bindEvents",
	    value: function bindEvents() {
	      $(this.handlers.accordionHandle).on('click', this.accordionAction.bind(this));
	    }
	  }, {
	    key: "init",
	    value: function init() {
	      this.bindEvents();
	    }
	  }]);

	  return Accordian;
	}();

	exports.default = Accordian;

/***/ },

/***/ 12:
/***/ function(module, exports) {

	"use strict";

/***/ }

});