<template>
	<nav v-scroll>
		<a href="#" v-for="(item,index) in navlist" @click="getID(item.NavID,index)">{{item.Title}}</a>
	</nav>
</template>
<script>
	export default{
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
		}
	}

</script>
<style lang="scss" scoped>
	nav{
		z-index:50;
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