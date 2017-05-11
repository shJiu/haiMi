<template>
	<div class="wrap">
		<header>
			<a href="javascript:;" v-for="(item,index) in title" :key="index" @click="tabContent(index)">{{item.name}}</a>
		</header>
		<component v-bind:is="currentView">
			
		</component>
		<view-footer></view-footer>
	</div>
	
</template>
<script>
import viewFooter from '@/components/base/footer'
import fenlei from '@/components/page/home/fenlei'
import pinpai from '@/components/page/home/pinpai'

	export default{
		components:{
	    	viewFooter,
	    	fenlei,
	    	pinpai
		},
		data(){
			return{
				currentView:'fenlei',
				title:[
					{
						name:"分类"
					},
					{
						name:"品牌"
					}
				]

			}
		},
		methods:{
			tabContent:function(index){
				console.log(index)
				if(index==0){
					this.currentView="fenlei"
				}else{
					this.currentView="pinpai"
				}
			}
		}
	}
	
</script>


<style lang='scss' scoped>
	.wrap{
		background: #fff;
	}
	header{
		width: 100%;
		display: -webkit-box;
		-webkit-box-pack:center;
		padding: 0.1rem 0;
		a{
			text-align: center;
			display: block;
			font-size: 0.14rem;
			margin:0 0.2rem;
			 color:#242424;
		}
	}
</style>