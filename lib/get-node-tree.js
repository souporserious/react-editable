"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getNodeTree;

function getNodeTree(startNode) {
  var endNode = arguments.length <= 1 || arguments[1] === undefined ? node.parentNode : arguments[1];

  var currNode = startNode;
  var tree = [];

  while (currNode !== endNode) {
    tree.push(currNode);

    if (currNode.parentNode) {
      currNode = currNode.parentNode;
    } else {
      currNode = endNode;
    }
  }

  return tree;
}

module.exports = exports["default"];