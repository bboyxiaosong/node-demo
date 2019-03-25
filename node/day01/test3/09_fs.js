var http = require('http');

var fs = require('fs'); 

var server = http.createServer(function(req,res){


	if(req.url == '/favicon.ico'){
		return;
	} 

	//res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	// fs.mkdir('css',function(error){
 //    if(error){
	//         console.log(error);
	//         return false;
	//     }
	//     console.log('创建目录成功');
	// })
	fs.mkdir("./album/aaa",function(error){
		if(error){
	        console.log(error);
	        return false;
	    }
	    console.log('创建目录成功');
	});

	// res.end();

	
	

}).listen(3000,'127.0.0.1');