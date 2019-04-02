
// 这一小节主要讲的是中间键


/*

路由get post 这些东西就是 中间键，中间键讲究顺序，匹配上第一个之后

就不往后匹配了，next 函数才能够继续往后匹配

*/

var express = require("express");

var app = express();


// app.get("/",function (req,res) {
//
//     a++;
//     res.send(a.toString());
//
// });

app.get("/",function (req,res,next) {

    console.log("1");
    next();

});
// 中间键可以取决于你可以  同时用两断小程序；
app.get("/",function (req,res) {

    console.log("2");

});



app.listen(3000);


