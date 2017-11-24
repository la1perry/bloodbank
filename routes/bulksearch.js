exports.search=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM employees', function (err,rows){
            if(err) console.log('error', err);
            res.render('bulksearch',{page_title:"Search Blood Type by Blood Bank", data:rows});
        });
    });
};