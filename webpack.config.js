const path = require('path')

module.exports = {
  mode: 'development', //development,production,none
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'study-webpack.bundle.js',
  },
}
