

var http = require('http');


var url = require('url');


var server = http.createServer(function(req,res) {

	console.log('服务器接受到了请求'+req.url);

	res.end('success');

});
server.listen(3000,'127.0.0.1')