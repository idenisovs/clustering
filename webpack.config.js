const path = require('path');

const sourceDir = path.join(__dirname, 'source');
const targetDir = path.join(__dirname, 'public', 'dist');

module.exports = {
	entry: sourceDir,
	output: {
		path: targetDir,
		filename: 'bundle.js'
	}
};
