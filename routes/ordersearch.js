exports.search=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM employees', function (err,rows){
            if(err) console.log('error', err);
            res.render('ordersearch',{page_title:"Search Orders by Hospital", data:rows});
        });
    });
};