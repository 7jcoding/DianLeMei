var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', keywords:'express,nodejs', description:'this is express demo.' });
});

module.exports = router;
