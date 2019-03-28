var http = require('http');

var formidable = require('formidable');

var fs = require('fs');

var util = require('util');

var sd = require('silly-datetime');

// formidable 上传图片



var server = http.createServer(function (req,res) {
    // 如果你的访问的地址是这个并且请求类型是post

    // && req.method.toUpperCase() == "post"

    //console.log(req.url)
    //console.log(req.method.toUpperCase())

    if(req.url == '/dopost' && req.method.toUpperCase() == 'POST'){

        var form = new formidable.IncomingForm();

        form.uploadDir = "./uploads";

        form.parse(req, function(err, fields, files) {

            console.log('fields',fields);
            console.log('files',files);

            var oldpath = __dirname+ '/'+ files.tupian.path;

            var ttt =  sd.format(new Date(), 'YYYY-MM-DD HH:mm');
            res.writeHead(200, {'content-type': 'text/plain'});

            res.end('success');


        });

        return;


    }

});

server.listen(3004,'127.0.0.1');