var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "javascripts/main.js":  './pages/main-metrics/assets/scripts/main.jsx',
    "stylesheets/main.css":  './pages/main-metrics/assets/styles/main.less',
    "javascripts/main-parent.js":  './pages/main-parent/assets/scripts/main.jsx'

  },
  output: {
    path: 'public/build',
    filename: '[name]'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader'},
      { test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name]"),
  ]
};
