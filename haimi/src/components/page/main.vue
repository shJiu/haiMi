<template>
	<div class="wrap">
		<main-header></main-header>
		<main-nav :navlist="navlist" v-on:tabContent="tabContent"></main-nav>
		
		<component v-bind:is="currentView" :index="pageIndex" :NavId="NavId">
			
		</component>

	 	<view-footer></view-footer>
	</div>

</template>
<script>
import mainHeader from "@/components/base/mainHeafer"
import viewFooter from '@/components/base/footer'
import mainNav from "@/components/base/mainNav"
import tuijian from "@/components/page/main/tuijian"
import mainmore from "@/components/page/main/mainmore"

export default{
	components:{
		mainHeader,
		mainNav,
    	viewFooter,
    	tuijian,
    	mainmore
	},
	data(){
		return {     
			currentView: 'tuijian',
			navlist:[],
			pageIndex:0,
			NavId:2
		}
	},
	 mounted () {
	    this.$nextTick(function (){
	      this.getData()  
	    })
	  },
	methods:{
		tabContent:function(index,NavId){
			this.pageIndex=index
			this.NavId=NavId
			if(index==0){
				this.currentView="tuijian"
			}else{
				this.currentView="mainmore"
			}
			
		},
		getData (){
	      let that=this
	      this.$http.jsonp('http://m.haimi.com/api/nav/list',{
	          Params:{
	            platform:"WAP"
		        },
		        jsonp:"_callback"
		      }).then(function(data){
		          //赋值给alllist数组,
		          return that.navlist=data.body.data;
		      })
		}
	}
}
	
</script>
<style lang="scss" scoped>
	
</style>