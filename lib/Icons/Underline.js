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