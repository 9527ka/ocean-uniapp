<template>
	<view class="content">
		<view class="accpage">
			<view class="accpage_title">
				<view  class="accpage_title_le flex">
					<image @click="onUpload" :src="User.avatar ? User.avatar : require('../../static/my/toux.png')" mode=""></image>
					<view>{{ User.account ? User.account : $t('login')}}</view>
				</view>
				<view class="accpage_title_ri flex">
					<view>
						{{ $t('acc.inv') }}
						<text>{{ User.icode ? User.icode : '*'}}</text>
					</view>
					<view>
						{{ $t('acc.invi') }}
						<text>{{ User.invite_partners ? User.invite_partners : '*'}}</text>
					</view>
				</view>
			</view>
			
			<view class="accpage_list">
				<view class="accpage_list_box flex"  @click="toPage('/pages/account/team')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/My Team@2x.png" mode=""></image>
						<text>{{ $t('acc.team') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<view class="accpage_list_box flex"  @click="toPage('/pages/account/title')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/My Title@2x.png" mode=""></image>
						<text>{{ $t('acc.title') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<view class="accpage_list_box flex" @click="toPage('/pages/account/card')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/My Card@2x.png" mode=""></image>
						<text>{{ $t('acc.card') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<view class="accpage_list_box flex" @click="toPage('/pages/account/changepwd')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/Change Password@2x.png" mode=""></image>
						<text>{{ $t('acc.cpwd') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<view class="accpage_list_box flex" @click="toPage('/pages/account/lang')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/Language@2x.png" mode=""></image>
						<text>{{ $t('acc.language') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<view class="accpage_list_box flex" @click="toPage('/pages/account/version')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/Version Introduction@2x.png" mode=""></image>
						<text>{{ $t('acc.v') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view>
				
				<!-- <view class="accpage_list_box flex"  @click="toPage('/pages/account/cea')">
					<view class="accpage_list_box_text">
						<image src="../../static/my/user/Delete Account@2x.png" mode=""></image>
						<text>{{ $t('acc.dacc') }}</text>
					</view>
					<svg t="1722913328067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4259" width="200" height="200"><path d="M300.032 884.736c-7.68 8.704-11.776 20.48-11.264 32.256 0.512 11.776 6.144 23.04 14.848 30.72 18.432 16.384 47.104 14.848 63.488-3.584l355.328-396.8c18.432-20.48 18.432-51.2 0-71.168L367.616 79.36c-16.384-18.432-45.056-19.968-63.488-3.584-8.704 7.68-14.336 18.944-14.848 30.72-0.512 11.776 3.584 23.552 11.264 32.256l333.824 372.736-334.336 373.248z" fill="#ffffff" p-id="4260"></path></svg>
				</view> -->
				
				<view class="accpage_list_btn" @click="toUser()">{{ $t('acc.signout') }}</view>
				<view style="height: 40rpx;"></view>
			</view>
			
		</view>
		<view class="footer blur">
			<image class="home" @click="toLaunch('/pages/tabs/home')" src="../../static/tab/Home.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inaction')" class="action" src="../../static/tab/Action.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inbox')" class="inbox" src="../../static/tab/Inbox.png" mode=""></image>
			<image class="account" src="../../static/tab/Account_a.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import { request, uploadImage } from '@/api/index';
	export default {
		data() {
			return {
				User: {}
			};
		},
		onShow(){
			this.getUser()
		},
		methods: {
			toLaunch(name,data){
				uni.reLaunch({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			toPage(name,data){
				uni.navigateTo({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			// 获取用户信息
			async getUser(){
				const token = uni.getStorageSync('token');
				// token && 
				await request('user/info', 'GET').then(res=>{
					this.User = res.data.data
					uni.setStorageSync('User', res.data.data);
				})
			},
			onUpload(){
				uni.chooseImage({
					count: 1,
					success: (res) => {
						const file = res.tempFilePaths
						file.forEach((filePath) => {
							this.uploadImg(filePath);
						});
					},
					fail: () => {
						uni.showToast({
							title: this.$t('sel'),
							icon: 'none',
							duration: 2000
						});
					}
				})
			},
			//
			uploadImg(filePath) {
				let that = this
				uploadImage(filePath).then(res=>{
					// res.data.uri
					request('user/setInfo', 'POST', {
						field: 'avatar',
						value: res.data.uri
					}).then(res=>{
						that.getUser()
					})
				})
			},
			toUser(){
				uni.removeStorageSync('token');
				uni.removeStorageSync('User');
				uni.removeStorageSync('account');
				this.toLaunch('/pages/tabs/home')
			}
		}
	}
</script>

<style lang="scss">
.accpage{
	width: 100%;
	height: 100%;
	background: url('../../static/my/my_bg.png') no-repeat;
	background-size: cover;
	overflow-y: auto;
	.accpage_title{
		margin: 0 16.67rpx;
		box-sizing: border-box;
		height: 372rpx;
		background: url('../../static/my/topfu.png') no-repeat;
		background-size: cover;
		.accpage_title_le{
			padding: 95rpx 50rpx 0;
			align-items: center;
			font-size: 41.67rpx;
			color: #fff;
			image{
				width: 153.47rpx;
				height: 153.47rpx;
				margin-right: 37.5rpx;
				border: 1rpx solid #121947;
				border-radius: 50%;
				overflow: hidden;
			}
		}
		.accpage_title_ri{
			color: #fff;
			padding: 38rpx 50rpx 0;
			font-size: 29.17rpx;
			align-items: center;
			justify-content: space-between;
			text{
				font-weight: bold;
				margin-left: 5px;
			}
		}
	}
	.accpage_list{
		margin: 26rpx 16.67rpx 200rpx;
		background: #011B7F;
		color: #fff;
		.accpage_list_box{
			margin: 0 25rpx;
			padding: 30rpx 30rpx;
			border-bottom: 1rpx #0034B8 solid;
			justify-content: space-between;
			align-items: center;
			.accpage_list_box_text{
				display: flex;
				align-items: center;
				image{
					width: 67.22rpx;
					height: 67.22rpx;
					margin-right: 38rpx;
				}
				font-size: 29rpx;
				font-weight: 400;
			}
			svg{
				width: 33.25rpx;
				height: 33.25rpx;
			}
		}
		.accpage_list_btn{
			margin: 81rpx 50rpx 0;
			height: 88.89rpx;
			background: #9137C1;
			border-radius: 5.56rpx;
			font-weight: 500;
			font-size: 33rpx;
			text-align: center;
			line-height: 88.89rpx;
		}
	}
}
</style>
