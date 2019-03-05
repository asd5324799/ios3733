<template>
	<div class="error_message" v-show="message"><div class="error">{{message}}</div></div>
</template>
<script>
	export default({
		data(){
			return {
				initTop:0,
			};
		},
		watch:{
			message:{
				handler(val){
					if(val){
						var _self = this;
						setTimeout(function(){
							_self.$parent.$data.message = "";
						},1500);
					}
				}
			}
		},
		mounted(){
			
		},
		props:['message']
	});
</script>
<style lang="less" scoped>
@rem: 0.0267rem;
	.error_message{
		position: fixed;
        top: 50%;
        transform: translateY(-50%);
		width: 100%;
		text-align: center;
		z-index: 100;
	}
	.error_message .error{
		display: inline-block;
		background-color: rgba(0,0,0,0.7);
		border-radius: 5*@rem;
		line-height: 20*@rem;
		text-align: center;
		color: #ffffff;
		font-size: 12*@rem;
		padding-top: 10*@rem;
		padding-bottom: 10*@rem;
		padding-left: 10*@rem;
		padding-right: 10*@rem;
	}
</style>