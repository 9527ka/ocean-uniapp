<script>
	import Vue from 'vue'
	import Webto from '@/components/Webto.vue'
	import Tabs from '@/components/Tabs.vue'
	Vue.component('Webto', Webto);
	Vue.component('Tabs', Tabs);
	export default {
		// onLaunch: function() {
		// 	console.log('App Launch')
		// },
		// onShow: function() {
		// 	console.log('App Show')
		// },
		// onHide: function() {
		// 	console.log('App Hide')
		// }
	}
</script>

<style lang="scss">
.idt_about{
	color: #C14EFF;
	image{
		// margin-left: 30rpx;
	}
}
body{
	background: #121947;
	font-family:"PingFang SC", sans-serif;
}
.status_bar {
	height: var(--status-bar-height);
	width: 100%;
}
.content{
	max-width: 500px;
	height: 100vh;
	overflow-y: auto;
	margin: 0 auto;
	position: static;
	background: #121947;
	color: #fff;
}
.flex{
	display: flex;
}
.header{
	width: 100%;
	margin: 0 auto;
	max-width: 500px;
	box-sizing: border-box;
	z-index: 99;
	position: fixed;
	top: 0;
	padding: 39.58rpx 19rpx;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	.header_le{
		width: 110.42rpx;
		height: 43.06rpx;
	}
	.header_ri{
		display: flex;
		align-items: center;
		font-size: 20rpx;
		.header_ri_lang{
			display: flex;
			align-items: center;
			// width: 152.43rpx;
			margin-right: 25rpx;
			height: 45.97rpx;
			border: 1px solid rgba(255, 255, 255, .5);
			border-radius: 10px;
			box-sizing: border-box;
			padding: 10rpx;
			image{
				width: 29.86rpx;
				height: 22.22rpx;
			}
			text{
				padding: 0 10rpx;
			}
			svg{
				width: 20rpx;
				height: 20rpx;
			}
		}
		.header_ri_user{
			// width: 152.43rpx;
			display: none;
			height: 45.97rpx;
			background: #F5AE18;
			border-radius: 22.99rpx;
			text-align: center;
			line-height: 45.97rpx;
			padding: 0 15rpx;
			margin: 0 22rpx;
		}
		.header_ri_list{
			width: 47.22rpx;
			height: 33.33rpx;
		}
	}
}
.footer{
	max-width: 500px;
	margin: 0 auto;
	width: 100%;
	box-sizing: border-box;
	z-index: 99;
	position: fixed;
	bottom: 0;
	// height: 76.39rpx;
	background: rgba(0, 10, 77, .7) !important;
	padding: 10rpx 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	view{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
		text{
			font-size: 16.67rpx;
			color: #C9C9C9;
		}
		
		// image{
		// 	width: 28.47rpx;
		// 	height: 28.47rpx;
		// 	margin-bottom: 8rpx;
		// }
	}
	.add{
		text{
			color: #09D0BE !important;
		}
	}
	.home{
		image{
			width: 28.47rpx;
			height: 29.47rpx;
			margin-bottom: 8rpx;
		}
	}
	.action{
		image{
			width: 23.61rpx;
			height: 29.86rpx;
			margin-bottom: 8rpx;
		}
	}
	.inbox{
		image{
			width: 31.25rpx;
			height: 24.31rpx;
			margin-bottom: 8rpx;
		}
	}
	.account{
		image{
			width: 27.08rpx;
			height: 28.54rpx;
			margin-bottom: 8rpx;
		}
	}
}

