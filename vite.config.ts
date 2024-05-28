import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import svgLoader from 'vite-svg-loader';
import fs from 'fs';

const data = fs.readFileSync(`./.env.${process.env.NODE_ENV}`, 'utf8');

const env: any = {};
data.split('\n').forEach((line) => {
	const [key, value] = line.split('=').map((item) => item.trim());
	env[key] = value;
});

console.log(env);

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: process.env.NODE_ENV === 'development',
	},
	plugins: [
		uni(),
		svgLoader(),
		AutoImport({
			imports: ['vue', 'uni-app'],
			// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
			// dts: 'src/auto-import.d.ts'
			// 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
			eslintrc: {
				enabled: true,
			},
		}),
	],
	define: {
		'import.meta.env.VITE_BASE_URL': JSON.stringify(env.VITE_AXIOS_BASE_URL),
	},
});
