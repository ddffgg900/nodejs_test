//process.cwd()  工作路径  d:/nodejs

//start-引入模块
var http = require("http");
var fs = require('fs'); 
var url = require('url'); 
var path = require('path');
var querystring = require("querystring");
var async  = require("async");
var base = require("./base.js");
//end-引入模块


//start-服务开启
exports.start = function(){ 
	var server =  http.createServer(function(request, response) { 
		var pathname = url.parse(request.url).pathname;
		if (pathname === '/') {
			pathname = base.config.default_path; //默认页面
		}
		var realPath = path.join(base.config.src_path, pathname);//本地地址
		var ext = path.extname(realPath);
		/* if (ext.length > 0) {
			//访问静态资源 
			try{
				fs.exists(realPath, function (exists) {
					if (!exists) {
						response.writeHead(404, {'Content-Type': 'text/plain'});
						response.end("This request URL " + pathname + " was not found on this server.");
					} else {
						fs.readFile(realPath, "binary", function (err, file) {
							if (err) {
								response.writeHead(500, {'Content-Type': 'text/plain'});
								response.end(err);
							} else {
								var contentType = base.config.ext_types[ext] || "text/plain";
								response.writeHead(200, {'Content-Type': contentType});
								response.end(file, "binary");
							}
						});
					}
				});
			}
			catch(e){
				console.log(e);
			}
		}
		else{ */
		if(ext.length == 0){
			try{
				//访问接口
				var n = pathname.lastIndexOf("/")+1;
				var api_name = pathname.substr(n);//接口名
				var api_src = base.config.src_path+pathname.substring(0, n)+"api.js";//接口模块地址
				var query = url.parse(request.url).query;//获取get参数
				if(query){//是否get请求
					var a = require(api_src);
					a.init(api_name, querystring.parse(query), response);
				}
				else{
					var post = "";//获取post参数
					request.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
						post += chunk;
					});
					request.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
						if(post!=""){
							var a = require(api_src);
							a.init(api_name, querystring.parse(post), response);
							//res.end(util.inspect(post));
							
						}else{
							response.writeHead(400, {'Content-Type': 'text/plain'});//无参数
							response.end('400:Bad Request');
						}
					});
				}
			}
			catch(e){
				console.log(e);
			}
		}
	});
	var server1 =  server.listen(3000, "127.0.0.1"); 
	var server2 =  server.listen(3001, "127.0.0.1"); 
	server1.once('listening', function() {  
		console.log('Server running at http://127.0.0.1:3000/');  
	});  
	server2.once('listening', function() {  
		console.log('Server running at http://127.0.0.1:3001/');  
	});  
	console.log("server start..."); 
}

//end-服务开启