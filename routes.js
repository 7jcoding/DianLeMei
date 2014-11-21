var index = require('./controls/index');
var user = require('./controls/user');
exports.mapRoute = function(app){
    // index
    app.get('/',index.index);
    app.get('/about/',index.about);
    app.get('/contact/',index.contact);
    app.get('/tools/html2jade',index.html2jade);
    // user
    app.get('/user/login/',user.login);
}