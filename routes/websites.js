var express = require('express');
var router = express.Router();

var websiteControllers = require('../controllers/websiteControllers');

/* GET users listing. */
router.get('/add', websiteControllers.add_get);

router.post('/add', websiteControllers.add_post);

module.exports = router;