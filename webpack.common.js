const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/public/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'static/[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    htmlPlugin
  ]
};