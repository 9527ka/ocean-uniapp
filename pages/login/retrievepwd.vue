<template>
	<view class="content">
		<view class="team_top">
			<view class="team_top_le" @click="toBack()">
				<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
			</view>
			<view>{{ $t('login.repwd') }}</view>
			<text class="team_x"></text>
		</view>
		<view class="retrievepwd">
			<view class="retrievepwd_title">{{ $t('login.repwd') }}</view>
			<view class="login_from">
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl" 
						:placeholder="$t('login.email')"
						v-model="email"
					/>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl" 
						:placeholder="$t('login.name')"
						v-model="account"
					/>
				</view>
				
			</view>
			<view class="retrievepwd_btn" @click="onRepwd">
				<view>{{ $t('login.repwd') }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				email: '',
				account: '',
			};
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			onRepwd(){
				let { email, account } = this
				if( !email || !account) return
				request('login/retrieve_pwd',"POST",{
					email,
					account
				}).then(res=>{
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						mask: true,
						icon: "none"
					});
					
					setTimeout(()=>{
						this.toBack()
					},2000)
				})
			}
		}
	}
</script>

<style lang="scss">
.retrievepwd{
	width: 100%;
	height: 100%;
	background: url('../../static/my/loginbg.png') no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	align-items: center;
	.retrievepwd_title{
		margin-bottom: 40rpx;
		font-size: 33.33rpx;
		font-weight: bold;
	}
	.mt30{
		margin-top: 30rpx;
	}
	.retrievepwd_btn{
		width: 100%;
		padding: 0 97.22rpx;
		box-sizing: border-box;
		color: #fff;
		view{
			text-align: center;
			line-height: 88.89rpx;
			margin: 73rpx 0 0;
			border-radius: 44.44rpx;
			background: #9137C1;
			height: 88.89rpx;
			width: 100%;
			font-weight: bold;
			font-size: 42rpx;
		}
	}
}
</style>
