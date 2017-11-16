exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM issues', function (err,rows){
            if(err) console.log('error', err);
            res.render('issues',{page_title:"Issues", data:rows});
        });
    });
};

exports.add=function(req,res){
    res.render('add_issue',{page_title:'Add Issue'});

}

exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM issues WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_issue',{page_title:"Edit Issue", data:rows});

        });
    });
};

exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            id: input.id,
           bloodbank: input.bloodbank,
            hospital: input.hospital,
            type: input.type,
            amount: input.amount,
            cost:input.cost,
            date: input.date,
            order_num: input.order_num
        };
        var query=connection.query("INSERT INTO issues set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/issues');
        });
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            id: input.id,
            bloodbank: input.bloodbank,
             hospital: input.hospital,
             type: input.type,
             amount: input.amount,
             cost:input.cost,
             date: input.date,
             order_num: input.order_num
        };
        
        connection.query("UPDATE issues set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/issues');
          
        });
    
    });
};

exports.delete= function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM issues WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/issues');
        });  
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM issues', function (err,rows){
            if(err) console.log('error', err);
            res.render('issues',{page_title:"Issues", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM issues', function (err,rows){
            if(err) console.log('error', err);
            res.render('issues',{page_title:"Issues", data:rows});
        });
    });
};