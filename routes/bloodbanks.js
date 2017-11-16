exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM bloodbanks', function (err,rows){
            if(err) console.log('error', err);
            res.render('bloodbanks',{page_title:"Blood Banks", data:rows});
        });
    });
};

exports.add=function(req,res){
    res.render('add_bloodbank',{page_title:'Add Blood Bank'});

}

exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM bloodbanks WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_bloodbank',{page_title:"Edit Blood Bank", data:rows});

        });
    });
};

exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            id: input.id,
            name: input.name,
            type: input.type,
            amount: input.amount
        };
        var query=connection.query("INSERT INTO bloodbanks set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/bloodbanks');
        });
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            
            id: input.id,
            name: input.name,
            type: input.type,
            amount: input.amount
        
        };
        
        connection.query("UPDATE bloodbanks set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/bloodbanks');
          
        });
    
    });
};

exports.delete= function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM bloodbanks WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/bloodbanks');
             
        });
        
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM bloodbanks', function (err,rows){
            if(err) console.log('error', err);
            res.render('bloodbanks',{page_title:"Blood Banks", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM bloodbanks', function (err,rows){
            if(err) console.log('error', err);
            res.render('bloodbanks',{page_title:"Blood Banks", data:rows});
        });
    });
};