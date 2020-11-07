const path = require('path');

const sourceDir = path.join(__dirname, 'source');
const publicDir = path.join(__dirname, 'public');
const targetDir = path.join(publicDir, 'dist');

module.exports = {
	entry: sourceDir,
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		contentBase: publicDir,
		publicPath: '/dist/'
	},
	output: {
		path: targetDir,
		filename: 'bundle.js'
	}
};
