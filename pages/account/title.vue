<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.title') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="title_body acc_bg flex">
				<view class="title_body_top flex">
					<image class="title_body_top_le" src="../../static/my/xunz.png" mode=""></image>
					<view class="title_body_top_ri">
						<text>{{ $t('acc.title1') }}</text>
						<view>{{ $t('acc.title2') }}</view>
					</view>
				</view>
				
				<view class="title_body_num flex">
					<view class="title_body_num_box">
						<text>{{ $t('acc.title3') }}</text>
						<view>{{ User.share_daily || 0}}</view>
					</view>
					
					<view class="title_body_num_box">
						<text>{{ $t('acc.title4') }}</text>
						<view>{{ User.invite_partners || 0}}</view>
					</view>
					
					<view class="title_body_num_box">
						<text>{{ $t('acc.title5') }}</text>
						<view>{{ User.points || 0}}</view>
					</view>
				</view>
			</view>
			
			<view class="title_text">
				<text>{{ $t('acc.title6') }}</text>
				<view class="title_text_P">
					<p>{{ $t('acc.title7') }}</p>
					<p>{{ $t('acc.title8') }}</p>
					<p>{{ $t('acc.title9') }}</p>
					<p>{{ $t('acc.title10') }}</p>
					<p>{{ $t('acc.title11') }}</p>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				User: {}
			}
		},
		onLoad() {
			this.User = uni.getStorageSync('User')
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
		}
	}
</script>

<style lang="scss">
.title_body{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 16.67rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.title_body_top{
		padding: 0 60rpx;
		width: 100%;
		box-sizing: border-box;
		.title_body_top_le{
			width: 141.67rpx;
			height: 159.03rpx;
			margin-right: 95rpx;
		}
		.title_body_top_ri{
			flex: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			font-size: 33.33rpx;
			view{
				font-size: 41.67rpx;
				color: #F5AE18;
				font-weight: bold;
			}
		}
	}
	.title_body_num{
		width: 100%;
		margin: 30rpx 16.67rpx 0;
		border-radius: 13.89rpx;
		background: #00106C;
		padding: 40rpx 0;
		box-sizing: border-box;
		.title_body_num_box{
			flex: 1;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			font-size: 29.17rpx;
			view{
				font-size: 69.44rpx;
				margin-top: 40rpx;
				font-weight: bold;
				color: #04F0FF;
			}
		}
	}
}
.title_text{
	margin: 60rpx 36rpx;
	font-size: 31.94rpx;
	color: #16BA5F;
	.title_text_P{
		line-height: 42rpx;
		padding: 45rpx 15rpx;
		font-size: 26.39rpx;
		color: #fff;
	}
}
</style>
