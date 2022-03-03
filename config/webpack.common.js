const path = require('path')

console.log('11', path.resolve(__dirname, '../src/index.js'))
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'js/[name].[chunkhash:4].js',
    path: path.resolve(__dirname, '../dist'),
  },
}
