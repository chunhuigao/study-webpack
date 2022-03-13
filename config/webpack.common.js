const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const IS_PRO = process.env.NODE_ENV === 'production'
const IS_DEV = process.env.NODE_ENV === 'development'

const entry = {}
Array(10)
  .fill(0)
  .map((v, i) => {
    entry['index' + i] = path.resolve(__dirname, '../src/index.js')
  })
module.exports = {
  entry: entry,
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
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].[contenthash:4].js',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|tsx|ts|tsx)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|git|jpe?g)$/,
        loader: 'url-loader',

        options: {
          name: '[name].[hash:8].[ext]',
          output: 'assets/image',
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          output: 'assets/font',
        },
      },
    ],
  },
}
