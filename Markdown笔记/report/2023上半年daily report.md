### 2023.02.06-2023.02.10

#### 2023年2月6日星期一

1. 记单词100
2. 移动web学习：小兔鲜儿-确认订单-准备工作、整体布局、底部支付-布局、底部支付-左侧、底部支付-右侧、用户信息-整体布局、用户信息-内容布局、用户信息-文字内容、商品-布局、商品-数量、商品-描述、其他信息-布局、其他信息-内容。

#### 2023年2月7日星期二

1. 记单词30
2. 移动web学习：Flex-修改主轴方向、主轴方向和对齐方式、弹性盒子换行、调整行对齐方式；小兔鲜-pc-项目介绍、背景、内容布局、账户概览-布局、账户概览-内容、账户概览-图片尺寸、公共面板-布局、公共面板-文字样式、订单-li布局、订单-内容布局、订单-goods、订单-goods-省略号、订单-common。
3. 调试selfcheck模块自适应手机端

#### 2023年2月8日星期三

1. 记单词100
2. 移动web学习：移动适配、课程介绍、体验rem移动适配、rem-基本使用、rem-媒体查询、rem-移动适配、rem-布局流程、rem-flexible移动适配、Less-体验、Less-简介、Less-EasyLess插件、Less-注释、Less-计算、Less-嵌套、Less-变量、Less-导入、Less-导出-插件配置、Less-导出-单独路径、Less-禁止导出。
3. 移动web学习：游乐园-项目准备、Less-导入、整体布局。

#### 2023年2月9日星期四

1. 记单词100
2. 移动web学习：游乐园-根字号变量、banner区域、活动标题、活动-布局、活动-字体图标、活动-状态-蓝色、活动-状态-灰色、活动-文字-top、活动-文字-bottom、活动-内容复制、活动-底部工具栏。
3. 移动web学习：响应式-课程介绍、媒体查询-max-min-width

#### 2023年2月10日星期五

1. 记单词
2. 移动web学习：响应式-媒体查询-书写顺序、媒体查询-完整写法、媒体查询-link写法、媒体查询-隐藏。
3. BootStrap框架：bootstrap-体验、bootstrap-简介、bootstrap-下载、bootstrap-使用、栅格系统-原理、栅格系统-代码、栅格系统-其他类名、bootstrap-介绍、bootstrap-表格、bootstrap-按钮。



### 2023.02.13-2023.02.17

#### 2023年2月13日星期一

1. 记单词50
2. KaGa WebUI：侧边栏导航改成顶部导航栏，进度：30%
3. 需求实现使用的是BootStrap4胶囊下拉导航栏，样式好看但是跟源代码适配度不高，bug较多

#### 2023年2月14日星期二

1. 记单词50
2. KaGa WebUI：放弃昨天的导航方法，直接修改源代码的flex布局，改变轴的方向，修改原来的树状导航样式为胶囊下拉导航，bug主要存在于页面刷新之后鼠标放上导航，所有的标题包括三级标题全部显示出来了，点击一次之后导航无法收起，也无法再次点击。删除侧边栏，调整主体部分的位置为正中心，并且与导航栏对齐。进度：50%

#### 2023年2月15日星期三

1. 记单词50
2. KaGa WebUI：由于改用胶囊下拉导航bug较多，所以改回在树状导航样式下直接修改，遇到的问题有：单击下拉导航会根据下拉列表的高度扩展导航栏，要解决下拉导航延申到导航栏之外而不改变导航栏的大小。于是固定导航栏的高度，但是导航重心改变位置，打开导航时导航会整体上滑，于是继续固定导航位置为fixed-top，修改导航整体位置为正中心，给下拉列表加浅灰色背景和圆框修饰棱角提升用户体验，修改下拉列表的字体位置为center，给导航字体加粗，区分二级列表和三级列表。进度：70%
3. KaGa WebUI：导航栏无法移动端适配，布局乱七八糟。要修改主体部分的样式，以便和以前的样式区分开

#### 2023年2月16日星期四

1. 记单词100
2. BootStrap框架：bootstrap-表格、bootstrap-按钮、bootstrap-组件、bootstrap-字体图标、bootstrap-插件-下拉菜单、bootstrap-插件-轮播图、AlloyTeam-项目准备、AlloyTeam-banner图-高度、AlloyTeam-头部-组件、AlloyTeam-头部-样式、AlloyTeam-定制-项目导航、AlloyTeam-开源项目-标题文字、AlloyTeam-开源项目-栅格布局、AlloyTeam-开源项目-内容、bootstrap-全局样式。
3. KaGa WebUI：要学习如何提交代码到git公司服务器上，要内网电脑，并且申请账号。思考如何完成响应式布局，在移动端隐藏导航，用媒体查询，设置不同视口宽度下，导航的布局，以及如何完善整体布局。

#### 2023年2月17日星期五

1. 记单词100
3. APQP计划表制定辅导课程开会一整天
3. KaGa WebUI：内网电脑提交代码到git公司服务器上，进度50%，请教王博到晚上八点，他有事要下班，下周一继续问。要学习一下git操作



### 2023.02.20-2023.02.24

#### 2023年2月20日星期一

1. 记单词100
2. KaGa WebUI：学习如何在内网电脑提交代码到git公司服务器上
3. 完成《Kaga Mifi proposal of WebUI (draft vervsion 20230220)》初版截图PPT

#### 2023年2月21日星期二

1. 记单词100
2. 根据树军意见修改代码：首页两个部分并排横向对齐，去掉主体页面阴影框，menu加边框阴影。目前出现的bug：home页面，TestSettings菜单下的两个导航点击不能变色。
3. 完成《Kaga Mifi proposal of WebUI (draft vervsion 20230221)》截图PPT

#### 2023年2月22日星期三

1. 记单词100
2. KaGa WebUI：尝试调整导航结构，以便做移动端折叠，但是bug越改越多就放弃了，修改背景颜色，和导航以及按钮颜色，还剩下选择按钮没有修改。
3. TestSettings菜单下的两个导航点击不能变色的问题还没有解决。
4. 语言选择和登录按钮不能点击。

#### 2023年2月23日星期四

1. 记单词100
2. KaGa WebUI：TestSettings菜单下的两个导航点击不能变色的问题-这两个导航有两个data-title，点击test下的按钮改变的实际上是已经被隐藏的别的地方的样式。语言选择和登录按钮不能点击的问题已解决-改变这一个部分的层级，加`style=“z-index: 1040”`，大过覆盖它的层级就可以了。
3. 需要实现移动端导航栏折叠
4. 点击下拉菜单后导航栏的子级都自动折叠
5. 三级菜单打开后再次点击还是回到打开的三级菜单

#### 2023年2月24日星期五

1. 记单词100
2. 学习如何实现导航栏点击后自动隐藏的功能
3. 学习jQuery---jQuery网页开发案例精讲视频：jQuery入门导读、JavaScript库、jQuery概述、jQuery基本使用-入口函数、jQuery顶级对象$、DOM对象和jQuery对象、DOM对象和jQuery对象相互转换、jQuery常用API导读、jQuery基本和层级选择器、jQuery隐式迭代、jQuery筛选选择器。



### 2023.02.27-2023.03.03

#### 2023年2月27日星期一

