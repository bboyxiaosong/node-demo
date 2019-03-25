
var http = require('http');

//var url = require('url')

var server = http.createServer(function(req,res){

	//得到 url
	var userUrl = req.url;

	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	// substr

	if(userUrl.substr(0,9)=='/student/'){

		var studentid = userUrl.substr(9);

		if (/^\d{10}$/.test(studentid)) {
			res.end('您要查询学生的信息，id为'+studentid);
		}else{
			res.end('学生学号卫生不对')
		}

	}else if(userUrl.substr(0,9)=='/teacher/'){

		var teacherid = userUrl.substr(9);

		if (/^\d{6}$/.test(teacherid)) {

			res.end('您要查询老师的信息，id为'+teacherid);
		}else{
			res.end('老师学号卫生不对')
		}
	}else{
		res.end('请检查url')
	}

	

}).listen(3000,'127.0.0.1')
