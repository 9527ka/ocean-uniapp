<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.v') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="Version acc_bg flex">
				<view class="Version_title">
					{{ $t('acc.v1') }}
				</view>
				<view class="Version_body">
					<text>{{ $t('acc.v2') }} {{version}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: 'V1.8.3'
			};
		},
		onLoad(){
			let data = uni.getStorageSync('User')
			this.version = data.version
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
.Version{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 16.67rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.Version_title{
		font-weight: bold;
	}
	.Version_body{
		width: 100%;
		padding: 60rpx 0;
		font-size: 26rpx;
		text-align: left;
		margin-left: 50rpx;
	}
}
</style>
