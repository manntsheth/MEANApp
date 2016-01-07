var express= require('express');

var app=express();

var port=5000;

app.use(express.static('public'));

app.use(express.static('src/views'))

app.get('/', function(req,res){
    res.send('Hi');
});

app.get('/somethingElse',function(req,res){
    res.send('Hello');
});

app.listen(port,function(err){
    console.log('App started on port '+port);
});