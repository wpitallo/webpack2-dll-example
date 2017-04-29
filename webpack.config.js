var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: './output/app.js'
  },
  recordsPath: path.resolve(__dirname, './webpack.records'),
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./vendor-dll/output/manifest.json')
    })
  ]
};