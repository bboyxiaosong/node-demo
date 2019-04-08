var http = require('http');

var querystring = require('querystring')

var server = http.createServer(function (req,res) {
    // 如果你的访问的地址是这个并且请求类型是post

    // && req.method.toUpperCase() == "post"

    //console.log(req.url)
    //console.log(req.method.toUpperCase())

    if(req.url == '/dopost' && req.method.toUpperCase() == 'POST'){

        var allData = '';

        req.addListener("data",function (chunk) {

            allData += chunk;

            //console.log(chunk)

        });
        //  全部传输完毕
        req.addListener("data",function () {

            var dataString = allData.toString();

            var dataObj = querystring.parse(dataString);
            console.log(dataObj)
            //console.log(allData.toString());

            res.end('success');

        });

    }

});

server.listen(3004,'127.0.0.1');