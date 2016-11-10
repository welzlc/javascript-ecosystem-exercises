const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?presets[]=es2015' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/, loader: "file" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};

module.exports = config;