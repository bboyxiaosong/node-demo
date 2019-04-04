

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

app.use(express.static("./public"));


app.get("/news",function (req,res) {

    res.json(shujuku);
});


app.listen(3000);