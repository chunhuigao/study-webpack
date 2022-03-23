---
theme: channing-cyan
---
## 前言

[上一章：从零搭一个极简版 webpack+React 工程（五）](https://juejin.cn/post/7076818753597472798)

经过一番折腾，作者已经简单搭建出一个 webpack + react + TS 的工程；现在定义一下代码风格。毕竟团队工作，良好的代码风格还是可以帮助提高一下团队效率的。

## 安装 eslint

### 全局安装 eslint

```shell
npm i eslint -g
```

### 配置文件初始化

```shell
eslint --init
```

`How would you like to use ESLint?`

- To check syntax only
- To check syntax and find problems
- `To check syntax, find problems, and enforce code style`

`What type of modules does your project use?`

- `JavaScript modules (import/export)`
- CommonJS (require/exports)
- None of these

`Which framework does your project use? `

- `React`
- Vue.js
- None of these

`Does your project use TypeScript?`

- `Yes`
- No

`Where does your code run? `

- `Browser`
- `Node`

`How would you like to define a style for your project? `

- `Use a popular style guide`
- Answer questions about your style

`Which style guide do you want to follow?`

- `Airbnb: https://github.com/airbnb/javascript`
- Standard: https://github.com/standard/standard
- Google: https://github.com/google/eslint-config-google
- XO: https://github.com/xojs/eslint-config-xo

`What format do you want your config file to be in?`

- `JavaScript`
- YAML
- JSON

等待 eslint 安装

`Would you like to install them now with npm?`

- `Yes`
- No

漫长的等待,当看到这句话 eslint 安装完成

`Successfully created .eslintrc.js file in `

### 默认 eslint 配置

安装完 eslint 根目录会生成 .eslintrc.js 这个文件

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
```

## 安装 @types/react @types/react-dom

```shell
npm i @types/react @types/react-dom -D
```
