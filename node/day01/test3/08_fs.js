var http = require('http');

var fs = require('fs'); 

var server = http.createServer(function(req,res){

	var userid = parseInt(Math.random()*89999)+10000;

	console.log('welcome',userid)

	if(req.url == '/favicon.ico') return;
	//两个参数 第一个写完整路径 当前目录写 ./

	//第二个参数，就是回调函数，表示文件读取成功之后所要做的事情
	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
	fs.readFile("./node.txt",function(err,data){
		if (err) {
			throw err;
		}
		console.log(userid,'读取完毕');
		res.end(data);
		
	})
	

}).listen(3000,'127.0.0.1');