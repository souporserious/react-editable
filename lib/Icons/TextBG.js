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

var TextBG = (function (_Component) {
  _inherits(TextBG, _Component);

  function TextBG() {
    _classCallCheck(this, TextBG);

    _get(Object.getPrototypeOf(TextBG.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TextBG, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'svg',
        _extends({ viewBox: '0 0 24 21' }, this.props),
        _react2['default'].createElement('rect', { fill: '' + this.props.background, x: '4', y: '3', width: '16', height: '15' }),
        _react2['default'].createElement('path', { d: 'M17.588,16h-4.509v-0.543c0.397-0.025,0.727-0.076,0.99-0.153c0.262-0.076,0.394-0.171,0.394-0.283 c0-0.046-0.005-0.102-0.015-0.168s-0.025-0.125-0.046-0.176l-0.898-2.431H9.695c-0.143,0.357-0.259,0.668-0.348,0.933 c-0.089,0.265-0.171,0.51-0.242,0.734c-0.066,0.219-0.112,0.397-0.138,0.535c-0.025,0.138-0.038,0.25-0.038,0.336 c0,0.204,0.161,0.362,0.482,0.474s0.683,0.178,1.085,0.199V16H6.412v-0.543c0.132-0.01,0.298-0.039,0.497-0.088 s0.362-0.113,0.489-0.195c0.204-0.138,0.362-0.282,0.474-0.432c0.112-0.15,0.222-0.358,0.329-0.623 c0.545-1.361,1.147-2.89,1.804-4.587S11.248,6.325,11.763,5h0.612l3.616,9.356c0.076,0.199,0.163,0.359,0.26,0.482 c0.097,0.122,0.232,0.242,0.405,0.359c0.117,0.071,0.27,0.131,0.459,0.18s0.347,0.075,0.474,0.08V16z M13.223,11.566l-1.642-4.209 l-1.619,4.209H13.223z' })
      );
    }
  }], [{
    key: 'defaultProps',
    value: {
      style: {
        width: 24,
        height: 21
      },
      background: '#28BF6D'
    },
    enumerable: true
  }]);

  return TextBG;
})(_react.Component);

exports['default'] = TextBG;
module.exports = exports['default'];