'use strict';

module.exports = {
    entry: "./home",
    output: {
        filename: "bundle.js",
        library: "home"
    },
    watch: true,
    watcherOptions: {
        aggregateTimeout: 100
    },
    devtool: "cheap-inline-source-map"
};