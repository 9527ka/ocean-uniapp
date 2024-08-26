<template>
	<web-view :src="url"></web-view>
</template>

<script>
	export default {
		data() {
			return {
				url: '' // 这里将会传入第三方页面的 URL
			};
		},
		onLoad(options) {
			// 从上一个页面传递的参数获取 URL
			if (options.url) {
				this.url = decodeURIComponent(options.url);
			}
		}
	};
</script>