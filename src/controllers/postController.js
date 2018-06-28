/**
 * Module dependencies
 */
const _ = require('lodash');
const Post = require('../models/post');

/**
 * Returns all the object that the model instance represents
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.getAll = function(req, res, next) {
    return res.json({ method: 'getAll' });
};

/**
 * Returns a single item from the current model instance by the `req.params.id`
 * parameter.
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */
module.exports.findOne = function (req, res, next) {
    return res.json({ method: 'findOne', params: req.params });
};