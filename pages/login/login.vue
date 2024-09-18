<template>
	<view class="content header">
		<view class="header_ri">
		<view class="header_ri_lang" @click="toPage('/pages/account/lang')">
			<image :src="require(`../../static/lang/${langUrl || 'English'}.png`)" mode=""></image>
			<text>{{lang || 'English'}}</text>
			<svg t="1722838597937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5086" width="200" height="200"><path d="M246.784 336.457143h530.432a14.628571 14.628571 0 0 1 12.214857 22.674286l-265.289143 397.897142a14.628571 14.628571 0 0 1-24.283428 0L234.569143 359.131429a14.628571 14.628571 0 0 1 12.214857-22.674286z" p-id="5087" fill="#ffffff"></path></svg>
		</view>
		</view>
		<view class="login">
			<image @click="toBack('/pages/tabs/home')" class="login_logo" src="../../static/my/loginLogo.png" mode=""></image>
			<view class="login_from">
				<view class="login_from_box">
					<input 
						placeholder-class= "login_from_box_pl"
						focus 
						:placeholder="$t('login.name')"
						v-model="account"
					/>
				</view>
				
				<view class="login_from_box mt65">
					<input 
						placeholder-class= "login_from_box_pl" 
						:placeholder="$t('login.pwd')"
					    v-model="password"
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
			<view class="login_btn" @click="onLogin()">
				<view>{{ $t('login') }}</view>
				<!-- Log in -->
			</view>
			<view class="login_acc_psw">
				<text @click="toBack('/pages/login/reg')">{{ $t('login.reg') }}</text>
				<text @click="toBack('/pages/login/retrievepwd')">{{ $t('login.repwd') }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				lang: 'English',
				langUrl: 'English',
				account: '',
				password: '',
				ispwd: true,
			};
		},
		onShow(){
			this.lang = uni.getStorageSync('langName');
			this.langUrl = uni.getStorageSync('langUrl');
		},
		methods: {
			toPage(name,data){
				data = 'act=/pages/login/login'
				uni.navigateTo({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			toBack(name){
				uni.navigateTo({
					url: `${name}`
				});
			},
			onLogin(){
				let { account, password } = this
				request('login/account','POST',{
					account,
					password
				}).then(res=>{
					uni.showToast({
						title: this.$t('login.login'),
						icon: 'none'
					});
					const { token } = res.data.data
					uni.setStorageSync('token', token);
					uni.setStorageSync('account', res.data.data);
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
.header_ri{
	position: fixed;
	right: 10px;
	top: 30px;
}
.login{
	width: 100%;
	height: 100%;
	background: url('../../static/my/loginbg.png') no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.login_logo{
		width: 173.61rpx;
		height: 183.33rpx;
		margin-bottom: 102.08rpx;
	}
	.login_btn{
		width: 100%;
		padding: 0 97.22rpx;
		box-sizing: border-box;
		color: #fff;
		view{
			text-align: center;
			line-height: 88.89rpx;
			margin: 158.33rpx 0 64rpx;
			border-radius: 44.44rpx;
			background: #9137C1;
			height: 88.89rpx;
			width: 100%;
			font-weight: bold;
			font-size: 42rpx;
		}
	}
	.login_acc_psw{
		width: 100%;
		padding: 0 97.22rpx;
		box-sizing: border-box;
		color: #BCBCBC;
		font-size: 25rpx;
		display: flex;
		align-items: center;
		justify-content: space-around;
		text{
			text-decoration: underline;
		}
	}
}
</style>
