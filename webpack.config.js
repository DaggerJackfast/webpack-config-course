'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');
module.exports = {
    context:path.resolve(__dirname, 'frontend'),
    entry: {
        home: "./home",
        about: "./about"
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "[name].bundle.js",
        library: "[name]"
    },
    watch: NODE_ENV == "development",
    watchOptions: {
        aggregateTimeout: 100
    },
    devtool: NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV),
            LANG: JSON.stringify('ru'),
            USER: JSON.stringify(process.env.USER)
        })
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