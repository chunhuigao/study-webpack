const path = require('path');
module.exports = {
  entry: {
    index: path.join(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
  },
};
