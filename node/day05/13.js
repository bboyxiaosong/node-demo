

var express = require('express');

var bodyParser = require('body-parser');


var app = express();


app.set("view engine","ejs")


app.get("/",function (req,res) {

    //console.log(req.query);

    res.render("form");

});

//app.use(bodyParser.urlencoded({extend:false}));


app.post("/",function (req,res) {

    console.log(req.body);//放在查询提里 post 必须引入包


});

app.listen(3000);