// 检测是不是个文件夹
var http = require('http');

var fs = require('fs'); 

var server = http.createServer(function(req,res){


	if(req.url == '/favicon.ico'){
		return;
	} 

	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	var wenJj = [];
	// fs 模块里边的   readdir  这个方法是读取文件夹 
	fs.readdir("./album",function(err,files){
		if(err){
	        console.log(err);
	        return false;
	    }
	    // 检测这个文件是不是个文件夹 （fils 是个数组 ，它是album所有东西 ）
	    console.log(files);

	    for(var i = 0;i <files.length;i++){
	    	var filePath = files[i];

	    	console.log(filePath);


	    	fs.stat('./album/' + filePath,function(err,stats){
	    		if(stats.isDirectory()){  //检测这个文件是不是文件夹
	    			wenJj.push(filePath);
	    		}

	    		console.log(wenJj); // 这是个失败的案例，因为异步回调里边套异步回调
	    	});
	    }



	});

	 res.end();

	
	

}).listen(3000,'127.0.0.1');