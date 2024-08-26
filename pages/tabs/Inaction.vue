<template>
	<view class="content">
		<scroll-view class="Action" scroll-y :scroll-top="scrollTop" scroll-with-animation @scroll="handleScroll">
			<view class="Action_tab flex">
				<view class="add">{{ $t('inacX.tie1') }}</view>
				<view @click="toLaunch('/pages/tabs/InactX')">{{ $t('inacX.tie2') }}</view>
			</view>
			<view class="Action_body">
				<view>{{ $t('inacX.step1') }}</view>
				<img @click="saveImage()" class="Action_body_image" :src="aiList[3] ? aiList[3].value : require('../../static/tab/inacbg.png')" mode=""></img>
				<view class="Action_body_text">{{ $t('inacX.steptext1') }}</view>
				<view>{{ $t('inacX.step2') }}</view>
				<view class="Action_body_app">
					<Webto />
				</view>
				<view class="Action_body_text">{{ $t('inacX.steptext2') }}</view>
				<view>{{ $t('inacX.step3') }}</view>
				<view class="Action_body_text1">
					{{ $t('inacX.steptext3') }}
				</view>
				<view class="Action_body_upload">
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
					
					<view v-if="uploadedImages.length < 5" class="add" @click="onUpload()">
						<image src="../../static/tab/addimage.png" mode=""></image>
					</view>
				</view>

				<view class="Action_body_btn" @click="onSharePoster">
					{{ $t('inacX.now') }}
				</view>
				<view style="height: 50rpx;"></view>
			</view>
			
			
		</scroll-view>
		<view class="footer blur">
			<image @click="toLaunch('/pages/tabs/home')" class="home" src="../../static/tab/Home.png" mode=""></image>
			<image class="action" src="../../static/tab/Action_a.png" mode=""></image>
			<image @click="toLaunch('/pages/tabs/Inbox')" class="inbox" src="../../static/tab/Inbox.png" mode="">
			</image>
			<image @click="toLaunch('/pages/tabs/account')" class="account" src="../../static/tab/Account.png" mode="">
			</image>
		</view>

		<view class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
			<image src="../../static/index/to-top.png" mode=""></image>
		</view>
	</view>
</template>

<script>
	import {
		BASE_URL,
		request,
		uploadImage
	} from '@/api/index';
	export default {
		data() {
			return {
				scrollTop: 0,
				showBackToTop: false,

				uploadedImages: [],
				aiList: [],
			};
		},
		onLoad(){
			this.getConfig()
		},
		methods: {
			handleScroll(e) {
				this.showBackToTop = e.detail.scrollTop > 100;
			},
			scrollToTop() {
				this.scrollTop = 1;
				this.$nextTick(() => {
					this.scrollTop = 0
				});
			},
			toPage(name, data) {
				uni.navigateTo({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			toLaunch(name, data) {
				uni.reLaunch({
					url: `${name}${data ? '?' : ''}${data || ''}`
				});
			},
			getConfig(){
				request('home/config','GET').then(res=>{
					this.aiList = res.data.data
				})
			},
			saveImage(){
				if(!this.aiList[3].value) return
				const imageUrl = this.aiList[3].value
				uni.downloadFile({
					url: imageUrl,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: () => {
									uni.showToast({
										title: this.$t('tuB'),
										icon: 'none',
										duration: 2000
									});
								},
								fail: () => {
									uni.showToast({
										title: this.$t('tuS'),
										icon: 'none',
										duration: 2000
									});
								}
							});
						} else {
							uni.showToast({
								title: this.$t('tuS'),
								icon: 'none',
								duration: 2000
							});
						}
					},
					fail: (err) => {
						uni.showToast({
							title: this.$t('tuS'),
							icon: 'none',
							duration: 2000
						});
					}
				});
			},
			onDelimg(idToRemove){
				this.uploadedImages = this.uploadedImages.filter(item => item.id !== idToRemove);
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
							title: this.$t('sel'),
							icon: 'none',
							duration: 2000
						});
					}
				})
			},
			// 
			uploadImg(filePath) {
				uploadImage(filePath).then(res=>{
					let data = {
						id: res.data.id,
						url: res.data.uri
					}
					this.uploadedImages.push(data)
				})
			},
			
			// 保存
			onSharePoster(){
				let { uploadedImages } = this
				if(!uploadedImages.length > 0) return
				const imageArray = uploadedImages.map(item => item.url);
				request('poster/saveSharePoster', 'POST',{images: imageArray}).then(res=>{
					uni.showToast({
						title: this.$t('tuB'),
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
					this.uploadedImages = []
					
					setTimeout(()=>{
						this.toLaunch('/pages/tabs/InactX')
					},1500)
				})
			},
			
			
		}
	}
</script>

<style lang="scss">
	.Action {
		width: 100%;
		height: 100%;
		overflow-y: auto;

		.Action_tab {
			margin: 20rpx 16.67rpx;
			box-sizing: border-box;
			height: 80rpx;
			background: #002656;
			color: #fff;
			font-size: 33.33rpx;

			view {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			.add {
				background: #09D0BE;
			}
		}

		.Action_body {
			margin: 50rpx 16.67rpx 200rpx;
			background: linear-gradient(130deg, #222E71 0%, #00197E 100%);
			border-radius: 11rpx;
			padding: 30rpx;
			box-sizing: border-box;
			font-size: 29.17rpx;

			.Action_body_image {
				width: 100%;
				height: 347.22rpx;
				margin: 40rpx 0;
			}

			.Action_body_app {
				// text-align: right;
				margin: 40rpx 0;

				image {
					margin-right: 30rpx;
				}
			}

			.Action_body_text {
				font-size: 32rpx;
				color: #F5AE18;
				padding-bottom: 50rpx;
				border-bottom: #0A4DB1 2rpx solid;
				margin-bottom: 45rpx;
			}

			.Action_body_text1 {
				color: #F5AE18;
				margin: 40rpx 0;
			}

			.Action_body_btn {
				border-radius: 5.56rpx;
				height: 88.89rpx;
				background: #9137C1;
				margin-bottom: 70rpx;
				text-align: center;
				line-height: 88.89rpx;
				font-size: 33.33rpx;
			}

			.Action_body_upload {
				margin-bottom: 120rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

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

				.add {
					margin-bottom: 5px;
					width: 181.25rpx;
					height: 181.25rpx;
					border: 1rpx solid #09D0BE;
					box-sizing: border-box;
					display: flex;
					align-items: center;
					justify-content: center;

					image {
						width: 86.11rpx;
						height: 84.03rpx;
					}
				}
			}
		}
	}
</style>