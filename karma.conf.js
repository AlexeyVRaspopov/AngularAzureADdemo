// Karma configuration
// Generated on Fri Jul 05 2019 14:52:07 GMT+0300 (GMT+03:00)
var webpackConfig = require('./webpack.config.js')
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', "karma-typescript"],
        files: ['tests/test.ts'],
        exclude: [],
        preprocessors: {
            "**/*.ts": ['karma-typescript'] // *.tsx for React Jsx
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false,
        concurrency: Infinity,
        webpack: webpackConfig
    })
}