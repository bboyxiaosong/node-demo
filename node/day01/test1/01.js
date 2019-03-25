var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	if (req.url == '/ss') {
		fs.readFile('xixi.html',function(err,data){

			res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});

			res.end(data);
		});

	}else{

			res.writeHead(404,{'Content-type':'text/html;charset=UTF-8'});

			res.end('404');
	}


});
server.listen(5000,'192.168.62.181');



var http = require('http')
var server = http.createServer(function(req,res){
	if(req.ur)
})





// var http = require('http');

// http.createServer(function(req.res){
// 	req.writeHead(200,{'Content-type':'text/html;charset=UTf-8'});
// 	req.end(data)

// }).listen(3000,'127.0.0.1')