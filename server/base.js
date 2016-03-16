exports.conn_info = {
	host: 'localhost',
	user: 'root',
	password: 'Guan123456',
	database: 'test',
	port: 3306
}

exports.config = {
	src_path:"/srv/www",
	default_path:"/index.html",
	server_path:"/server",
	ext_types:{
	  ".css": "text/css",
	  ".gif": "image/gif",
	  ".html": "text/html",
	  ".ico": "image/x-icon",
	  ".jpeg": "image/jpeg",
	  ".jpg": "image/jpeg",
	  ".js": "text/javascript",
	  ".json": "application/json",
	  ".pdf": "application/pdf",
	  ".png": "image/png",
	  ".svg": "image/svg+xml",
	  ".swf": "application/x-shockwave-flash",
	  ".tiff": "image/tiff",
	  ".txt": "text/plain",
	  ".wav": "audio/x-wav",
	  ".wma": "audio/x-ms-wma",
	  ".wmv": "video/x-ms-wmv",
	  ".xml": "text/xml"
	}
}


exports.checkQuery = function(query, and_list, or_list){
	if(and_list && and_list.length>0){
		for(var i=0;i<and_list.length;i++){
			if(typeof(query[and_list[i]])=="undefined"){
				return false;
			}
		}
		return true;
	}
	if(or_list && or_list.length>0){
		for(var j=0;j<or_list.length;i++){
			if(typeof(query[and_list[i]])!="undefined"){
				return true;
			}
		}
		return false;
	}
}


