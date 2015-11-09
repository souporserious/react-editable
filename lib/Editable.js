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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _wysiwygJs = require('wysiwyg.js');

var _wysiwygJs2 = _interopRequireDefault(_wysiwygJs);

var noop = function noop() {
  return null;
};

// TODO:
// http://www.neotericdesign.com/blog/2013/3/working-around-chrome-s-contenteditable-span-bug
// http://stackoverflow.com/questions/15015019/prevent-chrome-from-wrapping-contents-of-joined-p-with-a-span
// http://codereview.stackexchange.com/questions/28882/custom-wysiwyg-editor
// https://github.com/adamsanderson/wysiwyg
// https://github.com/maccman/wysiwyg/blob/master/src/wysiwyg.coffee

var Editable = (function (_React$Component) {
  _inherits(Editable, _React$Component);

  function Editable() {
    var _this = this;

    _classCallCheck(this, Editable);

    _get(Object.getPrototypeOf(Editable.prototype), 'constructor', this).apply(this, arguments);

    this._editor = null;
    this._lastHTML = null;

    this._emitChange = function (type, e) {
      var html = _this._editor.getHTML();
      var event = _this.props[type];

      // call on change if html has changed
      if (html !== _this._lastHTML) {
        _this.props.onChange(html);
      }

      // call original event
      if (event) {
        event(e);
      }

      _this._lastHTML = html;
    };
  }

  _createClass(Editable, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.readOnly !== nextProps.readOnly || this._editor.getHTML() !== nextProps.html;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props;
      var html = _props.html;
      var readOnly = _props.readOnly;
      var getEditor = _props.getEditor;

      var element = _reactDom2['default'].findDOMNode(this);
      var onSelection = this._handleSelection.bind(this);

      // initialize editor
      this._editor = (0, _wysiwygJs2['default'])({ element: element, onSelection: onSelection, readOnly: readOnly });

      // pass editor up to allow format execution
      getEditor(this._editor.setHTML(html));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props2 = this.props;
      var html = _props2.html;
      var readOnly = _props2.readOnly;

      if (this._editor.getHTML() !== html) {
        this._editor.setHTML(html);
      }

      if (prevProps.readOnly !== readOnly) {
        this._editor.readOnly(readOnly);
      }
    }
  }, {
    key: '_handleSelection',
    value: function _handleSelection(collapsed, rect, nodes, rightclick) {
      var html = this._editor.getHTML();
      this.props.onChange(html, nodes);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(this.props.component, _extends({}, this.props, {
        onBlur: this._emitChange.bind(null, 'onBlur'),
        onInput: this._emitChange.bind(null, 'onInput')
      }));
    }
  }], [{
    key: 'propTypes',
    value: {
      component: _react.PropTypes.string,
      html: _react.PropTypes.string,
      readOnly: _react.PropTypes.bool,
      getEditor: _react.PropTypes.func,
      onChange: _react.PropTypes.func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      component: 'div',
      html: '',
      readOnly: false,
      getEditor: noop,
      onChange: noop
    },
    enumerable: true
  }]);

  return Editable;
})(_react2['default'].Component);

exports['default'] = Editable;
module.exports = exports['default'];