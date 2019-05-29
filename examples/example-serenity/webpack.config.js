var path = require('path');

module.exports = {
  entry: './build/index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'phosphor.js',
    publicPath: './build/',
    library: 'phosphorjs', //add this line to enable re-use
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.png$/, use: 'file-loader' }
    ]
  }
};
