


var express = require('express');


var app = express();


app.get('/',function (req,res) {

    res.send('你好');
    
});

app.get('/haha',function (req,res) {

    res.send('这是haha，哈哈哈哈');

});

app.get(/^\/student\/([\d]{10})$/,function (req,res) {

    res.send("学生信息，学号",req.params[0]);

});




app.listen(3000);