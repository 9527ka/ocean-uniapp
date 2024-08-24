<template>
	<view class="content">
		<view class="acc">
			<view class="team_top">
				<view class="team_top_le" @click="toBack()">
					<svg t="1723012179976" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4513" data-spm-anchor-id="a313x.search_index.0.i7.21063a81ViOJz6" width="200" height="200"><path d="M373.005782 512.035405l381.691318-426.566068a51.187928 51.187928 0 1 0-76.952518-67.994631l-406.090897 453.866296a60.998948 60.998948 0 0 0 0 81.644746l406.261523 453.780983c18.939533 21.157677 51.358555 23.034568 72.686858 4.265661a50.761362 50.761362 0 0 0 4.265661-72.174979L372.920469 512.035405z" fill="#ffffff" p-id="4514"></path></svg>
				</view>
				<view>{{ $t('inbox.card') }}</view>
				<text class="team_x"></text>
			</view>
			
			<view class="buY acc_bg flex">
				<image class="buY_img" :src="orderVo.image" mode=""></image>
				<view class="buY_text1">
					<view>{{ $t('inbox.price') }} {{orderVo.price}}</view>
					<view class="buY_text1_x">{{ $t('inbox.discount') }} {{ User.discount }}</view>
				</view>
				
				<view class="buY_text1">
					<view>{{ $t('inbox.act') }}</view>
					<view class="buY_text1_S">{{(orderVo.price * (User.discount > 0 ? User.discount : 1 )).toFixed(2)}}</view>
				</view>
			</view>
		
			<view class="buYPay">
				<view class="buYPay_ai">
					<view>{{ $t('inbox.cry') }}</view>
					<image 
						class="buYPay_ai_se" 
						:src="is ? require('../../static/home/se.png') : require('../../static/home/se_.png')" 
						mode=""
						@click="onSetChange"
					></image>
				</view>
				<view class="buYPay_aibtn" @click="toPage('/pages/inbox/ai')">{{ $t('inbox.ai') }}</view>
				<view class="buYPay_text">{{ $t('inbox.aitext') }}</view>
				
				<view class="buYPay_inp" v-if="is">
					<input 
						type="text" 
						v-model="pay"
						placeholder-class= "buYPay_inp_pl"
						:placeholder="$t('inbox.hash')"
					/>
				</view>
				
				<view class="buYPay_imgList flex" v-if="is">
					<view class="Action_body_upload_box" v-for="el in uploadedImages" :key="el.id">
						<view @click="onDelimg(el.id)">
							<svg t="1723893230674" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5445" width="200" height="200"><path d="M840 288H688v-56c0-40-32-72-72-72h-208C368 160 336 192 336 232V288h-152c-12.8 0-24 11.2-24 24s11.2 24 24 24h656c12.8 0 24-11.2 24-24s-11.2-24-24-24zM384 288v-56c0-12.8 11.2-24 24-24h208c12.8 0 24 11.2 24 24V288H384zM758.4 384c-12.8 0-24 11.2-24 24v363.2c0 24-19.2 44.8-44.8 44.8H332.8c-24 0-44.8-19.2-44.8-44.8V408c0-12.8-11.2-24-24-24s-24 11.2-24 24v363.2c0 51.2 41.6 92.8 92.8 92.8h358.4c51.2 0 92.8-41.6 92.8-92.8V408c-1.6-12.8-12.8-24-25.6-24z" fill="#ffffff" p-id="5446"></path><path d="M444.8 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24zM627.2 744v-336c0-12.8-11.2-24-24-24s-24 11.2-24 24v336c0 12.8 11.2 24 24 24s24-11.2 24-24z" fill="#ffffff" p-id="5447"></path></svg>
						</view>
						<image
							:src="el.url" 
							mode=""
						>
						</image>
					</view>
					
					<view v-if="uploadedImages.length < 1" class="buYPay_imgList_upload imagex" @click="onUpload()">
						<image src="../../static/tab/addimage.png" mode=""></image>
					</view>
				</view>
				
				
				<view class="buYPay_btn" @click="onCard()">{{ $t('inbox.buyx') }}</view>
				
				<view style="height: 100rpx;"></view>
			</view>
		
		</view>
	</view>
</template>

