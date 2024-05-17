`npm i @dcloudio/uni-ui@1.5.5 unplugin-auto-import@0.17.6 `

`tsconfig.ts`include添加

```json
"include":[
    ...,
    "auto-imports.d.ts"
]
```

`vite.config.ts`添加plugins

```tsx
import uni from "@dcloudio/vite-plugin-uni";


plugins:[
    ...,
    AutoImport({
			imports: ['vue', 'uni-app'],
			// 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
			// dts: 'src/auto-import.d.ts'
			// 自动生成'eslintrc-auto-import.json'文件，在'.eslintrc.cjs'的'extends'中引入解决报错
			eslintrc: {
				enabled: true,
			},
		}),
]
```

`pages.json`添加easycom

```json
 "easycom": {
        "autoscan": true,
        "custom": {
            // uni-ui 规则如下配置
            "^uni-(.*)": "@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue"
        }
  },
```



