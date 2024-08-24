
const BASE_URL = 'https://a.yuejie.online';

// 获取本地存储中的 token
const getStorage = (v = 'token') => {
    return uni.getStorageSync(v); // 假设 token 存储在 uni-app 的本地存储中
};


// 跳转到登录页
const redirectToLogin = () => {
    setTimeout(()=>{
		uni.redirectTo({
		    url: '/pages/login/login' // 替换成你的登录页路径
		});
	},2000)
};

const uploadImage = (filePath) => {
	uni.showLoading({
		title: "loading..."
	});
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: BASE_URL + '/api/upload/image',
			filePath: filePath,
			name: 'file',
			header: {
				token: getStorage('token')
			},
			success: (res) => {
				const data = JSON.parse(res.data);
				uni.hideLoading();
				if (data.code == 1 ) {
				    resolve(data);
				} else {
				    // 根据返回的状态码进行处理
				    if (data.code === -101 || data.code === -102) {
				        // 如果 token 无效或过期，重定向到登录页
				        redirectToLogin();
				    } 
					uni.showToast({
						title: data.msg || 'err',
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
				}
			},
			fail: () => {
				uni.hideLoading();
				reject(error);
				uni.showToast({
					title: 'err',
					icon: 'none'
				});
				
			}
		})
	})
	
}
			

// 封装请求函数
const request = (url, method = 'GET', data = {}, headers = {}) => {
	uni.showLoading({
		title: "loading..."
	});
	return new Promise((resolve, reject) => {
        const token = getStorage('token');
        
        // if (url !== 'login/account' && !token) {
        //     // 如果没有 token，重定向到登录页
        //     redirectToLogin();
        //     reject(new Error('No token found. Redirecting to login.'));
        //     return;
        // }

        uni.request({
            url: `${BASE_URL}/api/${url}`,
            method: method,
            data: {...data, lang: getStorage('lang')},
            header: {
                'Content-Type': 'application/json',
                'token': `${token}`, // 将 token 加入请求头
                ...headers
            },
            success: (response) => {
				uni.hideLoading();
                if (response.data.code == 1 ) {
                    resolve(response);
                } else {
                    // 根据返回的状态码进行处理
                    if (response.data.code === -101 || response.data.code === -102) {
                        // 如果 token 无效或过期，重定向到登录页
                        redirectToLogin();
                    } 
					uni.showToast({
						title: response.data.msg || 'err',
						duration: 2000,
						mask: true,
						position: "top",
						icon: "none"
					});
                }
            },
            fail: (error) => {
				uni.hideLoading();
                reject(error);
            },
        });
    });
};



export {request, BASE_URL, uploadImage}