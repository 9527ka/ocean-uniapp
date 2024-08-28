<template>
	<view class="content">
		<scroll-view class="Action" scroll-y :scroll-top= "scrollTop" scroll-with-animation @scroll="handleScroll">
			<view class="Action_tab flex">
				<view @click="toLaunch('/pages/tabs/Inaction')">{{ $t('inacX.tie1') }}</view>
				<view class="add">{{ $t('inacX.tie2') }}</view>
			</view>
			<view class="Action_body">
			<!-- 	<view class="Action_body_box flex">
					<image class="Action_body_box_le" src="../../static/index/news3.png" mode=""></image>
					<view class="Action_body_box_ri">
						<view></view>
						<view class="Action_body_box_ri_btn">
							Approved
						</view>
						<text>share time / 2024-07-12 16:59:41</text>
					</view>
				</view> -->
				
				<view class="Action_body_box flex" v-for="el in ShareList" :key="el.id">
					<image class="Action_body_box_le" :src="el.poster_images[0]" mode=""></image>
					<view class="Action_body_box_ri">
						<view></view>
						<view :class="el.audit_status == 9 ? 'Action_body_box_ri_btn add' : el.audit_status == 0 ? 'Action_body_box_ri_btn addye' : 'Action_body_box_ri_btn'">
							{{ el.audit_status == 9 ? $t('inacX.rejected') : el.audit_status == 0 ? $t('inacX.under') : $t('inacX.approved') }}
						</view>
						<text>{{ $t('inacX.time') }} / {{el.update_time}}</text>
					</view>
				</view>
				
				<view class="end_list_bot" @click="onMore()">
					<span>{{ $t('More') }}</span>
					<image src="../../static/home/xiala.png" mode=""></image>
				</view>
				
				<view style="height: 100rpx;" />
			</view>
		</scroll-view>
		<!-- <view class="footer blur">
			<image @click="toLaunch('/pages/tabs/home')" class="home" src="../../static/tab/Home.png" mode=""></image>
			<image class="action" src="../../static/tab/Action_a.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inbox')" class="inbox" src="../../static/tab/Inbox.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/account')" class="account" src="../../static/tab/Account.png" mode=""></image>
		</view>
		
		<view class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
			<image src="../../static/index/to-top.png" mode=""></image>
		</view> -->
		<Tabs :tabs="1" />
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				scrollTop: 0,
				showBackToTop: false,
				
				page_no: 1,
				Share: [],
				ShareList: [],
			};
		},
		onLoad(){
			this.getShare()
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
			getShare(){
				request('poster/shareList', 'GET', {
					page_size: 6,
					page_no: this.page_no,
				}).then(res=>{
					this.Share = res.data.data
					this.ShareList.push(...res.data.data.lists)
				})
			},
			onMore(){
				let { count, page_no, page_size } = this.Share
				if(count < (page_no * page_size)){
					uni.showToast({
						title: this.$t('noMore'),
						icon: 'none'
					});
					return
				}
				this.page_no ++
				this.getShare()
			}
		}
	}
</script>

<style lang="scss">
.Action{
	width: 100%;
	height: 100%;
	overflow-y: auto;
	.Action_tab{
		margin: 20rpx 16.67rpx;
		box-sizing: border-box;
		height: 80rpx;
		background: #002656;
		color: #fff;
		font-size: 33.33rpx;
		view{
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.add{
			background: #09D0BE;
		}
	}
	.Action_body{
		margin: 50rpx 0 200rpx;
		box-sizing: border-box;
		font-size: 29.17rpx;
		.Action_body_box{
			background: #192158;
			padding: 30rpx 22rpx;
			.Action_body_box_le{
				width: 250.69rpx;
				height: 250.69rpx;
			}
			.add{
				background: #D95454 !important;
			}
			.addye{
				background: #F5AE18 !important;
			}
			.Action_body_box_ri{
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				margin-left: 60rpx;
				flex: 1;
				.Action_body_box_ri_btn{
					width: 341.67rpx;
					height: 70.14rpx;
					background: #008074;
					font-size: 33.33rpx;
					border-radius: 5.56rpx;
					text-align: center;
					line-height: 70.14rpx;
				}
				text{
					color: #989CB2;
					text-align: right;
					font-size: 20.83rpx;
				}
			}
		}
	}
	.end_list_bot{
		display: flex;
		align-items: center;
		justify-content: center;
		border: #006FE4 solid 1rpx;
		height: 93.75rpx;
		margin: 20rpx 16rpx 40rpx;
		image{
			width: 15.97rpx;
			height: 15.97rpx;
			margin-left: 22rpx;
			margin-top: 3px;
		}
	}
}
</style>
