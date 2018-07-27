const fileSystem = require('../src/utils/fileSystem');
const argParser = require('minimist');
const _ = require('lodash');
const logger = require('../src/utils/logger');
const pluralize = require('pluralize');

/**
 * Define the base options for the tool
 */
let options = {
    // Name of the resource
    n: 'Sample',
    // Name of the route base name (ex.: /api/v1/samples)
    r: 'samples'
};

/**
 * Parse the cli parameters
 */
let params = argParser(process.argv.slice(2));
_.each(params, (switchValue, switchName) => {
    if (options[switchName]) {
        options[switchName] = switchValue;
    }
});

/**
 * Create the controller for the resource
 */
let createController = fileSystem.createFile(options.n.toLocaleLowerCase() + 'Controller.js', '../controllers/');
if (createController && createController.outCome) {
    let context = 'const _ = require(\'lodash\'); \n const logger = require(\'../utils/logger\'); \n const response = require(\'../utils/response\'); \n const Post = require(\'../models/post\'); \n';
    fileSystem.fillFileContext(createController.filePath, context);
    logger.info(options.n.toLocaleLowerCase() + 'Controller created successfully!')
}

/**
 * Create the model for the resource
 */
let createModel = fileSystem.createFile(pluralize(options.n.toLocaleLowerCase(), 1) + '.js', '../models/');
if (createModel && createModel.outCome) {
    logger.info(pluralize(options.n.toLocaleLowerCase(), 1) + ' model created successfully!')
}

/**
 * Create the routes for the resource
 */
let createRoute = fileSystem.createFile(options.n.toLocaleLowerCase() + '.js', '../routes/');
if (createRoute && createRoute.outCome) {
    logger.info(options.n.toLocaleLowerCase() + ' route created successfully!')
}
