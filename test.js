var http = require('http');
var fs = require("fs");
var mysql      = require('mysql');

//子进程
process.stdin.resume();
process.stdin.on('data',function(data){
  var number;
  try{
    number=parseInt(data.toString(),10);
    number+=1;
    process.stdout.write(number+"\n");
  }catch(err){
    process.stderr.write(err.message+"\n");
  }
})






//var connection = mysql.createConnection({
//host     : 'localhost',
//user     : 'root',
//password : 'root',
//database : 'xiongben'
//});
//
//connection.connect();
//var addsql="INSERT INTO test ( name, age, num, love) VALUES ( '希特勒', '40', '00550', '大德意志万岁')";
//connection.query(addsql,function (err, result) {
//      if(err){
//        console.log('[SELECT ERROR] - ',err.message);
//        return;
//      }
//
//     console.log('--------------------------SELECT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');
//});
//
//connection.end();
//http.createServer(function (request, response) {
//
//	// 发送 HTTP 头部
//	// HTTP 状态值: 200 : OK
//	// 内容类型: text/plain
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//
//	// 发送响应数据 "Hello World"
//	response.end('Hello World\n');
//}).listen(8888);
//
//// 终端打印如下信息
//console.log('服务器正在运行，，，，，，，');



//var data = fs.readFileSync('san.txt');
//
//console.log(data.toString());
//console.log("程序执行结束!");

//fs.readFile('input.txt', function (err, data) {
//  if (err) return console.error(err);
//  console.log(data.toString());
//});
//
//
//console.log("程序执行结束!");
