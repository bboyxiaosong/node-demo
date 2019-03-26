
// exports.showIndex = function (req,res) {
//
//     res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
//
//     res.end('我是首页');
//
// }
//
// exports.showStudent = function (req,res) {
//
//     var id = req.url.substr(9,6);
//
//     res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});
//
//     res.end('我是学生页面'+ id);
//
// }
//
// exports.show404 = function (req,res) {
//
//     res.writeHeader(404,{'Content-Type':'text/html;charset=UTF-8'});
//
//     res.end('404,页面没有找到');
// }


var showIndex = function (req,res) {

    res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});

    res.end('我是首页');

}

var showStudent = function (req,res) {

    var id = req.url.substr(9,6);

    res.writeHeader(200,{'Content-Type':'text/html;charset=UTF-8'});

    res.end('我是学生页面'+ id);

}

var show404 = function (req,res) {

    res.writeHeader(404,{'Content-Type':'text/html;charset=UTF-8'});

    res.end('404,页面没有找到');
}





exports.show404 = show404;

exports.showStudent = showStudent;

exports.showIndex = showIndex;
