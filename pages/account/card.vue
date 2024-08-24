<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.card') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="card acc_bg">
				<view class="card_body" v-for="el in OrderList" :key="el.id">
					<view class="card_box flex">
						<image class="card_box_le" :src="el.card_img" mode=""></image>
						<view class="card_box_ri">
							<text class="card_box_ri_text">{{el.card_name || ''}}</text>
							<view class="card_box_ri_text1">
								<p>{{ $t('acc.card1') }} x{{el.pay_method}}</p>
								<p>{{ $t('acc.card2') }}</p>
								<p>{{ $t('acc.card3') }} {{el.create_time || ''}}</p>
							</view>
							<view class="card_box_ri_btn">
								<view :class="el.state == 0 ? 'yellow' : el.state == 1 ? '' : 'red' ">
									{{ el.state == 0 ? $t('acc.card4') : $t('acc.card5') }}
								</view>
							</view>
						</view>
						
					</view>
					<view class="card_box_bor"></view>
					<view class="card_box_code" v-if="el.state == 1">
						<view>
							<text>{{ $t('acc.card6') }}{{el.serial_number}}</text>
							<image @click="copyText(el.serial_number)" src="../../static/my/fuzhi@2x.png" mode=""></image>
						</view>
						
						<view>
							<text>{{ $t('acc.card7') }}{{el.cdk}}</text>
							<image @click="copyText(el.cdk)" src="../../static/my/fuzhi@2x.png" mode=""></image>
						</view>
					</view>
				</view>
				
				<view class="end_list_bot" @click="onPageList()">
					<span>{{ $t('More') }}</span>
					<image src="../../static/home/xiala.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { request } from '@/api/index';
	export default {
		data() {
			return {
				OrderList: [],
				Order: [],
				page_no: 1,
			};
		},
		onLoad(){
			this.getOrder()
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			async getOrder(){
				await request('order/list', 'GET', {page_no: this.page_no, page_size: 25}).then(res=>{
					this.Order = res.data.data
					this.OrderList.push(...res.data.data.lists)
				})
			},
			onPageList(){
				let { count, page_no, page_size } = this.Order
				if(count < (page_no * page_size)){
					uni.showToast({
						title: this.$t('noMore'),
						icon: 'none'
					});
					return
				}
				this.page_no ++
				this.getOrder()
			},
			copyText(data){
				let that = this
				uni.setClipboardData({
					data: data,
					success() {
						uni.showToast({
							title: that.$t('copyC'),
							icon: 'none'
						});
					},
					fail() {
						uni.showToast({
							title: that.$t('copyS'),
							icon: 'none'
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.card{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 40rpx 16.67rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	// overflow-wrap: break-word;
	// font-size: 24px;
	// font-family: PingFang-SC-Regular;
	// font-weight: normal;
	.card_body{
		width: 100%;
		.card_box_bor{
			width: 100%;
			height: 1rpx;
			background: #011B7F;
		}
		.card_box_code{
			padding: 20rpx 0;
			view{
				display: flex;
				align-items: center;
				margin-bottom: 25rpx;
			}
			font-size: 20.83rpx;
			color: #F5AE18;
			image{
				width: 27.78rpx;
				height: 27.78rpx;
				margin-left: 30rpx;
			}
		}
	}
	.card_box{
		width: 100%;
		padding: 20rpx 0;
		.card_box_le{
			width: 322.92rpx;
			height: 203.47rpx;
			margin-right: 30rpx;
		}
		.card_box_ri{
			flex: 1;
			.card_box_ri_text{
				font-size: 22rpx;
				font-weight: bold;
			}
			.card_box_ri_text1{
				margin: 10rpx 0 20rpx;
				width: 100%;
				font-size: 16.67rpx;
				p{
					line-height: 25rpx;
				}
			}
			.card_box_ri_btn{
				width: 100%;
				display: flex;
				justify-content: flex-end;
				view{
					width: 287.5rpx;
					font-size: 33.33rpx;
					background: #008074;
					height: 70.14rpx;
					text-align: center;
					line-height: 70.14rpx;
					border-radius: 5.56rpx;
				}
			}
			.red{
				background: #D95454 !important;
			}
			.yellow{
				background: #F5AE18 !important;
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
</style>
