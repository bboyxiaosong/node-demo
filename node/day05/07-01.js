


var express = require("express");

var app = express();




app.get("/:username/:id",function (req,res,next) {

    //检索数据库 如果username 不存在那么久next();

    if('检索数据库'){
        console.log('1');
        res.send('用户信息');
    }else{
        next();
    }

});
// 中间键可以取决于你可以  同时用两断小程序；
app.get("/",function (req,res) {

    console.log("2");

});



app.listen(3000);


