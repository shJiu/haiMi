<template>
	<div class="picList">
		<div class="title">{{name}}</div>
		<div class="picer">
			<router-link  v-for="item in piclist1" :to="{ name: 'detaile', params: { id: item.ProductID }}" key="item">
				<dl>
					<dt :style='{backgroundImage:"url("+item.Pictures+")"}'>
					</dt>
					<dd>
						<p>{{item.Subject}}</p>
						<p>￥{{item.FinalPrice}}</p>
					</dd>
				</dl>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			name:{
				type:String,
				default:""
			},
			piclist1:{
				type:Array,
				default:function(){}
			}
		}
	}
	
</script>
<style lang="scss" scoped>
	.picList{
		width: 100%;
		margin-top: 0.1rem;
		.title{
			width: 100%;
		    text-align: center;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    font-size: 0.14rem;
		    padding: 0.1rem 0;
		}
		.picer{
			width: 100%;
			overflow: hidden;
			text-align: center;
			a{
				width: 49%;
				float: left;
				text-align: center;
				background: #fff;
				margin-bottom:0.07rem;
				padding: 0.05rem 0;
				&:nth-child(odd){
					margin-right: 0.07rem;
				};
				dl{
					width: 100%;
					dt{
						width: 100%;
						padding-top: 100%;
						background-size: cover;
						background-position: center center;
					}
					dd{
						width: 100%;
						font-size: 0.14rem;
						padding: 0 0.1rem;
						box-sizing: border-box;
						p{
							text-align: left;
							overflow: hidden;
						    text-overflow: ellipsis;
						    white-space: nowrap;
						    &:nth-child(2){
								font-size: 0.16rem;
						    }
						}
					}
				}
			}
			
			
		}
	}
</style>