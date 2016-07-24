var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "javascripts/main-parent.js": __dirname + "/app/web/main.jsx",
  },
  output: {
    path: "web/public/build",
    filename: "[name]",
  },
  module: {
    loaders: [
      {test: /\.coffee$/, loader: "coffee-loader"},
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel",
        query: {presets: ["react", "es2015"]},
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        loader: "babel",
        query: {presets: ["es2015"]},
      },
      { // Support require('./abc.less')
        test: /\.less$/,
        exclude: /assets/,
        loader: "style-loader!css-loader!less-loader",
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".coffee", ".less"],
  },
  plugins: [
    new ExtractTextPlugin("[name]"),
  ],
};
