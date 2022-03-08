const { merge } = require('webpack-merge')
const webpackCommon = require('./webpack.common.js')
module.exports = merge(webpackCommon, {
  mode: 'development',
  devServer: {
    static: '../dist',
    host: 'localhost',
    port: 8888,
  },
})
