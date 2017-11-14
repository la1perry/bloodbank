const mysql=require('mysql');
const express=require('express');
const routes=require('./routes');
const http=require('http');
const path=require('path');
const donors=require('./routes/donors');
const employees=require('./routes/employees');

var app=express()
var connection=require('express-myconnection');

app.set('port',process.env.PORT|| 8000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname,'public')));

if('development'===app.get('env')){
    app.use(express.errorHandler());
}

app.use(
    connection(mysql,{
        host: 'localhost',
        user:'root',
        password:'',
        database:'bloodbank',
        port:'3306',
    },'request')
);

app.get('/',routes.index);
app.get('/donors', donors.list);
app.get('/donors/add',donors.add);
app.get('/donors/cancel', donors.cancel);
app.post('/donors/add', donors.save);
app.get('/donors/delete/:id', donors.delete_donor);
app.get('/donors/edit/:id', donors.edit);
app.get('/donors/back', donors.back);
app.post('/donors/edit/:id', donors.save_edit);

app.get('/employees', employees.list);
app.get('/employees/empadd',employees.empadd);
app.get('/employees/cancel', employees.cancel);
app.post('/employees/empadd', employees.save);
app.get('/employees/destroy/:id',employees.destroy);

// app.get('/employees/remove/:id', employees.remove_employee);
// app.get('/employees/change/:id', employees.change);
// app.get('/employees/back', employees.back);
// app.post('/employees/edit/:id', employees.save_edit);

app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
    console.log('listening at'+app.get('port'));
});

// let connection=mysql.createConnection({
//     host: 'localhost',
//     user:'root',
//     password:'',
//     database:'bloodbank',
//     port:'3306',
// //   connectTimeout:90000,
// //   acquireTimeout:60000, 
// //   connectionLimit:15
  
// });

// connection.connect(function(err){
//     if(err) throw err;
//     console.log('connected');
//     let sql="INSERT INTO donors VALUES(5,'Bob Belcher','m', 42,'425 apple rd','343-344-2423')";
//     connection.query(sql, function(err,result){
//         console.log('inserted');
//     });
//     });


// function getData(){

// connection.connect();
// connection.query('Select * FROM donors', function(err, rows){
//     if(err) throw err;
//     console.log(rows);
// })
// };
// getData();



// connection.connect(function(err){
// if(err){
//     return console.error('error: ', err.message);
// }
// console.log('connected to mysql server');
// });
