'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'frontend'),
    entry: {
        app:'./app'
    },
    output: {
        path: __dirname + '/public/js',
        publicPath:'/js/',
        filename: "[name].bundle.js",
    },
    watch: NODE_ENV == "development",
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
    ],
    resolve: {
        moduleDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        moduleDirectories: ['node_modules'],
        moduleTemplates: ['*-loader'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel?optional[]=runtime'
        }]
    }
};

if (NODE_ENV == "production") {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}