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