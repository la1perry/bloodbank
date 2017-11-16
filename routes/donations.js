exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donations', function (err,rows){
            if(err) console.log('error', err);
            res.render('donations',{page_title:"Donations", data:rows});
        });
    });
};

exports.add=function(req,res){
    res.render('add_donation',{page_title:'Add Donation'});

}

exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donations WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_donation',{page_title:"Edit Donation", data:rows});

        });
    });
};

exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            id: input.id,
           code: input.code,
            bloodbank: input.bloodbank,
            donor_id: input.donor_id,
            type: input.type,
            cost:input.cost,
            amount: input.amount
        };
        var query=connection.query("INSERT INTO donations set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/donations');
        });
    });
};

exports.save_edit = function(req,res){
    
    var input = JSON.parse(JSON.stringify(req.body));
    var id = req.params.id;
    
    req.getConnection(function (err, connection) {
        
        var data = {
            id: input.id,
            code: input.code,
             bloodbank: input.bloodbank,
             donor_id: input.donor_id,
             type: input.type,
             cost:input.cost,
             amount: input.amount
        };
        
        connection.query("UPDATE donations set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/donations');
          
        });
    
    });
};

exports.delete= function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM donations WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/donations');
        });  
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donations', function (err,rows){
            if(err) console.log('error', err);
            res.render('donations',{page_title:"Donations", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donations', function (err,rows){
            if(err) console.log('error', err);
            res.render('donations',{page_title:"Donations", data:rows});
        });
    });
};