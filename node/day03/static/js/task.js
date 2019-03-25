/*
 
 * by xiaosong 2019.3.6
 * 
 * */



$(function(){
	var userObj = JSON.parse(localStorage.getItem('userObj'));
	
	if(userObj){
		userObj.sid='BH12358'
		if(userObj.uid){
			getCodeCtrl(userObj);
			userInforCtrl(userObj);
			$('.no-login').hide();
			$('.is-land').show();
		}
	}else{
		$('.no-login').show();
		$('.is-land').hide();
	}
	
	
});
function getCodeCtrl(obj){
	$.ajax({
		async:true,
		url: _url + '/baihe-adserver/task/list',  // 跨域URL
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback', //默认callback
		data: obj,
		success: function (data) {
			console.log(data);
			if(data.code == 200){
				var arr = data.data.result;
				taskListCtrl(arr);
			}else{
				errorAlert(data.msg);
			}
		},
		error: function(xhr){
			//请求出错处理
		}
	});
}

function taskListCtrl(arr){
	var ul_wrap = $('.ul-wrap');
	ul_wrap.html('');
	var str = '';
	$.each(arr, function(index,ele) {
		str+='<div class="list">'
			+'	<div class="lf-head" style="background-image: url('+ele.pic.url+');"></div>'
			
			+'	<div class="center-time">'
			+'		<div class="label-name">'+ele.title+'</div>'
			+'      <div class="rewardprice">奖励金额'+ele.rewardprice+'元</div>'
			+'		<div class="bottom-time"><span>'+getLocalTime(ele.expiretime,3)+'</span><span class="daoqi-time">'+getLocalTime(ele.expiretime,6)+' 到期</span></div>'
			+'	</div>'
			+'	<div class="rt-btn" data-tid="'+ele.tid+'" onclick="immedCtrl(this)">立即前往</div>'
			+'	<div class="clear"></div>'
			+'</div>';
	});
	ul_wrap.html(str);
}
function immedCtrl(ele){
	var userObj = JSON.parse(localStorage.getItem('userObj'));
	if(userObj){
		if(userObj.uid){
			var tid = $(ele).attr('data-tid');
			window.location.href = "taskDetail.html?tid="+tid;
		}else{
			window.location.href = "index.html";
		}
	}else{
		window.location.href = "index.html";
	}
}	
function userInforCtrl(obj){
	$.ajax({
		async:true,
		url: _url + '/baihe-adserver/user/wallet/balance',  // 跨域URL
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback', //默认callback
		data: obj,
		success: function (data) {
			if(data.code == -1){
				errorAlert(data.msg)
			}
			if(data.code == 0){
				console.log(data);
				$('#wallet_balance').html(data.data.wallet_balance);
			}
		},
		error: function(xhr){
			//请求出错处理
			
		}
	});
}