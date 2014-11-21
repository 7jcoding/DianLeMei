var db = require('../utilities/mysql');
// add admin
exports.add = function(model,handler){
    db.execute({
        sql: 'INSERT INTO S_ADMINS(user_name,user_pwd,user_power) VALUES (?,?,?)',
        params: [model.UserName,model.UserPwd,model.Power],
        handler: handler
    });
};
exports.update = function(model,handler){
    db.execute({
        sql: 'UPDATE S_ADMINS SET user_name = ?,user_pwd = ?,user_power = ?,is_lock = ? WHERE ID = ?',
        params: [model.UserName,model.UserPwd,model.IsLock,model.ID],
        handler: handler
    });
};
// find admin by userName
exports.getModel = function(id,handler){
    db.execute({
        sql: 'SELECT * FROM S_ADMINS WHERE ID = ?',
        params: [id],
        handler: handler
    });
};
// find all
exports.getList = function(handler){
    db.execute({
        sql: 'SELECT * FROM S_ADMINS',
        handler: handler
    });
};
