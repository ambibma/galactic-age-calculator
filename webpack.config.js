const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
	
module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'bundle.js',
   	 path: path.resolve(__dirname, 'dist')
 	 },
   plugins:[
   new HtmlWebpackPlugin({
    title: 'galactic-age-calculator',
    template: './src/index.html',
    inject: 'body'
   
   })
  ],	
  };