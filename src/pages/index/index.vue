<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" />
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
console.log(import.meta.env.VITE_HTTP);
</script>

<style lang="scss">
.content {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.logo {
	width: 200rpx;
	height: 200rpx;
	margin-top: 200rpx auto 50rpx auto;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
