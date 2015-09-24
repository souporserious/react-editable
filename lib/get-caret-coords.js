"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getCaretCoords;

function getCaretCoords(node) {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var preCaretRange = range.cloneRange();
  var preCoordRange = range.cloneRange();
  var top = 0;
  var left = 0;

  preCaretRange.selectNodeContents(node);
  preCaretRange.setEnd(range.endContainer, range.endOffset);

  if (preCoordRange.getClientRects()) {
    preCoordRange.collapse(true);
    var rect = preCoordRange.getClientRects()[0];
    top = rect.top;
    left = rect.left;
  }

  return {
    offset: preCaretRange.toString().length || 0,
    top: top,
    left: left
  };
}

module.exports = exports["default"];