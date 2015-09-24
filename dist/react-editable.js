(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Editable"] = factory(require("React"));
	else
		root["Editable"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Editable = __webpack_require__(1);

	var _Editable2 = _interopRequireDefault(_Editable);

	var _getCaretCoords = __webpack_require__(3);

	var _getCaretCoords2 = _interopRequireDefault(_getCaretCoords);

	var _stripHtml = __webpack_require__(4);

	var _stripHtml2 = _interopRequireDefault(_stripHtml);

	var utils = { getCaretCoords: _getCaretCoords2['default'], stripHTML: _stripHtml2['default'] };

	exports.Editable = _Editable2['default'];
	exports.utils = utils;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Editable = (function (_React$Component) {
	  _inherits(Editable, _React$Component);

	  function Editable() {
	    var _this = this;

	    _classCallCheck(this, Editable);

	    _get(Object.getPrototypeOf(Editable.prototype), 'constructor', this).apply(this, arguments);

	    this._node = null;
	    this._lastHTML = '';

	    this._emitChange = function (type, e) {
	      var html = _this._node.innerHTML;

	      if (html !== _this._lastHTML) {
	        e.target.value = html;
	        _this.props.onChange(e);
	      }

	      // call desired event if requested
	      if (_this.props[type]) {
	        _this.props[type](e);
	      }

	      _this._lastHTML = html;
	    };
	  }

	  _createClass(Editable, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this._node.innerHTML !== nextProps.html;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._node = _react2['default'].findDOMNode(this);
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this._node.innerHTML !== this.props.html) {
	        this._node.innerHTML = this.props.html;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var editable = _props.editable;
	      var html = _props.html;
	      var placeholder = _props.placeholder;

	      return _react2['default'].createElement(this.props.component, _extends({}, this.props, {
	        contentEditable: editable,
	        onBlur: this._emitChange.bind(null, 'onBlur'),
	        onInput: this._emitChange.bind(null, 'onInput'),
	        dangerouslySetInnerHTML: { __html: html },
	        'data-placeholder': placeholder
	      }));
	    }
	  }], [{
	    key: 'propTypes',
	    value: {
	      component: _react.PropTypes.string,
	      editable: _react.PropTypes.bool,
	      placeholder: _react.PropTypes.string,
	      onChange: _react.PropTypes.func
	    },
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      component: 'div',
	      editable: true,
	      placeholder: '',
	      onChange: function onChange() {
	        return null;
	      }
	    },
	    enumerable: true
	  }]);

	  return Editable;
	})(_react2['default'].Component);

	exports['default'] = Editable;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getCaretCoords;

	function getCaretCoords(node) {
	  var selection = window.getSelection();
	  var range = selection.getRangeAt(0);
	  var preCaretRange = range.cloneRange();
	  var preCoordRange = range.cloneRange();
	  var top = 0;
	  var left = 0;

	  preCaretRange.selectNodeContents(node);
	  preCaretRange.setEnd(range.endContainer, range.endOffset);

	  if (preCoordRange.getClientRects()) {
	    preCoordRange.collapse(true);
	    var rect = preCoordRange.getClientRects()[0];
	    top = rect.top;
	    left = rect.left;
	  }

	  return {
	    offset: preCaretRange.toString().length || 0,
	    top: top,
	    left: left
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	   value: true
	});
	exports['default'] = stripHTML;

	function stripHTML(html) {
	   var div = document.createElement('div');
	   div.innerHTML = html;
	   return div.textContent || div.innerText || '';
	}

	module.exports = exports['default'];

/***/ }
/******/ ])
});
;