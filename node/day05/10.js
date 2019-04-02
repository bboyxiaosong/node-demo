
var express = require('express');


var app = express();

// 静态服务；
app.use('/jingtaitai',express.static("./public"));

//新路由
app.get('/images',function (req,res) {

    res.send('haha')
    
});


//

app.use(function (req, res) {

    res.status(404).send('没有这个 页面')

})

app.listen(3000);