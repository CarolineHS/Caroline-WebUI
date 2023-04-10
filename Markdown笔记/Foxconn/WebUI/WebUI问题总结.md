### 修改WebUI代码时遇到的一些问题以及解决办法

#### 1. thttpd服务器环境的搭建

可参考《thttpd安装与启动流程》这一篇文章

其中遇到的问题有

1. thttpd版本问题：版本过旧会导致安装失败，尽量安装新版本
2. thttpd的启动命令失败的话要加上sudo
3. 修改文件权限：去掉文件的可执行权限，加上可写入权限，均参考《Ubuntu的基本使用》这篇文章，可以解决在Ubuntu中使用VScode修改代码时保存就显示权限不足需要输入root密码的问题

#### 2. WebUI页面修改

1. 代码修改了，但浏览器没有反应：要同步修改en.json文件，开发新的页面时，引用的文件也要加进来，涉及到文字要把赋值的值写到json里面
2. 隐藏页面或者页面内容可以不用注释，直接在div标签中加上`style="display: none;" `即可

#### 3. T99W444编译与烧录

可参考《Docker 9x07编译环境》这一篇文章

1. 169服务器线上编译更方便，因为服务器有搭好的环境
2. 初次使用服务器，要修改bash命令行颜色，以便区分，可参考《修改服务器里bash命令行颜色》文章中`~/.bashrc`的配置
3. 创建一个文件夹KAGA，cloneT99W444远程仓库
4. 每次编译之前都要拉取最新的代码，`git pull --rebase`
5. 需要开通docker权限，进入docker环境`mydocker.sh heshuang`
6. 进到代码目录，你的代码放在哪个目录就进哪个目录`cd kaga/T99W444/`
7. 编译`./build.sh all`，有时候需要清理一下`./build.sh clean all`
8. 单独编译WebUI的部分用：`./build.sh fx`
9. 编译完成之后会生成一个FKSB-100D.0.3.0-20230314-172904.zip文件，拷贝压缩包文件
10. 服务器与本地文件上传与下载可以使用scp命令：`scp mydocker.sh heshuang@10.187.47.169:~/KAGA/build_tools/`
11. 代码解压后，下载烧录软件，根据《KAGA Mifi2 QFIL 烧录固件》SOP在SVN上下载烧录的软件，然后按照步骤烧录，烧录成功后按照《调试webui》cmd输入指令开启板子，浏览器输入板子ip进行连接
12. WebUI最新代码合并之后弹警示框`Socket TimeOut`，原因是对接了新的接口，没有编译最新的代码，需要拉取最新的代码进行编译，编译要记得进入docker环境。
13. 页面一直弹出警示框：`Device went to a bad state..please re-login!!`，原因是由于我们不断的push新的代码进去，所以有很多错误日志，磁盘满了，解决方案：`adb shell`进入设备，`rm -rf data/www/serror.log`，清除错误日志，`adb reboot`重启设备即可

#### 4. Git上传提交代码到服务器

1. `git pull --rebase`拉取最新的代码
2. `git diff`对比修改过的文件与新代码的区别，然后将新代码下载下来与自己的代码进行合并
3. 上传替换原本的仓库里的`/KAGA/T99W444/apps_proc/foxconn/fx-www`下的www代码
4. `git add .`添加文件到git
5. `git diff --cached`检查具体的提交内容
6. `git commit`提交代码，打开编辑器，详细书写commit message，前面要加一个WebUI
7. 默认编辑器为nano(退出ctrl+X)，使用起来很不方便，可以试用命令`git config --global core.editor vim` 修改Git默认编辑器为vim
8. `git commit`之后要`git pull --rebase`一下再push，避免产生大量merge commit出现，影响后面的debug
9. `git push`推送到远程仓库，第一次push提示让我配置用户，配置即可（`git config --global user.email`等等）

#### 5. WebUI导航

