var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "javascripts/main-parent.js": './app/main.jsx',
  },
  output: {
    path: 'public/build',
    filename: '[name]'
  },
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.jsx$/,
        exclude: [],
        loader: 'babel',
        query: {presets: ['react', 'es2015']}
      },
      { // Support require('./abc.less')
        test: /\.less$/,
        exclude: /assets/,
        loader: "style-loader!css-loader!less-loader"
      },
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".coffee", ".less"],
  },
  plugins: [
    new ExtractTextPlugin("[name]"),
  ]
};
