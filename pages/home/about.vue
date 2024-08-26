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
				<view class="header_ri_user"  @click="toPage('/pages/tabs/account')">{{ $t('home.text1') }}</view>
				<image @click="toPage('/pages/home/nav','nav=HOME')" class="header_ri_list" src="../../static/index/list.png" mode=""></image>
			</view>
		</view>
		
		<view id="top" class="top"></view>
		<view class="about_text">
			<view class="about_text_sa">
				<text>{{ $t('home.home')}}</text> › {{ $t('home.about')}}
			</view>
			<view class="about_app flex">
				<Webto />
			</view>
			<!-- <view class="about_text_p">
				{{ $t('home.about1')}}
			</view> -->
		</view>
		
		<view class="about_div" v-html="formattedContent" />
		
		
	<!-- 	<view class="about_div">
			<view class="about_div_tie">{{ $t('home.about2')}}</view>
			<view class="about_div_text1">{{ $t('home.about3')}}</view>
			<view class="about_div_text2">{{ $t('home.about4')}}</view>
			<view class="about_div_bor" />
			<view class="about_div_text1">
				{{ $t('home.about5')}}
			</view>
			<view class="about_div_bor" />
			<view class="about_div_text1">
				{{ $t('home.about6')}}
			</view>
			<view class="about_div_bor" />
			<view class="about_div_text1">
				<p style="margin-bottom: 40rpx;">{{ $t('home.about7')}}</p>
				
				{{ $t('home.about8')}}
			</view>
			<view class="about_div_text1">
				{{ $t('home.about9')}}
			</view>
			
			<view class="about_div_text3">
				{{ $t('home.about10')}}
			</view>
		</view>
		
		
		<view class="about_litte">
			<p>{{ $t('home.about11')}}</p>
			<p>{{ $t('home.about12')}}</p>
			<p>{{ $t('home.about13')}}</p>
			<p>{{ $t('home.about14')}}</p>
			<p>{{ $t('home.about15')}}</p>
			<p>{{ $t('home.about16')}}</p>
			<p>{{ $t('home.about16')}}</p>
			<p>{{ $t('home.about17')}}</p>
			<p>{{ $t('home.about18')}}</p>
			<p>{{ $t('home.about19')}}</p>
			<p>{{ $t('home.about20')}}</p>
			
			<view>{{ $t('home.about21')}}</view>
			<view>{{ $t('home.about22')}}</view>
			<view>{{ $t('home.about23')}}</view>
		</view>-->
		
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
				
				content: "",
			};
		},
		onShow(){
			this.lang = uni.getStorageSync('langName');
			this.langUrl = uni.getStorageSync('langUrl');
		},
		onLoad(){
			this.getText()
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
				request('home/config','GET', {key: 'about'}).then(res=>{
					this.content = res.data.data.content
				})
			},
		},
	}
</script>

<style lang="scss">
.top{
	background: url('../../static/home/aboutbg.png') no-repeat;
	background-size: cover;
	height: 795.14rpx;
}
.about_text{
	background: url('../../static/my/topfu.png') no-repeat;
	background-size: cover;
	// height: 834.72rpx;
	margin: -200rpx 16rpx 0;
	box-sizing: border-box;
	padding: 0 20rpx;
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
}
.about_div{
	padding: 40rpx;
	.about_div_tie{
		color: #F5AE18;
		font-size: 31.94rpx;
	}
	.about_div_text1{
		padding: 40rpx 0;
		font-size: 29.17rpx;
	}
	.about_div_text2{
		font-size: 29.17rpx;
		color: #00F6FF;
		padding: 40rpx 0 20rpx;
	}
	.about_div_bor{
		height: 1rpx;
		background: #001A7E;
		border-bottom: 1px dotted #006FE4;
	}
	.about_div_text3{
		padding: 40rpx 0 20rpx;
		color: #16BA5F;
		font-size: 42rpx;
	}
}
.about_litte{
	background: #192158;
	padding: 50rpx 40rpx 20rpx;
	box-sizing: border-box;
	font-size: 29.17rpx;
	margin-bottom: 50rpx;
	p{
		font-weight: 300;
		margin-bottom: 30rpx;
	}
	view{
		padding: 40rpx 0;
	}
}
</style>
