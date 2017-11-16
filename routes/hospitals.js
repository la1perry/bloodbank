exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM hospitals', function (err,rows){
            if(err) console.log('error', err);
            res.render('hospitals',{page_title:"Hospitals", data:rows});
        });
    });
};

exports.add=function(req,res){
    res.render('add_hospital',{page_title:'Add Hospital'});

}

exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM hospitals WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_hospital',{page_title:"Edit Hospital", data:rows});

        });
    });
};

exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            id: input.id,
            name: input.name,
            address: input.address,
            phone: input.phone,
        };
        var query=connection.query("INSERT INTO hospitals set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/hospitals');
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
            address: input.address,
            phone: input.phone,
        
        };
        
        connection.query("UPDATE hospitals set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/hospitals');
          
        });
    
    });
};

exports.delete= function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM hospitals WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/hospitals');
             
        });
        
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM hospitals', function (err,rows){
            if(err) console.log('error', err);
            res.render('hospitals',{page_title:"Hospitals", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM hospitals', function (err,rows){
            if(err) console.log('error', err);
            res.render('hospitals',{page_title:"Hospitals", data:rows});
        });
    });
};