/* IS DIR EMPTY */
const fs = require("fs");
const path = require("path");

/**
 * Is Dir Empty.
 */
module.exports = dirPath => {
	return fs.promises.readdir(path.resolve(__dirname, dirPath)).then(files => {
		return files.length === 0;
	});
};
