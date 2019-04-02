
var express = require('express');


var app = express();

//app.set("views","a");//如果不想用views 文件夹的话

/*

render 是呈递模板引擎

send 快速呈递测试的文字

write这俩都是原生 node.js

end

*/

app.set("view engine","ejs");


app.get("/",function (req,res) {

    res.render("haha",{news:[]})
});


app.get("/check",function (req,res) {

    res.send({
        "user":"ok"
    })
})
app.listen(3000);