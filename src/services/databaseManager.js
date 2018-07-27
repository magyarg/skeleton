const databaseConfig    = require('../../config/common').database;
const db                = require('knex');

module.exports.initialize = function() {
    return new db({
        client: 'mysql',
        connection: {
            host: databaseConfig.host,
            user: databaseConfig.username,
            password: databaseConfig.password,
            database: databaseConfig.database
        }
    });
};