<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>AI</view>
				<text class="team_x"></text>
			</view>
			
			<view class="ai acc_bg">
				<view class="ai_box">
					<image src="../../static/home/jqr.png" mode=""></image>
					<view class="ai_box_text">
						Currently only USDT (Trc20) transactions are available.
						After transferring, you mustreturn to the previous page(card details) to upload a
						transaction screenshot tocomplete the payment!
					</view>
				</view>
				
				<view class="ai_box">
					<image src="../../static/home/jqr.png" mode=""></image>
					<view class="ai_box_text">
						Shipping address (copy the address below)
						<!-- {{ aiList[1].value }} -->
					</view>
				</view>
				
				<view class="ai_box">
					<image src="../../static/home/jqr.png" mode=""></image>
					<view class="ai_box_text">
						<p>{{ content }}</p>
						<image @click="copyText" src="../../static/home/fuzhi.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		request,
	} from '@/api/index';
	export default {
		data() {
			return {
				content: ''
			};
		},
		onLoad(){
			this.getAi()
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			getAi(){
				request('home/config','GET', {key: 'address'}).then(res=>{
					this.content = res.data.data.content
				})
			},
			copyText(){
				let that = this
				uni.setClipboardData({
					data: this.content,
					success() {
						uni.showToast({
							title: that.$t('copyC'),
							icon: 'none',
							duration: 2000,
						});
					},
					fail() {
						uni.showToast({
							title: that.$t('copyS'),
							icon: 'none',
							duration: 2000,
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.ai{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 40rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.ai_box{
		display: flex;
		margin-bottom: 40rpx;
		image{
			width: 88.19rpx;
			height: 88.19rpx;
			margin-right: 5rpx;
			flex: 0 0 auto;
		}
		.ai_box_text{
			flex: 1;
			border: 1rpx solid #00149A;
			padding: 43rpx 25rpx;
			box-sizing: border-box;
			border-radius: 29.86rpx;
			background: rgba(0, 0, 0, .3);
			font-size: 25rpx;
			image{
				float: right;
				width: 27.78rpx;
				height: 27.78rpx;
				margin-top: 5rpx;
				flex: 0 0 auto;
			}
		}
	}
}
</style>
