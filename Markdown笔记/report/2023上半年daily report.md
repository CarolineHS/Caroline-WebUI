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
   2. Navigation width: debug Navigation text display wrapping.

#### 2023年4月20日星期四

1. 记单词150
2. debug：There are some errors by adding number 0 before characters on DHCP configuration page.但是没办法复现，因为点击apply之后页面会一直加载，卡住，不能手动刷新，也不能重启，必须重新烧录代码才能重新进入页面
3. 烧录了一版新的代码：FKSB-100D.0.3.6-20230420-172120

#### 2023年4月21日星期五

1. 记单词100
2. jQuery：电梯导航案例-点击当前li添加current类、滑动页面电梯导航自动添加current类、节流阀（互斥锁）。
3. 写周报



### 2023.04.24-2023.04.28

#### 2023年4月24日星期一

1. 记单词
2. 