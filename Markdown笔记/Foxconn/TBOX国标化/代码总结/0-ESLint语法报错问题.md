## ESLint语法报错

#### 运行报错

```
You may use special comments to disable some warnings.
Use // eslint-disable-next-line to ignore the next line.
Use /* eslint-disable */ to ignore all warnings in a file.
```

#### 解决方案

1. 关闭eslint的语法检测，在eslintrc.js文件中，注释掉`eslint:recommended`
2. 如果你的项目是vue脚手架工程，那么找到项目根目录下的build文件夹下的webpack.base.conf.js，找到以下代码块并注释掉第三行代码

```
 module: {
    rules: [
      ...(config.dev.useEslint ? [createLintingRule()] : []),  //注释掉该行代码
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
```

3. 当项目并不存在build文件夹，即不属于vue脚手架工程，那请到根目录下 config文件夹下的index.js文件，将useEslint属性设置为false。
4. 如果是vue3新项目的话，找不到上面的文件，找到vue.config.js把vue.config.js中的lintOnSave的值改为false即可。但如果在vue.config.js中没有lintOnSave则添加`lintOnSave: false`到

```js
module.exports = {
  publicPath: BASE_URL,
  // lintOnSave: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('_c', resolve('src/components'))
  },
  configureWebpack: {
    externals: {
      vue: 'Vue',
      'vue-design': 'view-design'
    }
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://www.tbox.com/'
  }
}
```

