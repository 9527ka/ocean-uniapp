<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('acc.team') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="team_body acc_bg flex">
				<view>{{ $t('acc.team1') }}</view>
				<view class="team_body_code">
					<input type="text" disabled="" :value="code" />
				</view>
				<view class="team_body_btn" @click="copyText">
					{{ $t('acc.team4') }}
				</view>
				<view class="team_body_num flex">
					<view class="team_body_num_box">
						<text>{{ $t('acc.team2') }}</text>
						<view>{{ User.share_daily || 0}}</view>
					</view>
					<view class="team_body_num_box">
						<text>{{ $t('acc.team3') }}</text>
						<view>{{ User.invite_partners || 0}}</view>
					</view>
				</view>
			</view>
			<!-- 下级会员 -->
			<view class="Action_body_box">
				<view class="Action_body_box_ri Title">
					<view class="box1">{{ $t('username') }}</view>
					<view class="box2">{{ $t('level') }}</view>
					<view class="box3">{{ $t('time') }}</view>
				</view>
			</view>
			<view class="Action_body_box flex" v-for="el in LevelList" :key="el.id">
				<view class="Action_body_box_ri">
					<view class="box1">{{ el.account }}</view>
					<view class="box2">{{ el.level }}</view>
					<view class="box3">{{el.create_time}}</view>
				</view>
			</view>
			
			<view class="end_list_bot" @click="onMore()">
				<span>{{ $t('More') }}</span>
				<image src="../../static/home/xiala.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { BASE_URL,request } from '@/api/index';
	export default {
		data() {
			return {
				scrollTop: 0,
				showBackToTop: false,
				
				page_no: 1,
				Level: [],
				LevelList: [],
				
				User: {},
				code: ''
			};
		},
		onLoad() {
			this.getLevel()
			this.User = uni.getStorageSync('User')
			this.code = BASE_URL +'#/pages/login/reg?code='+ this.User.icode
		},
		methods: {
			getLevel(){
				request('user/child', 'GET', {
					page_size: 6,
					page_no: this.page_no,
				}).then(res=>{
					this.Level = res.data.data
					this.LevelList.push(...res.data.data.lists)
				})
			},
			onMore(){
				let { count, page_no, page_size } = this.Level
				if(count < (page_no * page_size)){
					uni.showToast({
						title: this.$t('noMore'),
						icon: 'none'
					});
					return
				}
				this.page_no ++
				this.getLevel()
			},
			toBack(){
				const pages = getCurrentPages();
				if (pages.length > 1) {
					uni.navigateBack({delta: 1});
				}else{
					uni.reLaunch({url: '/pages/tabs/account'});
				}
			},
			copyText(){
				let that = this
				uni.setClipboardData({
					data: this.code,
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
.team_body{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 16.67rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.team_body_code{
		width: 100%;
		height: 63.89rpx;
		margin-top: 40rpx;
		input{
			height: 100%;
			background: #102455;
			border-radius: 13.89rpx;
			padding: 0 24rpx;
			font-size: 20rpx;
			text-align: center;
		}
	}
	.team_body_btn{
		margin: 40rpx 0 60rpx;
		padding: 0 134rpx;
		box-sizing: border-box;
		background: #9137C1;
		height: 88.89rpx;
		text-align: center;
		line-height: 88.89rpx;
		border-radius: 5.56rpx;
	}
	.team_body_num{
		width: 100%;
		background: #00106C;
		border-radius: 13.89rpx;
		padding: 40rpx 0 45rpx;
		.team_body_num_box{
			flex: 1;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			font-size: 29.17rpx;
			view{
				font-size: 69.44rpx;
				margin-top: 40rpx;
				color: #04F0FF;
				font-weight: bold;
			}
		}
	}
}

.Action_body_box{
	font-size:30rpx;
	padding: 30rpx 22rpx;
	.Action_body_box_le{
		width: 250.69rpx;
		height: 250.69rpx;
	}
	.Title view{color:#ffffff !important;}
	.Action_body_box_ri{
		width:100%;
		justify-content: space-between;
		display: flex;
		view{
			text-align: center;
			color: #989CB2;
		}
		.box1{width:35%;}
		.box2{width:10%;}
		.box3{width:55%;}
	}
}

.end_list_bot{
	display: flex;
	align-items: center;
	justify-content: center;
	border: #006FE4 solid 1rpx;
	height: 93.75rpx;
	margin: 20rpx 16rpx 300rpx;
	image{
		width: 15.97rpx;
		height: 15.97rpx;
		margin-left: 22rpx;
		margin-top: 3px;
	}
}
</style>
