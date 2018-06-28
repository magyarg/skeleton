module.exports = {

    /**
     * Returns a JSON formattted result
     * @param {String} prop
     */
    sendJSONresponse(prop) {
        return function(req, res, next) {
            res.json(req.resources[prop]);
        };
    }

};