1. 记单词100
2. 学习jQuery---jQuery网页开发案例精讲视频：jQuery筛选方法-选取父子元素、新浪下拉菜单、jQuery其他筛选方法、jQuery排他思想、jQuery淘宝服饰精品案例、jQuery链式编程、jQuery修改样式css方法、jQuery修改样式操作类、tab栏切换案例、jQuery类操作和className区别、jQuery显示和隐藏效果、jQuery滑动效果以及事件切换、jQuery停止动画排队stop方法、jQuery淡入淡出以及突出显示案例、jQuery自定义动画、王者荣耀手风琴案例布局分析和制作。
3. clone169服务器上的T99W444项目到本地仓库失败

#### 2023年2月28日星期二

1. 记单词100
2. clone169服务器上的T99W444项目到本地仓库（从上班到下班）
3. 尝试在169服务器账号上搭建docker：9x07编译环境，没有sudo权限
4. clone代码下来后尝试本地Ubuntu搭建环境并编译

#### 2023年3月1日星期三

1. 记单词100
2. 解决Ubuntu安装docker时出现的问题
3. 找树军要docker权限，编译T99W444代码，没有成功
4. 询问王博169服务器上提交代码的流程，以及如何把本地文件上传到服务器

#### 2023年3月2日星期四

1. 记单词100
2. 修改bash命令行颜色
3. 从SVN上下载2个文件：mydocker.sh、docker-9x07-v2.1.tar.gz。学习了如何从SVN上下载文件
4. 把本地文件上传到服务器：`scp mydocker.sh heshuang@10.187.47.169:~/KAGA/build_tools/`
5. 将docker镜像安装到Ubuntu系统上，将脚本mydocker.sh拷贝进目录里，一般是 ~/bin/ 下面。
6. T99W444 9x07编译成功：树军帮忙修改了`~/.bashrc`的配置，之前一直编译失败的问题出在KAGA/T99W444里面的代码git pull不完整，git checkout之后再编译就编译成功了

#### 2023年3月3日星期五

1. 记单词100
2. 尝试在自己的Ubuntu里搭建docker 9x07编译环境，太费时间
3. 把编译成功的zip压缩包代码从服务器下载到本地，拷贝到自己的电脑上烧录进板子
4. 按照《KAGA Mifi2 QFIL 烧录固件》SOP在SVN上下载烧录的软件，然后按照步骤烧录，烧录成功后cmd输入指令开启板子，浏览器输入板子ip进行连接



### 2023.03.06-2023.03.10

#### 2023年3月6日星期一

1. 记单词100
2. 完成2022年研发加计扣除辅助资料-工作日志
3. Kaga webui：导航栏响应式折叠汉堡按钮尝试不成功

#### 2023年3月7日星期二

1. 记单词100
2. Kaga webui：导航栏响应式折叠尝试失败，尝试在视口小于992时把导航变成小图标，写了一半js

#### 2023年3月8日星期三

1. 记单词100
2. Kaga webui：询问王博是否可以根据屏幕宽度改变导航栏的样式，小于992显示图标，大于992显示文字，但是要解决展开下拉菜单图标会被挤走的问题。
3. 妇女节放半天假！

#### 2023年3月9日星期四

1. 记单词100
2. Kaga webui：优化导航栏结构与样式-去掉标题的fas图标，固定导航宽度，解决下拉菜单图标被挤走的问题-固定导航菜单以及下拉菜单的宽度，用js动态调整文字和图标样式时导航菜单的宽度。
3. 要解决的问题是：判断是否为手机端，再从文字变为图标，以及固定宽度的变化。

#### 2023年3月10日星期五

1. 记单词100
2. Kaga webui：客户同意手机端用图标显示的方案，要在html生命周期里做一个判断web端与手机端，默认样式为web端，所以只需要判断是否为手机端并且改变样式就可以。



### 2023.03.13-2023.03.17

#### 2023年3月13日星期一

1. 记单词150
2. Kaga webui：学习了html生命周期函数，将判断是否为移动端的函数在onLoad里面调用，写了一个resize函数调整PC端页面在宽度小于768的情况下也显示图标，提升用户体验感。
3. 手机端刷新页面时会快速闪现出文字，可能需要修改。

#### 2023年3月14日星期二

1. 记单词120
2. Kaga webui：导航代码阶段性上传，有问题再修改
3. Git代码上传：先git pull --rebase拉取最新的代码，然后git diff对比修改过的文件与新代码的区别，然后将新代码下载下来与自己的代码进行合并，上传替换原本的仓库里的`/KAGA/T99W444/apps_proc/foxconn/fx-www`下的www代码，`git add .`添加文件到git，`git diff --cached`检查具体的提交内容，`git commit`提交代码，打开编辑器，详细书写commit message，前面要加一个WebUI，`git push`推送到远程仓库。
4. `git push`之前提示让我配置用户，配置即可（`git config --global user.email`等等）
5. 最新代码合并之后弹警示框“Socket TimeOut”，原因是对接了新的接口，没有编译最新的代码，于是拉取最新的代码进行编译，2023.03.14的版本，编译要记得进入docker环境。

#### 2023年3月15日星期三

1. 记单词100
2. 副业思路整理
3. 烧录最新的编译代码
4. WebUI：去掉标题的fas图标还是加上，避免用户不知道有下拉菜单；导航栏打开之后，点击页面其他位置，导航栏不会关闭；固定导航栏宽度之后，变日文之后由于英文与日文长度不一致，导致日文格式下导航格式很奇怪。

#### 2023年3月16日星期四

1. 记单词140
2. WebUI：研究点击下拉导航之外的页面，导航自动关闭这个功能。
3. 页面一直弹出警示框：`Device went to a bad state..please re-login!!`，原因是由于我们不断的push新的代码进去，所以有很多错误日志，磁盘满了，解决方案：`adb shell`进入设备，`rm -rf data/www/serror.log`，清除错误日志，`adb reboot`重启设备即可。

#### 2023年3月17日星期五

1. 记单词100
2. WebUI：完成点击下拉导航之外的页面，导航自动关闭这个功能，将menuCoseAll()关闭所有导航函数加入到页面点击事件中，就可以实现点击页面关闭下拉导航，但是由于下拉导航撑开的除却导航的右半部分页面无法实现点击关闭，所以在导航的最后一个li后面加上一个div，然后flex=1让它占导航栏剩下的全部空间，即点击页面任意部分均可以实现下拉导航关闭。
3. WebUI：解决语言切换导致的导航宽度不适配的问题，在切换语言的函数LanguageChanged(e)里添加一个判断条件，通过判断是日文还是英文，动态调整导航宽度。但是产生了一个新问题：日文情况下，改变屏幕宽度，导航宽度跟着屏幕宽度的判断条件改变了。



### 2023.03.20-2023.03.24

#### 2023年3月20日星期一

1. 记单词150
2. jQuery：jQuery属性操作

#### 2023年3月21日星期二

1. 记单词130
2. WebUI：解决语言切换导致的导航宽度不适配的问题，在调整页面宽度的函数ResizeFunction()里添加一个判断条件，通过判断是日文还是英文，动态调整导航宽度。在判断是否为手机端的函数MobileFunction()里也添加语言的判断条件，为了保证每次刷新都是合适的宽度，在切换语言的函数LanguageChanged(e)里添加手机端与PC端的判断条件，里面套语言的判断条件，为了保证点击语言切换的时候自动刷新也能有合适的宽度。

