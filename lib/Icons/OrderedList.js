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