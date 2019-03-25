/*
 * 
  公共 js  
 
*/
var _url = 'http://120.92.93.15:8089';

function isTel(s) {
	if(s.length != 11) return false;
	var patrn = /^(0|86|17951)?(16[0-9]|19[0-9]|13[0-9]|15[012356789]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/;
	if(!patrn.exec(s)) return false;
	return true;
}

function addLoading() {
	var html = '';
	html += '<div class="loading-container"> <div class="loading">' +
		' <span></span>' +
		' <span></span>' +
		' <span></span>' +
		' <span></span>' +
		' <span></span>' +
		'</div></div>';
	$('body').append(html)
}

function errorAlert(ele) {
	$(".error").html(ele).show();
	setTimeout(function() {
		$(".error").fadeOut();
	}, 1500)
}

//倒计时
function settime(obj) {
	var t = '';
	var countdown = '';
	countdown = 60;
	t = setInterval(function() {
		countdown--;
		if(countdown == 0) {
			clearInterval(t);
			obj.removeAttr("disabled");
			obj.val("获取验证码");
			return;
		} else {
			obj.attr("disabled", true);
			obj.val(countdown + "秒后获取");
		}
	}, 1000);
}
//时间戳变为年月日
function getLocalTime(stamp, type) {
	var format;
	var formatDate = new Date();
	formatDate.setTime(stamp);
	var year = formatDate.getFullYear();
	var month = formatDate.getMonth() + 1;
	var date = formatDate.getDate();
	var hour = formatDate.getHours();
	var minute = formatDate.getMinutes();
	if(hour < 10) {
		hour = '0' + hour;
	}
	if(minute < 10) {
		minute = '0' + minute;
	}
	if(type) {
		if(type == 1) { //形式2018.3.21
			if(month < 10) {
				month = '0' + month;
			}
			if(date < 10) {
				date = '0' + date;
			}
			format = formatDate.getFullYear() + "." + month + "." + date;
		}
		if(type == 2) { //形式3月21日
			format = month + "月" + date + "日";
		}
		if(type == 3) { //形式2018-04-08
			if(month < 10) {
				month = '0' + month;
			}
			if(date < 10) {
				date = '0' + date;
			}
			format = formatDate.getFullYear() + "年" + month + "." + date;
		}
		if(type == 4) {
			if(date < 10) {
				date = '0' + date;
			}
			format = month + "月" + date + "日" + hour + ":" + minute;
		}
		if(type == 5) {
			if(date < 10) {
				date = '0' + date;
			}
			format = year + "-" + month + "-" + date + "  " + hour + ":" + minute;
		}
		if(type == 6) {
			if(hour < 10) {
				hour = '0' + hour;
			}
			if(minute < 10) {
				minute = '0' + minute;
			}
			format =  hour + ":" + minute;
		}
		

	} else { //形式2018年3月21日
		format = formatDate.getFullYear() + "年" + month + "月" + date + "日";
	}

	return format;
}
function getUrlParms(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)
    return decodeURI(r[2]);
    return null;
}
var u = navigator.userAgent, app = navigator.appVersion
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
$(document).ready(function(){
	$("input").blur(function(){
		if (isIOS) {
			blurAdjust()
		}
	});
});

function blurAdjust(e){
	setTimeout(()=>{
		// alert("1231321233")
		if(document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA'){
			return
		}
		let result = 'pc';
		if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) { //判断iPhone|iPad|iPod|iOS
				result = 'ios'
		}else if(/(Android)/i.test(navigator.userAgent)) {  //判断Android
				result = 'android'
		}
		
		if( result = 'ios' ){
			document.activeElement.scrollIntoViewIfNeeded(true);
		}
	},100)
}