const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: [
    'font-awesome-loader',
    'bootstrap-loader/extractStyles',
    'tether',
    './source/scripts/main.js'
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: [ '', '.js' ],
    root: [__dirname + path.sep + 'source']
  },

  plugins: [
    new webpack.OldWatchingPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.ProvidePlugin({
      'window.Tether': 'tether',
      'jQuery': 'jquery'
    }),
  ],

  module: {
    loaders: [
      { test: /\.css$/, loaders: [ 'style', 'css', 'postcss' ] },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'postcss', 'sass' ] },
      { test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000" },
      { test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/, loader: 'file' },
      { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.(gif|png|jpg|jpeg)(\?[\s\S]+)?$/, loader: 'file?name=[name].[ext]' }
    ],
  },

  postcss: [ autoprefixer ]

};