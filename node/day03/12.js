var http = require('http');

var formidable = require('formidable');

var fs = require('fs');

var util = require('util');

var sd = require('silly-datetime');

var path = require('path');

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

            console.log(util.inspect({fields:fields,files,files}));

            var ttt =  sd.format(new Date(), 'YYYYMMDDHHmmss');

            var ran = parseInt(Math.random()*89999 + 10000);

            var extname = path.extname(files.tupian.name)
            // 执行改名
            var oldpath = __dirname + '/'+ files.tupian.path;
            //新路径由三个部分组成  时间戳 随机数 扩展名
            var newpath = __dirname + '/uploads/'+ ttt + ran + extname;

            //上传之后的文本域 单选框 都放在 fields对象里边了；

            // 所有文本域 files；
            fs.rename(oldpath,newpath,function (err) {
                if(err){
                    throw Error('改名失败')
                }
                res.writeHead(200, {'content-type': 'text/plain'});

                res.end('success');

            })




        });


    } else if(req.url == '/'){
        fs.readFile("aa.html",function (err,data) {
            res.writeHead(200, {'content-type': 'text/html'});

            res.end('success');
        })
    }else{
        res.writeHead(404, {'content-type': 'text/html'});

        res.end('404');
    }

});

server.listen(3004,'127.0.0.1');