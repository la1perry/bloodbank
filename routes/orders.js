exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM orders', function (err,rows){
            if(err) console.log('error', err);
            res.render('orders',{page_title:"Orders", data:rows});
        });
    });
};

exports.add=function(req,res){
    res.render('add_order',{page_title:'Add Order'});

}

exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM orders WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_order',{page_title:"Edit Order", data:rows});

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
            date: input.date
        };
        var query=connection.query("INSERT INTO orders set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/orders');
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
             date: input.date
        };
        
        connection.query("UPDATE orders set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/orders');
          
        });
    
    });
};

exports.delete= function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM orders WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/orders');
        });  
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM orders', function (err,rows){
            if(err) console.log('error', err);
            res.render('orders',{page_title:"Orders", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM orders', function (err,rows){
            if(err) console.log('error', err);
            res.render('orders',{page_title:"Orders", data:rows});
        });
    });
};