<template>
	<view class="Webto">
		<image @click="toWeb('https://x.com/i/flow/login')" class="x" src="../static/index/x.png" mode=""></image>
		<image @click="toWeb('https://www.facebook.com')" class="f" src="../static/index/f.png" mode=""></image>
		<image @click="toWeb('https://www.youtube.com')" class="y" src="../static/index/y.png" mode=""></image>
		<image @click="toWeb('https://www.instagram.com')" class="i" src="../static/index/i.png" mode=""></image>
		<image @click="toWeb('https://www.tiktok.com/en')" class="d" src="../static/index/d.png" mode=""></image>
		<image @click="toWeb('https://zalo.me')" class="z" src="../static/index/z.png" mode=""></image>
	</view>
</template>

<script>
	export default {
		name:"Webto",
		data() {
			return {
				
			};
		},
		methods: {
			toWeb(url){
				// uni.navigateTo({
				//   url: '/pages/home/webview?url=' + encodeURIComponent(url)
				// });
				window.open(url, '_blank');
			},
		}
	}
</script>

<style lang="scss">
.Webto{
	display: inline-block;
	margin-left: 10rpx;
	image{
		margin-right: 30rpx;
	}
}
</style>