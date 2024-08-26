<template>
	<scroll-view  class="content" scroll-y :scroll-top= "scrollTop" scroll-with-animation @scroll="handleScroll">
		<view :class="isHeader ? 'header flex blur' : 'header flex' ">
			<image class="header_le" src="../../static/logo.png" mode=""></image>
			<view class="header_ri">
				<view class="header_ri_lang" @click="toPage('/pages/account/lang')">
					<image :src="require(`../../static/lang/${langUrl || 'English'}.png`)" mode=""></image>
					<text>{{lang || 'English'}}</text>
					<svg t="1722838597937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5086" width="200" height="200"><path d="M246.784 336.457143h530.432a14.628571 14.628571 0 0 1 12.214857 22.674286l-265.289143 397.897142a14.628571 14.628571 0 0 1-24.283428 0L234.569143 359.131429a14.628571 14.628571 0 0 1 12.214857-22.674286z" p-id="5087" fill="#ffffff"></path></svg>
				</view>
				<view class="header_ri_user" @click="toPage('/pages/tabs/account')">User Center</view>
				<image @click="toPage('/pages/home/nav','nav=HOME')" class="header_ri_list" src="../../static/index/list.png" mode=""></image>
			</view>
		</view>
		
		<view id="top" class="top"></view>
		<view class="about_text">
			<view class="about_text_sa">
				<text>{{ $t('home.home')}}</text> {{ $t('home.mar1') }}
			</view>
			<view class="about_app flex">
				<Webto />
			</view>
		
			
			<!-- <view class="mar_text">
				{{ $t('home.mar2') }}
			</view> -->
		</view>
		
		<view class="about_div" v-html="formattedContent" />
		
		<!-- <view class="join_P">
			<text>{{ $t('home.mar3') }}</text>
			<view>
				{{ $t('home.mar4') }}
			</view>
			<view>
				{{ $t('home.mar5') }}
			</view>
			<view>
				{{ $t('home.mar6') }}
			</view>
			<view>
				{{ $t('home.mar7') }}
			</view>
			<view>
				{{ $t('home.mar8') }}
			</view>
		</view>
		
		
		<view class="join_P">
			<view>
				{{ $t('home.mar9') }}
			</view>
		</view>
		
		<view class="join_P">
			<text>{{ $t('home.mar10') }}</text>
			<view>{{ $t('home.mar11') }}</view>
			<view>{{ $t('home.mar12') }}</view>
			<view>{{ $t('home.mar13') }}</view>
			<view>{{ $t('home.mar14') }}</view>
		</view>
		
		<view class="join_P">
			<view>{{ $t('home.mar15') }}</view>
		</view>
		
		<view class="join_P">
			<text>{{ $t('home.mar16') }}</text>
			<view>{{ $t('home.mar17') }}</view>
			<view>{{ $t('home.mar18') }}</view>
			<view>{{ $t('home.mar19') }}</view>
			<view>{{ $t('home.mar20') }}</view>
		</view>
		
		<view class="join_P">
			<view>{{ $t('home.mar21') }}</view>
		</view>
		
		<view class="mar_p">{{ $t('home.mar22') }}</view> -->
		
		
	
		<view class="dload">
			<view class="dload_text">
				<image src="../../static/index/add.png" mode=""></image>
				<text>{{ $t('home.join') }}</text>
			</view>
			<view class="dload_text1">
				{{ $t('home.sign1') }}
			</view>
			
			<view class="dload_text2">
				<image src="../../static/index/emaill.png" mode=""></image>
				<text>
					{{ $t('home.sign2') }}
				</text>
			</view>
			<view class="dload_text1">
				{{ $t('home.sign3') }}
			</view>
			
			<view class="dload_btn" @click="goSignUp">
				{{ $t('home.signup') }}
			</view>
			
			<view class="dload_text3">
				<image src="../../static/index/pload.png" mode=""></image>
				<text>{{ $t('home.app') }}</text>
			</view>
			<view class="dload_text4">
				{{ $t('home.app1') }}
			</view>
			
			<view class="dload_web">
				<image src="../../static/index/ios.png" mode=""></image>
				<image src="../../static/index/google.png" mode=""></image>
			</view>
		</view>
		<view class="ftr">
			<image class="ftr_logo" src="../../static/index/footer_logo.png" mode=""></image>
			<view class="ftr_text">{{ $t('home.apptext') }}</view>
		</view>
		
		<view class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
			<image src="../../static/index/to-top.png" mode=""></image>
		</view>
		<view class="footer blur">
			<image @click="toLaunch('/pages/tabs/home')" class="home" src="../../static/tab/Home_a.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inaction')" class="action" src="../../static/tab/Action.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inbox')" class="inbox" src="../../static/tab/Inbox.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/account')" class="account" src="../../static/tab/Account.png" mode=""></image>
		</view>
	</scroll-view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				isHeader: false,
				showBackToTop: false,
				scrollTop: 0,
				
				lang: 'English',
				langUrl: 'English',
				
				Animals: [],
				content: ''
			};
		},
		onLoad(options) {
			this.getText()
			const userStr = decodeURIComponent(options.data);
			const userInfo = JSON.parse(userStr);
			this.Animals = userInfo
		},
		onShow(){
			this.lang = uni.getStorageSync('langName');
			this.langUrl = uni.getStorageSync('langUrl');
		},
		computed: {
		    formattedContent() {
		      if (this.content) {
		              return this.content.replace(/<img/g, '<img style="width:100%;margin: 10px 0;height:auto;display:block;"');
				} else {
				  return ''; // 如果 content 为空，返回一个空字符串
				}
		    }
		},
		methods: {
			goSignUp(){
				uni.navigateTo({
					url: '/pages/login/reg'
				});
			},
			handleScroll(e) {
				this.isHeader =  e.detail.scrollTop > 0
				this.showBackToTop = e.detail.scrollTop > 300;
			},
			scrollToTop() {
				this.scrollTop = 1;
				this.$nextTick(() =>{
					this.scrollTop = 0
				});
			},
			toPage(name,data){
				uni.navigateTo({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			toLaunch(name,data){
				uni.reLaunch({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			getText(){
				request('home/config','GET', {key: 'ocean'}).then(res=>{
					this.content = res.data.data.content
				})
			},
		},
	}
</script>

<style lang="scss">
.about_div{
	padding: 40rpx;
}
.top{
	background: url('../../static/home/mar.png') no-repeat;
	background-size: cover;
	height: 795.14rpx;
}
.about_text{
	background: url('../../static/my/topfu.png') no-repeat;
	background-size: cover;
	// height: 834.72rpx;
	margin: -200rpx 16rpx 10rpx;
	box-sizing: border-box;
	padding: 0 20rpx 20rpx;
	.about_text_sa{
		color: #16BA5F;
		text{
			text-decoration: underline;
			margin-right: 10rpx;
		}
	}
	.about_app{
		align-items: center;
		justify-content: flex-end;
		padding: 10rpx 0;
		image{
			margin-left: 30rpx;
		}
	}
	.about_text_p{
		padding: 40rpx 18rpx 50rpx;
		font-size: 29.17rpx;
		line-height: 42rpx;
	}
	.mar_text{
		font-size: 29.17rpx;
		line-height: 42rpx;
		font-weight: 400;
		padding: 70rpx 30rpx 50rpx;
	}
}

.join_P{
	padding: 40rpx;
	text{
		font-size: 31.94rpx;
		color: #16BA5F;
	}
	view{
		padding: 33rpx 10rpx 40rpx;
		font-size: 29.17rpx;
	}
}
.mar_p{
	padding: 40rpx 40rpx 50rpx;
	color: #00FFF6;
	font-size: 29.17rpx;
}

</style>
