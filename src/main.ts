import { createSSRApp } from 'vue';
import App from './App.vue';
import VConsole from 'vconsole';

// #ifdef H5
if (import.meta.env.MODE === 'development') {
	new VConsole();
}
// #endif

// 白名单
const whitelist = ['/pages/login/index'];

// 拦截器数组
const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];

list.forEach((item) => {
	uni.addInterceptor(item, {
		invoke(e) {
			// 调用前拦截
			//获取用户的token
			const token = uni.getStorageSync('token');
			const url = e.url.split('?')[0];
			if (!whitelist.includes(url) && !token) {
				uni.navigateTo({
					url: '/pages/login/index',
				});
				return false;
			}
			return true;
		},
		fail(err) {
			// 失败回调拦截
			console.log(err);
		},
	});
});

export function createApp() {
	const app = createSSRApp(App);
	return {
		app,
	};
}
