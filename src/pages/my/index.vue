<template>
	<view class="pages-my-index">
		<image src="../../static/images/work-bg.png" mode="aspectFill"></image>
		<wd-card title="我的">
			<wd-cell title="开票公司" value="金六谷医药物流" />
			<wd-cell title="税号" value="0088991122" />
		</wd-card>
		<wd-card title="功能">
			<wd-cell title="退出登录" is-link @click="handleLogout" />
		</wd-card>
	</view>
	<wd-message-box />
</template>

<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app';
import { useMessage } from 'wot-design-uni';
const message = useMessage();

const handleLogout = () => {
	message
		.confirm({
			msg: '是否确认退出登录',
			title: '提示',
		})
		.then(() => {
			uni.removeStorageSync('token');
			uni.reLaunch({
				url: '/pages/login/index',
			});
		})
		.catch(() => {
			console.log('点击了取消按钮');
		});
};

onShow(() => {
	// 如果没有权限，重新跳转
	if (!uni.getStorageSync('token')) {
		uni.navigateTo({
			url: '/pages/login/index',
		});
	}
});
</script>

<style lang="scss">
.pages-my-index {
	height: calc(100vh - 60px);
	background-color: #f3f5fb;
}
</style>
