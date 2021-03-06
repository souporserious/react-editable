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