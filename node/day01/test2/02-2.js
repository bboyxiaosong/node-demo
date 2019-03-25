var http = require('http');

var url = require('url');

var server = http.createServer(function(req,res){

	//得到查询部分，由于写了 true 那么就是一个对象
	var query = url.parse(req.url,true).query;

	res.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});

	var name = query.name;
	var age = query.age;
	var sex = query.sex;

	console.log(name+age+sex)


	res.end('服务器收到了表单请求' + name +age +sex)

}).listen(3000,'127.0.0.1');

/*

var http = require('http');
var server = http.createServer(function(req,res){
	
	res.writeHead(200,{})
})



*/