// index
var config = require('../config');
var admin = require('./admins');
exports.index = function(req,res,next) {
    admin.getModel(1,function(results){
        user = results[0];
        var model = {
            title: config.site_name,
            author: config.site_author,
            keywords: config.site_keywords,
            description: config.site_description,
            user: user
        };
        res.render('index', model);
    });
}
// about
exports.about = function(req, res) {
    res.render('about', { title: 'About us', keywords: 'express,nodejs', description: 'this is express demo.' });
}
// contact
exports.contact = function(req, res) {
    res.render('contact', { title: 'Express', keywords: 'express,nodejs', description: 'this is express demo.' });
}
// tools/html2jade
exports.html2jade = function(req,res){
    res.render('tools/html2jade',{ title: 'Express', keywords: 'html2jade,jade', description: 'html convert to jade,jade convert to html.'});
}