<script>
	import {
		request,
		uploadImage
	} from '@/api/index';
	export default {
		data() {
			return {
				is: false,
				pay: '',
				User: {},
				orderVo: {},
				
				uploadedImages: [],
			};
		},
		onLoad(options){
			this.User = uni.getStorageSync('User')
		
			this.orderVo = JSON.parse(decodeURIComponent(options.data));
			console.log(this.orderVo)
		},
		methods: {
			toBack(){
				uni.navigateBack({
					delta: 1
				});
			},
			toPage(name,data){
				uni.navigateTo({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			onSetChange() {
				this.is = !this.is
			},
			onCard(){
				if(this.uploadedImages.length <= 0  || !this.pay){
					uni.showToast({
						title: this.$t('inbox.tips'),
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
				}
				request('card/order','POST',{
					pay_img: this.uploadedImages[0].url,
					pay_hash: this.pay,
					price: this.orderVo.price,
				}).then(res=>{
					uni.showToast({
						title: res.data.msg || 'err',
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
					setTimeout(()=>{
						uni.redirectTo({
							url: '/pages/account/card'
						});
					},2000)
				})
			},
			onUpload() {
				uni.chooseImage({
					count: 1,
					success: (res) => {
						const file = res.tempFilePaths
						file.forEach((filePath) => {
							this.uploadImg(filePath);
						});
					},
					fail: () => {
						uni.showToast({
							title: '选择图片失败',
							icon: 'none'
						});
					}
				})
			},
			onDelimg(idToRemove){
				this.uploadedImages = this.uploadedImages.filter(item => item.id !== idToRemove);
			},
			uploadImg(filePath) {
				uploadImage(filePath).then(res=>{
					let data = {
						id: res.data.id,
						url: res.data.uri
					}
					this.uploadedImages.push(data)
				})
			},
		}
	}
</script>

<style lang="scss">
.buY{
	margin: 20rpx 16rpx;
	box-sizing: border-box;
	padding: 60rpx 16.67rpx 20rpx;
	font-size: 33.33rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.buY_img{
		padding: 30rpx 47rpx;
		box-sizing: border-box;
		height: 390.97rpx;
	}
	.buY_text1{
		width: 100%;
		padding: 20rpx 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 27.78rpx;
		font-weight: bold;
		.buY_text1_x{
			width: 284.03rpx;
			height: 54.86rpx;
			text-align: center;
			font-weight: bold;
			line-height: 54.86rpx;
			border: 1rpx solid #FFD200;
			border-radius: 27.08rpx;
			background: rgba(255, 153, 0, .2);
		}
		.buY_text1_S{
			color: #00FFE8;
			font-size: 41.67rpx;
			width: 284.03rpx;
			text-align: center;
		}
	}
}
.buYPay{
	padding: 30rpx 64rpx ;
	box-sizing: border-box;
	.buYPay_ai{
		padding: 20rpx 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 26.39rpx;
		.buYPay_ai_se{
			width: 57.64rpx;
			height: 57.64rpx;
		}
	}
	.buYPay_aibtn{
		margin: 40rpx 87rpx;
		box-sizing: border-box;
		height: 63.06rpx;
		background: #9137C1;
		border-radius: 31.54rpx;
		font-size: 26.39rpx;
		text-align: center;
		line-height: 63.06rpx;
		// margin: 40rpx 0;
	}
	.buYPay_text{
		font-size: 23.61rpx;
		margin-bottom: 40rpx;
	}
	.buYPay_inp{
		margin-bottom: 40rpx;
		input{
			height: 82.64rpx;
			border-radius: 40.97rpx;
			background: rgba(39, 46, 88, .9);
			border: #00149A solid 1rpx;
			padding: 0 40rpx;
			font-size: 32rpx;
		}
		.buYPay_inp_pl{
			font-size: 23.61rpx;
			color: #9C9898;
			padding: 0 10rpx;
		}
	}
	.buYPay_imgList{
		margin-bottom: 50rpx;
		flex-wrap: wrap;
		.imagex{
			width: 181.25rpx;
			height: 181.25rpx;
			margin: 0 10rpx 10rpx 0;
			border: #09D0BE 1rpx solid;
		}
		.buYPay_imgList_upload{
			background: #021B7D;
			display: flex;
			align-items: center;
			justify-content: center;
			image{
				width: 86.11rpx;
				height: 84.03rpx;
			}
		}
	}
	.buYPay_btn{
		background: #9137C1;
		margin: 0 86rpx 0;
		height: 88.89rpx;
		border-radius: 5.56rpx;
		text-align: center;
		line-height: 88.89rpx;
	}
	
	.Action_body_upload_box{
		width: 181.25rpx;
		height: 181.25rpx;
		margin-right: 5px;
		margin-bottom: 5px;
		position: relative;
		border: 1rpx rgba(255, 255, 255, .4) solid;
		box-sizing: border-box;
		view{
			position: absolute;
			width: 15px;
			height: 15px;
			display: flex;
			justify-content: center;
			align-items: center;
			z-index: 99;
			right: 0;
			top: 0;
			background: rgba(255, 255, 255, .4);
		}
		svg{
			width: 10px;
			height: 10px;
			color: #fff;
		}
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
