<template>
	<div class="my">my</div>
</template>

<script lang="ts" setup>
import { onShow } from '@dcloudio/uni-app';

onShow(() => {
	// 如果没有权限，重新跳转
	uni.navigateTo({
		url: '/pages/login/index',
	});
});
</script>
