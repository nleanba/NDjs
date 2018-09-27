var package = require('./package.json');
var version = package.version;

var dateFormat = require('dateformat');
var timestamp = dateFormat(Date.now(), 'yyyy-mm-dd');

module.exports = 'nd.js\n' +
    'https://github.com/LTTPP/NDjs\n' +
    '\n' +
    'NDjs is A JavaScript implementation of W3C DOM for Node.js.\n' +
    'It supports DOMParser and XMLSerializer interface such as in browser,\n' +
    'it can also provide a window with a document for jQuery to work in Node.js.\n' +
    '\n' +
    '@version ' + version + '\n' +
    '@date    ' + timestamp + '\n' +
    '\n' +
    '@license MIT';