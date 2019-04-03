// 相册



var express = require("express");

var app = express();

var router = require("./controller");

app.set("view engine","ejs");

// 路由中间键

app.use(express.static("./public"));

app.use(express.static("./uploads"));
//首页
app.get("/",router.showIndex);

app.get("/:albumName",router.showAlbum);

//最后的中间键
app.use(function (req,res) {
    console.log(req.path)

    res.render("err")

})
app.listen(3000);