var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var banner = require('./webpack.banner');

module.exports = {
    entry: {
        'nd': './src/nd.js',
        'nd.min': './src/nd.js'
    },
    devtool: 'source-map',
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        })]
    },
    output: {
        library: 'ndjs',
        libraryTarget: 'umd',
        globalObject: 'this',
        filename: '[name].js',
        auxiliaryComment: {
            root: 'This globals - root is bound to this not window',
            commonjs: 'Node - Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node.',
            commonjs2: 'CommonJS - Defines a strict CommonJS.',
            amd: 'AMD - Register as an anonymous module.'
        }
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: banner
        })
    ]
};