#### 2023年3月22日星期三

1. 记单词150
2. 上传解决了语言切换导致导航宽度不适配的问题后的代码
3. 上传代码：git commit 进入编辑器之后为默认编辑器，使用起来很不方便，可以试用命令`git config --global core.editor vim` 修改Git默认编辑器为vim，commit之后`git pull --rebase`一下再push，避免产生大量merge commit出现，影响后面的debug。
4. 编译：单独编译WebUI的部分用：`./build.sh fx`
5. WebUI：优化每次PC端刷新时会闪过图标，手机端刷新会闪过文字的问题，只要把默认的文字和图标都设置成display：none；先隐藏起来，然后在判断的时候block显示出来就行了。

#### 2023年3月23日星期四

1. 记单词120
2. WebUI：根据客户提供的图片替换手机端图标，原图标与夏普相冲突，但是客户提供的图标为48X48，原本的为24X24，改成24X24之后，也依旧不适配，图片和文字会同时block显示，目前没有找到解决办法。

#### 2023年3月24日星期五

1. 记单词100
2. WebUI：找王博要了24X24的图片，改成新图片之后，图片和文字还是会同时显示，明明设置的是默认display：none；隐藏，判断条件之后再block，但是还是有冲突。于是我设置了MobileFunction()函数PC端调用ResizeFunction()函数，语言判断函数LanguageChanged(e)中直接调用MobileFunction()函数。
3. 有一点点小问题：PC端日语状态下刷新会闪过英文。



### 2023.03.27-2023.03.31

#### 2023年3月27日星期一

1. 记单词100
2. WebUI：尝试修复PC端日语状态下刷新会闪过英文的问题，未成功
3. git commit：WebUI style update: Replace the navigation icon and optimize the navigation refresh.

#### 2023年3月28日星期二

1. 记单词150
2. mantis983：测试提出dropdown menu width bug，修改状态为已解决
3. WebUI：手机连接MiFi，访问IP，查看网页效果，但是非常卡。电脑修改home button的宽度
4. Ajax：客户端与服务器相关的概念、数据是资源&资源的请求方式、Ajax的概念以及应用场景、使用`$.get()`发起GET请求、使用`$.post()`发起GET请求、使用`$.ajax()`发起GET请求、接口的概念、接口测试工具Postman、接口文档、案例-基于bootstrap渲染页面UI结构、案例-了解渲染图书列表的实现思路、案例-获取并渲染图书列表的数据。

#### 2023年3月29日星期三

1. 记单词120
2. WebUI：手机连接MiFi，访问IP，查看网页效果，非常卡的原因可能是手机上没有天线。
3. WebUI：首页刷新，会闪烁两下，目前没找到解决办法。
4. Ajax：案例-实现删除图书的功能、案例-实现添加图书的功能、聊天机器人-演示效果&梳理案例的代码结构、将用户输入的内容渲染到聊天窗口、发起请求获取聊天消息、将机器人的聊天内容转换为语音、通过回车键发送消息。

#### 2023年3月30日星期四

1. 记单词100
2. WebUI：优化首页刷新闪烁的问题，优化未登录刷新时导航会闪烁登陆后才有的导航的问题
3. Ajax：form-表单的概念及组成部分、表单标签form的常用属性、表单的同步提交及缺点、通过Ajax提交表单的数据、案例-基于bootstrap渲染评论列表的UI结构、获取并渲染评论列表、改造form表单&实现发表评论的功能。

#### 2023年3月31日星期五

1. 记单词120
2. 修改以前的工作周报为主管要求的格式，并填写本周工作周报及进度
3. 请假失败，且过程十分恶心。由于不能报加班，所以没办法调休请假
4. 提交代码到Git，提交周报



### 2023.04.03-2023.04.07

#### 本周工作任务

- [x] 显示页面字段英日文表WebUI_Strings_v1.0
- [x] 显示页面完整版字段英日文表WebUI_Strings_v1.0显示页面完整版
- [ ] 隐藏页面字段英日文表格
- [x] debug Connection History and Bluetooth Management手机端适配问题
- [ ] 把之前未显示的隐藏页面入口删除，优化代码
- [ ] 对接接口：Connection History

#### 2023年4月3日星期一

1. 记单词150
2. 整理展示出来的内容的英日双语表格：home，Connected Clients-Client List、MAC Address Filtering，Settings-Connection History、Bluetooth Management、Self Check、AP Isolation

#### 2023年4月4日星期二

1. 记单词150
2. 整理展示出来的内容的英日双语表格：Settings-LAN Settings-DHCP Server、Firewall、IP Address Filtering、Port Mapping、NAT、VPN Pass-through，Settings-Wi-Fi Settings-Basic

#### 2023年4月5日星期三

1. 记单词100
2. 清明放假
3. 搬家

#### 2023年4月6日星期四

1. 记单词100
2. 整理展示出来的内容的英日双语表格：Settings-Device Settings-Web UI Password、Reset Default、Reboot，TestModeSettings-Software Update、APN Profile Settings、Advanced
3. 重新整理了一份完整的字符英日文列表，删掉隐藏的页面内容

#### 2023年4月7日星期五

1. 记单词100

2. 完成显示页面字段英日文表WebUI_Strings_v1.2以及显示页面完整版字段英日文表WebUI_Strings_v1.0显示页面完整版

3. debug Connection History and Bluetooth Management手机端适配问题：将任何 `.table` 元素包裹在 `.table-responsive` 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。




### 2023.04.10-2023.04.14

- [x] 隐藏页面字段英日文表格WebUI_Strings_v1.0隐藏页面
- [x] 提交上周debug代码
- [x] 删除隐藏页面入口，优化代码
- [x] 修改WebUI_Strings_v1.0文档，跟客户沟通
- [ ] 查看Connection History接口对接的代码

#### 2023年4月10日星期一

1. 记单词100
2. 完成隐藏页面字段英日文表格WebUI_Strings_v1.0隐藏页面
3. 提交上周debug代码：WebUI：debug Connection History and Bluetooth Management Mobile adaptation issues
4. 创建GitHub仓库，远程连接，clone到本地仓库，上传之前所有的代码以及笔记

#### 2023年4月11日星期二

1. 记单词150

#### 2023年4月12日星期三

1. 记单词120
2. 修改WebUI_Strings_v1.0文档，删除和备注不需要的部分
3. 删除隐藏页面入口：Roaming Setting

#### 2023年4月13日星期四

1. 记单词120
2. git pull两次新上传的代码，重新编译了一版因为Download Log对接了接口
3. 又修改了一版WebUI_Strings_v1.0文档，删除和备注不需要的部分，添加新增页面字段-Download Log

#### 2023年4月14日星期五

1. 记单词130
2. 删除隐藏页面入口：Settings-Mobile Network Settings-Roaming Setting、Network Configuration，Settings-Public WiFi、Settings-PIN Management、Settings-LAN Settings-Port Trigger、DMZ、UPnP，Settings-Wi-Fi Settings-WPS，Settings-Device Settings-Data Usage Settings、Ethernet Settings、USB Mode、Backup/Restore，TestMode-Network Configuration，About，Network Monitor Mode。
3. WebUI: Deleted the hidden page entry.代码提交，git push之前忘记git pull --rebase了
4. 替换客户提供的日文翻译字符串：home，Connected Clients-Client List、MAC Address Filtering，Settings-Connection History、Bluetooth Management、
5. WebUI: Replaced the Japanese string.代码提交，替换jp.json字符串
6. 写周报和软件技术分享报告选题



