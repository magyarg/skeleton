const fs = require('fs');
const logger = require('../utils/logger');

module.exports = {

    /**
     * Creates a file in the directory structure
     * and closes the write stream. Fallback route
     * is the root of the project
     * @param {String} filename
     * @param {String} path
     */
    createFile(filename, path) {
        filename = filename;
        let filePath = (path) ? __dirname + '/' + path + filename : '../' + filename;
        if (this.fileExists(filePath)) {
            logger.info(filename + ' already exists on path: ' + filePath + "! No rewrite policy!");
            return;
        }
        let createStream = fs.createWriteStream(filePath);
        createStream.end();
        return {
            outCome: true,
            filePath: filePath
        };
    },

    /**
     * Checks if a file exists on the given path
     * @param {String} filePath
     */
    fileExists(filePath) {
        return (fs.existsSync(filePath)) ? true : false;
    },

    /**
     * Populates the selected file with the given context
     * @param {String} filePath
     * @param {String} context
     */
    fillFileContext(filePath, context) {
        fs.writeFile(filePath, context, (err) => {
            if (err) {
                logger.error('Filling ' + filePath + " finished with an unsuccesfull outcome due to these errors: " + error);
                return;
            }

            logger.info(filePath + " was filled with the given context!");
        });
    },

};