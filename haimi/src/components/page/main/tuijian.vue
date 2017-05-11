<template>
	<div class="banner">
		<main-base v-for="(item,key) in data" :list="item" :key="key"></main-base>
		<main-mcor v-for="(item,key) in datas" :list="item" :key="key"></main-mcor>
	</div>
</template>
<script>
import mainBase from "@/components/page/main/mainbase"
import mainMcor from "@/components/page/main/mainMcor"

	export default{
		components:{
			mainBase,
			mainMcor
		},
		data(){
			return{
				data:[],
				datas:[]
			}
		},
		props:{
			index:{
				type:Number,
				default:0
			},
			NavId:{
				type:Number,
				default:""
			}
		},
		created(){
			this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+this.NavId,{
				 Params:{
		            platform:"WAP"
			     },
			     jsonp:"_callback"
			}).then(function(data){
				
				this.data=data.body.data
			}),
			this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP",{
			     jsonp:"_callback"
			}).then(function(data){
				console.log(data.body.data)
				this.datas=data.body.data
			})
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		margin-bottom: 0.55rem;
	}

</style>