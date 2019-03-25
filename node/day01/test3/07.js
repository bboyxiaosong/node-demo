
//查询学号
var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	//得到 url
	var  userurl = req.url;
	//  substr 来判断此时的开头
	if(userurl.substr(0,9) == '/student/'){

		var studentid = userurl.substr(9)

		if (/^\d{10}$/.test(studentid)) {

			res.end('你要查询的学生信息'+studentid)


		}else{
			res.end('学生学号不对')
		};

	}else if (userurl.substr(0,9) == '/teacher/') {


		var teacherid = userurl.substr(9)

		if (/^\d{6}$/.test(teacherid)) {

			res.end('你要查询的老师信息'+teacherid)


		}else{
			res.end('老师工号不对')
		}

	}else{
		res.end('请检查url')
	};
	

});
server.listen(3000,'127.0.0.1');