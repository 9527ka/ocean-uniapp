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
				<view class="header_ri_user" @click="toPage('/pages/tabs/account')">{{ $t('home.text1') }}</view>
				<image @click="toPage('/pages/home/nav','nav=HOME')" class="header_ri_list" src="../../static/index/list.png" mode=""></image>
			</view>
		</view>
		
		<view id="top" class="top"></view>
		<view class="about_text">
			<view class="about_text_sa">
				<text>{{ $t('home.home')}}</text>  {{ $t('home.end1') }}
			</view>
			<view class="about_app flex">
				<Webto />
			</view>
			
			<view class="end_text"> {{ $t('home.end2') }}</view>
			<view class="end_btn"> {{ $t('home.end3') }}</view>
		</view>
		
		<view class="end_list">
			<view @click="toAnimals(el,'animals')" class="end_list_box" v-for="el in AnimalsList" :key="el.id">
				<image :src="el.image" mode=""></image>
				<view>{{el.title || ''}}</view>
			</view>
		</view>
		<view class="end_list_bot" @click="onPageList()">
			<span>{{ $t('More') }}</span>
			<image src="../../static/home/xiala.png" mode=""></image>
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
				
				page_no: 1,
				Animals: [],
				AnimalsList: [],
			};
		},
		onLoad() {
			this.getAnimals()
		},
		onShow(){
			this.lang = uni.getStorageSync('langName');
			this.langUrl = uni.getStorageSync('langUrl');
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
			toHtml(v){
				const userStr = encodeURIComponent(JSON.stringify(v));
				this.toPage('/pages/home/endDes',`data=${userStr}`)
			},
			toAnimals(v,type){
				this.toPage('/pages/home/endDes',`id=${v.id}&type=${type}`)
			},
			onPageList(){
				let { count, page_no, page_size } = this.Animals
				if(count < (page_no * page_size)){
					uni.showToast({
						title: this.$t('noMore'),
						icon: 'none'
					});
					return
				}
				this.page_no ++
				this.getAnimals()
			},
			// 获取动物列表
			getAnimals (){
				request('home/animals','GET',{page_no: this.page_no}).then(res=>{
					this.Animals = res.data.data
					this.AnimalsList.push(...res.data.data.lists)
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
}

.end_text{
	font-size: 29.17rpx;
	text-align: center;
	padding: 100rpx 0 40rpx;
}
.end_btn{
	padding: 0 40rpx ;
	border-radius: 5.56rpx;
	margin: 0 0 40rpx;
	background: #9137C1;
	height: 88.89rpx;
	text-align: center;
	line-height: 88.89rpx;
}
.end_list{
	margin: 40rpx 0;
	padding: 0 16rpx;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	.end_list_box{
		font-size: 33.33rpx;
		width: 350rpx;
		background: linear-gradient(130deg, #0D408C 0%, #00197E 100%);
		border-radius: 11rpx;
		overflow: hidden;
		image{
			width: 100%;
			height: 330rpx;
			border-radius: 11rpx 11rpx 0 0;
			overflow: hidden;
		}
		view{
			width: 100%;
			height: 125rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
}
.end_list_bot{
	display: flex;
	align-items: center;
	justify-content: center;
	border: #006FE4 solid 1rpx;
	height: 93.75rpx;
	margin: 0 16rpx 40rpx;
	image{
		width: 15.97rpx;
		height: 15.97rpx;
		margin-left: 22rpx;
		margin-top: 3px;
	}
}
</style>
