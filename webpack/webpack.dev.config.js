const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const resolvePath = (pathstr) => path.resolve(__dirname, pathstr);

module.exports = {
	mode: 'development',
	entry: {
		main: resolvePath('../src/client/app/index.js')
	},
	output: {
		filename: '[name].js',
		path: resolvePath('../dist/static')
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader:'css-loader'
					},
					{
						loader: "sass-loader"
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'img/[name].[ext]'//配置图片的输出路径和名称
					}
				}]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css' //设置名称
		}),
		new webpack.DefinePlugin({
			'__SERVER__': false,
		}),
	]
}