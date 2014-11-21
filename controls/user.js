
exports.login = function(req, res){
    var model = {
        title: '欢迎注册',
        keywords: '用户注册',
        description: '新用户注册'
    };
    res.render('user/login',model);
}