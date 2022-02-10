const path = require('path')

module.exports = {
  mode: 'production', //development,production,none
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: {
          loader: path.resolve(__dirname, './src/loader/TextLoader.js'),
          options: { name: '姓名' },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'study-webpack.bundle.js',
  },
}
