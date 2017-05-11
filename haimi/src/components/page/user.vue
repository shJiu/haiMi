<template>
	<div class="wrap">
		<div class="title">
			请输入手机号验证码直接登录
		</div>
		<form class="form" onsubmit="check()" id="Myform">
			<p>
				<label for="">手机号：</label>
				<input type="text" name="phone" id="phone" required="*手机号不能为空" >
			</p>
			<p>
				<label for="">验证码：</label>
				<input type="text" id="code">
				<span @click="commit()">发送验证码</span>
			</p>
			<button type="submit" @click="login()">登录</button>
		</form>
		<view-footer></view-footer>
	</div>
</template>

<script>
import viewFooter from '@/components/base/footer'
import {formValue} from '../../public/js/form.js'
	export default{
		components:{
			viewFooter
		},
		data(){
			return{
				data:[]
			}
		},
		mounted(){
			var Myform=document.querySelector("#Myform")
			//var Myform=document.getElementById('Myform');
			//console.log(Myform)
			formValuedata(Myform,{checkType:1})
			function formValuedata(selector,options){
				new formValue(selector,options)
			}
		},
		methods:{
			commit:function(){
				var phone=document.querySelector("#phone");
				console.log(phone.value)
				this.$http.jsonp("http://www.haimi.com/api/member/send-quick-login-code?mobile="+phone.value+"&platform=WAP",{
				     jsonp:"_callback"
				}).then(function(data){
					console.log(data)
				})
			},
			login:function(){
				var code=document.querySelector("#code");
				this.$http.jsonp("http://www.haimi.com/api/member/quick-login?mobile="+phone.value+"&code="+code.value+"&platform=WAP",{
				     jsonp:"_callback"
				}).then(function(data){
					console.log(data)
				},function(err){
					console.log(err)
				})
			}	
		}
	}

</script>


<style lang='scss' scoped>
	.body,html,.wrap{
		width: 100%;
		height: 100%;
		background: #fff;
	}
	.title{
		width: 100%;
		padding: 0.07rem 0;
		text-align: center;
		background: #fff9f3;
		color:#991f33;
		font-size: 0.14rem;
		margin-bottom: 0.12rem;
	}
	.form{
		font-size: 0.14rem;
		width: 100%;

		padding: 0.07rem 0.1rem;
			box-sizing: border-box;
		p{
			width: 100%;
			display: -webkit-box;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			border-bottom: 1px solid #ccc;
			margin-bottom: 0.2rem;
			padding: 0.07rem 0;
			box-sizing: border-box;
			label{
				color:#666;
			}
			input{
				display: block;
				-webkit-box-flex:1;
				border:0px;
				outline: none;
			}
			span{
				color: #991f33;
				font-size: 0.12rem;
			}
		}
		button{
			width: 100%;
			margin-top:0.2rem;
			padding: 0.1rem 0;
			background: #991f33;
			color:#fff;
			font-weight: bolder;
			border:0px;
			font-size: 0.16rem;
		}
	}
</style>