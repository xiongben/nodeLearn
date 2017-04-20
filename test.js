var http = require('http');
var fs = require("fs");
http.createServer(function (request, response) {

	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	// 发送响应数据 "Hello World"
	response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('服务器正在运行，，，，，，，');



//var data = fs.readFileSync('san.txt');
//
//console.log(data.toString());
//console.log("程序执行结束!");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});


console.log("程序执行结束!");