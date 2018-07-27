/**
 * Module dependencies
 */
const _ = require('lodash');
const logger = require('../utils/logger');
const response = require('../utils/response');
const Post = require('../models/post');

/**
 * Returns all the object that the model instance represents
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.getAll = function(req, res, next) {
    Post.all()
        .then((posts) => res.json(response.formatResponse(posts)))
        .catch((error) => {
            logger.error(error);
            res.json(response.formatErrorMessage(error));
        });
};

/**
 * Returns a single item from the current model instance by the `req.params.id`
 * parameter.
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.findOne = function (req, res, next) {
    Post.where({ id: req.params.id })
        .then((post) => res.json(response.formatResponse(post)))
        .catch((error) => {
            logger.error(error);
            res.json(response.formatErrorMessage(error));
        });
};