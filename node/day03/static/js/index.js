/*
 
 * by xiaosong 2019.3.6
 * 
 * */

 function getImgCode(ele){
	  $(ele).attr("src",_url+"/baihe-adserver/piccode?r=" + Math.random());
 }
 
$(function(){
	//首次赋值
	
	$('#piccodeImg').attr("src",_url+"/baihe-adserver/piccode?r="+ Math.random());
	
	var flag = false;
	var params = {};
	$('#code-bt').click(function(){
		
		if($('#_tel').val() == ''){
	        errorAlert('手机号码不能为空');
	        return;
	    }
	    if(!isTel($('#_tel').val())){
	        errorAlert('请输入正确的手机号码');
	        return;
	    }
	    if($('#piccode').val() == ''){
	        errorAlert('请输入图形验证码');
	        return;
	    }
        params.mobile = $('#_tel').val();
        params.piccode = $('#piccode').val();
        	settime($('#code-bt'))
     	getCodeCtrl(params);
     
        
	});
	
	
	$('#login-bt').click(function(){
		if($('#_tel').val() == ''){
	        errorAlert('手机号码不能为空');
	        return;
	    }
	    if(!isTel($('#_tel').val())){
	        errorAlert('请输入正确的手机号码');
	        return;
	    }
	    if($('#piccode').val() == ''){
	        errorAlert('请输入图形验证码');
	        return;
	    }
		if($('#_code').val() == ''){
	        errorAlert('验证码不能为空');
	        return;
	    }
		params.smscode = $('#_code').val();
		loginCtrl(params);
		
	});
	
	
});


function checkInfor(){
    flag = true;
}
function getCodeCtrl(obj){
	$.ajax({
		async:true,
		url: _url + '/baihe-adserver/get/smscode',  // 跨域URL
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback', //默认callback
		data: obj,
		success: function (data) {
			console.log(data);
			errorAlert(data.msg);
		},
		error: function(xhr){
			//请求出错处理
			
		}
	});
}
function loginCtrl(obj){
	$.ajax({
		async:true,
		url: _url + '/baihe-adserver/user/login',  // 跨域URL
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsoncallback', //默认callback
		data: obj,
		success: function (data) {
			if(data.code == -1){
				errorAlert(data.msg)
			}
			if(data.code == 0){
				var userObj = {};
				userObj.uid = data.data.uid;
				localStorage.setItem('userObj',JSON.stringify(userObj));
				window.close();
				window.location.href="task.html";
			}
		},
		error: function(xhr){
			//请求出错处理
			
		}
	});
}



