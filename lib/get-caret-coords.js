'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCaret;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getSelectionNode = require('./get-selection-node');

var _getSelectionNode2 = _interopRequireDefault(_getSelectionNode);

function getCaret(node) {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var preCoordRange = range.cloneRange();
  var preCaretRange = range.cloneRange();
  var offset = 0;
  var top = 0;
  var left = 0;

  // bail out if nothing selected
  if (selection.rangeCount <= 0) return { node: null, offset: offset, top: top, right: right };

  // get the current position of the caret
  if (preCoordRange.getClientRects) {
    preCoordRange.collapse(true);
    if (preCoordRange.getClientRects().length > 0) {
      var rect = preCoordRange.getClientRects()[0];
      top = rect.top;
      left = rect.left;
    }
  }

  preCaretRange.selectNodeContents(node);
  preCaretRange.setEnd(range.endContainer, range.endOffset);

  return {
    node: (0, _getSelectionNode2['default'])(selection),
    offset: preCaretRange.toString().length || 0,
    top: top,
    left: left
  };
}

module.exports = exports['default'];