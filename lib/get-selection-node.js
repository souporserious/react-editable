"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getSelectionNode;

function getSelectionNode() {
  var node = document.getSelection().anchorNode;
  var content = node && node.textContent;

  // use sibling if space, tab, or newline
  if (/^\s*$/.test(content)) {
    node = node.nextSibling ? node.nextSibling : node.previousSibling;
  }

  return node && (node.nodeType === 3 ? node.parentNode : node);
}

module.exports = exports["default"];