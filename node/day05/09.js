

var express = require("express");

var fs = require('fs');

var app = express();




// (2) 交给第三方模块

app.use(haha);

function haha(req,res,next){
    /*
    * 根据当前页面网址 读取public文件夹中的文件
    * 如果有这个文件 那么渲染这个文件
    * 如果没有这个文件 那么久next()
    *
    *
    * app.use() 就给了我们增加一些特定功能的便利场所
    *
    *实际上 app.use() 基本上都能在第三方拿到
    *
    * */

    var filePath = req.originalUrl;

    fs.readFile('./public/' + filePath,function (err,data) {

        if(err){
            next();
            return;
        }
        res.send(data.toString())

        
    })
}

app.listen(3000);