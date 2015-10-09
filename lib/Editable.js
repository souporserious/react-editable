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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _getSelectionNode = require('./get-selection-node');

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