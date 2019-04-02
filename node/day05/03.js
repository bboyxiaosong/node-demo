

var express = require('express');

var app = express();
// view 是视图  engine 是引擎
app.set("view engine" ,"ejs");

app.get("/",function (req,res) {
    // haha 指的是 ejs 文件 后缀可以省略 ，把news 传过去
    res.render("haha",{
        "news":["我是小新闻","a 我也是","大家都是"]
    })
});

app.listen(3000);



