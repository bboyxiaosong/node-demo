

var express = require("express");

var app = express();


var shujuku = [


    {
        "biaoti":"1号新闻",
        "shijian":"2013,12,12",
        "zuozhe":"daogelasi",
        "neirong":"爱仕达iOS但还哦是的hi哦啊是滴哦按时后天神帝啊",
    },

    {
        "biaoti":"2号新闻",
        "shijian":"2016,12,12",
        "zuozhe":"daogelasi",
        "neirong":"爱仕达iOS但还哦是的hi哦啊是滴哦按时后天神帝啊",
    },

    {
        "biaoti":"3号新闻",
        "shijian":"2015,12,12",
        "zuozhe":"daogelasi",
        "neirong":"asdasdasdasdasasddasda",
    }
];

app.set("view engine","ejs");

app.get("/news/:id",function (req,res) {


    var id = parseInt(req.params.id);

    res.render("content",shujuku[id])


});

app.listen(3000)