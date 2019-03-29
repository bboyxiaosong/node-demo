


var ejs = require('ejs');

var fs = require('fs');

var http = require('http');


var server = http.createServer(function (req,res) {


    fs.readFile('./views/index.ejs',function (err,data) {

        var template = data.toString();

        var directory = {
            a:6,news:['qwew','qweqw'],
            arrTitle:[

                {title:'哈哈',count:30},
                {title:'新闻资讯',count:15},
                {title:'小于号',count:10}

            ]
        };


        var html = ejs.render(template,directory);

        res.writeHead(200, {'content-type': 'text/html'});

        res.end(html);

    })


});

server.listen(3003,'127.0.0.1');



