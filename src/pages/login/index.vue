<template>
	<view class="pages-login-index">
		<view class="form-container">
			<wd-form ref="form" :model="model">
				<wd-cell-group border>
					<wd-input
						v-model="model.username"
						label="用户名"
						label-width="100px"
						prop="username"
						clearable
						placeholder="请输入用户名"
						:rules="[{ required: true, message: '请填写用户名' }]"
					/>
					<wd-input
						v-model="model.password"
						label="密码"
						label-width="100px"
						prop="password"
						show-password
						clearable
						placeholder="请输入密码"
						:rules="[{ required: true, message: '请填写密码' }]"
					/>
				</wd-cell-group>
				<view class="footer">
					<wd-button block @click="handleSubmit">提交</wd-button>
				</view>
			</wd-form>
		</view>
	</view>
	<wd-toast></wd-toast>
</template>

<script lang="ts" setup>
import { login } from '@/request/login';
import { useToast } from 'wot-design-uni';

const { success: showSuccess } = useToast();

const model = ref<{
	username: string;
	password: string;
}>({
	username: '',
	password: '',
});

const form = ref();

function handleSubmit() {
	form.value
		.validate()
		.then(async ({ valid }: { valid: boolean }) => {
			if (valid) {
				const result = await login({
					url: '/analysis/application/account/login',
					data: model.value,
					method: 'POST',
				});
				if (result) {
					console.log(result.content);
					showSuccess({
						msg: '登录成功',
					});
					setTimeout(() => {
						uni.setStorageSync('token', 'token');
						uni.switchTab({
							url: '/pages/index/index',
						});
					}, 1000);
				}
			}
		})
		.catch((error: string) => {
			console.log(error, 'error');
		});
}
</script>
<style lang="scss" scoped>
.pages-login-index {
	position: relative;
	height: 100vh;

	.form-container {
		position: absolute;
		bottom: 30vh;
		left: 0;
		width: 100%;
	}

	.footer {
		padding: 50px;
	}
}
</style>
