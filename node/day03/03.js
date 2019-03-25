/*

 * by xiaosong 2019.3.6
 *
 * */

var http = require('http');

var path = require('path');

var fs = require('fs');

var url = require('url');


var server = http.createServer(function(req,res){



    var pathname = url.parse(req.url).pathname;

    if(pathname.indexOf('.') == -1){
        pathname += '/index.html'
    }

    var fileURl = './' + path.normalize('./static/'+pathname);

    //console.log('pathname---',pathname);

    //console.log('fileURl---',fileURl);

    //console.log(req.url)

    // 的得到拓展名

    var extname = path.extname(pathname);
    //console.log(extname)



    //
    fs.readFile(fileURl,function(err,data){

        if(err){
            res.writeHeader(404,{'ContentType':'text/html;charset=UTF-8'});

            res.end('404,页面没有找到');
        }

        getMime(extname,function(mime){
            res.writeHeader(200,{'ContentType':mime});

            res.end(data);
        });



    });

});
server.listen(3001,'192.168.62.181');

function getMime(extname,callback){

    // 读取mime.json 得到JSON 根据 extname 得到key 返回对应的value；

    fs.readFile('./mime.json',function(err,data){

        if(err){
            throw Errror('找不到mime.json文件！');
            return;
        }

        //console.log(typeof data);

        var mimeJson = JSON.parse(data);

        var mime = mimeJson[extname]||'text/plain';


        //执行回调函数 mime类型字符串 就是它的参数；
        callback(mime);

    });
}