### 2023.04.17-2023.04.21

- [ ]  json文件字符串继续与客户沟通替换和修改
- [ ] 查看Connection History接口对接的代码
- [ ] 学习完jQuery

#### 2023年4月17日星期一

1. 记单词200
2. 修改mantis上issue的状态

#### 2023年4月18日星期二

1. 记单词120
2. jQuery：jQuery属性操作、购物车模块-全选、jQuery内容文本值、购物车模块-增减商品数量、修改商品小计、jQuery遍历对象each方法、遍历数据$.each、购物车模块-计算总件数和总额、创建添加删除元素、购物车模块-清理购物车、选中商品添加背景颜色

#### 2023年4月19日星期三

1. 记单词130
2. jQuery：jQuery尺寸方法、位置方法、被卷去头部方法，带有动画的返回顶部，电梯导航案例-显示隐藏电梯导航、点击滚动目标位置
3. debug：debug DHCP Server and Navigation width.
   1. DHCP Server: debug DHCP Server Reserved IP Address List only display two and a half lines.页面高度是通过计算标签元素高度来获取的，显示不全是因为获取数据需要时间渲染到页面上，但是计算高度的时候来不及把这个高度加上就计算完成了，所以要加一个延时等渲染完下面的button再计算页面高度。
   2. Navigation width: debug Navigation text display wrapping.把导航的高度取消固定，改为自动高度。这样即使换设备也不会出现换行超出高度的情况。

#### 2023年4月20日星期四

1. 记单词150
2. debug：There are some errors by adding number 0 before characters on DHCP configuration page.但是没办法复现，因为点击apply之后页面会一直加载，卡住，不能手动刷新，也不能重启，必须重新烧录代码才能重新进入页面
3. 烧录了一版新的代码：FKSB-100D.0.3.6-20230420-172120

#### 2023年4月21日星期五

1. 记单词100
2. jQuery：电梯导航案例-点击当前li添加current类、滑动页面电梯导航自动添加current类、节流阀（互斥锁）。
3. 写周报



### 2023.04.24-2023.04.28

- [ ] jQuery全部学完
- [ ] 查看Connection History接口对接的代码
- [ ] debug DHCP
- [ ] debug port mapping

#### 2023年4月24日星期一

1. 记单词150
2. debug：There are some errors by adding number 0 before characters on DHCP configuration page.尝试复现，失败
3. jQuery：jQuery事件处理on绑定一个或者多个事件，on实现事件委派和给动态元素绑定事件，微博发布案例

#### 2023年4月25日星期二

1. 记单词136
2. jQuery：off解绑事件，jQuery自动触发事件、事件对象、其他方法导读、对象拷贝extend

#### 2023年4月26日星期三

1. 记单词100
2. 帮甲欣拷贝代码
3. 编译fx代码，复制新的www代码运行
4. debug：change语言时，有些页面依旧是英文
5. 整理王博转给我的debug：LAN IP Address and port mapping
6. 下午去D9 1.5F签字确认交通补贴材料

#### 2023年4月27日星期四

1. 记单词100
2. debug port mapping复现未成功
   1. Sometimes LAN IP Address will be changed to 0.0.0.0 when editing the port mapping rules.在编辑端口映射规则时，有时LAN IP地址会更改为0.0.0.0。
   2. Entering port mapping page will be pop up "Failed to get Port Forwarding Entries. Error: undefined".进入端口映射页面将弹出“获取端口转发条目失败。错误：未定义”。
3. JBD车载一处SW周会及技术分享

#### 2023年4月28日星期五

1. 记单词141
2. 上传修改了语言切换问题的代码，把切换为日文后依然是英文的部分修改为日文。
3. 周报



### 2023.05.02-2023.05.05

#### 2023年5月2日星期二

1. 记单词88

#### 2023年5月3日星期三

1. 记单词140
2. 尝试ChatGPT让它写小说，免费次数用完了，写小说不太现实，不流畅不引人入胜。iPhone给textgpt@icloud.com发imassage消息就可以跟TextGPT聊天了

#### 2023年5月4日星期四

1. 记单词113
2. 帮甲欣提交代码
3. 继续debug：Entering port mapping page will be pop up "Failed to get Port Forwarding Entries. Error: undefined".进入端口映射页面将弹出“获取端口转发条目失败。错误：未定义”。

#### 2023年5月5日星期五

1. 记单词94
2. 写周报：车载一处-龙华SW-何双-20230505
3. 复现进入port mapping页面会弹出“Failed to get Port Forwarding Entries. Error: undefined”，home页出现undefined,进入port mapping页时，
   提示“Failed to get Port Forwarding Entries.”, 并且port mapping list空白的问题，我添加了50条规则（最多50条）进行尝试，并且反复删除与编辑，重新添加等等，问题没有复现



### 2023.05.08-2023.05.12

- [ ] 学完jQuery
- [ ] 完成初版web移动开发报告

#### 2023年5月8日星期一

1. 记单词116
2. 申请外发邮箱
3. ATF16949培训

#### 2023年5月9日星期二

1. 记单词69

