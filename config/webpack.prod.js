const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommon = require('./webpack.common.js')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new CssMinimizerWebpackPlugin()],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        minify: TerserWebpackPlugin.esbuildMinify,
      }),
    ],
  },
})
