const _ = require('lodash');
const databaseManager = require('../services/databaseManager');

// Initialize the database connection
let db = databaseManager.initialize();

module.exports = {

    /**
     * Returns the whole set from the posts table
     */
    all() {
        return db.select().from('posts');
    },

    /**
     * Performs a where query on the database base on the
     * serach criteria.
     * @param {Object} criteriaHash
     */
    where(criteriaHash) {
        let searchCriteria = criteriaHash || {};
        return db.select().from('posts').where(searchCriteria);
    }

};