var db = require('../utilities/mysql');
// add admin
exports.add = function(model,handler){
    db.execute({
        sql: 'INSERT INTO ADMINS(ID,UserName,UserPwd) VALUES (0,?,?)',
        params: [model.UserName,model.UserPwd],
        handler: handler
    });
};
exports.update = function(model,handler){
    db.execute({
        sql: 'UPDATE ADMINS SET UserName = ?,UserPwd = ? WHERE ID = ?',
        params: [model.UserName,model.UserPwd,model.ID],
        handler: handler
    });
};
// find admin by userName
exports.getModel = function(id,handler){
    db.execute({
        sql: 'SELECT * FROM ADMINS WHERE ID = ?',
        params: [id],
        handler: handler
    });
};
// find all
exports.getList = function(handler){
    db.execute({
        sql: 'SELECT * FROM ADMINS',
        handler: handler
    });
};
