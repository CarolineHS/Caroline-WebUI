# QNX应用开发环境搭建

##  一、创建myQNX账户

![img](https://img-blog.csdnimg.cn/8ef50cc9d32247578987e1d868703063.png)	myQNX试用账户的申请流程可以参考这一篇文章[myQNX account试用申请流程](https://blog.csdn.net/hs_2017112123/article/details/125644067)

​     ==要使用myQNX License Manager或QNX Software Center，必须先创建一个myQNX账户==

    1. 访问[www.qnx.com](http://www.qnx.com/)并单击页面顶部的myQNX
       2. 单击New Member
       3. 填写电子邮件地址并选择一个密码，然后单击Create Account（密码应该只包含字母数字字符）。
       4. 填写个人资料信息，然后点击Submit
       5. 检查电子邮件以获取确认密钥，输入密钥和密码，然后单击Continue。（或者单击确认电子邮件中的激活链接。）

   6. 然后就可以看到myQNX账户资料，账户设置完成。

      

##    二、安装并启动QNX Software Center

![img](https://img-blog.csdnimg.cn/426b573d22284e6ab1bf2dc7c185e1d5.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

​    1. 登录myQNX账户： https://www.qnx.com/account/index.html

​    2. 在您的 myQNX 帐户配置文件中，单击 QNX 软件中心链接：http://www.qnx.com/download/group.html?programid=29178

​    3. 向下滚动并单击主机操作系统的安装程序链接。

​    4. 向下滚动至相关文档并打开安装说明，其中描述了如何运行 QNX 软件中心安装程序。

![img](https://img-blog.csdnimg.cn/c64b2a72cf4445288a1ebc40de56c8f8.png)

​     5. QNX software center安装。

​     6. 当QNX software center连接到myQNX服务器时，会提示输入myQNX凭据：

![img](https://img-blog.csdnimg.cn/a07feb01031d431696635c4dad84ffb9.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

​     7. 登录后，QNX 软件中心会显示一个欢迎屏幕，可以安装 QNX 软件开发平台 (SDP) 和其他 QNX 产品。

![img](https://img-blog.csdnimg.cn/dd1fe089a41d4186afc3c1ebf1f9b2d3.png)

  

##  三、在开发主机上安装QNX SDP 

###     1. 从欢迎屏幕或者是Advanced tab选择 Add Installation添加安装。

![img](https://img-blog.csdnimg.cn/213c4d7d56f0443eb02e1c624428ae23.png)

###     2. 选择你要安装的产品

例如：你要安装QNX SDP7.1，就展开QNX Software Development Platform7.1，然后单击QNX Software Development Platform7.1包。

![img](https://img-blog.csdnimg.cn/9637d7959aba461dbe1091f89eb94a23.png)

  

## 四、安装QNX虚拟机

###     可以在软件中心下载VMware映像，下载后路径如下：

![img](https://img-blog.csdnimg.cn/01a4cf07cad04290a5baae313b84f39b.png)

###      打开vmware文件夹，解压后找到虚拟机的位置。

![img](https://img-blog.csdnimg.cn/2e8a7b4c8c214507b8945a2cf257d0f8.png)![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)编辑

###      打开VMware根据上面的位置将qnx虚拟机添加进去。

![img](https://img-blog.csdnimg.cn/fd3f0be0cb13480ab5111df919d3fe84.png)



##    五、安装以及启动编译QNX Momentics IDE

###     1. 从欢迎屏幕或者是Advanced tab选择 Add Installation添加安装。

###     2. 展开QNX Momentics IDE组，然后单击QNX Momentics IDE。

###     3. 选择安装文件夹，一直下一步，安装完成后，IDE会显示在Installed选项卡中。

![img](https://img-blog.csdnimg.cn/3824201772fc4c98b1be282452e956a5.png)

###     4. 启动IDE后的界面

![img](https://img-blog.csdnimg.cn/67794f7299904c898eec6134c2e9a9a1.png)

###      **5. 导入之前在软件中心下载好的bsp，我的路径如图所示，直接导入压缩包即可，不需要解压。**

![img](https://img-blog.csdnimg.cn/08b3141d393f4c64b14809a1f359839c.png)

###      **6. 导入流程**

​    **File--->Import--->QNX Source Package and BSP**

![img](https://img-blog.csdnimg.cn/dc06f32496904751bd5e83b3210d824b.png)

 ![img](https://img-blog.csdnimg.cn/92135d88385f415d8379d0ab2e612d38.png)

​    **选择这个导入压缩包的选项，导入上面的压缩包**

​     ![img](https://img-blog.csdnimg.cn/d277188f330b4eb6b31d6fe748101303.png)

###      **7. 导入bsp之后进行编译，右键点击bsp文件夹，选择Build Project**

​    ![img](https://img-blog.csdnimg.cn/13751dacb6954768849f60809a035a21.png)

###      **8. bsp编译成功后，导入在软件中心下载的实例demo进行编译**

​     **将apps文件夹拷贝到bsp文件夹下面的src文件夹中，如下图所示**

![img](https://img-blog.csdnimg.cn/18090918d30e49a188baaeff2af2b755.png)



​    ![img](https://img-blog.csdnimg.cn/38dd10e8822b47ebae3c2f1a1d78e12b.png)

##    六、IDE与QNX虚拟机连接

###     1. qnx虚拟机有3D渲染，可以先关掉，进入命令行界面

###     编辑虚拟机设置 

![img](https://img-blog.csdnimg.cn/c60a98985f904970975dc7f20cd60196.png)

###     取消加速3D图形这个选项

![img](https://img-blog.csdnimg.cn/96429894c53c4e589793f5dff528c0dc.png)

###      **2.再进去就能进入命令行页面了，输入ifconfig命令，得到qnx虚拟机的IP地址192.168.187.130**

![img](https://img-blog.csdnimg.cn/4f17167d046645b4955e88e7ca3401c1.png)

###      3. 在IDE通过该IP地址与虚拟机进行连接

​    **Target File System Navigator空白处右键选择New QNX Target**

![img](https://img-blog.csdnimg.cn/0c5deb1223414de1bd899138c8ba4006.png)

​     **输入IP地址即可进行连接**

​     ![img](https://img-blog.csdnimg.cn/c4c92a2fd52845e08fc51550518c0c72.png)



##    七、运行

###     1. 打开putty，输入qnx的IP地址，连接虚拟机，虚拟机的用户名和密码都是root

​    ![img](https://img-blog.csdnimg.cn/b684efeff07949538e252693e3130abb.png)

###      2. 输入指令 slmctl "stop adas_example"，关闭adas，此时虚拟机应该是黑屏状态。

![img](https://img-blog.csdnimg.cn/5421eb81990b45d3a2cff936c4b25db2.png)

###     **3.关闭虚拟机，打开前面关闭的3D渲染**

###     4. 此时回到IDE，右键点击项目文件夹，选择Run As ----> C/C++ QNX Application，运行程序

![img](https://img-blog.csdnimg.cn/3ba4ff7303014a30a55ee74257f85c83.png)

###      5. 程序成功运行，我运行的是一个动态实例

![img](https://img-blog.csdnimg.cn/8493ccfda492450f9bafea84cdc81389.png)

