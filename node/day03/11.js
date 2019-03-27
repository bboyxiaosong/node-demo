var http = require('http');

var formidable = require('formidable');





var server = http.createServer(function (req,res) {
    // 如果你的访问的地址是这个并且请求类型是post

    // && req.method.toUpperCase() == "post"

    //console.log(req.url)
    //console.log(req.method.toUpperCase())

    if(req.url == '/dopost' && req.method.toUpperCase() == 'POST'){

        var form = new formidable.IncomingForm();

        form.uploadDir = "./uploads";

        form.parse(req, function(err, fields, files) {

            console.log('fields',fields)
            console.log('files',files)

            res.writeHead(200, {'content-type': 'text/plain'});

            res.end('success');


        });

        return;


    }

});

server.listen(3004,'127.0.0.1');