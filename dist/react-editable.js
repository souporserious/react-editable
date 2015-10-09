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

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _Editable = __webpack_require__(1);

	var _Editable2 = _interopRequireDefault(_Editable);

	var _getCaretCoords = __webpack_require__(4);

	var _getCaretCoords2 = _interopRequireDefault(_getCaretCoords);

	var _getCurrentStyles = __webpack_require__(5);

	var _getCurrentStyles2 = _interopRequireDefault(_getCurrentStyles);

	var _stripHtml = __webpack_require__(7);

	var _stripHtml2 = _interopRequireDefault(_stripHtml);

	var _IconsIcons = __webpack_require__(8);

	var Icons = _interopRequireWildcard(_IconsIcons);

	var utils = { getCaret: _getCaretCoords2['default'], getCurrentStyles: _getCurrentStyles2['default'], stripHTML: _stripHtml2['default'] };

	exports.Editable = _Editable2['default'];
	exports.Icons = Icons;
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

	var _getSelectionNode = __webpack_require__(3);

	var _getSelectionNode2 = _interopRequireDefault(_getSelectionNode);

	function saveSelection() {
	  var savedRange = null;

	  if (window.getSelection) {
	    savedRange = window.getSelection().getRangeAt(0);
	  } else if (document.selection) {
	    savedRange = document.selection.createRange();
	  }

	  return savedRange;
	}

	function restoreSelection(node, savedRange) {
	  // All major browsers
	  if (window.getSelection) {
	    var s = window.getSelection();

	    if (s.rangeCount > 0) {
	      s.removeAllRanges();
	    }

	    s.addRange(savedRange);
	  }
	  // Non IE and no-selection
	  else if (document.createRange) {
	      window.getSelection().addRange(savedRange);
	    }
	    // IE
	    else if (document.selection) {
	        savedRange.select();
	      }
	}

	var isInFocus = false;
	function onDivBlur() {
	  isInFocus = false;
	}

	var Editable = (function (_React$Component) {
	  _inherits(Editable, _React$Component);

	  function Editable() {
	    var _this = this;

	    _classCallCheck(this, Editable);

	    _get(Object.getPrototypeOf(Editable.prototype), 'constructor', this).apply(this, arguments);

	    this._node = null;
	    this._lastHTML = '';

	    this._onMutation = function () {
	      _this._emitChange('MutationObserver', null);
	    };

	    this._emitChange = function (type, e) {
	      var html = _this._node.innerHTML;
	      var event = _this.props[type];
	      var selection = (0, _getSelectionNode2['default'])();

	      // if(type !== 'MutationObserver') {
	      //   this._savedRange = saveSelection()
	      // }

	      // call on change if html has changed
	      if (html !== _this._lastHTML || type === 'MutationObserver') {
	        _this.props.onChange(html, selection);
	      }

	      // call original event
	      if (event) {
	        event(e, selection);
	      }

	      //restoreSelection(this._node, this._savedRange)

	      _this._lastHTML = html;
	    };
	  }

	  _createClass(Editable, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return this.props.editable !== nextProps.editable || this._node.innerHTML !== nextProps.html;
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._node = _react2['default'].findDOMNode(this);

	      // this._observer = new MutationObserver(this._onMutation);
	      // this._observer.observe(this._node, {
	      //     childList: true,
	      //     attributes: true,
	      //     characterData: true,
	      //     subtree: true
	      // })
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      if (this._node.innerHTML !== this.props.html) {
	        this._node.innerHTML = this.props.html;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._observer.disconnect();
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
	        onKeyDown: this._emitChange.bind(null, 'onKeyDown'),
	        onKeyUp: this._emitChange.bind(null, 'onKeyUp'),
	        onMouseUp: this._emitChange.bind(null, 'onMouseUp'),
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
	exports["default"] = getSelectionNode;

	function getSelectionNode() {
	  var selection = document.getSelection();
	  var node = selection.anchorNode;
	  var content = node && node.textContent;

	  // use sibling if space, tab, or newline
	  if (/^\s*$/.test(content)) {
	    node = node.nextSibling ? node.nextSibling : node.previousSibling;
	  }

	  return node && (node.nodeType === 3 ? node.parentNode : node);
	}

	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getCaret;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getSelectionNode = __webpack_require__(3);

	var _getSelectionNode2 = _interopRequireDefault(_getSelectionNode);

	function getCaret(node) {
	  var selection = window.getSelection();
	  var range = selection.getRangeAt(0);
	  var preCoordRange = range.cloneRange();
	  var preCaretRange = range.cloneRange();
	  var offset = 0;
	  var top = 0;
	  var left = 0;

	  // bail out if nothing selected
	  if (selection.rangeCount <= 0) return { node: null, offset: offset, top: top, right: right };

	  // get the current position of the caret
	  if (preCoordRange.getClientRects) {
	    preCoordRange.collapse(true);
	    if (preCoordRange.getClientRects().length > 0) {
	      var rect = preCoordRange.getClientRects()[0];
	      top = rect.top;
	      left = rect.left;
	    }
	  }

	  preCaretRange.selectNodeContents(node);
	  preCaretRange.setEnd(range.endContainer, range.endOffset);

	  return {
	    node: (0, _getSelectionNode2['default'])(selection),
	    offset: preCaretRange.toString().length || 0,
	    top: top,
	    left: left
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = getCurrentStyles;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _getNodeTree = __webpack_require__(6);

	var _getNodeTree2 = _interopRequireDefault(_getNodeTree);

	var COMMANDS = {
	  B: 'bold',
	  STRONG: 'bold',
	  I: 'italic',
	  U: 'underline'
	};

	var STYLES = {
	  textAlign: ['left', 'center', 'right', 'justify'],
	  fontSize: [1, 2, 3, 4, 5, 6, 7],
	  fontStyle: 'italic',
	  textDecoration: ['overline', 'line-through', 'underline']
	};

	// get all the styles that are associated with a node

	function getCurrentStyles(startNode, endNode) {
	  var nodes = (0, _getNodeTree2['default'])(startNode, endNode);
	  var commands = [];

	  nodes.forEach(function (node) {
	    var tagName = node.tagName;

	    for (var style in STYLES) {
	      if (style === STYLES) {
	        commands.push(STYLES[style]);
	      }
	    }

	    for (var command in COMMANDS) {
	      if (command === tagName) {
	        commands.push(COMMANDS[command]);
	      }
	    }
	  });
	  return commands;
	}

	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = getNodeTree;

	function getNodeTree(startNode) {
	  var endNode = arguments.length <= 1 || arguments[1] === undefined ? node.parentNode : arguments[1];

	  var currNode = startNode;
	  var tree = [];

	  while (currNode !== endNode) {
	    tree.push(currNode);

	    if (currNode.parentNode) {
	      currNode = currNode.parentNode;
	    } else {
	      currNode = endNode;
	    }
	  }

	  return tree;
	}

	module.exports = exports["default"];

/***/ },
/* 7 */
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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _FontSize2 = __webpack_require__(9);

	var _FontSize3 = _interopRequireDefault(_FontSize2);

	exports.FontSize = _FontSize3['default'];

	var _Bold2 = __webpack_require__(10);

	var _Bold3 = _interopRequireDefault(_Bold2);

	exports.Bold = _Bold3['default'];

	var _Italic2 = __webpack_require__(11);

	var _Italic3 = _interopRequireDefault(_Italic2);

	exports.Italic = _Italic3['default'];

	var _Underline2 = __webpack_require__(12);

	var _Underline3 = _interopRequireDefault(_Underline2);

	exports.Underline = _Underline3['default'];

	var _StrikeThrough2 = __webpack_require__(13);

	var _StrikeThrough3 = _interopRequireDefault(_StrikeThrough2);

	exports.StrikeThrough = _StrikeThrough3['default'];

	var _JustifyLeft2 = __webpack_require__(14);

	var _JustifyLeft3 = _interopRequireDefault(_JustifyLeft2);

	exports.JustifyLeft = _JustifyLeft3['default'];

	var _JustifyCenter2 = __webpack_require__(15);

	var _JustifyCenter3 = _interopRequireDefault(_JustifyCenter2);

	exports.JustifyCenter = _JustifyCenter3['default'];

	var _JustifyRight2 = __webpack_require__(16);

	var _JustifyRight3 = _interopRequireDefault(_JustifyRight2);

	exports.JustifyRight = _JustifyRight3['default'];

	var _JustifyFull2 = __webpack_require__(17);

	var _JustifyFull3 = _interopRequireDefault(_JustifyFull2);

	exports.JustifyFull = _JustifyFull3['default'];

	var _OrderedList2 = __webpack_require__(18);

	var _OrderedList3 = _interopRequireDefault(_OrderedList2);

	exports.OrderedList = _OrderedList3['default'];

	var _UnorderedList2 = __webpack_require__(19);

	var _UnorderedList3 = _interopRequireDefault(_UnorderedList2);

	exports.UnorderedList = _UnorderedList3['default'];

	var _Outdent2 = __webpack_require__(20);

	var _Outdent3 = _interopRequireDefault(_Outdent2);

	exports.Outdent = _Outdent3['default'];

	var _Indent2 = __webpack_require__(21);

	var _Indent3 = _interopRequireDefault(_Indent2);

	exports.Indent = _Indent3['default'];

	var _ColorWheel2 = __webpack_require__(22);

	var _ColorWheel3 = _interopRequireDefault(_ColorWheel2);

	exports.ColorWheel = _ColorWheel3['default'];

	var _TextColor2 = __webpack_require__(23);

	var _TextColor3 = _interopRequireDefault(_TextColor2);

	exports.TextColor = _TextColor3['default'];

	var _TextBG2 = __webpack_require__(24);

	var _TextBG3 = _interopRequireDefault(_TextBG2);

	exports.TextBG = _TextBG3['default'];

	var _CreateLink2 = __webpack_require__(25);

	var _CreateLink3 = _interopRequireDefault(_CreateLink2);

	exports.CreateLink = _CreateLink3['default'];

	var _RemoveFormat2 = __webpack_require__(26);

	var _RemoveFormat3 = _interopRequireDefault(_RemoveFormat2);

	exports.RemoveFormat = _RemoveFormat3['default'];

	var _Blockquote2 = __webpack_require__(27);

	var _Blockquote3 = _interopRequireDefault(_Blockquote2);

	exports.Blockquote = _Blockquote3['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var FontSize = (function (_Component) {
	  _inherits(FontSize, _Component);

	  function FontSize() {
	    _classCallCheck(this, FontSize);

	    _get(Object.getPrototypeOf(FontSize.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(FontSize, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M20.055,7.984h-0.535c-0.047-0.186-0.131-0.407-0.252-0.663c-0.122-0.256-0.259-0.497-0.409-0.725 c-0.155-0.238-0.326-0.446-0.51-0.624c-0.184-0.178-0.362-0.28-0.533-0.306c-0.16-0.021-0.362-0.036-0.607-0.047 c-0.244-0.01-0.47-0.016-0.676-0.016h-0.451v8.798c0,0.171,0.036,0.327,0.109,0.469c0.072,0.142,0.199,0.252,0.38,0.329 c0.093,0.036,0.288,0.085,0.586,0.147c0.297,0.062,0.529,0.096,0.695,0.101V16h-5.2v-0.55c0.145-0.01,0.366-0.031,0.664-0.062 s0.503-0.07,0.617-0.116c0.171-0.067,0.296-0.164,0.376-0.291c0.08-0.127,0.12-0.296,0.12-0.508V5.605h-0.45 c-0.16,0-0.36,0.004-0.598,0.012s-0.466,0.025-0.683,0.05c-0.171,0.021-0.348,0.123-0.532,0.306 c-0.184,0.183-0.353,0.391-0.508,0.624c-0.155,0.233-0.292,0.479-0.411,0.74s-0.202,0.477-0.248,0.647h-0.543V5h9.6V7.984z" }),
	        _react2["default"].createElement("path", { d: "M10.055,10.899H9.714c-0.03-0.118-0.083-0.259-0.161-0.422c-0.077-0.163-0.165-0.317-0.26-0.461 C9.194,9.865,9.086,9.733,8.969,9.619C8.852,9.506,8.738,9.441,8.63,9.424c-0.102-0.013-0.23-0.023-0.386-0.03 c-0.156-0.007-0.299-0.01-0.43-0.01H7.526v5.599c0,0.109,0.023,0.208,0.069,0.298c0.046,0.09,0.127,0.16,0.242,0.21 c0.059,0.023,0.184,0.054,0.373,0.094c0.189,0.039,0.337,0.061,0.442,0.064V16H5.343v-0.35c0.092-0.007,0.233-0.02,0.422-0.039 c0.189-0.02,0.32-0.044,0.393-0.074c0.109-0.043,0.188-0.104,0.24-0.185s0.077-0.188,0.077-0.323V9.385H6.188 c-0.102,0-0.229,0.002-0.38,0.007S5.511,9.408,5.373,9.424C5.264,9.437,5.151,9.502,5.034,9.619S4.81,9.868,4.711,10.016 c-0.099,0.148-0.186,0.305-0.262,0.471c-0.076,0.166-0.128,0.303-0.158,0.412H3.945V9h6.109V10.899z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return FontSize;
	})(_react.Component);

	exports["default"] = FontSize;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Bold = (function (_Component) {
	  _inherits(Bold, _Component);

	  function Bold() {
	    _classCallCheck(this, Bold);

	    _get(Object.getPrototypeOf(Bold.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Bold, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M16.298,10.953c0.331,0.227,0.599,0.513,0.806,0.857s0.31,0.748,0.31,1.213c0,0.558-0.118,1.03-0.353,1.415 s-0.572,0.689-1.012,0.911c-0.465,0.238-1.001,0.406-1.609,0.504S13.12,16,12.298,16H6.585v-0.605 c0.16-0.016,0.362-0.039,0.605-0.07c0.243-0.031,0.413-0.067,0.512-0.109c0.191-0.078,0.322-0.18,0.391-0.306 c0.07-0.127,0.105-0.291,0.105-0.492V6.667c0-0.186-0.028-0.341-0.085-0.465S7.919,5.969,7.702,5.876 c-0.16-0.067-0.346-0.123-0.558-0.167C6.932,5.665,6.745,5.63,6.585,5.605V5h5.977c1.504,0,2.589,0.207,3.256,0.62 c0.667,0.413,1,1.023,1,1.829c0,0.372-0.075,0.699-0.225,0.981c-0.15,0.282-0.364,0.526-0.643,0.733 c-0.253,0.191-0.556,0.357-0.907,0.496s-0.729,0.256-1.132,0.349v0.147c0.403,0.041,0.822,0.13,1.256,0.267 C15.601,10.559,15.978,10.736,16.298,10.953z M13.802,7.643c0-0.61-0.172-1.085-0.516-1.426c-0.344-0.341-0.859-0.512-1.547-0.512 c-0.098,0-0.226,0.004-0.384,0.012c-0.158,0.008-0.293,0.014-0.407,0.019v4.078h0.403c0.837,0,1.455-0.195,1.853-0.585 C13.603,8.839,13.802,8.31,13.802,7.643z M14.345,12.926c0-0.766-0.227-1.353-0.682-1.762c-0.455-0.409-1.109-0.614-1.961-0.614 c-0.098,0-0.229,0.004-0.391,0.012c-0.163,0.008-0.283,0.014-0.36,0.019v4.03c0.047,0.192,0.191,0.353,0.434,0.486 c0.243,0.132,0.537,0.198,0.884,0.198c0.615,0,1.115-0.207,1.5-0.621C14.152,14.259,14.345,13.677,14.345,12.926z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Bold;
	})(_react.Component);

	exports["default"] = Bold;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Italic = (function (_Component) {
	  _inherits(Italic, _Component);

	  function Italic() {
	    _classCallCheck(this, Italic);

	    _get(Object.getPrototypeOf(Italic.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Italic, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M15.876,5l-0.116,0.512c-0.16,0.005-0.37,0.028-0.628,0.07s-0.45,0.08-0.574,0.116 c-0.217,0.067-0.372,0.171-0.465,0.31s-0.16,0.293-0.202,0.461l-1.866,8.037c-0.01,0.035-0.018,0.076-0.023,0.122 s-0.008,0.088-0.008,0.124c0,0.119,0.026,0.22,0.078,0.302c0.052,0.083,0.145,0.155,0.279,0.217 c0.078,0.036,0.248,0.079,0.512,0.128c0.264,0.049,0.46,0.079,0.589,0.089L13.336,16H8.124l0.116-0.512 c0.145-0.01,0.351-0.026,0.62-0.047s0.46-0.052,0.574-0.093c0.202-0.072,0.354-0.172,0.457-0.298 c0.103-0.127,0.173-0.28,0.209-0.461l1.859-8.047c0.01-0.047,0.018-0.093,0.023-0.14c0.006-0.047,0.009-0.093,0.009-0.14 c0-0.103-0.023-0.194-0.067-0.271c-0.044-0.078-0.136-0.147-0.275-0.209s-0.329-0.12-0.57-0.174 c-0.24-0.054-0.417-0.087-0.531-0.097L10.666,5H15.876z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Italic;
	})(_react.Component);

	exports["default"] = Italic;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Underline = (function (_Component) {
	  _inherits(Underline, _Component);

	  function Underline() {
	    _classCallCheck(this, Underline);

	    _get(Object.getPrototypeOf(Underline.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Underline, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M17.541,5.538c-0.141,0.005-0.347,0.035-0.618,0.091c-0.271,0.056-0.493,0.139-0.663,0.25 c-0.171,0.116-0.289,0.356-0.354,0.719c-0.065,0.363-0.098,0.808-0.098,1.332v4.671c0,0.596-0.123,1.113-0.369,1.552 s-0.57,0.8-0.973,1.083c-0.397,0.273-0.816,0.468-1.255,0.587C12.77,15.941,12.267,16,11.865,16c-0.643,0-1.216-0.085-1.719-0.254 c-0.503-0.169-0.925-0.397-1.267-0.685c-0.337-0.288-0.591-0.617-0.761-0.988c-0.171-0.371-0.256-0.758-0.256-1.162V6.56 c0-0.177-0.029-0.324-0.087-0.443S7.6,5.888,7.424,5.787C7.299,5.717,7.138,5.66,6.942,5.617C6.746,5.574,6.585,5.548,6.459,5.538 V5h4.456v0.538c-0.141,0.005-0.318,0.028-0.532,0.068c-0.214,0.04-0.371,0.078-0.471,0.114C9.741,5.78,9.627,5.881,9.569,6.021 C9.512,6.163,9.483,6.317,9.483,6.483v5.93c0,0.288,0.031,0.589,0.094,0.904c0.063,0.315,0.187,0.609,0.373,0.881 c0.196,0.278,0.462,0.505,0.799,0.681c0.337,0.177,0.799,0.265,1.387,0.265c0.553,0,1.017-0.088,1.391-0.265 c0.374-0.176,0.67-0.408,0.886-0.696c0.206-0.272,0.352-0.557,0.437-0.855c0.085-0.297,0.128-0.597,0.128-0.9V8.026 c0-0.56-0.04-1.018-0.121-1.373c-0.08-0.356-0.199-0.589-0.354-0.7c-0.176-0.126-0.416-0.224-0.72-0.295 c-0.304-0.071-0.537-0.111-0.697-0.121V5h4.454V5.538z" }),
	        _react2["default"].createElement("rect", { x: "6", y: "18", width: "12", height: "1" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Underline;
	})(_react.Component);

	exports["default"] = Underline;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var StrikeThrough = (function (_Component) {
	  _inherits(StrikeThrough, _Component);

	  function StrikeThrough() {
	    _classCallCheck(this, StrikeThrough);

	    _get(Object.getPrototypeOf(StrikeThrough.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(StrikeThrough, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M16.8,7.984h-0.535c-0.047-0.186-0.131-0.407-0.252-0.663c-0.122-0.256-0.259-0.497-0.409-0.725 c-0.155-0.238-0.326-0.446-0.51-0.624c-0.184-0.178-0.362-0.28-0.533-0.306c-0.16-0.021-0.362-0.036-0.607-0.047 s-0.47-0.016-0.676-0.016h-0.451v8.798c0,0.171,0.036,0.327,0.109,0.469c0.072,0.142,0.199,0.252,0.38,0.329 c0.093,0.036,0.288,0.085,0.586,0.147s0.529,0.096,0.695,0.101V16h-5.2v-0.55c0.145-0.01,0.366-0.031,0.664-0.062 s0.503-0.07,0.617-0.116c0.171-0.067,0.296-0.164,0.376-0.291c0.08-0.127,0.12-0.296,0.12-0.508V5.605h-0.45 c-0.16,0-0.36,0.004-0.598,0.012S9.66,5.641,9.443,5.667C9.272,5.687,9.095,5.789,8.911,5.973C8.728,6.156,8.558,6.364,8.403,6.597 c-0.155,0.233-0.292,0.479-0.411,0.74S7.79,7.814,7.743,7.984H7.2V5h9.6V7.984z" }),
	        _react2["default"].createElement("rect", { x: "6", y: "11", width: "12", height: "1" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return StrikeThrough;
	})(_react.Component);

	exports["default"] = StrikeThrough;
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var JustifyLeft = (function (_Component) {
	  _inherits(JustifyLeft, _Component);

	  function JustifyLeft() {
	    _classCallCheck(this, JustifyLeft);

	    _get(Object.getPrototypeOf(JustifyLeft.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(JustifyLeft, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4.125", y: "4.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "8.125", width: "12.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "12.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "16.125", width: "10.75", height: "0.75" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return JustifyLeft;
	})(_react.Component);

	exports["default"] = JustifyLeft;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var JustifyCenter = (function (_Component) {
	  _inherits(JustifyCenter, _Component);

	  function JustifyCenter() {
	    _classCallCheck(this, JustifyCenter);

	    _get(Object.getPrototypeOf(JustifyCenter.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(JustifyCenter, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4.125", y: "4.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "6.125", y: "8.125", width: "12.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "12.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "7.125", y: "16.125", width: "10.75", height: "0.75" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return JustifyCenter;
	})(_react.Component);

	exports["default"] = JustifyCenter;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var JustifyRight = (function (_Component) {
	  _inherits(JustifyRight, _Component);

	  function JustifyRight() {
	    _classCallCheck(this, JustifyRight);

	    _get(Object.getPrototypeOf(JustifyRight.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(JustifyRight, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4.125", y: "4.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "7.125", y: "8.125", width: "12.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "12.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "9.125", y: "16.125", width: "10.75", height: "0.75" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return JustifyRight;
	})(_react.Component);

	exports["default"] = JustifyRight;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var JustifyFull = (function (_Component) {
	  _inherits(JustifyFull, _Component);

	  function JustifyFull() {
	    _classCallCheck(this, JustifyFull);

	    _get(Object.getPrototypeOf(JustifyFull.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(JustifyFull, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4.125", y: "4.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "8.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "12.125", width: "15.75", height: "0.75" }),
	        _react2["default"].createElement("rect", { x: "4.125", y: "16.125", width: "15.75", height: "0.75" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return JustifyFull;
	})(_react.Component);

	exports["default"] = JustifyFull;
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var OrderedList = (function (_Component) {
	  _inherits(OrderedList, _Component);

	  function OrderedList() {
	    _classCallCheck(this, OrderedList);

	    _get(Object.getPrototypeOf(OrderedList.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(OrderedList, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M4.612,5.552V4.883c0.309-0.014,0.526-0.034,0.649-0.062C5.46,4.777,5.621,4.69,5.743,4.559 C5.829,4.469,5.893,4.349,5.937,4.2C5.962,4.11,5.975,4.044,5.975,4h0.821v5H5.788V5.552H4.612z" }),
	        _react2["default"].createElement("path", { d: "M4.23,16.022c0.14-0.332,0.469-0.683,0.988-1.054c0.451-0.323,0.742-0.554,0.875-0.693 c0.204-0.217,0.305-0.455,0.305-0.714c0-0.21-0.058-0.385-0.175-0.525c-0.117-0.14-0.284-0.209-0.501-0.209 c-0.297,0-0.5,0.111-0.607,0.333c-0.062,0.128-0.098,0.332-0.11,0.611H4.055c0.016-0.423,0.093-0.765,0.23-1.026 C4.546,12.248,5.01,12,5.676,12c0.527,0,0.946,0.146,1.257,0.438c0.312,0.292,0.468,0.677,0.468,1.158 c0,0.368-0.11,0.695-0.331,0.981c-0.144,0.19-0.381,0.402-0.712,0.635L5.966,15.49c-0.245,0.174-0.413,0.3-0.503,0.377 c-0.09,0.078-0.166,0.168-0.228,0.271h2.172V17H4C4.009,16.643,4.086,16.317,4.23,16.022z" }),
	        _react2["default"].createElement("rect", { x: "10", y: "16", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "12", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "8", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "4", width: "10", height: "1" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return OrderedList;
	})(_react.Component);

	exports["default"] = OrderedList;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var UnorderedList = (function (_Component) {
	  _inherits(UnorderedList, _Component);

	  function UnorderedList() {
	    _classCallCheck(this, UnorderedList);

	    _get(Object.getPrototypeOf(UnorderedList.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(UnorderedList, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("circle", { cx: "5.5", cy: "6.5", r: "1.5" }),
	        _react2["default"].createElement("circle", { cx: "5.5", cy: "14.5", r: "1.5" }),
	        _react2["default"].createElement("rect", { x: "10", y: "16", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "12", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "8", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "4", width: "10", height: "1" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return UnorderedList;
	})(_react.Component);

	exports["default"] = UnorderedList;
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Outdent = (function (_Component) {
	  _inherits(Outdent, _Component);

	  function Outdent() {
	    _classCallCheck(this, Outdent);

	    _get(Object.getPrototypeOf(Outdent.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Outdent, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4", y: "4", width: "16", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "8", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "12", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "4", y: "16", width: "16", height: "1" }),
	        _react2["default"].createElement("polygon", { points: "7,8.707 6.293,8 3.793,10.5 6.293,13 7,12.293 5.207,10.5 " })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Outdent;
	})(_react.Component);

	exports["default"] = Outdent;
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Indent = (function (_Component) {
	  _inherits(Indent, _Component);

	  function Indent() {
	    _classCallCheck(this, Indent);

	    _get(Object.getPrototypeOf(Indent.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Indent, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "4", y: "4", width: "16", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "8", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "10", y: "12", width: "10", height: "1" }),
	        _react2["default"].createElement("rect", { x: "4", y: "16", width: "16", height: "1" }),
	        _react2["default"].createElement("polygon", { points: "4,8.707 4.707,8 7.207,10.5 4.707,13 4,12.293 5.793,10.5 " })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Indent;
	})(_react.Component);

	exports["default"] = Indent;
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var ColorWheel = (function (_Component) {
	  _inherits(ColorWheel, _Component);

	  function ColorWheel() {
	    _classCallCheck(this, ColorWheel);

	    _get(Object.getPrototypeOf(ColorWheel.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(ColorWheel, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { fill: "#FFB42E", d: "M12,10.5h7.5c0-2.776-1.512-5.193-3.753-6.49L12,10.5L12,10.5z" }),
	        _react2["default"].createElement("path", { fill: "#FFF100", d: "M15.747,4.01C14.644,3.371,13.366,3,12,3S9.356,3.371,8.253,4.01L12,10.5L15.747,4.01z" }),
	        _react2["default"].createElement("path", { fill: "#BB73EF", d: "M12,10.5l-3.747,6.49C9.356,17.629,10.633,18,12,18c1.366,0,2.644-0.371,3.747-1.01L12,10.5L12,10.5z" }),
	        _react2["default"].createElement("path", { fill: "#28BF6D", d: "M12,10.5L8.253,4.01C6.012,5.307,4.5,7.724,4.5,10.5L12,10.5L12,10.5z" }),
	        _react2["default"].createElement("path", { fill: "#F74D2B", d: "M19.5,10.5H12l3.747,6.49C17.988,15.693,19.5,13.276,19.5,10.5z" }),
	        _react2["default"].createElement("path", { fill: "#209DE2", d: "M4.5,10.5c0,2.776,1.512,5.193,3.753,6.49L12,10.5H4.5z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return ColorWheel;
	})(_react.Component);

	exports["default"] = ColorWheel;
	module.exports = exports["default"];

/***/ },
/* 23 */
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

	var TextColor = (function (_Component) {
	  _inherits(TextColor, _Component);

	  function TextColor() {
	    _classCallCheck(this, TextColor);

	    _get(Object.getPrototypeOf(TextColor.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TextColor, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'svg',
	        _extends({ viewBox: '0 0 24 21' }, this.props),
	        _react2['default'].createElement('path', { d: 'M17.588,16h-4.509v-0.543c0.397-0.025,0.727-0.076,0.99-0.153c0.262-0.076,0.394-0.171,0.394-0.283 c0-0.046-0.005-0.102-0.015-0.168s-0.025-0.125-0.046-0.176l-0.898-2.431H9.695c-0.143,0.357-0.259,0.668-0.348,0.933 c-0.089,0.265-0.171,0.51-0.242,0.734c-0.066,0.219-0.112,0.397-0.138,0.535c-0.025,0.138-0.038,0.25-0.038,0.336 c0,0.204,0.161,0.362,0.482,0.474s0.683,0.178,1.085,0.199V16H6.412v-0.543c0.132-0.01,0.298-0.039,0.497-0.088 s0.362-0.113,0.489-0.195c0.204-0.138,0.362-0.282,0.474-0.432c0.112-0.15,0.222-0.358,0.329-0.623 c0.545-1.361,1.147-2.89,1.804-4.587S11.248,6.325,11.763,5h0.612l3.616,9.356c0.076,0.199,0.163,0.359,0.26,0.482 c0.097,0.122,0.232,0.242,0.405,0.359c0.117,0.071,0.27,0.131,0.459,0.18s0.347,0.075,0.474,0.08V16z M13.223,11.566l-1.642-4.209 l-1.619,4.209H13.223z' }),
	        _react2['default'].createElement('rect', { fill: '' + this.props.active, x: '6', y: '18', width: '12', height: '1' })
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      },
	      active: '#28BF6D'
	    },
	    enumerable: true
	  }]);

	  return TextColor;
	})(_react.Component);

	exports['default'] = TextColor;
	module.exports = exports['default'];

/***/ },
/* 24 */
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

	var TextBG = (function (_Component) {
	  _inherits(TextBG, _Component);

	  function TextBG() {
	    _classCallCheck(this, TextBG);

	    _get(Object.getPrototypeOf(TextBG.prototype), 'constructor', this).apply(this, arguments);
	  }

	  _createClass(TextBG, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'svg',
	        _extends({ viewBox: '0 0 24 21' }, this.props),
	        _react2['default'].createElement('rect', { fill: '' + this.props.background, x: '4', y: '3', width: '16', height: '15' }),
	        _react2['default'].createElement('path', { d: 'M17.588,16h-4.509v-0.543c0.397-0.025,0.727-0.076,0.99-0.153c0.262-0.076,0.394-0.171,0.394-0.283 c0-0.046-0.005-0.102-0.015-0.168s-0.025-0.125-0.046-0.176l-0.898-2.431H9.695c-0.143,0.357-0.259,0.668-0.348,0.933 c-0.089,0.265-0.171,0.51-0.242,0.734c-0.066,0.219-0.112,0.397-0.138,0.535c-0.025,0.138-0.038,0.25-0.038,0.336 c0,0.204,0.161,0.362,0.482,0.474s0.683,0.178,1.085,0.199V16H6.412v-0.543c0.132-0.01,0.298-0.039,0.497-0.088 s0.362-0.113,0.489-0.195c0.204-0.138,0.362-0.282,0.474-0.432c0.112-0.15,0.222-0.358,0.329-0.623 c0.545-1.361,1.147-2.89,1.804-4.587S11.248,6.325,11.763,5h0.612l3.616,9.356c0.076,0.199,0.163,0.359,0.26,0.482 c0.097,0.122,0.232,0.242,0.405,0.359c0.117,0.071,0.27,0.131,0.459,0.18s0.347,0.075,0.474,0.08V16z M13.223,11.566l-1.642-4.209 l-1.619,4.209H13.223z' })
	      );
	    }
	  }], [{
	    key: 'defaultProps',
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      },
	      background: '#28BF6D'
	    },
	    enumerable: true
	  }]);

	  return TextBG;
	})(_react.Component);

	exports['default'] = TextBG;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var CreateLink = (function (_Component) {
	  _inherits(CreateLink, _Component);

	  function CreateLink() {
	    _classCallCheck(this, CreateLink);

	    _get(Object.getPrototypeOf(CreateLink.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(CreateLink, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("rect", { x: "8", y: "10", width: "8", height: "1" }),
	        _react2["default"].createElement("path", { d: "M9,12.5H5c-0.551,0-1-0.449-1-1v-2c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1h1c0-1.105-0.895-2-2-2H5 c-1.105,0-2,0.895-2,2v2c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2h-1C10,12.051,9.551,12.5,9,12.5z" }),
	        _react2["default"].createElement("path", { d: "M15,12.5h4c0.551,0,1-0.449,1-1v-2c0-0.551-0.449-1-1-1h-4c-0.551,0-1,0.449-1,1h-1c0-1.105,0.895-2,2-2h4 c1.105,0,2,0.895,2,2v2c0,1.105-0.895,2-2,2h-4c-1.105,0-2-0.895-2-2h1C14,12.051,14.449,12.5,15,12.5z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return CreateLink;
	})(_react.Component);

	exports["default"] = CreateLink;
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var RemoveFormat = (function (_Component) {
	  _inherits(RemoveFormat, _Component);

	  function RemoveFormat() {
	    _classCallCheck(this, RemoveFormat);

	    _get(Object.getPrototypeOf(RemoveFormat.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(RemoveFormat, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M14.6,7.984h-0.535c-0.047-0.186-0.131-0.407-0.252-0.663c-0.122-0.256-0.259-0.497-0.409-0.725 c-0.155-0.238-0.326-0.446-0.51-0.624c-0.184-0.178-0.362-0.28-0.533-0.306c-0.16-0.021-0.362-0.036-0.607-0.047 c-0.244-0.01-0.47-0.016-0.676-0.016h-0.451v8.798c0,0.171,0.036,0.327,0.109,0.469c0.072,0.142,0.199,0.252,0.38,0.329 c0.093,0.036,0.288,0.085,0.586,0.147s0.529,0.096,0.695,0.101V16h-5.2v-0.55c0.145-0.01,0.366-0.031,0.664-0.062 s0.503-0.07,0.617-0.116c0.171-0.067,0.296-0.164,0.376-0.291c0.08-0.127,0.12-0.296,0.12-0.508V5.605h-0.45 c-0.16,0-0.36,0.004-0.598,0.012C7.688,5.624,7.46,5.641,7.243,5.667C7.072,5.687,6.895,5.789,6.711,5.973 C6.528,6.156,6.358,6.364,6.203,6.597c-0.155,0.233-0.292,0.479-0.411,0.74S5.59,7.814,5.543,7.984H5V5h9.6V7.984z" }),
	        _react2["default"].createElement("polygon", { points: "19,11.714 18.286,11 16.5,12.786 14.714,11 14,11.714 15.786,13.5 14,15.286 14.714,16  16.5,14.214 18.286,16 19,15.286 17.214,13.5" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return RemoveFormat;
	})(_react.Component);

	exports["default"] = RemoveFormat;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var Blockquote = (function (_Component) {
	  _inherits(Blockquote, _Component);

	  function Blockquote() {
	    _classCallCheck(this, Blockquote);

	    _get(Object.getPrototypeOf(Blockquote.prototype), "constructor", this).apply(this, arguments);
	  }

	  _createClass(Blockquote, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "svg",
	        _extends({ viewBox: "0 0 24 21" }, this.props),
	        _react2["default"].createElement("path", { d: "M7,12.478v1.484c2.308,0,4-1.506,4-3.628V7.038H7V10.5h2.442C9.442,11.622,8.49,12.478,7,12.478z" }),
	        _react2["default"].createElement("path", { d: "M13,12.478v1.484c2.308,0,4-1.506,4-3.628V7.038h-4V10.5h2.442C15.442,11.622,14.49,12.478,13,12.478z" })
	      );
	    }
	  }], [{
	    key: "defaultProps",
	    value: {
	      style: {
	        width: 24,
	        height: 21
	      }
	    },
	    enumerable: true
	  }]);

	  return Blockquote;
	})(_react.Component);

	exports["default"] = Blockquote;
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;