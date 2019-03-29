

var http = require('http');

var ejs = require('ejs');

// 模板

var string = '好高兴啊，今天我买了iPhone <%= a %>s';

//数据

var data = {
    a:6
}
// 数据绑定
var  html = ejs.render(string,data);

console.log(html);


// var server = http.createServer(function (req,res) {
//
//
//
// });
//
// server.listen(3003,'127.0.0.1');