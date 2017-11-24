const mysql=require('mysql');
const express=require('express');
const routes=require('./routes');
const http=require('http');
const path=require('path');
const donors=require('./routes/donors');
const employees=require('./routes/employees');
const hospitals=require('./routes/hospitals');
const bloodbanks=require('./routes/bloodbanks');
const orders=require('./routes/orders');
const issues=require('./routes/issues');
const donations=require('./routes/donations');
const bloodsearch=require('./routes/bloodsearch');
const bulksearch=require('./routes/bulksearch');


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
app.get('/employees/update/:id', employees.update);
app.post('/employees/update/:id', employees.save_update);
app.get('/employees/back', employees.back);
app.get('/employees/delete/:id', employees.delete_employee);


app.get('/hospitals', hospitals.list);
app.get('/hospitals/add',hospitals.add);
app.post('/hospitals/add',hospitals.save);
app.get('/hospitals/cancel', hospitals.cancel);
app.get('/hospitals/edit/:id',hospitals.edit);
app.post('/hospitals/edit/:id', hospitals.save_edit);
app.get('/hospitals/back',hospitals.back);
app.get('/hospitals/delete/:id',hospitals.delete);

app.get('/bloodbanks', bloodbanks.list);
app.get('/bloodbanks/add',bloodbanks.add);
app.post('/bloodbanks/add',bloodbanks.save);
app.get('/bloodbanks/cancel', bloodbanks.cancel);
app.get('/bloodbanks/edit/:id', bloodbanks.edit);
app.post('/bloodbanks/edit/:id', bloodbanks.save_edit);
app.get('/bloodbanks/back',bloodbanks.back);
app.get('/bloodbanks/delete/:id',bloodbanks.delete);

app.get('/orders', orders.list);
app.get('/orders/add',orders.add);
app.post('/orders/add',orders.save);
app.get('/orders/cancel', orders.cancel);
app.get('/orders/edit/:id', orders.edit);
app.post('/orders/edit/:id', orders.save_edit);
app.get('/orders/back',orders.back);
app.get('/orders/delete/:id',orders.delete);

app.get('/issues', issues.list);
app.get('/issues/add',issues.add);
app.post('/issues/add',issues.save);
app.get('/issues/cancel', issues.cancel);
app.get('/issues/edit/:id', issues.edit);
app.post('/issues/edit/:id', issues.save_edit);
app.get('/issues/back',issues.back);
app.get('/issues/delete/:id',issues.delete);

app.get('/donations', donations.list);
app.get('/donations/add',donations.add);
app.post('/donations/add',donations.save);
app.get('/donations/cancel', donations.cancel);
app.get('/donations/edit/:id', donations.edit);
app.post('/donations/edit/:id', donations.save_edit);
app.get('/donations/back',donations.back);
app.get('/donations/delete/:id',donations.delete);

app.get('/bloodsearch',bloodsearch.searchbytype);
app.post('/bloodsearch',bloodsearch.searchbytype);

// app.get('/donorsearch',donorsearch.search);
// app.get('/ordersearch',ordersearch.search);
// app.get('/bulksearch', bulksearch.search);
// app.get('/issuesearch', issuesearch.search);



// app.get('/employees/delete_employee/:id',employees.delete_employee);

// app.get('/employees/remove/:id', employees.remove_employee);
// app.get('/employees/change/:id', employees.change);
// app.get('/employees/back', employees.back);
// app.post('/employees/edit/:id', employees.save_edit);

app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
    console.log('listening at'+app.get('port'));
});
