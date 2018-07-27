module.exports = {

    /**
     * Returns the formatted response to return with
     * @param {Object} response
     * @param {String} message
     */
    formatResponse(response, message) {
        return {
            code: 200,
            message: message || '',
            data: response,
        };
    },

    /**
     * Returns the formatted error message to return with
     * @param {String} message
     */
    formatErrorMessage(message) {
        return {
            code: 503,
            message: message,
            data: [],
        };
    }

};