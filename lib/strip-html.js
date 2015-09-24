'use strict';

Object.defineProperty(exports, '__esModule', {
   value: true
});
exports['default'] = stripHTML;

function stripHTML(html) {
   var div = document.createElement('div');
   div.innerHTML = html;
   return div.textContent || div.innerText || '';
}

module.exports = exports['default'];