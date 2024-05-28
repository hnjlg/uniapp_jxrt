<template>
	<wd-navbar title="个人薪资" left-text="返回" left-arrow @click-left="handleClickLeft"></wd-navbar>
	<view v-for="index in num" :key="index">
		<wd-card>
			<wd-row>
				<wd-col :span="12"><view>付款状态：已付款</view></wd-col>
				<wd-col :span="12"><view>付款时间：2024/02/10</view></wd-col>
			</wd-row>
			<wd-row>
				<wd-col :span="8"><view>类型：月薪</view></wd-col>
				<wd-col :span="16"><view>薪资月份：202404</view></wd-col>
			</wd-row>
			<wd-row>
				<wd-col :span="6"><view>发放方式：公司</view></wd-col>
				<wd-col :span="18"><view>发放单位：长沙创速信息技术有限公司</view></wd-col>
			</wd-row>
			<wd-row>
				<wd-col :span="8"><view>应发合计（元）：20000</view></wd-col>
				<wd-col :span="8"><view>应扣合计（元）: 1689</view></wd-col>
				<wd-col :span="8"><view>实发薪资（元）: 18311</view></wd-col>
			</wd-row>
		</wd-card>
	</view>
	<wd-loadmore :state="state" @reload="loadmore" />
</template>

<script lang="ts" setup>
const handleClickLeft = () => {
	uni.navigateBack();
};

uni.showLoading({
	title: '加载中',
});

setTimeout(() => {
	uni.hideLoading();
}, 1000);

import { onLoad, onReachBottom } from '@dcloudio/uni-app';

// 第三方组件ts报错LoadMoreState
const state = ref<any>('loading');
const num = ref<number>(0);
const max = ref<number>(60);

onReachBottom(() => {
	if (num.value === 45) {
		state.value = 'error';
	} else if (num.value < max.value) {
		loadmore();
	} else if (num.value === max.value) {
		state.value = 'finished';
	}
});

onLoad(() => {
	loadmore();
});

function loadmore() {
	setTimeout(() => {
		num.value = num.value + 15;
		state.value = 'loading';
	}, 200);
}
</script>

<style lang="scss" scoped>
:deep(.wd-row) {
	display: flex;
	justify-content: space-between;
}
</style>
