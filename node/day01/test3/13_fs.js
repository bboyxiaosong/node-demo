var http = require('http');

var fs = require('fs');

var  url = require('url');

var path = require('path');

var server = http.createServer(function(req,res){

	if(req.url == '/favicon.ico'){
		return;
	} 
	//得到 用户的路径
	var pathname = url.parse(req.url).pathname;

	if(pathname == '/'){
		pathname = 'index.html'
	}

	var extname = path.extname(pathname);

	//真的读取这个模块；、

	console.log(pathname)

	fs.readFile('./static/'+ pathname,function(err,data){
		if (err) {
			fs.readFile('./static/404.html',function(err,data){
				res.writeHead(404,{'Content-type':'text/html;charset=UFT-8'});
				res.end(data);
			})
			return;
		}
		var mime = getMime(extname);
		res.writeHead(200,{'Content-type':mime});
		res.end(data);
	})

}).listen(3000,'127.0.0.1');

function getMime(extname){
	switch(extname){
		case '.html':
			return 'text/html';
			break;
		case '.jpg' :
			return 'image/jpg';
			break;
		case '.css':
			return 'text/css';
			break;

	}
}