var express=require('express');
var fs = require("fs");
var multer  = require('multer');
var cookieParser = require('cookie-parser');
const child_process = require('child_process');
var app=express();
var url=require("url");
app.use(express.static('public'));
//app.get('/',function(req,res){
//	res.send('hello world!');
//})
var bodyParser = require('body-parser');
app.use(multer({ dest: '/tmp/'}).array('image'));
app.use(cookieParser());
 
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

let thisurl="http://localhost:8888/start/thatpage/okpage?name=xiongben&age=18";

let urltest=url.parse(thisurl).pathname;
let urltest2=url.parse(thisurl,true).query;

console.log(urltest);
console.log(urltest2.name);






//let thistext="就算是找个理由让我心情好！";
//var writeStream=fs.createWriteStream('san.txt');
//writeStream.write(thistext,'UTF8');
//writeStream.end();
//writeStream.on('finish',function(){
//	console.log("写入完成");
//});
//writeStream.on('error',function(err){
//	console.log(err.stack);
//})
//console.log("程序完毕");


//var buf=new Buffer(10);
//for(let i=0;i<buf.length;i++){
//	buf[i]=i;
//}
//console.log(buf);

//app.on('someevent',function(){
//	console.log("我监听到someenent有变动！");
//})
//
//setTimeout(function(){
//	app.emit('someevent');
//},2000);







//
//app.get('/process_get',function(req,res){
//	response={
//		firstName:req.query.firstname,
//		lastName:req.query.lastname
//	};
//	console.log(response);
//	res.end(JSON.stringify(response));
//})
//
//app.post('/process_post',urlencodedParser,function(req,res){
//	response={
//		onename:req.body.onename,
//		twoname:req.body.twoname
//	};
//	console.log(response);
//	res.end(JSON.stringify(response));
//})
//
//app.post('/file_upload', function (req, res) {
// 
// console.log(req.files[0]);  // 上传的文件信息
// 
// var des_file = __dirname + "/public/images/" + req.files[0].originalname;
// fs.readFile( req.files[0].path, function (err, data) {
//      fs.writeFile(des_file, data, function (err) {
//       if( err ){
//            console.log( err );
//       }else{
//             response = {
//                 message:'File uploaded successfully', 
//                 filename:req.files[0].originalname
//            };
//        }
//        console.log( response );
//        res.end( JSON.stringify( response ) );
//     });
// });
//})
//
//
//app.get('/', function(req, res) {
//console.log("Cookies: ", req.cookies)
//});
//
//
//var user = {
// "user4" : {
//    "name" : "mohit",
//    "password" : "password4",
//    "profession" : "teacher",
//    "id": 4
// }
//};
//
//app.get('/user', function (req, res) {
// fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
//     data = JSON.parse( data );
//     data["user4"] = user["user4"];
//     console.log( data );
//     res.end( JSON.stringify(data));
// });
//})


//var server=app.listen(8022,function(){
//	var host=server.address().address;
//	var port=server.address().port;
//	console.log("应用实例，访问地址为 http://%s:%s", host, port);
//})


//for(var i=0; i<3; i++) {
// var workerProcess = child_process.exec('node support.js '+i,
//    function (error, stdout, stderr) {
//       if (error) {
//          console.log(error.stack);
//          console.log('Error code: '+error.code);
//          console.log('Signal received: '+error.signal);
//       }
//       console.log('stdout: ' + stdout);
//       console.log('stderr: ' + stderr);
//    });
//
//    workerProcess.on('exit', function (code) {
//    console.log('子进程已退出，退出码 '+code);
// });
//}