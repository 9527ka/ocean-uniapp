<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.lang1') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="lang acc_bg">
				<view class="lang_box"
					v-for="el in langList" 
					:key="el.name"
					@click="setLang(el)"
				>
					<image :src="el.url" mode=""></image>
					<text>{{el.name}}</text>
				</view>
			</view>
			
			<view style="height: 100rpx;"></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				langList: [
					{
						url: require('../../static/lang/English.png'),
						name: 'English',
						lang: 'en',
						langName: 'English'
					},
					{
						url: require('../../static/lang/Tieng.png'),
						name: 'Tiêng Viêt',
						lang: 'ti',
						langName: 'Tieng'
					},
					{
						url: require('../../static/lang/France.png'),
						name: 'Français',
						lang: 'fa',
						langName: 'France'
						
					},
					{
						url: require('../../static/lang/Hindi.png'),
						name: 'हिंदी भाषा',
						lang: 'hd',
						langName: 'Hindi'
					},
					{
						url: require('../../static/lang/korean.png'),
						name: '한국어',
						lang: 'ko',
						langName: 'korean'
					},
					{
						url: require('../../static/lang/Thai.png'),
						name: 'ภาษาไทย',
						lang: 'ta',
						langName: 'Thai'
					},
					{
						url: require('../../static/lang/IndonesiaName.png'),
						name: 'Bahasa Indonesia',
						lang: 'in',
						langName: 'IndonesiaName'
					},
					{
						url: require('../../static/lang/Japan.png'),
						name: '日本語',
						lang: 'ja',
						langName: 'Japan'
					},
				]
			};
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			setLang(v) {
				uni.setStorageSync('lang', v.lang)
				uni.setStorageSync('langName', v.name)
				uni.setStorageSync('langUrl', v.langName)
				this.$newLang(v.lang);
				uni.reLaunch({
					url: `/pages/tabs/home`
				});
			}
		}
	}
</script>

<style lang="scss">
.lang{
	margin: 20rpx 16rpx 0;
	box-sizing: border-box;
	padding: 70rpx 16.67rpx;
	font-size: 33.33rpx;
	display: flex;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
	.lang_box{
		width: 447.92rpx;
		height: 88.89rpx;
		background: #9137C1;
		border-radius: 5.56rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 70rpx;
		padding: 0 80rpx;
		box-sizing: border-box;
		image{
			width: 81.25rpx;
			height: 54.17rpx;
			margin-right: 25rpx;
			flex: 0 0 auto;
		}
		text{
			flex: 1;
		}
	}
}
</style>
