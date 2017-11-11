const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
	entry: './src/scripts/app.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			// {
			// 	test: /\.(png|svg)$/, 
			// 	loader: 'url-loader?limit=100000' 
   //    },
			{
  			test: /\.(png|svg|jpg|jpeg)$/,
  			loader: 'file-loader',
  			options: {
    			name: '[path][name].[ext]',
    			outputPath: 'images/'
  			}
  		},      
			{
  			test: /\.(ttf|eot|woff|woff2)$/,
  			loader: 'file-loader',
  			options: {
    			name: '[name].[ext]',
  			}
  		},
			{
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract({
					use: ['css-loader', 'sass-loader'],
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextWebpackPlugin('./src/styles/styles.css'),
		new HtmlWebpackPlugin({template: './src/index.html'})
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		historyApiFallback: true,
		inline: true,
		open: true
	},
	devtool: 'eval-source-map'
}

module.exports = config;