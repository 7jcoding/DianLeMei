var comm = require('../utilities/comm');
exports.login = function(req, res){
    var model = {
        title: '欢迎登录',
        keywords: '用户登录',
        description: '用户登录'
    };
    res.render('user/login',model);
}
exports.register = function(req,res){
  var model = {
      title: '欢迎注册',
      keywords: '用户注册',
      description: '新用户注册'
  };
    console.log(req.cookies['connect.sid']);
    if(req.body.userpwd != undefined)
    {
        console.log(req.body);
        console.log(comm.getMd5(req.body.userpwd));
        //检验用户两次输入的口令是否一致
        if (req.body['re-userpwd'] != req.body.userpwd) {
            comm.returnJson(res,500,"两次输入的口令不一致");
            return
        }
    }
  res.render('user/register',model);
};