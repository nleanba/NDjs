var nd = require('../src/nd');

var html = '<html><body>noddom</body></html>';
var dom = new nd.DOMParser().parseFromString(html);
var window = nd.window(dom);

console.assert(dom.getElementsByTagName('body')[0].childNodes[0].textContent === 'noddom', 'dom parsing is failed');
console.assert(dom.getElementsByTagName('body')[0].childNodes[0].data === 'noddom', 'dom parsing is failed');
console.assert(dom.getElementsByTagName('body')[0].childNodes[0].nodeValue === 'noddom', 'dom parsing is failed');
console.assert(window, 'window is not instantiated');

console.log('test passed');