var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/nd.js',
    mode: 'production',
    optimization: {
        minimize: false
    },
    output: {
        pathinfo: true,
        library: 'ndjs',
        libraryTarget: 'umd',
        filename: 'nd.js',
        auxiliaryComment: {
            root: 'Browser - root is window',
            commonjs: 'Node - Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node.',
            commonjs2: 'CommonJS - Defines a strict CommonJS.',
            amd: 'AMD - Register as an anonymous module.'
        }
    },
    plugins: [
        new webpack.BannerPlugin('nd.js\n' +
            'https://github.com/LTTPP/NDjs\n' +
            '\n' +
            'NDjs is A JavaScript implementation of W3C DOM for Node.js.\n' +
            'It supports DOMParser and XMLSerializer interface such as in browser,\n' +
            'it can also provide a window with a document for jQuery to work in Node.js.\n' +
            '\n' +
            '@version 1.0.0-beta.2\n' +
            '@date    2018-09-27\n' +
            '\n' +
            '@license MIT')
    ]
};