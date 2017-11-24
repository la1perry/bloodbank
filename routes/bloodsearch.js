exports.search=function(req,res){
    req.getConnection(function(err,connection){
        var type=req.body.type;
       var query= connection.query('select donations,id as did,name,sex,age,address,phone,code,bloodbank,donor_id,type,cost,amount from donors inner join donations on donors.id=donations.donor_id where type=?',[type], function (err,rows){
            if(err) console.log('error', err);
            res.render('bloodsearch',{page_title:"Search by Bloodtype", data:rows});
        });
    });
};