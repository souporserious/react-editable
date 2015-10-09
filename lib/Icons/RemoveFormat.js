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