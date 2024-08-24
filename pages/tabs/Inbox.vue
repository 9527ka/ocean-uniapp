<template>
	<view class="content">
		<scroll-view class="Inbox" scroll-y :scroll-top= "scrollTop" scroll-with-animation @scroll="handleScroll">
			<view class="Inbox_box flex" v-for="(el,i) in CardList.lists" :key="el.id">
				<image :class="el.buy == 'on' ? 'Inbox_box_le' : 'Inbox_box_le addimge'" :src="el.image" mode=""></image>
				<view class="Inbox_box_ri">
					<view>{{el.name || ''}}</view>
					<view class="Inbox_box_ri_btn" @click="onToBuy(el)">
						{{ $t('inbox.buy') }}
					</view>
				</view>
			</view>
			<!-- 
			<view class="Inbox_box flex">
				<image class="Inbox_box_le" src="../../static/tab/use100.png" mode=""></image>
				<view class="Inbox_box_ri">
					<view>SXF Amazon GIFT CARD 100 USD</view>
					<view class="Inbox_box_ri_btn">
						Buy Now
					</view>
				</view>
			</view> -->
		</scroll-view>
		
		
		<view class="footer blur">
			<image @click="toLaunch('/pages/tabs/home')" class="home" src="../../static/tab/Home.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inaction')" class="action" src="../../static/tab/Action.png" mode=""></image>
			<image class="inbox" src="../../static/tab/Inbox_a.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/account')" class="account" src="../../static/tab/Account.png" mode=""></image>
		</view>
		
		<view class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
			<image src="../../static/index/to-top.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				scrollTop: 0,
				showBackToTop: false,
				
				CardList: [],
			};
		},
		onLoad(){
			this.getCardList()
		},
		methods: {
			handleScroll(e) {
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
			onToBuy(v){
				if(v.buy == 'off') return uni.showToast({
					title: this.$t('onBuy'),
					duration: 2000,
					mask: true,
					position: "top",
					icon: "none"
				});
				if(v.buy == 'buyed') return uni.showToast({
					title: this.$t('onBuyed'),
					duration: 2000,
					mask: true,
					position: "top",
					icon: "none"
				});
				const userStr = encodeURIComponent(JSON.stringify(v));
				this.toPage('/pages/inbox/buyNow',`data=${userStr}`)
			},
			// 获取用户信息
			async getCardList(){
				await request('card/list', 'GET').then(res=>{
					this.CardList = res.data.data
				})
			},
		},
	}
</script>

<style lang="scss">
.Inbox{
	margin: 80rpx 0 200rpx;
	.Inbox_box{
		background: #192158;
		padding: 18rpx 22rpx;
		box-sizing: border-box;
		margin-bottom: 42rpx;
		.Inbox_box_le{
			width: 322.22rpx;
			height: 203.47rpx;
			margin-right: 30rpx;
		}
		.addimge{
			filter: grayscale(100%) brightness(150%) contrast(90%);
		}
		.Inbox_box_ri{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;
			font-size: 32rpx;
			.Inbox_box_ri_btn{
				width: 287.5rpx;
				height: 70.14rpx;
				border-radius: 5.56rpx;
				background: #9237C2;
				font-size: 33.33rpx;
				text-align: center;
				line-height: 70.14rpx;
			}
		}
	}
}
</style>
