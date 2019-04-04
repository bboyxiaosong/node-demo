
var file = require("../models/file.js");


exports.showIndex = function (req,res,next) {

    // res.render("index",{
    //     "albums":file.getAllAlbums()
    // });




    file.getAllAlbums(function (err,allAlabums) {
        if (err){

            res.render("err");

            return;

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

            res.render("err");

            return;

        }
        res.render("album",{
            "albumname":albumName,
            "images":imagesArray
        });
    });



}