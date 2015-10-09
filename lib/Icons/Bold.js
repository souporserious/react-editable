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