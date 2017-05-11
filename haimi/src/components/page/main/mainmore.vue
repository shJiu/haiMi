<template>
	<div class="banner">
		<div class="banner-one" v-if="bannerone!=''">
			<img :src="bannerone" alt="">
		</div>
		<mainimg-list :name="list.Title" :piclist1="list.Products"></mainimg-list>
	</div>
</template>
<script>
import mainimgList from "@/components/page/main/mainimgList"
	export default{
		components:{
			mainimgList
		},
		data(){
			return{
				bannerone:"",
				list:[]
			}
		},
		props:{
			index:{
				type:Number,
				default:0
			},
			NavId:{
				type:String,
				default:"0"
			}
		},
		created(){
			this.getdd()
		},
		methods:{
			getdd () {
				this.$http.jsonp("http://m.haimi.com/api/ad-module/get?Alias=index_"+this.NavId,{
					 Params:{
			            platform:"WAP"
				     },
				     jsonp:"_callback"
				}).then(function(data){
					this.bannerone=data.body.data[0].Records[0].Picture
					
				}),
				this.$http.jsonp("http://m.haimi.com/api/nav/advert-team-products?NavID="+this.NavId,{
					 	Params:{page:1,
						pageSize:100,
			            platform:"WAP"
				     },
				     jsonp:"_callback"
				}).then(function(data){
					this.list=data.body.data[0]
				})
			}
		},
		watch:{
			NavId (){
				this.getdd()
			}
		}
	}
</script>
<style lang="scss" scoped>
	.banner{
		width: 100%;
		margin-bottom: 0.55rem;
		.banner-one{
			width: 100%;
			img{
				display: block;
				width: 100%;
			}
		}
	}
</style>