'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Editable = require('./Editable');

var _Editable2 = _interopRequireDefault(_Editable);

var _getCaretCoords = require('./get-caret-coords');

var _getCaretCoords2 = _interopRequireDefault(_getCaretCoords);

var _stripHtml = require('./strip-html');

var _stripHtml2 = _interopRequireDefault(_stripHtml);

var utils = { getCaretCoords: _getCaretCoords2['default'], stripHTML: _stripHtml2['default'] };

exports.Editable = _Editable2['default'];
exports.utils = utils;