<template>
	<view class="content">
		<view class="header">
			<image class="header_logo" src="../../static/navLogo.png" mode=""></image>
			<image @click="toBack" class="header_x" src="../../static/home/guanbi.png" mode=""></image>
		</view>
		
		<view class="navList">
			<view 
				class="navList_box" 
				v-for="el in nav" 
				:key="el.name"
				@click="toLaunch(el.url)"
			>
				{{el.name}}
			</view>
		</view>
		
		<view class="about">
			<view class="about_text">
				{{ $t('home.nav') }}
			</view>
			<view class="about_btn" @click="toLaunch('/pages/home/join')">
				{{ $t('home.text3') }}
			</view>
			<view class="about_app">
				{{ $t('home.text4') }}
				<Webto />
			</view>
		</view>
		
		<view style="height: 50rpx;" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nav: [
					{
						name: this.$t('home.navhome'),
						url: '/pages/tabs/home'
					},
					{
						name: this.$t('home.navabout'),
						url: '/pages/home/about'
					},
					{
						name: this.$t('home.navam'),
						url: '/pages/home/american'
					},
					{
						name: this.$t('home.navjoin'),
						url: '/pages/home/join'
					},
					{
						name: this.$t('home.navend'),
						url: '/pages/home/end'
					},
					{
						name: this.$t('home.navmar'),
						url: '/pages/home/mar'
					},
				],
				// active: 'HOME'
			};
		},
		onLoad: function (option) {
			option ? this.active = option.nav : ''
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			toLaunch(name){
				uni.reLaunch({
					url: `${name}`
				});
			},
		}
	}
</script>

<style lang="scss">
.header{
	display: flex;
	position: static;
	padding: 38rpx 15rpx 60rpx;
	.header_logo{
		width: 111.11rpx;
		height: 43.75rpx;
	}
	.header_x{
		width: 40.28rpx;
		height: 40.28rpx;
	}
}
.navList{
	padding: 0 15rpx;
	color: #fff;
	.navList_box{
		width: 100%;
		height: 90.97rpx;
		background: #152676;
		border: #020202 1rpx solid;
		border-top: none;
		padding-left: 34rpx;
		line-height: 90.97rpx;
		box-sizing: border-box;
	}
	.navList_box:nth-child(1){
		border-top: #020202 1rpx solid;
	}
	.navList_box:hover{
		background: #0022C4;
	}
	.add{
		background: #0022C4 !important;
	}
}

.about{
	color: #fff;
	margin: 18rpx 15rpx;
	background: #021A7E;
	// height: 200px;
	padding: 40rpx 30rpx;
	font-size: 32rpx;
	.about_btn{
		height: 88.89rpx;
		padding: 0 38rpx;
		background: #9137C1;
		box-sizing: border-box;
		border-radius: 5.56rpx;
		text-align: center;
		line-height: 88.89rpx;
		margin: 47rpx 0 35rpx;
	}
	.about_app{
		color: #C14EFF;
		image{
			width: 26.39rpx;
			height: 26.39rpx;
			margin-left: 15rpx;
		}
	}
}
</style>
