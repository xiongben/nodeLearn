var express=require('express');
var fs = require("fs");
var multer  = require('multer');
var cookieParser = require('cookie-parser');
var app=express();

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


app.get('/process_get',function(req,res){
	response={
		firstName:req.query.firstname,
		lastName:req.query.lastname
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/process_post',urlencodedParser,function(req,res){
	response={
		onename:req.body.onename,
		twoname:req.body.twoname
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/public/images/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})


app.get('/', function(req, res) {
  console.log("Cookies: ", req.cookies)
});

var server=app.listen(8022,function(){
	var host=server.address().address;
	var port=server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})
