const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT = path.resolve(__dirname, '../');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './js/index.jsx',
  ],
  output: {
    filename: 'js/bundle.js',
    publicPath: "assets/",
    path: path.join(ROOT, 'public/assets')
  },
  watch: true,
  module: {
    rules: [
    {
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015', 'react'] }
      },{
        loader: 'eslint-loader',
      }],
    },
    {
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: [{
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]',
      }]
    },
    {
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: [{
        loader: 'file-loader'
      }]
    },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss', 'css'],
    alias: {
      'components': path.resolve(__dirname, 'js/components/'),
      'containers': path.resolve(__dirname, 'js/containers/'),
      'views': path.resolve(__dirname, 'js/views/'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'index.html', to: `${ROOT}/public/index.html` },
    ]),
    new ExtractTextPlugin({
      filename: 'css/style.css',
    }),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('local'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devServer: {
    host: 'localhost',
    port: 3000,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },
};
