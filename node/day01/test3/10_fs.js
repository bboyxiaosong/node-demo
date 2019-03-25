var http = require('http');

var fs = require('fs'); 

var server = http.createServer(function(req,res){

	//不处理小图标
	if(req.url == '/favicon.ico'){
		return;
	} 

	//res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	//stats 检查 状态
	fs.stat("./album/aaa",function(err,data){
		if(err){
	        console.log(err);
	        return false;
	    }
	    // 检测这个文件是不是个文件夹
	    console.log(data.isDirectory());
	});

	 res.end();

	
	

}).listen(3000,'127.0.0.1');