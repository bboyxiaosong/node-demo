
var express = require('express');


var app = express();

app.set("view engine","jade");

app.engine('jade',require('jade').__express);

app.get("/",function (req,res) {
    console.log(req.ip)

    res.render('xixi')
});

app.listen(3000);