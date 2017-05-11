<template>
	<footer>
		<router-link class="toggle" active-class="on" v-for="(item,index) in footList" :key="index" exact :to="item.router">
			<i :class="item.cls"></i>
			<span>{{item.name}}</span>
		</router-link>
	</footer>
</template>
<script>
	export default{
		methods:{
			tabFoot:function(index){
				var as=document.getElementsByClassName('toggle')
				for(var i=0; i<as.length; i++){
					as[i].className="toggle"
				}
				as[index].className="toggle on"
			}
		},
		data(){
			return{
				footList:
				[
					{
						name:"首页",
						router:"/",
						cls:"fa fa-home"
					},
					{
						name:"分类",
						router:"/home",
						cls:"fa fa-reorder"
					},
					{
						name:"购物车",
						router:"/book",
						cls:"fa fa-shopping-cart"
					},
					{
						name:"我的",
						router:"/user",
						cls:"fa fa-user"
					}
				]
			}
		}
	}
</script>
<style lang="scss" scoped>
	footer{
		width: 100%;
		height: 40px;
		background: #fff;
		position: fixed;
		bottom: 0;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		padding: 0.07rem 0;
		.toggle{
			text-align: center;
			-webkit-box-flex:1;
			display: block;
			display: -webkit-box;
			-webkit-box-orient:vertical;
			-webkit-box-align:center;
			-webkit-box-pack:center;
			color: #999;
			font-size: 0.12rem;
			&.on{
				color:#801a2a;
			}
			i{
				display: block;
				font-size: 0.18rem;
				margin-bottom: 3px;
			}
			span{
				display: block;
			}
		}
	}
</style>