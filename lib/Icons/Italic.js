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

var _react = require('react');

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