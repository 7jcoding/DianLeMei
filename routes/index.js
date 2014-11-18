var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express', keywords: 'express,nodejs', description: 'this is express demo.' });
});
/* GET about page. */
router.get('/about/', function(req, res) {
    res.render('about', { title: 'Express', keywords: 'express,nodejs', description: 'this is express demo.' });
});
/* GET contact page. */
router.get('/contact/', function(req, res) {
    res.render('contact', { title: 'Express', keywords: 'express,nodejs', description: 'this is express demo.' });
});
router.get('/tools/html2jade',function(req,res){
    res.render('tools/html2jade',{ title: 'Express', keywords: 'html2jade,jade', description: 'html convert to jade,jade convert to html.'});
});
module.exports = router;
