<template>
	<view class="pages-work-index">
		<view class="work-title">工作台</view>
		<image class="work-bg" src="../../static/images/work-bg.png" mode="aspectFill"></image>
		<wd-grid :column="4" class="work-entrance">
			<wd-grid-item icon="fork" text="组织" />
			<wd-grid-item icon="calendar" text="考勤" />
			<wd-grid-item icon="money-circle" text="薪资" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
			<wd-grid-item icon="picture" text="文字" />
		</wd-grid>
	</view>
</template>

<script lang="ts" setup></script>

<style lang="scss">
@import './index';
</style>
