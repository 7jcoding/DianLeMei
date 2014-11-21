// index
exports.index = function(err,req,res,next) {
    var user = null;
    admin.getModel(1,function(results){
        user = results[0];
        var model = {
            title: 'Express',
            keywords: 'express nodejs.',
            description: 'this is express demo.',
            user: user
        };
        console.log(model.user);
        if (err) return next(err);
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