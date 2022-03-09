const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
module.exports = {
  entry: {
    index1: path.resolve(__dirname, '../src/index.js'),
    index2: path.resolve(__dirname, '../src/index.js'),
    index3: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].[chunkhash:4].js',
    path: path.join(__dirname, '../dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
      filename: 'index.html',
    }),
    new WebpackBar(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts|tsx)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'lass-loader'],
      },
      {
        test: /\.(png|jpg|git|jpe?g)$/,
        loader: 'url-loader',
        options: {},
      },
      {
        test: /\.(ott|tts)$/,
        loader: 'file-loader',
      },
    ],
  },
}
