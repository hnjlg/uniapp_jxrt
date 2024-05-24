import { createSSRApp } from 'vue';
import App from './App.vue';

// 白名单
const whitelist = ['/pages/login/index'];

// 拦截器数组
const list = ['navigateTo', 'redirectTo', 'reLaunch', 'switchTab'];

list.forEach((item) => {
	uni.addInterceptor(item, {
		invoke(e) {
			// 调用前拦截
			//获取用户的token
			// const token = localStorage.getItem('token');
			//获取当前页面路径（即url去掉"?"和"?"后的参数）
			const url = e.url.split('?')[0];
			console.log(url, 'router index url');
			console.log(whitelist);
			//判断要打开的页面是否需要验证登录
			// uni.navigateTo({
			// 	url: '/pages/login/index',
			// });
			// return false;
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
