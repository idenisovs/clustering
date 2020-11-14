const path = require('path');

const sourceDir = path.join(__dirname, 'source');
const publicDir = path.join(__dirname, 'public');
const targetDir = path.join(publicDir, 'dist');

module.exports = {
	entry: sourceDir,
	mode: 'development',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	devServer: {
		contentBase: publicDir,
		publicPath: '/dist/',
		port: 9001
	},
	output: {
		path: targetDir,
		filename: 'bundle.js'
	}
};
