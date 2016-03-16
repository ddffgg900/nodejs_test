(function(){
	$ = function(e, type){
		if(!type){
			if(typeof(e)=='string'){
				node = document.getElementById(e);
			}
			else if(typeof(e)=='object'){
				node = e;
			}
			else if(e.nodeName==="UL"){
				return false;
			}
		}
		else{
			if(type=="class"){
				if(typeof(e)=='string'){
					node_list = document.getElementsByClassName(e);
					return node_list;
				}
				else if(e.nodeName==="UL"){
					return false;
				}
			}
		}
		if(node){
			var a = new pro(node);
			return a.init();
			//return Each(e)
		}
	}
	var pro = function(node){
		this.node = node;
		this.node.touchended = 1;
		this.touchended = 1;
	}
	pro.prototype = {
		CK:function(fn){
			/*
			//if($.IST){
			//	var that = this;
			//	//var that = this;
			//	//this.touchX = 0;
			//	//this.touchY = 0;
			//	//this.addEventListener("touchstart", function(e){
			//	//	var touch = e.touches[0];
			//	//	that.touchX =touch.clientX;
			//	//	that.touchY =touch.clientY;
			//	//});
			//	//this.addEventListener("touchend", function(e){
			//	//	var touch = e.touches[0];
			//	//	var touchX = touch.clientX;
			//	//	var touchY = touch.clientY;
			//	//	var d = (that.touchX-touchX)*(that.touchX-touchX)+(that.touchY-touchY)*(that.touchY-touchY);
			//	//	if(d<1000){
			//	//		fn(e);
			//	//	}
			//	//});
			//	//	alert("浏览器支持触屏");
			//	this.ontouchend = function(e){
			//		if(that.touchended = 1){
			//			that.touchended = 0;
			//			fn(e);
			//		}
			//		that.touchended = 1;
			//		//event.preventDefault(),
			//	}
			//}else{
			//	//if(document.hasOwnProperty("ontouchstart")) {
			//	//}
			*/
			this.onclick = function(e){
				e = e || window.event;
				e.stopPropagation();
				var target = e.currentTarget || e.srcElement;
				fn(target);
			}
			//}
		}
		,CG:function(fn){
			this.onchange = function(e){
				e = e || window.event;
				var target = e.target || e.srcElement;
				fn(target);
			}	
		}
		,CC:function(type){
			var new_node = document.createElement(type); 
			this.appendChild(new_node);
			return $(new_node);
		}
		,S:function(obj){
			for(var i in obj){
				var a = '';
				switch(i){
					case 'W':
						a = 'width';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'H':
						a = 'height';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'P':
						a = 'position';
						var v = "";
						if(obj[i]=="a"){
							v = "absolute";
						}
						else if(obj[i]=="r"){
							v = "relative";
						}
						else{
							break;
						}
						this.style[a] = v;
						break;
					case 'T':
						a = 'top';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'B':
						a = 'bottom';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'L':
						a = 'left';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'R':
						a = 'right';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'MT':
						a = 'marginTop';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'MB':
						a = 'marginBottom';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'ML':
						a = 'marginLeft';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'MR':
						a = 'marginRight';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'D':
						a = 'display';
						var v = "";
						if(obj[i]=="i"){
							v = "inline";
						}
						else if(obj[i]=="b"){
							v = "block";
						}
						else if(obj[i]=="ib"){
							v = "inline-block";
						}
						else{
							break;
						}
						this.style[a] = v;
						break;
					case 'C':
						a = 'color';
						this.style[a] = obj[i];
						break;
					case 'FS':
						a = 'fontSize';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'FL':
						a = 'float';
						this.style[a] = obj[i];
						break;
					case 'BD':
						a = 'border';
						this.style[a] = obj[i];
						break;
					case 'M':
						a = 'margin';
						this.style[a] = obj[i];
						break;
					case 'I':
						a = 'innerHTML';
						this[a] = obj[i];
						break;
					case 'src':
						a = 'src';
						this[a] = obj[i];
						break;
					case 'CN':
						a = 'className';
						this[a] = obj[i];
						break;
					case 'ID':
						a = 'id';
						this[a] = obj[i];
						break;
					case 'V':
						a = 'value';
						this[a] = obj[i];
						break;
					case 'LH':
						a = 'lineHeight';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'BG':
						a = 'background';
						this.style[a] = obj[i];
						break;
					case 'BR':
						a = 'borderRadius';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'PT':
						a = 'paddingTop';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'PB':
						a = 'paddingBottom';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'PL':
						a = 'paddingLeft';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'PR':
						a = 'paddingRight';
						this.style[a] = $.topx(obj[i]);
						break;
					case 'PD':
						a = 'padding';
						this.style[a] = obj[i];
						break;
					default:
						this.style[i] = obj[i];
				}
			}
			return $(this);
		}
		,ATT:function(obj){
			for(var i in obj){
				var a = '';
				switch(i){
					case 'H':
						a = 'href';
						break;
					case 'T':
						a = 'target';
						break;
				}
				if(i =='I'){
					this.innerHTML = obj[i];
				}else{
					this.a = obj[i];
				}
			}
			return $(this);
		}
		,H:function(){
			this.style.display = "none";
			return $(this);
		}
		,V:function(){
			this.style.display = "";
			return $(this);
		}
		/* ,each:function(){
			var that = this;
		//if('function'!==typeof(fun) || !obj){
		//	return false;
		//}
			if('undefined'!==typeof(that.length)){
				for(var i=0;i<that.length;i++){
					var o=that[i];
					var r=$(o)||true;
					if(r===true){
						r=Each(o.children);
						if(!r) return false;
					}
				}
			}else{
				var r=$(that)||true;
				if(r===true){
					r=Each(that.children);
					if(!r) return false;
				}
			}
		} */
		,init:function(){
			this.node.PN = this.node.parentNode;
			this.node.C = this.node.children;
			this.node.OW = this.node.offsetWidth;
			this.node.OH = this.node.offsetHeight;
			this.node.CK = this.CK;
			this.node.CC = this.CC;
			this.node.CG = this.CG;
			this.node.S = this.S;
			this.node.H = this.H;
			this.node.V = this.V;
			this.node.ATT = this.ATT;
			//this.node.each = this.each;
			return this.node;
		}
	}
	$.body = $(document.body);
	$.IH = function(){
		return window.innerHeight || document.documentElement.clientHeight || document.body.offsetHeight;
	}
	$.IW = function(){
		return window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
	}
	$.AJAX = function(method, url, obj, fn, async){
		var xmlhttp = new XMLHttpRequest();
		var keys = [], values = [],arr = [];
		var str = "";
		for(var i in obj){
			keys.push(i);
			values.push(obj[i]);
		}
		for(var i =0;i<keys.length;i++){
			arr.push(""+keys[i]+"="+values[i]);
		}
		str = arr.join("&");
		if(!async){
			var async = false;
		}
		if(method=='get'){
			xmlhttp.open("GET", url+"?"+str, async);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
			xmlhttp.send(null);
		}
		else if(method =='post'){
			xmlhttp.open("POST", url, async);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
			xmlhttp.send(str);
		}
		var responseText = xmlhttp.responseText;
		fn(responseText);
	}
	$.topx = function(str){
		if(str.toString().indexOf("%")<0){
			return parseInt(str)+"px";
		}else{
			return str;
		}
	}
	$.IST = 'createTouch' in document || 'ontouchstart' in window;
})();