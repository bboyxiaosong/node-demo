
var file = require("../models/file.js");


var formidable = require("formidable");

var sd = require('silly-datetime');

var path = require("path");

var fs = require("fs");



exports.showIndex = function (req,res,next) {

    // res.render("index",{
    //     "albums":file.getAllAlbums()
    // });

    file.getAllAlbums(function (err,allAlabums) {
        if (err){

            // res.render("err");

            // return;
            next();

        }
            res.render("index",{
            "albums": allAlabums
        });

    })

}

exports.showAlbum = function (req,res,next) {

    var albumName = req.params.albumName;

    file.getAllImagesByAlbumName(albumName,function (err,imagesArray) {
        if (err){

            //res.render("err");

            //return;
            next();



        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    });

}

//显示上传

exports.shouUp = function (req,res,next) {

    file.getAllAlbums(function (err,allAlabums) {

        console.log(allAlabums);

        if (err){

            // res.render("err");

            // return;
            next();

        }
        res.render("up",{
            "albums": allAlabums
        });
    });

    //res.render("up");

}

exports.doPost = function (req,res) {

    var form = new formidable.IncomingForm();

    form.uploadDir = path.normalize( __dirname +  "/../tempup/");

    form.parse(req, function(err, fields, files,next) {

        if(err){
            next();
            return;
        }

        console.log('fields',fields);
        console.log('files',files);


        var size = parseInt(files.tupian.size);

        console.log()

        if(size > 100000){

            res.send("图片尺寸不能大于1M");

            //删除图片

            // fs.unlink(files.tupian.name,function () {
            //
            // });
            deleteall(files.tupian.name);

            return;
        }

        // console.log(util.inspect({fields:fields,files,files}));
        //
        var ttt =  sd.format(new Date(), 'YYYYMMDDHHmmss');
        //
        var ran = parseInt(Math.random()*89999 + 10000);
        //

        //
        var wenjianjia = fields.wenjianjia;

        var extname = path.extname(files.tupian.name)
        // // 执行改名
        var oldpath = files.tupian.path;
        // //新路径由三个部分组成  时间戳 随机数 扩展名
        var newpath = path.normalize(__dirname +  "/../uploads/"+ wenjianjia + "/" + ttt + ran + extname);
        //
        // //上传之后的文本域 单选框 都放在 fields对象里边了；
        //
        // // 所有文本域 files；
        fs.rename(oldpath,newpath,function (err) {
            if(err){
                throw Error('改名失败')
            }
            res.writeHead(200, {'content-type': 'text/plain'});

            res.end('success');

        })

    });

    // res.send("成功")
    
}

function deleteall(path) {
    var files = [];
    if (fs.existsSync(path)) {
        files = fs.readdirSync(path);
        files.forEach(function (file, index) {
            var curPath = path + "/" + file;
            if (fs.statSync(curPath).isDirectory()) { // recurse
                deleteall(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
}