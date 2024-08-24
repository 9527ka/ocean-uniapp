<template>
	<view class="content">
		<view class="team_top">
			<view class="team_top_le" @click="toBack()">
				<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
			</view>
			<view>{{ $t('login.register') }}</view>
			<text class="team_x"></text>
		</view>
		<view class="register">
			<view class="register_title">Welcome to register</view>
			<view class="login_from">
				<view class="login_from_box">
					<input 
						placeholder-class= "login_from_box_pl"
						focus 
						:placeholder="$t('login.name')"
						v-model="from.account"
					/>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl"
						:placeholder="$t('login.pwd')"
						v-model="from.password"
						:password="ispwd"
					/>
					<image 
						:src="!ispwd ? require('../../static/my/pwd.png') : require('../../static/my/pwd_a.png')" 
						mode=""
						@click="ispwd = !ispwd"
						:class="ispwd ? 'add' : ''"
					></image>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl"
						:placeholder="$t('login.conpwd')"
						v-model="from.password_confirm"
						:password="iscnfpwd"
					/>
					<image 
						:src="!iscnfpwd ? require('../../static/my/pwd.png') : require('../../static/my/pwd_a.png')" 
						mode=""
						@click="iscnfpwd = !iscnfpwd"
						:class="iscnfpwd ? 'add' : ''"
					></image>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl"
						:placeholder="$t('login.funame')"
						v-model="from.full_name"
					/>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl" 
						:placeholder="$t('login.phone')"
						v-model="from.phone_number"
					/>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl"
						:placeholder="$t('login.email')"
						v-model="from.email"
					/>
					<!-- <image
						@click="onEmail"
						:src="require('../../static/my/emaile.png')" 
						mode=""
					></image> -->
					<view class="newCode" @click="onEmail">
						<!-- Get Code -->
						{{ $t('login.getCode') }}
					</view>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl"
						:placeholder="$t('login.code')"
						v-model="from.code"
					/>
				</view>
				
				<view class="login_from_box mt30">
					<input 
						placeholder-class= "login_from_box_pl" 
						:placeholder="$t('login.incode')"
						v-model="from.invitation_code"
					/>
				</view>
				
			</view>
			<view class="register_btn" @click="onRegister()">
				<view>{{ $t('login.register') }}</view>
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
				iscnfpwd: true,
				
				from: {
					account: '',
					password: '',
					password_confirm: '',
					full_name: '',
					phone_number: '',
					email: '',
					channel: 1,
					code: '',
					invitation_code: '',
				}
			};
		},
		onLoad(options) {
			this.from.invitation_code = options?.code || ''
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			async onRegister(){
				let { from } = this
				console.log(from)
				await request('login/register', 'POST',{
					...from
				}).then(res=>{
					uni.showToast({
						title: res.data.msg,
						duration: 2000,
						mask: true,
						icon: "none"
					});
					
					setTimeout(()=>{
						this.toBack()
					},1000)
				})
			},
			onEmail() {
				let { email } = this.from
				if(email){
					request('login/sendCode', 'POST',{email}).then(res=>{
						uni.showToast({
							title: res.data.msg,
							duration: 2000,
							mask: true,
							icon: "none"
						});
					})
				}else{
					uni.showToast({	
						title: this.$t('login.emailx'),
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
				}
			}
		}
		
	}
</script>

<style lang="scss">
.register{
	width: 100%;
	height: 100%;
	background: url('../../static/my/loginbg.png') no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	color: #fff;
	align-items: center;
	.register_title{
		margin-bottom: 40rpx;
		font-size: 33.33rpx;
		font-weight: bold;
	}
	.mt30{
		margin-top: 30rpx;
	}
	.register_btn{
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
