var http = require('http');

var fs = require('fs'); 

var server = http.createServer(function(req,res){


	if(req.url == '/favicon.ico'){
		return;
	} 

	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	
	fs.readdir('./album/',function(err,files){
		var wenjianjia = [];
		//对于11.js 异步变成 同步；
		(function iterator(i){
			if(i == files.length){
				console.log(wenjianjia)
				return;
			}
			fs.stat('./album/'+files[i],function(err,status){
				if (status.isDirectory()) {
					wenjianjia.push(files[i])
				}
				iterator(i+1)
			});

		})(0)
	})

	res.end();


}).listen(3000,'127.0.0.1');