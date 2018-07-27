// Set environment or default to development
const ENV = process.env.NODE_ENV || 'development';

const http = require('http');
const express = require('express');
const config = require('./config/common');
const logger = require('./src/utils/logger');
const database = require('./src/services/databaseManager');
const app = express();

/**
 * Register routes
 */
const postRoutes = require('./src/routes/posts');

let server;

/**
 * Express global variable set
 */
app.set('config', config);
app.set('root', __dirname);
app.set('env', ENV);

/**
 * Initialize registered routes
 */
app.use('/api/posts', postRoutes);

/**
 * Health check route
 */
app.get('/api/status', function(req, res, next) {
    res.json({ message: 'API is running.' });
});

/**
 * Register error logging and handler
 */
app.use((err, req, res, next) => {
    console.error(error);
    res.status(err.statusCode || 500).json(err);
});

/**
 * Start the server
 */
server = http.createServer(app);
server.listen(config.port || 3000, config.hostname, () => {
    let addr = server.address();

    logger.info('Servert started listening on port :', 3000);
});

module.exports = app;