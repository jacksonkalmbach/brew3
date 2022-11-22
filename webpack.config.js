const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  mode: "development",
  devServer: {
    static: path.resolve(__dirname, 'public'),
  }
}