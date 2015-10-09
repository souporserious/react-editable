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