let express = require('express');
let controller = require('../controllers/postController');

let router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.findOne);

module.exports = router;