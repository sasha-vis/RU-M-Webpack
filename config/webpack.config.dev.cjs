const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const commonConfig = require('./webpack.config.common.cjs');

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
	plugins: [
		new ESLintPlugin({
			extensions: ['js'],
			fix: true,
			emitWarning: true,
		}),
	],
});
