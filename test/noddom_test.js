var noddom = require('../src/noddom');

var html = '<html><body>noddom</body></html>';
var dom = new noddom.DOMParser().parseFromString(html);
var window = noddom.window(dom);

console.assert(dom.getElementsByTagName('body')[0].childNodes[0].textContent === 'noddom', 'dom parsing is failed');
console.assert(dom.getElementsByTagName('body')[0].childNodes[0].data === 'noddom', 'dom parsing is failed');
console.assert(dom.getElementsByTagName('body')[0].childNodes[0].nodeValue === 'noddom', 'dom parsing is failed');
console.assert(window, 'window is not instantiated');

console.log('test passed');