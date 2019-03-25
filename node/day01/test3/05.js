
var http = require('http');

var url = require('url'); 

var server = http.createServer(function(req,res){

	var path = url.parse(req.url).pathname;

	var  query = url.parse(req.url,true).query;


	console.log('path',path);

	console.log('query',query);

  	res.writeHead(200,{'Content-type':'text/html;charset=UTF-8'});

  	res.end();



});
server.listen(3000,'127.0.0.1');


// 页面访问  http://127.0.0.1:3000/index.html?userId=12&age=123&name=marry

/*

控制台里边打印的是

 node 05.js
path /index.html
query { userId: '12', age: '123', name: 'marry' }
path /favicon.ico
query {}




*/