.acc{
	width: 100%;
	height: 100%;
	background: url('./static/my/loginbg.png') no-repeat;
	background-size: cover;
	overflow-y: auto;
}
.login_from{
	width: 100%;
	padding: 0 97.22rpx;
	box-sizing: border-box;
	.mt65{
		margin-top: 65.28rpx;
	}
	
}
.login_from_box{
	background: #001037;
	border-radius: 41.67rpx;
	height: 83.33rpx;
	color: #fff;
	position: relative;
	.login_from_box_pl{
		font-size: 30rpx;
		margin-left: 10rpx;
		color: #485179;
	}
	image{
		width: 34.03rpx;
		height: 22.92rpx;
		position: absolute;
		right: 30rpx;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	.newCode{
		position: absolute;
		right: 15px;
		top: 50%;
		transform: translate(0%, -50%);
		font-size: 30rpx;
	}
	.add{
		width: 33.33rpx;
		height: 33.33rpx;
	}
	input{
		height: 100%;
		width: 100%;
		padding-left: 40rpx;
		font-size: 30rpx;
		box-sizing: border-box;
	}
	
}

.back-to-top{
	position: fixed;
	right: 40rpx;
	bottom: 300rpx;
	width: 95.83rpx;
	height: 95.83rpx;
	z-index: 999;
	image{
		width: 100%;
		height: 100%;
	}
}
.acc_bg{
	background: url('./static/my/topfu.png') no-repeat;
	background-size: cover;
	margin: 70rpx 6px 8px !important;
}
@media screen and (max-width: 490px) {
  .team_top{
	  position: absolute !important;
  }
}
.blur{
	background: rgba(0, 25, 126, 0.5); /* 半透明背景 */
	backdrop-filter: blur(10px); /* 毛玻璃效果 */
	-webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
}
.team_top{
	width: 100%;
	max-width: 500px;
	display: flex;
	align-items: center;
	height: 83.89rpx;
	padding: 0 24rpx;
	box-sizing: border-box;
	background: rgba(0, 0, 0, .5);
	justify-content: space-between;
	font-size: 33.33rpx;
	position: fixed;
	top: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	z-index: 99999;
	view{
		text-align: center;
		// flex: 1;
	}
	.team_top_le{
		width: 35rpx;
		svg{
			width: 35rpx;
			height: 35rpx;
		}
	}
	
	.team_x{
		width: 35rpx;
	}
}

.dload{
	// margin: 20rpx 15rpx;
	padding: 60rpx 40rpx;
	box-sizing: border-box;
	background: url('./static/index/dowload.png') no-repeat 100% 100%;
	background-size: cover;
	background-position: center;
	// height: 903.47rpx;
	color: #fff;
	.dload_text{
		font-weight: 500;
		font-size: 38rpx;
		image{
			width: 45.14rpx;
			height: 37.5rpx;
			margin-right: 5rpx;
		}
	}
	.dload_text1{
		font-size: 29rpx;
		padding: 30rpx 0 50rpx;
	}
	.dload_text2{
		font-weight: 500;
		font-size: 38rpx;
		image{
			width: 42.36rpx;
			height: 28.47rpx;
			margin-right: 5rpx;
		}
	}
	.dload_text3{
		padding: 35rpx 0 0;
		font-weight: 500;
		font-size: 38rpx;
		image{
			width: 31.25rpx;
			height: 31.25rpx;
			margin-right: 5rpx;
		}
	}
	.dload_text4{
		font-size: 29rpx;
		padding: 30rpx 0 0;
	}
	.dload_btn{
		box-sizing: border-box;
		background: #F5AE18;
		border-radius: 5.56rpx;
		height: 88.89rpx;
		text-align: center;
		line-height: 88.89rpx;
	}
	.dload_web{
		display: flex;
		margin: 40rpx 0 50rpx;
		justify-content: space-around;
		image{
			width: 262.5rpx;
			height: 87.5rpx;
		}
	}


}
.ftr{
	background: url('./static/index/footer.png') no-repeat;
	background-size: cover;
	height: 500rpx;
	display: flex;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
	color: #fff;
	.ftr_logo{
		width: 140.28rpx;
		height: 54.86rpx;
		margin: 78rpx 0 47rpx;
	}
	.ftr_text{
		padding: 0 50rpx;
		font-size: 22rpx;
		line-height: 33rpx;
		text-align: center;
	}
}



.x{
	width: 26.39rpx;
	height: 26.39rpx;
}
.f{
	width: 32.64rpx;
	height: 32.64rpx;
}
.y{
	width: 38.89rpx;
	height: 27.78rpx;
}
.i{
	width: 33.33rpx;
	height: 32.64rpx;
}
.d{
	width: 27.08rpx;
	height: 31.25rpx;
}
.z{
	width: 57.64rpx;
	height: 20.83rpx;
}
</style>