2. WebUI：给settings/Wi-Fi settings/Basic页面添加SSID限制条件，限制特殊字符以及去掉中文字符的限制，给出拦截提示框，并验证是否拦截成功

   ```js
   // 限制特殊字符
   if (isValidSSIDStr(AP_SSID_A.value) == false) {
       parent.alertModal("AlertBox", false, "", GetMessage("mWiFi_Config", "InvalidSSIDMsg1", lang_message) + ssid_no_allow_letter + GetMessage("mWiFi_Config", "InvalidSSIDMsg2", lang_message));
       return false;
   }
   
   var ssid_no_allow_letter = "`!@#$%^&*()[]{}?/|,<>\\'\"\t:;";
   
   function isValidSSIDStr(s) {
     var i;
     for (i = 0; i < s.length; i++) {
       var c = s.charAt(i);
       if (ssid_no_allow_letter.indexOf(c) >= 0)
       {
         return false;
       }
     }
     return true;
   }
   
   // 去掉中文和日文的限制
   function isValidStr (s) {
     var i;
     for (i = 0; i < s.length; i++) {
       var c = s.charAt(i);
       var ch = s.charCodeAt(i);
   
   	if (digits.indexOf(c) < 0 &&
   		lowercaseLetters.indexOf(c) < 0 &&
   		uppercaseLetters.indexOf(c) < 0 &&
   		special_symbol.indexOf(c) < 0 &&
   		filed_no_allow_letter.indexOf(c) < 0 &&
   		device_no_allow_letter.indexOf(c) < 0 && chkCN(c) == false &&
   		chkJPN(c) == false && !isASCIICodeLong(ch)) {
         return false;
       }
     }
     return true;
   }
   ```

#### 2023年5月10日星期三

1. 记单词70
2. ISO/SAE22434课程培训

#### 2023年5月11日星期四

1. 记单词66

2. ISO21434课程培训

3. WebUI：给settings/Wi-Fi settings/Basic页面添加password限制条件，限制特殊字符以及中文日文字符，给出拦截提示框，并验证是否拦截成功

   ```js
   // 限制特殊字符
   if (isValidPWStr(key) == false) {
   	parent.alertModal("AlertBox", false, "", GetMessage("mWiFi_Config", "InvalidPWMsg1", lang_message) + pw_no_allow_letter + GetMessage("mWiFi_Config", "InvalidPWMsg2", lang_message));
       return false;
   }
   
   var pw_no_allow_letter = "`!@#$%^&*()[]{}?/|,<>\\'\"\t:;";
   
   function isValidPWStr(s) {
     var i;
     for (i = 0; i < s.length; i++) {
       var c = s.charAt(i);
       if (pw_no_allow_letter.indexOf(c) >= 0)
       {
         return false;
       }
     }
     return true;
   }
   ```

4. 提交代码，commit WebUI: Add restrictions to SSID and password of WiFi
   Add restrictions to SSID: restrict special characters and remove restrictions on Chinese characters, provide interception prompt box.
   Add restrictions to the password of WiFi: restrict special characters and provide an interception prompt box.

#### 2023年5月12日星期五

1. 记单词94
2.  整理WebUl single option box文档与客户讨论
3. 整理WebUI_Strings_v1.0_JP_1(20230508)_KAGA文档，整理并添加新增字符，给客户翻译



### 2023.05.15-2023.05.19

#### 2023年5月15日星期一

1. 记单词59
2. 验证Sometimes LAN IP Address will be changed to 0.0.0.0 when editing the port mapping rules.在编辑端口映射规则时，有时LAN IP地址会更改为0.0.0.0的bug，验证复现不出来，在mantis上已回复。
3. 帮辛总搞购物发票

#### 2023年5月16日星期二

1. 记单词86

2. 将仅有一个选项的下拉选项框改为只读：Basic与APN Profile Settings页面的选项框只需要将select选择标签改为input文本框标签，删除option，将value值改为默认只读的IPv4，添加readonly，并修改readonly默认灰色背景颜色为白色。APN Profile Settings页面的IP Type改为IPv4之后会迅速跳为0。

   ```html
   <!-- <select name="AP_FreqBand_A_ID" id="AP_FreqBand_A_ID" style="width: 100%;" class="form-control contentinputstyle">
   	<option value="0">2.4G</option>
   </select> -->
   <input type="text" name="AP_FreqBand_A_ID" id="AP_FreqBand_A_ID" style="width: 100%; background-color: white;" class="form-control contentinputstyle" readonly value="2.4G">
   ```

3. IP Address Filtering页面由于IP Type的value值需要传递参数提交表单，所以还没改好。

#### 2023年5月17日星期三

1. 记单词76
2. IP Address Filtering页面需要等客户确定要不要改
3. 全局替换错误提示“"FAIL: " + xhr + " " + textStatus + " " + errorThrown”为“"Error: disconnected from device."”
4. 将“Wi-Fi Mode”下拉选项框修改为只读文本框。

#### 2023年5月18日星期四

1. 记单词49
2. 根据客户提供的WebUI_Strings_v1.0_JP_2(20230518)文档修改、添加、删除翻译字符串
3. 将客户修改的部分日文替换进jp.json文件
4. 技术分享周会

#### 2023年5月19日星期五

1. 记单词101

2. 根据客户提供的WebUI_Strings_v1.0_JP_2(20230518)文档修改、添加、删除翻译字符串

3. 替换完日文字符串后根据修改的日文长度修改导航宽度

4. 删除Reset Default页面的ResetSettingMsgA、ResetSettingMsgB、ResetSettingMsgC字符串，添加ResetSettingMsg字符串，将因为有双引号而分成三句话的一段提示文字改为一句话，并修复英日文转换的问题。

   `document.getElementById("mRestoreDefaultResetSetting").innerHTML = message.mRestoreDefault.ResetSettingMsg;`

5. 删除WI-Fi Advanced页面的WiFiAbroadMsg字符串

6. 整理一份新的WebUI_Strings_v1.0_JP_2(20230519)文档给客户翻译新增的字符串



### 2023.05.22-2023.05.26

#### 2023年5月22日星期一

1. 记单词45
2. 更新客户给的日文翻译字符串
3. 给mWiFi_Config_Adv页面加apply的翻译转换代码：`document.getElementById("mWiFi_Config_AdvApplyBtn") .value = message.mAlert.Apply:`

#### 2023年5月23日星期二

1. 记单词97
2. 更新MAC Address Filtering页面MAC Address Filter、VPN Pass-through页面PPTP VPN Pass-through Setting和L2TP VPN Pass-through Setting、Basic页面SSID Stealth的Enabled和Disabled，Advanced页面Wi-Fi Channel的Automatic日文转换翻译

#### 2023年5月24日星期三

1. 加单词99
2. 删除SSID特殊字符中空格的限制，添加SSID末尾不能添加空格的限制，并给出错误提示：SSID must not end with the space.

#### 2023年5月25日星期四

1. 记单词

2. 给WiFi password添加一个不能使用空格、中文和日文的限制条件，并给出提示：Password is invalid.Not support space, Chinese and Japanese.

   ```js
   if (/[\u4e00-\u9fa5 ]/.test(key)) {
       parent.alertModal("AlertBox", false, "", GetMessage("mWiFi_Config", "PWInvalidChar3", lang_message));
       return false;
   }
   if (/[\u0800-\u4e00 ]/.test(key)) {
       parent.alertModal("AlertBox", false, "", GetMessage("mWiFi_Config", "PWInvalidChar3", lang_message));
       return false;
   }
   ```

3. 技术分享周会

#### 2023年5月26日星期五

1. 记单词159

2. 给Client List页面加载添加延时，解决客户提出的Client列表显示不全的问题

   ```js
   setTimeout(() => {
   	parent.iframeLoaded(document.getElementById("bigContent").clientHeight + 50);
   }, 600);
   ```

3. 找献峤帮忙询问高通IP地址的过滤规则中能否将输入IP地址过滤改为输入网址过滤

4. 提交周报，mantis回复测试与客户



### 2023.05.29-2023.06.02

- [x] 与高通沟通IP地址的过滤规则中能否将输入IP地址过滤改为输入网址过滤
- [x] 替换完所有的日文翻译字符
- [x] debug：Sometimes LAN IP Address will be changed to 0.0.0.0 when editing the port mapping rules.在编辑端口映射规则时，有时LAN IP地址会更改为0.0.0.0。
- [x] 优化DHCP页面，提交时如果没有任何改动给出提示弹窗
- [x] SSID添加首尾均不能添加空格的限制

#### 2023年5月29日星期一

1. 记单词55
2. 与高通沟通 IP Address Filtering页面的IP地址改为网址的问题

#### 2023年5月30日星期二

1. 记单词70

2. 关于IP Address Filtering的过滤规则更改问题，高通回复的意思是不支持网址筛选

3. 给SSID添加首尾均不能添加空格的限制，修改限制条件提示为：SSID must not start and end with the space.

   ```js
   if (AP_SSID_A.value.slice(len_a-1) == " " || AP_SSID_A.value.slice(0, 1) == " ") {
       parent.alertModal("AlertBox", false, "", GetMessage("mWiFi_Config", "SSIDAErr4", lang_message));
       return false;
   }
   ```

4. DHCP页面优化：对比当前数据与原始表单数据，如果有改变则true，可以进行下一步，如果没有改变则做出拦截返回false，并给出提示框。只写了一半，功能没有实现，不知道如何获取原始数据和当前数据进行对比

#### 2023年5月31日星期三

1. DHCP页面优化

   ```js
   // 定义全局变量
   var lanipall = "";
   var lansubmaskall = "";
   var Dhcp_Enable = "";
   var sinpall = "";
   var einpall = "";
   var leasetime = "";
   // RefreshWLANSettings()函数中给全局变量赋值
   lanipall = obj.lan_gw_addrs;
   lansubmaskall = obj.lan_sub;
   Dhcp_Enable = obj.lan_dhcp;
   sinpall = obj.lan_dhcp_start;
   einpall = obj.lan_dhcp_end;
   leasetime = obj.lan_dhcp_lease / 3600;
   // 创建一个isFormChanged()函数
   function isFormChanged() {
       // 获取页面中各个配置项的值
       // var obj = jQuery.parseJSON(msgs);
       var lanip = document.getElementById("lanipall").value;
       var subnetMask = document.getElementById("lansubmaskall").value;
       var dhcpEnabled = document.getElementById("Dhcp_Enable").value;
       var dhcpStartIP = document.getElementById("sinpall").value;
       var dhcpEndIP = document.getElementById("einpall").value;
       var leaseTime = document.getElementById("leasetime").value;
       // 检查这些值是否与之前保存的值相同
       if (lanip == lanipall && subnetMask == lansubmaskall 
           && dhcpEnabled == Dhcp_Enable && dhcpStartIP == sinpall
           && dhcpEndIP == einpall && leaseTime == leasetime) {
           return false;
       }
       return true;
   }
   // apply()函数中调用
   if (isFormChanged() == false) {
       parent.alertModal("AlertBox", false, "", GetMessage("mLan_Config", "ApplyNoChangeMsg", lang_message));
       return false;
   }
   ```
   
2. js中如何从一个函数获取数据到另一个函数进行使用：将需要传递的数据定义为全局变量，在一个函数中赋值，另一个函数中调用

#### 2023年6月1日星期四

1. 记单词147
2. DHCP页面优化：若提交的内容没有变化则拦截提交并给出提示。问题是，如果修改提交后，不手动刷新，再次不修改直接点击提交，不会被拦截，会直接继续提交。有两种方案：UpdateWLANSettings()的延迟处调用RefreshWLANSettings()接口，或者设置自动刷新当前页面。
3. 刷新当前页面：`window.location.reload();`
4. 技术分享周会

#### 2023年6月2日星期五

1. 记单词149

2. DHCP页面优化：解决昨天说的需要手动刷新的问题，在调用UpdateWLANSettings()请求之前将当前的值赋值给全局变量。解决问题

   ```js
   function apply() {
       if (isFormChanged() == false) {
       parent.alertModal("AlertBox", false, "", GetMessage("mLan_Config", "ApplyNoChangeMsg", lang_message));
       return false;
       }
       
       if (valiateIPRange() == false)
       return false;
       var AskDeleteMsg = GetMessage("mLan_Config", "PopupChangeDhcp", lang_message);
   
       parent.confirmDialog(true, GetMessage("mLan_Config", "PopupChange", lang_message), AskDeleteMsg, GetMessage("mAlert", "OK", lang_message), GetMessage("mAlert", "Cancel", lang_message),
       function () {//yes function
           parent.loadingModal();
           // 在这里把当前的值赋值给全局变量
           lanipall = document.getElementById("lanipall").value;
           lansubmaskall = document.getElementById("lansubmaskall").value;
           Dhcp_Enable = document.getElementById("Dhcp_Enable").value;
           sinpall = document.getElementById("sinpall").value;
           einpall = document.getElementById("einpall").value;
           leasetime = document.getElementById("leasetime").value;
           UpdateWLANSettings();
           return true;
       },
       function () {//cancel function
       }
       );
   }
   ```

3. 合并Wi-Fi Settings menu

4. 分功能点提交代码

   1. WebUI: SSID must not start and end with the space.首尾均不能添加空格
   2. WebUI: DHCP page optimization. If the submitted content does not change, intercept the submission and provide a prompt. DHCP页面优化，若提交的内容没有变化则拦截提交并给出提示。
   3. WebUI: Merge Wi-Fi Settings menu.合并Wi-Fi设置菜单
   4. WebUI: Update Strings and some grammar issues.更新字符串和一些语法错误

5. WebUI: 根据客户提供的WebUI_Strings_v1.2_JP(20230602)文档更新字符串

6. WebUI: 测试提的一些语法错误以及大小写错误，写文档与测试沟通需要商议的部分。

7. 重新整理了一份新的WebUI_Strings_v1.0_JP_2(20230602_1)文档给客户翻译新增的字符串

8. 交周报



### 2023.06.05-2023.06.09

- [x] 每天认真写周报记录
- [ ] 开始写移动Web开发的技术分享文章，最起码要起草大纲

#### 2023年6月5日星期一

1. 记单词80
2. 整理《WebUI问题总结》，将最近遇到的问题总结合并到其中
3. 合并Wi-Fi Settings menu代码修改错误，在页面的标题上少加了一个s，加上后提交代码
4. 整理了澳门旅游攻略，并发布小红书

#### 2023年6月6日星期二

1. 记单词59

2. 更新客户给的日语翻译字符串，并上传代码。commit：WebUI: Update Japanese string.

3. 解决客户提出的一些日语字符串在WebUI上被截断的问题，并优化页面加载和一些美观上的问题，给说明性英文加上结束的标点，让页面文字和布局具有一致性。并在mantis给客户回复

4. commit：WebUI: Page loading and language optimization.

5. 被截断的原因是，有些页面没有引入bootstrap的CSS和js文件，加上这段代码后恢复正常

   ```html
   <!-- fontawesome -->
   <link rel="stylesheet" href="/css/all.css">
   <!-- Theme style -->
   <link rel="stylesheet" href="/css/adminlte.css">
   <!-- jQuery -->
   <script src="/js/jquery.js"></script>
   <!-- AdminLTE App -->
   <script src="/js/adminlte.js"></script>
   <!-- Bootstrap CSS -->
   <link href="/css/bootstrap.css" rel="stylesheet" type="text/css" />
   <script src="/js/bootstrap.js"></script>
   ```

#### 2023年6月7日星期三

1. 记单词64

2. 手机端连接WiFi进入网站，验证昨天修改的代码是否正确。

3. 给页面日文说明性文字添加句号，英文说明性文字加上空格。

4. 调整一致性，调整对齐显示出来的文字，如给class加上pl-3属性。

5. 将带有是否show切换的password加上margin-top: -30px;让password文字和密码输入框在一行显示。并做手机端与PC端自适应的效果，在屏幕宽度大于768px时才显示此效果，小于768px则不显示此效果。

   ```css
   @media (min-width: 768px) {
       .modal-widthx {max-width: 700px !important;width: auto;}
       .pw_margintop{margin-top: -30px;}
   }
   ```

6. 调整页面布局，Web UI Password和Wi-Fi Advanced的按钮调整到左侧并与整体对齐

7. Software Update页面对接Current Software Version的接口：修改HTML，调用getAbout()接口函数

   ```html
   // 修改HTML
   <!-- <label id="mSoftAutoUpdateCurrSWVer" class="subtt2" style="padding-right:5px">Current Software Version:</label>~*softversion~ -->
   <strong id="mSoftAutoUpdateCurrSWVer" class="subtt2" style="padding-right:5px">Current Software Version:</strong>
   <label id="mSoftAutoUpdateVesion" style="display: inline-block;"></label>
   ```

   ```js
   // 调用接口
   function getAbout() {
   
   		$.ajax(
   			{
   				type: "POST",
   				url: "../qcom/cgi-bin/qcmap_web_mifi_cgi",
   				data:
   				{
   					type: "webui-device-get-about",
   					token: sessionStorage.getItem("session_token")
   				},
   				dataType: "text",
   				success: function (msgs) {
   
   					if (msgs.length > 0) {
   						var obj = jQuery.parseJSON(msgs);
   						if (obj.commit != null) {
   							if (obj.commit == "AUTH_FAIL") {
   								parent.logout();
   								alert("Device is being configured by a different IP: relogin");
   								return;
   							}
   							if (obj.commit == "Token_mismatch") {
   								parent.logout();
   								alert("Unauthorised request: relogin");
   								return;
   							}
   							alert(obj.commit);
   							return;
   						}
   						// document.getElementById("mPhoneNum").innerHTML = obj.phone_num;
   						// document.getElementById("mMaxNum").innerHTML = obj.max_access_num;
   						document.getElementById("mSoftAutoUpdateVesion").innerHTML = obj.software_version;
   					}
   					else
   						alert("No Reply from server.");
   				},
   				error: function (xhr, textStatus, errorThrown) {
   					alert("Error: disconnected from device.");
   				}
   			});
   
   		}
   ```

#### 2023年6月8日星期四

1. 记单词40
2. 复现1279：当有很多 client 时， client list显示不全的问题。五台设备连接此WiFi，在三台安卓手机上登录web并不断刷新，验证页面均为正常显示，且显示速度很快，没有复现出显示不全的bug。
3. 查漏补缺，修复APN Profile Settings页面的show按钮语言没有正常转换的问题，给"mInternetConn.html"下加了一句`document.getElementById("hidden_A_lb").innerHTML = message.mAlert.Show;`
4. 下载安卓的app，配对连接手机蓝牙，在web端查看效果
5. 技术分享周会

#### 2023年6月9日星期五

1. 记单词68

2. 将蓝牙连接状态返回值加上语言转换函数，能够正常英日文转换

   ```js
   // var connectStatus =  connect_status == 1 ?  "connected":"disconnected"
   var connectStatus =  connect_status == 1 ?  GetMessage("mBluetoothList", "Connected", lang_message) : GetMessage("mBluetoothList", "Disconnected", lang_message)
   ```

   然后同步修改en.json和jp.json文件

3. 804修复蓝牙界面delete按钮日文不能正常显示的问题：将message_changeLang.js文件中的"mBluetoothList.html"下面的`document.getElementById("mHistoryDelBtn").innerHTML = message.mAlert.Delete;`代码中的innerHTML改为value

4. 1357修复自检页面重新检查时DNS和蓝牙的检测图案的问题

   ```js
   this.items[0].complete = this.items[1].complete = this.items[2].complete = this.items[3].complete = this.items[4].complete = this.items[5].complete = this.items[6].complete = this.items[7].complete = 0;
   ```

5. 修复蓝牙标题与导航不一致的问题

6. 提交代码，提交周报



### 2023.06.12-2023.06.16

#### 2023年6月12日星期一

1. 记单词184
2. mantis回复测试关于上周修改的部分
3. 修改MAC Address Filtering页面的OK为Save，统一了颜色。Add More或者Add Rule统一为Save，Apply提交统一为OK，编辑也统一为Save
4. 804：更新日文字符串

#### 2023年6月13日星期二

1. 记单词57

2. 1365：复检的时候需要清除第一次自检的结果，回到待检测的状态。

3. 完成复检清除前一次自检结果，在回调函数中找到第一个最先调用的函数，将每一个item的状态值都设为UnChecked的状态。先在diagnose里创建一个对象方便后面调用`status: lang_message.mSelfCheck.StatusUnChecked`，然后在初始函数enableDiagnose中将每一个item的值都设为this.diagnose.status，以及每一个item的complete和ok值都设为0也就是初始状态，自此，每一次Recheck调用此函数都会先清空上一次的检查结果

   ```js
   this.items[0].status = this.items[1].status = this.items[2].status = this.items[3].status = this.items[4].status = this.items[5].status = this.items[6].status = this.items[7].status = this.diagnose.status;
   this.items[0].complete = this.items[1].complete = this.items[2].complete = this.items[3].complete = this.items[4].complete = this.items[5].complete = this.items[6].complete = this.items[7].complete = 0;
   this.items[0].ok = this.items[1].ok = this.items[2].ok = this.items[3].ok = this.items[4].ok = this.items[5].ok = this.items[6].ok = this.items[7].ok = 0;
   ```

4. 提交代码

#### 2023年6月14日星期三

1. 记单词33
2. 测试回复说4.3版本未发现1365复检清空状态被更新，发现树军未编译我更新的recheck代码。
3. 1270：手机端WebUI复现Client List的显示不全的问题，发现加延时从0.6到1秒，会有一点点卡顿，于是尝试$().ready() .(function())或者是window.onload方法，会显示不全，且不是偶现的。尝试Ajax请求完成之后success里面添加高度延时0.6s，加载完全，由于无法复现客户的问题，所以无法验证代码是否修改正确，所以只能在mantis上让客户在下一个版本中查看问题是否得到解决。
4. 安卓手机端测试IP Address Filtering页面是否显示不全，添加七八条过滤规则不停刷新都完整显示。
5. 苹果手机测试Client List与IP Address Filtering页面显示问题，都是可以正常显示且完全不卡顿的，录视频留存。

#### 2023年6月15日星期四

1. 记单词117
2. 上网查询与打电话询问参保地异地医保备案的流程与注意事项
3. 准备小程序上异地医保备案的材料：身份证、社保卡、居住证明、居住证、双方户口本等照片
4. 1378：在IP Address Filtering中可以设置非法的IP Subnet Mask，复现成功
5. 技术分享周会

#### 2023年6月16日星期五

1. 记单词81
2. mantis回复1270：告诉客户我没有复现出来，但是已经做了修改，请在下一个版本查看效果。
3. 将1327转回给测试，告知测试客户没有要求修改MAC Address Filtering页面的当前MAC Address Filter的状态为Disabled或者Enabled，其他地方均已修改为客户要求的Disable与Enable。
4. 直接打电话进行备案，加工作人员微信填写相关信息，备案成功。（注意事项：异地长期居住人员可以两地使用医保，但如果要去武汉使用医保要取消深圳备案，门诊刷医保带身份证以及社保卡）
5. 发周报



### 2023.06.19-2023.06.23

#### 2023年6月19日星期一

1. 记单词100
2. 尝试修改home页布局为圆角，但是高度不好调整，下面两边框均为直角。
3. selfcheck页面线条对不齐

#### 2023年6月20日星期二

1. 记单词100

#### 2023年6月21日星期三

1. 记单词30

2. 询问王博如何修改home页面布局为圆角，且下面两个角不被遮挡。

3. 给homebox的父级也就是row row-style加一个style的padding-bottom: 50px;属性，让它将底部撑开，从而达到高度不被遮挡的目的。修改css文件将homeBox的min-height改为350px，margin的top值改小一点为30px，加上圆角的属性。

   ```html
   <div class="row row-style" style="padding-bottom: 50px;">
   ```

   ```css
   .homeBox{background:#fff; min-height:350px;margin: 30px 0px 0px 0px;background-color: white; padding: 10px; border-radius: 10px; word-wrap:break-word; word-break:break-all;}
   ```

4. 提交代码，commit：WebUI: Homepage style modification.

#### 2023年6月22日星期四

1. 记单词60
2. 端午节放假

#### 2023年6月23日星期五

1. 记单词100
2. 将所有的alert警示框内的文字全部替换为可英日文转换的函数
3. 完成WebUI_Strings_v1.3_JP(20230623)文档给客户翻译alert文字为日文做切换
4. 写周报
5. 交代码



### 2023.06.26-2023.06.30

#### 2023年6月26日星期一

1. 记单词120
2. 请假半天
3. 804更新alert警示框日语翻译字符串，更新en.json和jp.json文件，并上传代码

#### 2023年6月27日星期二

1. 记单词120

2. 1378：DHCP无效subnet mask的拦截使用common.js中写好的checkMask来校验netmask的值，如果false则给出提示框：Host Subnet Mask is invalid.添加新字段HostSubnetInvalid。回复客户WebUI中所有的无效Subnet Mask均已做了拦截

   ```js
   /**
    *
    * @param {*} mask check mask
    * @returns: check resulte
    */
   function checkMask(mask)
   {
       obj=mask;
       var exp=/^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/;
       var reg = obj.match(exp);
       if(reg==null)
       {
            return false;
       }
        else
       {
            return true;
       }
   }
   
   if(checkMask($("#lansubmaskall").val()) == false) {
       parent.alertModal("AlertBox", false, "", GetMessage("mLan_Config", "HostSubnetInvalid", lang_message));
       return;
   }
   
   "HostSubnetInvalid": "Host Subnet Mask is invalid."
   ```

3. 修复最右边语言与Login按钮在屏幕宽度小于992大于400时大小不一致的问题，给Login和Logout都加上languagedropdownword样式，调整在不同宽度时登录与未登录按钮文字大小一致。

4. 给.main-header .nav-link设置高度auto时中间加上.nav-sidebar筛选出导航栏高度自由而不包括右边的登录框，于是语言与登录按钮大小保持一致。

   ```css
   .main-header .nav-sidebar .nav-link {
       height: auto;
   }
   ```

5. 实现点击Login按钮时，LoginBox显示出来后光标自动定位到密码框等待用户输入密码，可以直接输入，不需要点击再输入密码。在div_show()函数中LoginBox显示出来后添加如下代码

   ```js
   	function div_show() {
           console.log("index.html - div_show()");
   		document.getElementById('LCDLockedloginfailed').style.display = "block";
           console.log(" .div_show --islogin = " ,islogin);
           if (islogin == "0") {
               var errorMsg = document.getElementById("LCDLockedloginfailed");
               errorMsg.style.display = "none";
               $('#LoginBox').modal('show');
               $('#LoginBox').on('shown.bs.modal', function () {
                   $('#IndexLoginPwd_Show').focus();
               });
           }
           else {
               $('#LogoutBox').modal('show');
           }
       }
   ```

#### 2023年6月28日星期三

1. 记单词120
2. 修复语言与登录按钮中的字体高度不一致的问题，给Logout也加上mainLoginStyle样式调整Login以及Logout样式一致，在屏幕宽度小于992时也给出`.mainLoginStyle{padding: 11px 2px!important;}`的样式条件。修改padding的top值从原本的9px到11px达到字体高度一致的效果。

#### 2023年6月29日星期四

1. 记单词78
2. 体检
3. 1407：NAT Type添加padding-right，加大宽度。
4. `WebUI: NAT Type add padding-right.`
5. 提交周一病假证明材料到人资
6. 更新alert日文翻译字符串文档

#### 2023年6月30日星期五

1. 记单词78
2. 请假
3. 再次检查是否有未翻译的alert文字，写文档
4. 写周报



### 2023.07.03-2023.07.07

- [ ] 技术分享报告

#### 2023年7月3日星期一

1. 记单词100

#### 2023年7月4日星期二

1. 记单词100

2. 上传修改的alert英日文代码

   ```json
   "InputEmpty": "Please enter IP Address(WAN) or IP Subnet Mask.",
   "InputEmpty": "IPアドレス(WAN)またはサブネットマスクを入力してください。",
   ```

3. 上传代码`WebUI: Update alert Japanese string.`

4. 询问尹颖安卓学习入门，借了书《第一行代码》

#### 2023年7月5日星期三

1. 记单词100
2. 统一 蓝牙、WiFi、退出登录等confirmDialog确认对话框的Yes 和 No 为 OK 和 Cancel。
3. 上传代码，第一次统一了蓝牙和WiFi的，第二次统一了退出登录的。
4. `WebUI: Unify Yes and No as OK and Cancel.`

#### 2023年7月6日星期四

1. 记单词100
2. 学习Android系统架构、系统版本以及如何搭建开发环境
3. 安装Android Studio
4. 创建新项目，运行失败，模拟器不能添加启动，尝试手动安装 Intel x86 Emulator Accelerator (HAXM installer)最新版本，HAXM安装失败

#### 2023年7月7日星期五

1. 记单词69
2. 解决Android Studio中 HAXM安装失败的问题，进入BIOS界面检查设备是否开启虚拟化，确认开启。找到可能的原因：修改文件夹名称不留空格，卸载手动安装的 Intel x86 Emulator Accelerator (HAXM installer)版本，在SDK Manager中下载安装 Intel x86 Emulator，创建一个与SDK版本一致的模拟器，首次运行程序成功。
3. 重新安装Android Studio以及SDK，创建新的项目程序，VM成功运行，了解项目模块组成与功能结构。
4. 写周报



### 2023.07.10-2023.07.14

- [ ] 技术分享报告

#### 2023年7月10日星期一

1. 记单词99
2. Android：入门学习安装与配置
3. 找Android学习资料

#### 2023年7月11日星期二

1. 记单词51
2. 下载第一行代码Android第2版学习
3. Android：分析第一个Android程序项目结构、app目录下的结构分析、HelloWorld项目如何运行、详解项目中的资源-res目录、详解两个 build.gradle文件-最外层与app目录下、Android日志工具Log

#### 2023年7月12日星期三

1. 记单词29
2. 下载第一行代码Android第3版对比第2版学习
3. Kotlin：Kotlin语言简介、如何运行Kotlin代码、变量和函数、程序的逻辑控制-if条件语句和when条件语句

#### 2023年7月13日星期四

1. 记单词44
2. 收集《Web UI screen transition diagram and description 20230712》文档输入值的数据与限制条件-MAC Address Filtering and IP Address Filtering。
3. Kotlin：程序的逻辑控制-循环语句

#### 2023年7月14日星期五

1. 记单词43
2. Kotlin：程序的逻辑控制-循环语句
3. 发周报
