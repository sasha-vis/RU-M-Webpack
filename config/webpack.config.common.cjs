const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../src'),
	entry: './index.ts',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		clean: true,
	},
	resolve: {
		extensions: ['.ts', '.js'],
		alias: {
			'@types': path.resolve(__dirname, '../src/types'),
			'@assets': path.resolve(__dirname, '../src/assets'),
			'@components': path.resolve(__dirname, '../src/components'),
			'@core': path.resolve(__dirname, '../src/core'),
		},
		mainFiles: ['index'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
		}),
	],
	module: {
		rules: [
			{
				test: /\.module\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							esModule: false,
							modules: {
								localIdentName: '[local]__[hash:base64:5]',
								exportLocalsConvention: 'camelCase',
							},
						},
					},
				],
			},
			{
				test: /\.css$/i,
				exclude: /\.module\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(mp3|wav|ogg)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
};
