// http://stackoverflow.com/a/6691294/1461204
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = insertHTML;

function insertHTML(html) {
  var selectPastedContent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  var selection = window.getSelection();

  if (selection.getRangeAt && selection.rangeCount) {
    var range = selection.getRangeAt(0);
    range.deleteContents();

    // Range.createContextualFragment() would be useful here but is
    // only relatively recently standardized and is not supported in
    // some browsers (IE9, for one)
    var div = document.createElement('div');
    var frag = document.createDocumentFragment();
    var node = undefined,
        lastNode = undefined;

    div.innerHTML = html;

    while (node = div.firstChild) {
      lastNode = frag.appendChild(node);
    }

    var firstNode = frag.firstChild;

    range.insertNode(frag);

    // Preserve the selection
    if (lastNode) {
      range = range.cloneRange();
      range.setStartAfter(lastNode);

      if (selectPastedContent) {
        range.setStartBefore(firstNode);
      } else {
        range.collapse(true);
      }

      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

module.exports = exports['default'];