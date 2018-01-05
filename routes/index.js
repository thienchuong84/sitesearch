var express = require('express');
var router = express.Router();

var indexControllers = require('../controllers/indexControllers');

/* GET home page. */
router.get('/', indexControllers.index_get);

router.post('/', indexControllers.index_post);

module.exports = router;