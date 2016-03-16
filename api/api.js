var base = require(process.cwd() + "/server/base.js");
var mysql = require('mysql');
var querystring = require("querystring");

exports.init = function(api_name, query, response){
	var a = new this[api_name](query, response);
	a.init();
}

exports.show = function(query, response){
	this.query = query;
	this.response = response;
	//console.log(this);//this  ---> exports.api
}
exports.show.prototype = {
	init:function(){
		var that = this;
		if(base.checkQuery(that.query,["id"],[])==true){//判断参数是否正确
			this.run();
		}else{
			that.response.end();
			return false;
		}
	}
	, run:function(){
		var that = this;
		var id = parseInt(that.query["id"]);
		var query_string = "SELECT * FROM gyf_user WHERE id = " + id;
		var conn = mysql.createConnection(base.conn_info);
		conn.connect();
		conn.query(query_string, function(err, result){
			if(err){
				//console.log(err);
				that.response.write( JSON.stringify(err));
				that.response.end();
			}
			else{
				//base.conn.end();
				that.response.write( JSON.stringify(result));
				that.response.end();
			}
			conn.end();
		});
	}
	
	//console.log(this);//this  ---> exports.api
}
exports.insert = function(query, response){
	this.query = query;
	this.response = response;
	//console.log(this);//this  ---> exports.api
}
exports.insert.prototype = {
	init:function(){
		var that = this;
		if(base.checkQuery(that.query,["name"],[])==true){//判断参数是否正确
			this.run();
		}else{
			that.response.end();
			return false;
		}
	}
	, run:function(){
		var that = this;
		var name = that.query["name"];
		var query_string = "INSERT INTO gyf_user (name) values ('"+name+"')";
		var conn = mysql.createConnection(base.conn_info);
		conn.connect();
		conn.query(query_string, function(err, result){
			if(err){
				//console.log(err);
				that.response.write( JSON.stringify(err));
				that.response.end();
			}
			else{
				//console.log(result);
				that.response.write( JSON.stringify(result));
				that.response.end();
			}
			conn.end();
		});
	}
	
	//console.log(this);//this  ---> exports.api
}
