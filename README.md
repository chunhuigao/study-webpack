# 第一阶段

## 初始化

```shell
npm init -y
```

## 安装 webpack

```shell
yarn add  webpack webpack-cli webpack-merge cross-env -D
```

## 新建目录

根目录新建/config 文件夹
config/webpack.common.js
config/webpack.dev.js
config/webpack.prod.js

### 基本的输入输出

#### config/webpack.common.js

```js
const path = require('path')
module.exports = {
  entry: {
    index: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: 'js/[name].[chunkhash:4].js',
    path: path.resolve(__dirname, '../dist'),
  },
}
```

#### config/webpack.prod.js

```js
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackCommon = require('./webpack.common')
module.exports = merge(webpackCommon, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
})
```

### 修改 package.json

```git
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
+   "build": "cross-env NODE_END=production webpack --config ./config/webpack.prod.js"
},
```

### 初次执行

```shell
npm run build
```

## 第一阶段结束

至此 webpack 已经可以打包 js 代码了
