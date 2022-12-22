const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin } = require('clean-webpack-plugin');
	
module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
   	 path: path.resolve(__dirname, 'dist')
 	 },
   plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    title: 'galactic-age-calculator',
    template: './src/index.html',
    inject: 'body'
   
   })
  ],	
  };