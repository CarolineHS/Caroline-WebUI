# ApiAdmin前期环境搭建

| 版本 |    时间    |           描述           | 开发者 |
| :--: | :--------: | :----------------------: | :----: |
| v1.0 | 2023/09/06 | ApiAdmin前期环境搭建文档 |  何双  |

## 一、php环境搭建

### 1. 下载phpstudy

基本集成了php需要的所有配置：mysql，redis，Nginx，Apache等，Nginx和Apache只能开启一个。

网址：https://www.xp.cn/

网站 -> 创建网站 -> 创建域名 -> 可在浏览器中搜索创建域名，显示站点创建成功。

## 二、安装Vue环境

### 1. 安装node.js

官网下载：https://nodejs.org/en/download     64位Windows，==安装16左右的版本==

基本按照默认配置安装，修改路径，安装完成后，检查一下是否安装成功，打开cmd，输入`node -v`以及`npm -v`分别显示版本号即安装成功。

### 2. 创建全局安装目录和缓存日志目录

1）在nodejs的安装目录下，分别创建名为node_cache和node_global的两个文件夹。

```
D:\software\progress\nodejs
D:\software\progress\nodejs\node_cache
D:\software\progress\nodejs\node_global
```

2）管理员权限打开cmd窗口，将npm的全局模块目录和缓存目录配置到我们刚才创建的那两个目录。

```
npm config set prefix "D:\software\progress\nodejs\node_global"
npm config set cache "D:\software\progress\nodejs\node_cache"
```

3）为了以后下载包快速，修改源为淘宝镜像。（这里修改了，我们就不需要安装cnpm了，因为cnpm就是Node.js淘宝镜像加速器，这里配置了就不需要安装了）

```
npm config set registry https://registry.npm.taobao.org
```

4）查看npm配置是否修改成功

```
npm config list

// 显示以下内容则代表修改成功 
; "builtin" config from D:\software\progress\nodejs\node_modules\npm\npmrc
// 默认安装包目录是在这里，用户重写修改了配置文件
; prefix = "C:\\Users\\25589\\AppData\\Roaming\\npm" ; overridden by user
// 记录修改信息的文件
; "user" config from C:\Users\25589\.npmrc
// 刚才修改的信息
cache = "D:\\software\\progress\\nodejs\\node_cache"
prefix = "D:\\software\\progress\\nodejs\\node_global"
registry = "https://registry.npm.taobao.org"
```

### 3. 配置环境变量

在安装过程中，自动配置了两个环境变量一个是环境变量---用户变量---Path里面的C:\Users\你的用户名\AppData\Roaming\npm另一个是环境变量---系统变量---Path里面的软件安装目录，我们需要增加和修改一下。

1）环境变量--用户变量--选中Path--点击编辑，将 C:\Users\你的用户名\AppData\Roaming\npm修改为D:\software\progress\nodejs\node_global

2）环境变量--系统变量--新建

1. 变量名：NODE_PATH
2. 变量值：D:\software\progress\nodejs\node_global\node_modules
3. 注意：在这里node_modules目录是还没有的，等把模块安装到全局目录下就会自动生成这个文件夹

3）系统变量--Path添加上%NODE_PATH%

### 4. 安装Vue

#### 1）安装vue.js

```
npm install vue -g
```

​	其中-g是全局安装，指安装到global全局目录去，如果不加-g，模块就会安装到当前路径下的node_modules文件夹下，没有目录则自动创建。

​	如果出现了这个问题，是因为当前用户没有这个权限。

```
C:\Users\25589>npm install vue -g
npm ERR! code EPERM
npm ERR! syscall mkdir
npm ERR! path D:\software\progress\nodejs\node_cache\_cacache
npm ERR! errno -4048
npm ERR! Error: EPERM: operation not permitted, mkdir 'D:\software\progress\nodejs\node_cache\_cacache'
npm ERR!  [Error: EPERM: operation not permitted, mkdir 'D:\software\progress\nodejs\node_cache\_cacache'] {
npm ERR!   errno: -4048,
npm ERR!   code: 'EPERM',
npm ERR!   syscall: 'mkdir',
npm ERR!   path: 'D:\\software\\progress\\nodejs\\node_cache\\_cacache',
npm ERR!   requiredBy: '.'
npm ERR! }
```

​	解决办法是：直接使用管理员身份运行cmd，再使用以上指令。

```安装成功
PS C:\Users\25589> npm install vue -g

added 20 packages in 4s
npm notice
npm notice New major version of npm available! 9.6.7 -> 10.0.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.0.0
npm notice Run npm install -g npm@10.0.0 to update!
npm notice
```

#### 2）安装webpack模板

```
npm install webpack -g
// 安装成功
PS C:\Users\25589> npm install webpack -g

added 77 packages in 7s
```

​	此外，在webpack 4x以上，webpack将命令相关的内容都放到了webpack-cli，所以还需要安装webpack-cli

```
npm install webpack-cli -g
// 安装成功
PS C:\Users\25589> npm install webpack-cli -g

added 117 packages in 5s
```

​	输入 webpack -v，能输出版本号就说明都安装好了。

```
// 如果报错
webpack : 无法加载文件 D:\software\progress\nodejs\node_global\webpack.
ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microso
ft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ webpack -v
+ ~~~~~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityExceptio
    n
    + FullyQualifiedErrorId : UnauthorizedAccess

// 执行以下代码
PS C:\Users\25589> get-ExecutionPolicy
Restricted     // 表示状态是禁止的
PS C:\Users\25589> set-ExecutionPolicy RemoteSigned
PS C:\Users\25589> get-ExecutionPolicy
RemoteSigned
```

#### 3）安装脚手架vue-cli

```
npm install vue-cli -g

// 安装成功
PS C:\Users\25589> npm install vue-cli -g
npm WARN deprecated vue-cli@2.9.6: This package has been deprecated in favour of @vue/cli
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN deprecated consolidate@0.14.5: Please upgrade to consolidate v1.0.0+ as it has been modernized with several long-awaited fixes implemented. Maintenance is supported by Forward Email at https://forwardemail.net ; follow/watch https://github.com/ladjs/consolidate for updates and release changelog
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated coffee-script@1.12.7: CoffeeScript on NPM has moved to "coffeescript" (no hyphen)

added 233 packages in 13s
// 输入vue --version， 能输出版本号即安装成功
PS C:\Users\25589> vue --version
2.9.6
```

#### 4）安装vue-router

```
npm install vue-router -g

// 安装成功
PS C:\Users\25589> npm install vue-router -g

added 22 packages in 3s
```

全部配置完成后打开自定义的全局模块目录下的node_modules文件夹，会发现安装的模块都统一在这里。