<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.cpwd') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="cpwd acc_bg">
				<view class="cpwd_title">
					{{ $t('acc.cpwd1') }}
				</view>
				<view class="cpwd_inp">
					<text>{{ $t('acc.cpwd2') }}</text>
					<view class="login_from_box mt65">
						<input 
							placeholder-class= "login_from_box_pl"
							focus 
							:placeholder="$t('acc.cpwd3')"
							v-model="old_password"
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
				
				<view class="cpwd_inp">
					<text>{{ $t('acc.cpwd4') }}</text>
					<view class="login_from_box mt65">
						<input 
							placeholder-class= "login_from_box_pl"
							:placeholder="$t('acc.cpwd5')"
							v-model="new_password"
							:password="isNewpwd"
						/>
						<image 
							:src="!isNewpwd ? require('../../static/my/pwd.png') : require('../../static/my/pwd_a.png')" 
							mode=""
							@click="isNewpwd = !isNewpwd"
							:class="isNewpwd ? 'add' : ''"
						></image>
					</view>
				</view>
				
				<view class="cpwd_inp">
					<text>{{ $t('acc.cpwd6') }}</text>
					<view class="login_from_box mt65">
						<input 
							placeholder-class= "login_from_box_pl"
							:placeholder="$t('acc.cpwd7')"
							v-model="password_confirm"
							:password="isCpwd"
						/>
						<image 
							:src="!isCpwd ? require('../../static/my/pwd.png') : require('../../static/my/pwd_a.png')" 
							mode=""
							@click="isCpwd = !isCpwd"
							:class="isCpwd ? 'add' : ''"
						></image>
					</view>
				</view>
			</view>
		
			<view class="cpwd_btn" @click="onChangePwd()">
				<view>{{ $t('Confirm') }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				ispwd: true,
				isNewpwd: true,
				isCpwd: true,
				old_password: '',
				new_password: '',
				password_confirm: ''
			};
		},
		methods: {
			toBack(){
				const pages = getCurrentPages();
				if (pages.length > 1) {
					uni.navigateBack({delta: 1});
				}else{
					uni.reLaunch({url: '/pages/tabs/account'});
				}
			},
			onChangePwd() {
				let { old_password, new_password, password_confirm } = this
				request('user/changePassword','POST',{
					old_password,
					new_password,
					password_confirm
				}).then(res=>{
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						mask: true,
						icon: "none"
					});
					setTimeout(()=>{
						uni.reLaunch({url: '/pages/login/login'});
					},1500)
					this.old_password = ''
					this.new_password = ''
					this.password_confirm = ''
				})
			}
		}
	}
</script>

<style lang="scss">
.cpwd{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 40.67rpx 20rpx;
	font-size: 33.33rpx;
	.cpwd_title{
		font-weight: bold;
	}
	.cpwd_inp{
		margin: 65rpx 0;
		text{
			font-size: 29.17rpx;
		}
		.login_from_box{
			height: 63.89rpx;
			border-radius: 13.89rpx;
			margin-top: 30rpx;
			font-size: 12px;
		}
		.login_from_box_pl{
			margin-left: 15rpx;
		}
	}

}

.cpwd_btn{
	margin: 200rpx 150rpx 100rpx;
	height: 88.89rpx;
	background: #9137C1;
	border-radius: 5.56rpx;
	line-height: 88.89rpx;
	text-align: center;
}
</style>
