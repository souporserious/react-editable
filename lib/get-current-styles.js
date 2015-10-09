'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = getCurrentStyles;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _getNodeTree = require('./get-node-tree');

var _getNodeTree2 = _interopRequireDefault(_getNodeTree);

var COMMANDS = {
  B: 'bold',
  STRONG: 'bold',
  I: 'italic',
  U: 'underline'
};

var STYLES = {
  textAlign: ['left', 'center', 'right', 'justify'],
  fontSize: [1, 2, 3, 4, 5, 6, 7],
  fontStyle: 'italic',
  textDecoration: ['overline', 'line-through', 'underline']
};

// get all the styles that are associated with a node

function getCurrentStyles(startNode, endNode) {
  var nodes = (0, _getNodeTree2['default'])(startNode, endNode);
  var commands = [];

  nodes.forEach(function (node) {
    var tagName = node.tagName;

    for (var style in STYLES) {
      if (style === STYLES) {
        commands.push(STYLES[style]);
      }
    }

    for (var command in COMMANDS) {
      if (command === tagName) {
        commands.push(COMMANDS[command]);
      }
    }
  });
  return commands;
}

module.exports = exports['default'];