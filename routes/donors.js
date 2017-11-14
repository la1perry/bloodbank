exports.list=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donors', function (err,rows){
            if(err) console.log('error', err);
            res.render('donors',{page_title:"Donors", data:rows});
        });
    });
};


exports.add=function(req,res){
    res.render('add_donor',{page_title:'Add Donor'});

}
exports.edit=function (req,res){
    var id=req.params.id;
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donors WHERE id=?',[id],function(err,rows){
            if(err)console.log('error',err);
            res.render('edit_donor',{page_title:"Edit Donor", data:rows})

        });
    });
};
exports.save=function(req,res){
    var input=JSON.parse(JSON.stringify(req.body));
    req.getConnection(function(err,connection){
        var data={
            id: input.id,
            name: input.name,
            sex: input.sex,
            age: input.age,
            address: input.address,
            phone: input.phone
        };
        var query=connection.query("INSERT INTO donors set ?", data, function(err,rows){
            if(err) console.log('error',err);
            res.redirect('/donors');
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
            sex: input.sex,
            age: input.age,
            address: input.address,
            phone: input.phone
        
        };
        
        connection.query("UPDATE donors set ? WHERE id = ? ",[data,id], function(err, rows)
        {
  
          if (err)
              console.log("Error Updating : %s ",err );
         
          res.redirect('/donors');
          
        });
    
    });
};

exports.delete_donor = function(req,res){
          
     var id = req.params.id;
    
     req.getConnection(function (err, connection) {
        
        connection.query("DELETE FROM donors WHERE id = ? ",[id], function(err, rows)
        {
            
             if(err)
                 console.log("Error deleting : %s ",err );
            
             res.redirect('/donors');
             
        });
        
     });
};

exports.cancel=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donors', function (err,rows){
            if(err) console.log('error', err);
            res.render('donors',{page_title:"Donors", data:rows});
        });
    });
};

exports.back=function(req,res){
    req.getConnection(function(err,connection){
       var query= connection.query('SELECT * FROM donors', function (err,rows){
            if(err) console.log('error', err);
            res.render('donors',{page_title:"Donors", data:rows});
        });
    });
};



// employees

// exports.employeeslist=function(req,res){
//     req.getConnection(function(err,connection){
//        var query= connection.query('SELECT * FROM employees', function (err,rows){
//             if(err) console.log('error', err);
//             res.render('employees',{page_title:"Employees", data:rows});
//         });
//     });
// };


// exports.employeesadd=function(req,res){
//     res.render('add_employees',{page_title:'Add Employee'});

// }
// exports.employeesedit=function (req,res){
//     var id=req.params.id;
//     req.getConnection(function(err,connection){
//        var query= connection.query('SELECT * FROM employees WHERE id=?',[id],function(err,rows){
//             if(err)console.log('error',err);
//             res.render('edit_employee',{page_title:"Edit Employee", data:rows})

//         });
//     });
// };
// exports.employeessave=function(req,res){
//     var input=JSON.parse(JSON.stringify(req.body));
//     req.getConnection(function(err,connection){
//         var data={
//             empid: input.empid,
//             bno: input.bno,
//             name: input.name,
//             address: input.address,
//             email: input.email,
//             phone: input.phone,
//             position: input.position
//         };
//         var query=connection.query("INSERT INTO employees set ?", data, function(err,rows){
//             if(err) console.log('error',err);
//             res.redirect('/employees');
//         });
//     });
// };

// exports.employeessave_edit = function(req,res){
    
//     var input = JSON.parse(JSON.stringify(req.body));
//     var id = req.params.id;
    
//     req.getConnection(function (err, connection) {
        
//         var data = {
            
//             empid: input.empid,
//             bno: input.bno,
//             name: input.name,
//             address: input.address,
//             email: input.email,
//             phone: input.phone,
//             position: input.position
        
//         };
        
//         connection.query("UPDATE employees set ? WHERE id = ? ",[data,id], function(err, rows)
//         {
  
//           if (err)
//               console.log("Error Updating : %s ",err );
         
//           res.redirect('/employees');
          
//         });
    
//     });
// };

// exports.employeedelete = function(req,res){
          
//      var id = req.params.id;
    
//      req.getConnection(function (err, connection) {
        
//         connection.query("DELETE FROM employees WHERE id = ? ",[id], function(err, rows)
//         {
            
//              if(err)
//                  console.log("Error deleting : %s ",err );
            
//              res.redirect('/employees');
             
//         });
        
//      });
// };

// exports.employeecancel=function(req,res){
//     req.getConnection(function(err,connection){
//        var query= connection.query('SELECT * FROM employees', function (err,rows){
//             if(err) console.log('error', err);
//             res.render('employees',{page_title:"Employees", data:rows});
//         });
//     });
// };

// exports.employeeback=function(req,res){
//     req.getConnection(function(err,connection){
//        var query= connection.query('SELECT * FROM employees', function (err,rows){
//             if(err) console.log('error', err);
//             res.render('employees',{page_title:"Employees", data:rows});
//         });
//     });
// };