1. 将原本的侧边栏导航改成顶部导航栏
2. 修改理念：尽量少修改原本代码布局，本来尝试将原本的树状导航修改为胶囊下拉导航，但是需要修改大量的源代码，而且问题太多，后改为直接修改flex布局，改变轴的方向，删除侧边栏。
3. 点击下拉导航会撑开导航栏：固定导航栏的高度之后，点击下拉导航中心会改变位置，所以同时要固定导航的位置fixed-top，给下拉列表加浅灰色背景和圆框以及阴影修饰并且以便与页面做区分。
4. TestSettings菜单下的两个导航点击不能变色：这两个导航有两个data-title，点击test下的按钮改变的实际上是已经被隐藏的别的地方的样式，解决方案是直接注释掉被隐藏的Network Configuration和APN Profile Settings。
5. 语言选择和登录按钮不能点击：改变这一个部分的层级，加`style=“z-index: 1040”`，大过覆盖它的层级就可以了。
6. 点击下拉导航的子级后，导航自动隐藏：没有实现
7. 三级菜单打开后再次点击还是回到打开的三级菜单，有记忆功能：没有实现
8. 关于移动端响应式布局，由于原本的代码结构为sidebar，并且我没有修改代码结构，所以很难通过bootstrap框架实现响应式，只能通过原生js来做，判断是否为手机端，手机端从文字变为图标。
9. 下拉菜单图标被挤走：固定导航菜单以及下拉菜单的宽度，用js动态调整文字和图标样式时导航菜单的宽度。在html生命周期里做一个判断web端与手机端，默认样式为web端，所以只需要判断是否为手机端并且改变样式就可以。
10. 将判断是否为移动端的函数在onLoad里面调用，写了一个resize函数调整PC端页面在宽度小于768的情况下也显示图标，提升用户体验感。
11. 点击下拉导航之外的页面，导航自动关闭：将menuCoseAll()关闭所有导航函数加入到页面点击事件中，就可以实现点击页面关闭下拉导航，但是由于下拉导航撑开的除却导航的右半部分页面无法实现点击关闭，所以在导航的最后一个li后面加上一个div，然后flex=1让它占导航栏剩下的全部空间，即点击页面任意部分均可以实现下拉导航关闭。
12. 语言切换导致的导航宽度不适配的问题：在调整页面宽度的函数ResizeFunction()里添加一个判断条件，通过判断是日文还是英文，动态调整导航宽度。在判断是否为手机端的函数MobileFunction()里也添加语言的判断条件，为了保证每次刷新都是合适的宽度，在切换语言的函数LanguageChanged(e)里添加手机端与PC端的判断条件，里面套语言的判断条件，为了保证点击语言切换的时候自动刷新也能有合适的宽度。
13. 优化每次PC端刷新时会闪过图标，手机端刷新会闪过文字的问题，只要把默认的文字和图标都设置成display：none；先隐藏起来，然后在判断的时候block显示出来就行了。
14. 找王博要了24X24的图片，改成新图片之后，图片和文字还是会同时显示，明明设置的是默认display：none；隐藏，判断条件之后再block，但是还是有冲突。于是我设置了MobileFunction()函数PC端调用ResizeFunction()函数，语言判断函数LanguageChanged(e)中直接调用MobileFunction()函数。有一点点小问题：PC端日语状态下刷新会闪过英文。

#### 6. debug

1. debug Connection History and Bluetooth Management手机端适配：将任何 `.table` 元素包裹在 `.table-responsive` 元素内，即可创建响应式表格，其会在小屏幕设备上（小于768px）水平滚动。当屏幕大于 768px 宽度时，水平滚动条消失。
2. 手机连接MiFi，访问IP，查看网页效果，连接不上的解决办法：修改mac地址，adb shell进入板子，ifconfig查看HWaddr后的mac地址，使用命令`fx-set-wifi-mac`后面跟00A1C6EBCC88类似于这样的修改过的mac地址，最后reboot重启动，再连接即可。

