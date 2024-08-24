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
				<view class="header_ri_user" @click="toPage('/pages/tabs/account')">{{ $t('home.text1')}}</view>
				<image @click="toPage('/pages/home/nav','nav=HOME')" class="header_ri_list" src="../../static/index/list.png" mode=""></image>
			</view>
		</view>
		
		<view id="top" class="top"></view>
		<view class="about_text">
			<view class="about_text_sa">
				<text>{{ $t('home.home')}}</text>  {{ $t('home.end1') }}
			</view>
			<view class="about_app flex">
				<image src="../../static/index/x.png" mode=""></image>
				<image src="../../static/index/d.png" mode=""></image>
				<image src="../../static/index/f.png" mode=""></image>
				<image src="../../static/index/y.png" mode=""></image>
			</view>
			
			<view class="end_text">
				<p>{{ $t('home.end2') }}</p>
				<p>{{ $t('home.end4') }}</p>
				<p>{{ $t('home.end5') }}</p>
			</view>
		</view>
		
		<!-- <view class="end_Body" v-html="Animals.content">
			
		</view> -->
		<!-- formattedContent -->
		<view class="end_Body" v-html="formattedContent">
			
		</view>
		
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
			};
		},
		onLoad(options) {
			console.log(options)
			
			
			if(options?.id){
				if(options.type == 'animals'){
					this.getAnimalsDetail(options.id)
				}else if(options.type == 'news'){
					this.getNewsDetail(options.id)
				}
				return
			}
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
		      if (this.Animals.content) {
		              return this.Animals.content.replace(/<img/g, '<img style="width:100%;margin: 10px 0;height:auto;display:block;"');
				} else {
				  return ''; // 如果 content 为空，返回一个空字符串
				}
		    }
		},
		methods: {
			goSignUp(){
				uni.navigateTo({
					url: '/pages/login/register'
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
			// 获取动物列表详情
			getAnimalsDetail(id){
				request('home/animalsDetail','GET',{id}).then(res=>{
					this.Animals = res.data.data
				})
			},
			// 获取新闻详情
			getNewsDetail(id){
				request('home/newsDetail','GET',{id}).then(res=>{
					this.Animals = res.data.data
				})
			}

		},
	}
</script>

<style lang="scss">
.top{
	background: url('../../static/home/endBg.png') no-repeat;
	background-size: cover;
	height: 795.14rpx;
}
.about_text{
	background: url('../../static/my/topfu.png') no-repeat;
	background-size: cover;
	// height: 834.72rpx;
	margin: -200rpx 16rpx 0;
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
		image{
			width: 26.39rpx;
			height: 26.39rpx;
			margin-left: 15rpx;
		}
	}
	.about_text_p{
		padding: 40rpx 18rpx 50rpx;
		font-size: 29.17rpx;
		line-height: 42rpx;
	}
}

.end_text{
	font-size: 29.17rpx;
	padding: 100rpx 0 20rpx;
}
.end_Body{
	padding: 40rpx;
	font-size: 29.17rpx;
	box-sizing: border-box;
	p{
		img{
			width: 100% !important;
			height: auto; /* 保持图片的纵横比 */
			display: block; /* 让图片变为块级元素，消除底部的空白 */
		}
	}
}
</style>
