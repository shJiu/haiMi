<template>
	<div class="pa" v-html="lists.Descriptioin"></div>
</template>
<script>
	export default{
		props:["lists"]
	}
</script>
<style lang="scss">
	.pa{
		width: 100%;
		font-size: 0.1rem;
		background: #fff;
		padding: 0 0.1rem;
		p{
			
			width: 100%;
			img{
				display: block;
				width: 100%;
				
			}
		}
	}
		
</style>