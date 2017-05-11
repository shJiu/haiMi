<template>
	<div class="banner">
		<home-base v-for="item in data" :list="item" :key="item"></home-base>
	</div>
</template>
<script>
import homeBase from "@/components/page/home/homeBase"
	export default{
		components:{
			homeBase
		},
		props:{
			navlist:{
				type:Array,
				default:function(){}
			}
		},
		methods:{
			getID:function(id,index){
				this.$emit('tabContent',index,id)
			}
		},
		data(){
			return{
				data:[]
			}
		},
		created(){
			this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=yanxuan-cat-list&platform=WAP",{
			     jsonp:"_callback"
			}).then(function(data){
				this.data=data.body.data
			})
		}
	}

</script>
<style lang="scss" scoped>
	.banner{
		margin-bottom: 0.55rem;
	}
	nav{
		display: -webkit-box;
		overflow-x: scroll;
		background: #fff;
		a{
			display: block;
			font-size: 0.12rem;
			color: #242424;
			margin: 0 0.15rem;
			padding:0.1rem 0;
			&.on{
				border-bottom: 4px solid #242424;
			}
		}
	}
</style>