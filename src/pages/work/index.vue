<template>
	<view class="pages-work-index">
		<view class="work-title">工作台</view>
		<image class="work-bg" src="../../static/images/work-bg.png" mode="aspectFill"></image>
		<wd-grid :column="4" class="work-entrance">
			<wd-grid-item
				icon="money-circle"
				:custom-class="selectWorkEntrance === 'pay' ? 'selected-work-entrance' : ''"
				text="薪资"
				@click="handleWorkEntrance('pay')"
			/>
			<wd-grid-item icon="fork" text="组织" />
			<wd-grid-item icon="calendar" text="考勤" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
		</wd-grid>
		<view>
			<wd-card v-for="menu in menuArr" :key="menu.title" :title="menu.title">
				<wd-tag v-for="child in menu.children" :key="child.title" type="primary" round custom-class="tag-space" @click="goToWorkPage(child)">{{
					child.title
				}}</wd-tag>
			</wd-card>
		</view>
	</view>
</template>

<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app';

const selectWorkEntrance = ref('pay');

const handleWorkEntrance = (key: string) => {
	selectWorkEntrance.value = key;
};

const menuArr = computed(() => {
	return menuData.value[selectWorkEntrance.value];
});

const goToWorkPage = (menu: I_Menu_item) => {
	if (!menu.url) return;
	uni.navigateTo({ url: menu.url });
};

interface I_Menu_item {
	title: string;
	url?: string;
	children?: I_Menu_item[];
}

const menuData = ref<{
	[k in string]: I_Menu_item[];
}>({
	pay: [
		{
			title: '薪酬管理',
			children: [
				{
					title: '个人薪资',
					url: '/pages/work-entrance/individual_salary/index',
				},
				{
					title: '薪资管理',
					url: 'individual_salary',
				},
				{
					title: '薪资记录',
					url: 'individual_salary',
				},
				{
					title: '社保记录',
					url: 'individual_salary',
				},
				{
					title: '个税管理',
					url: 'individual_salary',
				},
				{
					title: '调薪管理',
					url: 'individual_salary',
				},
				{
					title: '薪资人员关联',
					url: 'individual_salary',
				},
			],
		},
		{
			title: '福利管理',
			children: [
				{
					title: '生日福利',
					url: 'individual_salary',
				},
				{
					title: '美德基金',
					url: 'individual_salary',
				},
				{
					title: '储值卡管理',
					url: 'individual_salary',
				},
				{
					title: '福利管理',
					url: 'individual_salary',
				},
				{
					title: '奖惩管理',
					url: 'individual_salary',
				},
			],
		},
		{
			title: '奖惩管理',
			children: [
				{
					title: '奖惩管理',
					url: 'individual_salary',
				},
			],
		},
	],
});

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
@import './index';
</style>
