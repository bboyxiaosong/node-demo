
var express = require('express');


var app = express();


app.get("aab",function (erq,res) {

    res.send('你好');

});

app.get("/student/:id",function (req,res) {

    var id = req.params["id"];

    var reg = /[\d]{6}$/;

    if(reg.test(id)){

        res.send(id);

    }else{

        res.send('请检查格式');

    }

});

app.get("/:username/:oid",function (req,res) {


    var username = req.params['username'];

    var oid = req.params['oid'];

    res.write(oid)
    res.end(username);



});


app.listen(3000);