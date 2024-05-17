# sass样式预处理器

`npm i sass@1.15.0 postcss@8.4.16 postcss-html@1.5.0 postcss-scss@4.0.4 -D`

# stylelint

`npm i stylelint@14.11.0 stylelint-config-prettier@9.0.3 stylelint-config-recommended-scss@7.0.0 stylelint-config-standard@28.0.0 stylelint-config-standard-vue@1.0.0 stylelint-order@5.0.0 stylelint-scss@4.3.0 -D`

`package.json`新增scripts

```json
"style": "stylelint \"./**/*.{css,scss,sass,vue,html}\" --fix"
```

`.vscode/settings.json`新增内容

```json
// 配置在保存时，执行stylelint
"editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
}
```

`.lintstagedrc`新增内容

```
"src/**/*.{html,vue,css,sass,scss}": ["stylelint --fix"]
```

新增`.stylelintignore`文件

忽略文件，暂为空

新增`.stylelintrc.js`文件

```js
module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-config-standard-vue',
        'stylelint-config-prettier',
    ],
    plugins: ['stylelint-order'],
    // 不同格式的文件指定自定义语法
    overrides: [
        {
            files: ['**/*.(scss|css|vue|html)'],
            customSyntax: 'postcss-scss',
        },
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html',
        },
    ],
    ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts', '**/*.json', '**/*.md', '**/*.yaml'],
    rules: {
        'string-quotes': 'single',
        // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
        'no-descending-specificity': null,
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep'],
            },
        ],
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['deep'],
            },
        ],
        // 禁用每个选择器之前插入空行
        'rule-empty-line-before': null,
        // 禁止小于 1 的小数有一个前导零
        // 'number-leading-zero': 'never',
        // 一些特殊的scss指令
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['function', 'if', 'else', 'else-if', 'each', 'include', 'mixin'],
            },
        ],
        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-same-name-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else', 'else-if'],
            },
        ],
        // 指定样式的排序
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-content',
            'align-items',
            'flex-shrink',
            'float',
            'clear',
            'overflow',
            'overflow-x',
            'overflow-y',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'font-size',
            'font-family',
            'text-align',
            'text-justify',
            'text-indent',
            'text-overflow',
            'text-decoration',
            'white-space',
            'color',
            'background',
            'background-position',
            'background-repeat',
            'background-size',
            'background-color',
            'background-clip',
            'border',
            'border-style',
            'border-width',
            'border-color',
            'border-top-style',
            'border-top-width',
            'border-top-color',
            'border-right-style',
            'border-right-width',
            'border-right-color',
            'border-bottom-style',
            'border-bottom-width',
            'border-bottom-color',
            'border-left-style',
            'border-left-width',
            'border-left-color',
            'border-radius',
            'opacity',
            'filter',
            'list-style',
            'outline',
            'visibility',
            'box-shadow',
            'text-shadow',
            'resize',
            'transition',
            'content',
        ],
    },
};
```



