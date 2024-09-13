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
				<view class="header_ri_user" @click="toPage('/pages/tabs/account')">
					{{ $t('home.text1')}}
					<!-- User Center -->
				</view>
				<image @click="toPage('/pages/home/nav','nav=HOME')" class="header_ri_list" src="../../static/index/list.png" mode=""></image>
			</view>
		</view>
		<view id="top" class="top">
			<view class="flex">
				<!-- WELCOME TO <span>SXF</span> -->
				<image src="../../static/index/WELCOME TO SXF.png" mode=""></image>
			</view>
		</view>
		<view class="idt">
			<view class="idt_text">
				{{ $t('home.text2') }}
				
			</view>
			<view class="idt_btn" @click="toPage('/pages/home/join')">
				{{ $t('home.text3') }}
			</view>
			<view class="idt_about">
				{{ $t('home.text4') }}
				<Webto />
			</view>
		</view>
		<view class="Our">
			<view class="Our_text">
				{{ $t('home.ourtext1') }}
			</view>
			<view class="Our_list">
				<view class="Our_list_box" @click="toAnimals(el,'animals')" v-for="el in Plants.lists" :key="el.id">
					<view class="Our_list_box_img">
						<image :src="el.image" mode=""></image>
					</view>
					<view class="Our_list_box_text">
						<view>{{el.title || ''}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="news">
			<view class="news_title">
				{{ $t('home.news') }}
			</view>
			<view class="news_list">
				<div class="news_list_box" @click="toAnimals(el,'news')" v-for="el in newsList.lists" :key="el.id">
					<image class="news_list_box_le" :src="el.image" mode=""></image>
					<view class="news_list_box_ri">
						<view>{{el.title || ''}}</view>
						<text>{{el.date}}</text>
					</view>
				</div>
				
				<!-- <div class="news_list_box">
					<image class="news_list_box_le" src="../../static/index/news2.png" mode=""></image>
					<view class="news_list_box_ri">
						<view>Putting people at the heart of human-wildlife conflict: Outcomes of the International Conference on Human-Wildlife Conflict and Coexistence</view>
						<text>2023-09-30T16:00:00.000+00:00</text>
					</view>
				</div>
				
				<div class="news_list_box">
					<image class="news_list_box_le" src="../../static/index/news3.png" mode=""></image>
					<view class="news_list_box_ri">
						<view>World’s Most Ambitious Satellite Telemetry Study of Foraging Green and Hawksbill Sea Turtles</view>
						<text>2023-09-30T16:00:00.000+00:00</text>
					</view>
				</div>
				
				<div class="news_list_box">
					<image class="news_list_box_le" src="../../static/index/news4.png" mode=""></image>
					<view class="news_list_box_ri">
						<view>In Seychelles, an innovative approach to marine protection</view>
						<text>2023-09-30T16:00:00.000+00:00</text>
					</view>
				</div> -->
			</view>
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
		
		<Tabs />
		
		<!-- <view class="footer blur">
			<image class="home" src="../../static/tab/Home_a.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inaction')" class="action" src="../../static/tab/Action.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inbox')" class="inbox" src="../../static/tab/Inbox.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/account')" class="account" src="../../static/tab/Account.png" mode=""></image>
		</view> -->
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
				
				newsList: [],
				Plants: []
			}
		},
		onLoad() {
			// const value = uni.getStorageSync('storage_key');
			this.getPlants()
			this.getNews()
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
			
			// 获取动物
			getPlants (){
				request('home/animals','GET',{act: 'home'}).then(res=>{
					this.Plants = res.data.data
				})
			},
			// 获取新闻
			getNews(){
				request('home/news','GET',{act: 'home'}).then(res=>{
					this.newsList = res.data.data
				})
			},
			toAnimals(v,type){
				this.toPage('/pages/home/endDes',`id=${v.id}&type=${type}`)
			}
		},
	}
</script>

<style lang="less">
// .idt_about{margin-top:20rpx;}
.top{
	background: url('../../static/index/top.png') no-repeat;
	background-size: cover;
	height: 577.08rpx;
	.flex{
		height: 79%;
		align-items: flex-end;
		justify-content: center;
		image{
			width: 413.89rpx;
			height: 38.19rpx;
		}
	}
}
.idt{
	background: url('../../static/index/shui.png') no-repeat;
	background-size: cover;
	min-height: 706.14rpx;
	background-position: bottom;
	padding: 70rpx 40rpx;
	color: #fff;
	// margin-top: -20px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	.idt_text{
		padding-top: 200rpx;
		font-size: 29.17rpx;
	}
	.idt_btn{
		// width: 100%;
		height: 88.89rpx;
		padding: 0 38rpx;
		background: #9137C1;
		box-sizing: border-box;
		border-radius: 5.56rpx;
		text-align: center;
		line-height: 88.89rpx;
		margin: 47rpx 0 35rpx;
	}
}
.Our{
	margin: 60rpx 15rpx;
	box-sizing: border-box;
	.Our_text{
		margin-bottom: 50rpx;
		color: #F5AE18;
	}
	.Our_list{
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 25rpx 15rpx; 
		.Our_list_box{
			flex: 1 0 50%;
			// width: 349.38rpx;
			// height: 458.33rpx;
			border-radius: 11rpx;
			overflow: hidden;
			background: linear-gradient(130deg, #0D408C 0%, #00197E 100%);
			// display: flex;
			// flex-direction: column;
			color: #fff;
			.Our_list_box_img{
				width: 100%;
				height: 332.64rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			// .add2{
			// 	background: url('../../stastic/index/Our2.png') no-repeat !important;
			// 	background-size: cover;
			// 	background-position: center;
			// }
			// .add3{
			// 	background: url('../../static/index/Our3.png') no-repeat;
			// }
			// .add4{
			// 	background: url('../../static/index/Our4.png') no-repeat;
			// }
			// .add5{
			// 	background: url('../../static/index/Our5.png') no-repeat;
			// }
			// .add6{
			// 	background: url('../../static/index/Our6.png') no-repeat;
			// }
			.Our_list_box_text{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 125rpx;
				text-align: center;
			}
		}
	}
}
.news{
	margin: 20rpx 0;
	.news_title{
		color: #16BA5F;
		font-size: 40rpx;
		margin-bottom: 40rpx;
		padding: 0 40rpx;
	}
	.news_list{
		color: #fff;
		.news_list_box{
			margin-bottom: 15rpx;
			background: #192158;
			display: flex;
			padding: 31.25rpx 15rpx;
			.news_list_box_le{
				width: 250.69rpx;
				height: 250.69rpx;
				margin-right: 23.61rpx;
			}
			.news_list_box_ri{
				flex: 1;
				display: flex;
				flex-direction: column;
				font-size: 31rpx;
				justify-content: space-between;
				text{
					text-align: right;
					font-size: 20.83rpx;
				}
			}
		}
		
	}
}
</style>
