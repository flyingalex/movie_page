const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ROOT = path.resolve(__dirname, '../');

module.exports = {
  entry: [
    './js/index.jsx',
  ],
  output: {
    filename: 'js/bundle.js',
    publicPath: "assets/",
    path: path.join(ROOT, 'public/assets')
  },
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
    }, {
      test: /\.(sass|scss)$/, //Check for sass or scss file names
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      }),
    }
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.scss'],
    alias: {
      'components': path.resolve(__dirname, 'js/components/'),
      'containers': path.resolve(__dirname, 'js/containers/'),
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
      ENVIRONMENT: JSON.stringify('production'),
    }),

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
};
