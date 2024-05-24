<template>
	<view class="pages-index">
		<wd-card title="新员工介绍" class="new-staff-introduce">
			<wd-swiper :list="swiperList" direction="vertical" indicator-position="right" autoplay :indicator="{ type: 'dots-bar' }" @change="swiperChange">
			</wd-swiper>
			<view class="new-staff-description">
				<text>{{ currentStaff.name }}-{{ currentStaff.dep }}-{{ currentStaff.job }}</text>
			</view>
		</wd-card>
		<wd-card title="常用模块">
			<view class="common-functions">
				<view class="common-functions-item common-functions-item-my-affairs">我的事务</view>
				<view class="common-functions-item common-functions-item-personnel-file">人事档案</view>
				<view class="common-functions-item common-functions-item-reimbursement">费用报销</view>
				<view class="common-functions-item common-functions-item-material-mall">物资商城</view>
				<view class="common-functions-item common-functions-item-salary-management">薪资管理</view>
			</view>
		</wd-card>

		<wd-tabs swipeable animated>
			<wd-tab title="规章制度">
				<view class="rules-regulations">
					<wd-cell title="2024年新员工手册" value="2024/02/22" />
					<wd-cell title="部门申请资产注意事项" value="2024/02/26" />
					<wd-cell title="员工年终总结编写示范" value="2024/02/29" />
				</view>
				<view class="more">查看更多<wd-icon name="pointing-hand" size="16px"></wd-icon></view>
			</wd-tab>
			<wd-tab title="报告列表">
				<wd-cell title="实习报告" title-width="260px" value="工作周报">
					<template #label>
						<view>
							<wd-icon name="time" size="16px"></wd-icon>
							<text>2024/5/16</text>
						</view>
						<view>
							<wd-icon name="user" size="22px"></wd-icon>
							<text>[憨憨][实习部][实习生]</text>
						</view>
					</template>
				</wd-cell>
				<wd-cell title="实习报告" title-width="260px" value="工作周报">
					<template #label>
						<view>
							<wd-icon name="time" size="16px"></wd-icon>
							<text>2024/5/20</text>
						</view>
						<view>
							<wd-icon name="user" size="22px"></wd-icon>
							<text>[憨憨][实习部][实习生]</text>
						</view>
					</template>
				</wd-cell>
				<wd-cell title="实习报告" title-width="260px" value="工作周报">
					<template #label>
						<view>
							<wd-icon name="time" size="16px"></wd-icon>
							<text>2024/5/25</text>
						</view>
						<view>
							<wd-icon name="user" size="22px"></wd-icon>
							<text>[憨憨][实习部][实习生]</text>
						</view>
					</template>
				</wd-cell>
				<view class="more">查看更多<wd-icon name="pointing-hand" size="16px"></wd-icon></view>
			</wd-tab>
		</wd-tabs>
	</view>
</template>

<script setup lang="ts">
import type { T_Wd_Swiper_Change_Fn } from '@/global';

const swiperList = ref([
	'https://unpkg.com/wot-design-uni-assets/redpanda.jpg',
	'https://unpkg.com/wot-design-uni-assets/capybara.jpg',
	'https://unpkg.com/wot-design-uni-assets/panda.jpg',
	'https://img.yzcdn.cn/vant/cat.jpeg',
	'https://unpkg.com/wot-design-uni-assets/meng.jpg',
]);

const staffList = ref([
	{
		name: '火箭',
		dep: '超级少侠',
		job: '队长',
	},
	{
		name: '豪猪',
		dep: '超级少侠',
		job: '混子',
	},
	{
		name: 'panda',
		dep: '超级少侠',
		job: '卖萌',
	},
	{
		name: '黑猫',
		dep: '警队',
		job: '警长',
	},
	{
		name: '憨憨',
		dep: '实习部',
		job: '实习生',
	},
]);

const currentStaff = ref(staffList.value[0]);

const swiperChange: T_Wd_Swiper_Change_Fn = (params) => {
	currentStaff.value = staffList.value[params.current];
};

uni.showLoading({
	title: '加载中',
});

setTimeout(() => {
	uni.hideLoading();
}, 1000);
</script>

<style lang="scss" scoped>
.pages-index {
	.common-functions {
		display: flex;

		.common-functions-item {
			width: 100px;
			height: 36px;
			margin: 0 5px;
			font-size: 12px;
			text-align: center;
			border-radius: 10px;
			line-height: 36px;
		}

		.common-functions-item-my-affairs {
			background: linear-gradient(to right, rgb(238 156 167), rgb(255 221 225));
		}

		.common-functions-item-personnel-file {
			background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
		}

		.common-functions-item-reimbursement {
			background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);
		}

		.common-functions-item-material-mall {
			background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);
		}

		.common-functions-item-salary-management {
			background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);
		}
	}

	.new-staff-introduce {
		position: relative;

		.new-staff-description {
			position: absolute;
			bottom: 0;
		}
	}

	:deep(.wd-tabs) {
		.more {
			height: 24px;
			font-size: 12px;
			text-align: center;
			color: #afd4fc;
			line-height: 24px;
		}
	}
}
</style>
