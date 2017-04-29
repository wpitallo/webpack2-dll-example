var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['angular', 'angular-ui-router']
  },
  output: {
    library: '[name]_[hash]',
    libraryTarget: 'var',
    filename: './output/[name].js'
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllPlugin({
      path: './output/manifest.json',
      name: "[name]"
    })
  ]
};