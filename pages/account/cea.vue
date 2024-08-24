<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.acc1') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="team_body acc_bg">
				<text>{{ $t('acc.acc1') }}</text>
				<view class="team_body_inp">
					<text>Password:</text>
					<view class="login_from_box mt65">
						<input 
							placeholder-class= "login_from_box_pl"
							focus 
							:placeholder="$t('acc.acc2')"
							:value="Password"
							:password="ispwd"
						/>
						<image 
							:src="!ispwd ? require('../../static/my/pwd.png') : require('../../static/my/pwd_a.png')" 
							mode=""
							@click="ispwd = !ispwd"
							:class="ispwd ? 'add' : ''"
						></image>
					</view>
				</view>
				<view class="team_body_text">
					{{ $t('acc.acc3') }}
				</view>
			</view>
			
			<view class="team_btn" @click="onCea()">{{ $t('acc.acc4') }}</view>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				Password: '',
				ispwd: false,
			};
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			onCea() {
				let { Password } = this
				request('user/logout','POST',{
					Password
				}).then(res=>{
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						mask: true,
						icon: "none"
					});
					setTimeout(()=>{
						uni.redirectTo({
							url: '/pages/tabs/account'
						});
					},1000)
				})
			}
		}
	}
</script>

<style lang="scss">

.team_body{
	// height: 500rpx;
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 50rpx;
	font-size: 33.33rpx;
	.team_body_inp{
		margin: 65rpx 0;
		.login_from_box{
			border-radius: 13.89rpx;
			margin-top: 30rpx;
		}
		.login_from_box_pl{
			margin-left: 15rpx;
		}
	}
	.team_body_text{
		font-size: 31.94rpx;
		color: #F5AE18;
	}
	
}
.team_btn{
	margin: 87rpx 134rpx;
	background: #9137C1;
	height: 88.89rpx;
	text-align: center;
	line-height: 88.89rpx;
	border-radius: 5.56rpx;
}
</style>
