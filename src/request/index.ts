interface AnyObject {
	[key: string]: any;
}

interface GeneralCallbackResult {
	/**
	 * 错误信息
	 */
	errMsg: string;
}

interface RequestSuccessCallbackResult {
	/**
	 * 开发者服务器返回的数据
	 */
	data: string | AnyObject | ArrayBuffer;
	/**
	 * 开发者服务器返回的 HTTP 状态码
	 */
	statusCode: number;
	/**
	 * 开发者服务器返回的 HTTP Response Header
	 */
	header: any;
	/**
	 * 开发者服务器返回的 cookies，格式为字符串数组
	 */
	cookies: string[];
}

export interface RequestOptions {
	/**
	 * 资源url
	 */
	url: string;
	/**
	 * 请求的参数
	 */
	data?: string | AnyObject | ArrayBuffer;
	/**
	 * 设置请求的 header，header 中不能设置 Referer。
	 */
	header?: any;
	/**
	 * 默认为 GET
	 * 可以是：OPTIONS，GET，HEAD，POST，PUT，DELETE，TRACE，CONNECT
	 */
	method?: 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
	/**
	 * 超时时间
	 */
	timeout?: number;
	/**
	 * 如果设为json，会尝试对返回的数据做一次 JSON.parse
	 */
	dataType?: string;
	/**
	 * 设置响应的数据类型。合法值：text、arraybuffer
	 */
	responseType?: string;
	/**
	 * 验证 ssl 证书
	 */
	sslVerify?: boolean;
	/**
	 * 跨域请求时是否携带凭证
	 */
	withCredentials?: boolean;
	/**
	 * DNS解析时优先使用 ipv4
	 */
	firstIpv4?: boolean;
	/**
	 * 开启 http2
	 */
	enableHttp2?: boolean;
	/**
	 * 开启 quic
	 */
	enableQuic?: boolean;
	/**
	 * 开启 cache
	 */
	enableCache?: boolean;
	/**
	 * 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
	 */
	enableHttpDNS?: boolean;
	/**
	 * HttpDNS 服务商 Id。 HttpDNS 用法详见 [移动解析HttpDNS](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/HTTPDNS.html)
	 */
	httpDNSServiceId?: boolean;
	/**
	 * 开启 transfer-encoding chunked
	 */
	enableChunked?: boolean;
	/**
	 * wifi下使用移动网络发送请求
	 */
	forceCellularNetwork?: boolean;
	/**
	 * 默认 false，开启后可在headers中编辑cookie（支付宝小程序10.2.33版本开始支持）
	 */
	enableCookie?: boolean;
	/**
	 * 是否开启云加速（详见[云加速服务](https://smartprogram.baidu.com/docs/develop/extended/component-codeless/cloud-speed/introduction/)）
	 */
	cloudCache?: object | boolean;
	/**
	 * 控制当前请求是否延时至首屏内容渲染后发送
	 */
	defer?: boolean;
	success?: (result: RequestSuccessCallbackResult) => void;
	/**
	 * 失败的回调函数
	 */
	fail?: (result: GeneralCallbackResult) => void;
	/**
	 * 结束的回调函数（调用成功、失败都会执行）
	 */
	complete?: (result: GeneralCallbackResult) => void;
}

export const request = (options: RequestOptions) => {
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中',
		});
		uni.request({
			url: import.meta.env.VITE_BASE_URL + options.url,
			method: options.method,
			data: options.data,
			timeout: 10000,
			success: (response: any) => {
				// 自定义逻辑
				if (response.data.status) {
					return resolve(response.data);
				} else {
					uni.showToast({ title: '接口请求失败' });
					reject(response.data.message);
				}
			},
			fail: (err) => {
				return reject(err);
			},
			complete() {
				uni.hideLoading();
			},
		});
	});
};
