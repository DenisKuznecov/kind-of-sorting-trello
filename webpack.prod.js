const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin('app.css', { allChunks: true });
const cleanDist = new CleanWebpackPlugin(['dist']);

module.exports = merge(common, {
  mode: 'production',
  entry: {
    react: 'react',
    reactdom: 'react-dom'
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    extractTextPlugin,
    cleanDist
  ]
});