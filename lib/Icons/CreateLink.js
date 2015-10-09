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

var CreateLink = (function (_Component) {
  _inherits(CreateLink, _Component);

  function CreateLink() {
    _classCallCheck(this, CreateLink);

    _get(Object.getPrototypeOf(CreateLink.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(CreateLink, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "svg",
        _extends({ viewBox: "0 0 24 21" }, this.props),
        _react2["default"].createElement("rect", { x: "8", y: "10", width: "8", height: "1" }),
        _react2["default"].createElement("path", { d: "M9,12.5H5c-0.551,0-1-0.449-1-1v-2c0-0.551,0.449-1,1-1h4c0.551,0,1,0.449,1,1h1c0-1.105-0.895-2-2-2H5 c-1.105,0-2,0.895-2,2v2c0,1.105,0.895,2,2,2h4c1.105,0,2-0.895,2-2h-1C10,12.051,9.551,12.5,9,12.5z" }),
        _react2["default"].createElement("path", { d: "M15,12.5h4c0.551,0,1-0.449,1-1v-2c0-0.551-0.449-1-1-1h-4c-0.551,0-1,0.449-1,1h-1c0-1.105,0.895-2,2-2h4 c1.105,0,2,0.895,2,2v2c0,1.105-0.895,2-2,2h-4c-1.105,0-2-0.895-2-2h1C14,12.051,14.449,12.5,15,12.5z" })
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

  return CreateLink;
})(_react.Component);

exports["default"] = CreateLink;
module.exports = exports["default"];