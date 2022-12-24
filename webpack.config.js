const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
	
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
 	 },
   devtool: 'eval-source-map',
   devServer: {                 
    contentBase: './dist',
   }, 
    plugins:[
      new CleanWebpackPlugin({
        verbose: true
    }),
      new ESLintPlugin(),
      new HtmlWebpackPlugin({
        title: 'galactic-age-calculator',
        template: './src/index.html',
        inject: 'body'
   
      })
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
            ]
          }
        ]
      }
  };