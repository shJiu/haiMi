<template>
	<header>
		<input type="text" placeholder="搜索宝贝">
		<span>搜索</span>
	</header>
</template>
<script>
	
</script>
<style lang="scss" scoped>
	header{
		width: 100%;
		
		background:#242424;
		display: -webkit-box;
		-webkit-box-align:center;
		-webkit-box-pack:center;
		padding: 0.1rem 0.1rem;
		box-sizing: border-box;
		input{
			display: block;
			height: 0.25rem;
			-webkit-box-flex:1;
			background:  #1a1a1a;
			border:0;
			color: #fff;
		}
		span{
			display: block;
			text-align: center;
			font-size: 0.14rem;
			color: #fff;
		}
	}
</style>