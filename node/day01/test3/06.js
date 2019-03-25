//  此 demo 演示的是 表单提交

// 对应  biaodnantijiao.html
var http = require('http');

var url = require('url');

var server = http.createServer(function(req,res){

	//url.parse()可以将一个完整的url 分成好多部分

	/*
		host port  pathname path query;

		url.parse()如果第二个参数是true 那么就可以将
		返回的查询 结果变成对象  就可以使用对象方法
	*/

	var pathname = url.parse(req.url).pathname;

	var query = url.parse(req.url,true).query;

	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	console.log('pathname',pathname);

	console.log('query',query);


	res.end('adasd')

}).listen(3000,'127.0.0.1');

/*

var http = require('http');
var server = http.createServer(function(req,res){
	
	res.writeHead(200,{})
})



*/