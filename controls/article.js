
exports.add = function(req, res){
    var model = {
        title: '添加文章',
        keywords: '添加文章',
        description: '添加文章'
    };
    res.render('manager/article_add',model);
}