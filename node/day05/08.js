

var express = require("express");

var app = express();

/*
* 当你不写路径的时候 实际上就相当于 '/'，就是所有网址
*
* app.use('/')匹配了所有的网址 所以不往下执行了，只有
*
* 加上 next()函数才会往下执行
*
* 下面的例子 如果不加 next 函数 每次执行都会 是 打印当前时间
*
* */


app.use("/",function (req,res,next) {


    console.log(new Date());
    next();

});

app.use("/admin",function (req,res) {


    res.write(req.originalUrl + "\n");

    res.write(req.baseUrl + "\n");

    res.write(req.path + "\n");

    res.end("nihao");

});

// (2) 交给第三方模块

app.use(haha);

function haha(req,res){
    res.send("hahha")
}

app.listen(3000);