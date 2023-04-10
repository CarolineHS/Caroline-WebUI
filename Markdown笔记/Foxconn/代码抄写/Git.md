# Git

## 一、版本控制概要

### 1.常用术语

仓库（repository）

- 受版本控制的所有文件修订历史的共享数据库

工作空间（workpace）

- 本地硬盘或Unix 用户帐户上编辑的文件副本

工作树/区（working tree）

- 工作区中包含了仓库的工作文件。您可以修改的内容和提交更改作为新的提交到仓库。

暂存区（staging area）

- 暂存区是工作区用来提交更改（commit）前可以暂存工作区的变化

索引（index）

- 索引是暂存区的另一种术语

签入（checkin）

- 将新版本复制回仓库

签出（checkout）

- 从仓库中将文件的最新修订版本复制到工作空间

提交（commit）

- 对各自文件的工作副本做了更改，并将这些更改提交到仓库

冲突（conflict）

- 多人对同一文件的工作副本进行更改，并将这些更改提交到仓库

合并（merge）

- 将某分支上的更改联接到此主干或同为主干的另一个分支

分支（branch）

- 从主线上分离开的副本，默认分支叫master

锁（lock）

- 获得修改文件的专有权限

头（head）

- 最常用以指向当前选择的分支

修订（revision）

- 表示代码的一个版本状态。Git通过用SHA1 hash算法表示的ID来标识不同的版本。

标记（tags）

- 标记指的是某个分支某个特定时间点的状态。通过标记，可以很方便的切换到标记时的状态。

### 2.常见的版本控制器

- **Git**

- **SVN**（Subversion）

- CVS（Concurrent Versions System）

- VSS（Micorosoft Visual SourceSafe）

- TFS（Team Foundation Server）

- Visual Studio Online

### 3.版本控制分类

#### 1）本地版本控制

记录文件每次的更新，可以对每个版本做一个快照，或是记录补丁文件，适合个人用，如RCS

#### 2）集中版本控制

所有的版本数据都保存在服务器上，协同开发者从服务器上同步更新或上传自己的修改。所有的版本数据都存在服务器上，用户的本地只有自己以前所同步的版本，如果不连网的话，用户就看不到历史版本，也无法切换版本验证问题，或在不同分支工作。而且，所有数据都保存在单一的服务器上，有很大的风险这个服务器会损坏，这样就会丢失所有的数据，当然可以定期备份。代表产品：SVN、CVS、VSS

#### 3）分布式版本控制

所有版本信息仓库全部同步到本地的每个用户，这样就可以在本地查看所有版本历史，可以离线在本地提交，只需在连网时push到相应的服务器或其他用户那里。由于每个用户那里保存的都是所有的版本数据，只要有一个用户的设备没有问题就可以恢复所有的数据，但这增加了本地存储空间的占用。

### 4.Git和SVN最主要的区别

- SVN是集中式版本控制系统

- Git是分布式版本控制系统

## 二、Git安装与配置

### 1. Git

Git是目前世界上最先进的分布式版本控制系统（免费、开源）

优点

- 适合分布式开发，强调个体

- 公共服务器压力和数据量都不会太大

- 速度快、灵活

- 任意两个开发者之间可以很容易的解决冲突

- 离线工作

缺点

- 模式上比SVN更加复杂

- 不符合常规思维

- 代码保密性差，一旦开发者把整个库克隆下来就可以完全公开所有代码和版本信息。

### 2. 搭建Git工作环境

#### 1）Linux安装Git

- sudo apt-get install git 

#### 2）基本操作命令

- cd ~ 回home当前用户所在目录

- cd.. 回退到上一级目录

- pwd 显示当前所在目录路径

- ls/ll 列出当前目录中的所有文件

- touch 新建一个文件，如touch index.js

- rm 删除一个文件

- mkdir 新建一个目录，也就是新建一个文件夹

- rm -r 删除一个文件夹

- mv 移动文件

- reset 重新初始化终端/清屏

- clear 清屏

- history 查看命令历史

- help 帮助

- exit 退出

- 表示注释#

- 创建文件：<命令默认从键盘获得的输入，改成从文件，或者其他打开文件以及设备输入、>>是追加内容、>是覆盖原有内容

- cat 显示文件内容

### 3. Git配置 git config

#### 1）查看配置 git config -l

- 查看系统 `git config --system --list`

- 查看当前用户配置 `git config --global --list`

- 查看当前仓库配置信息 `git config --local --list`

#### 2）Git配置文件分类

- `/etc/gitconfig`：包含了适用于系统所有用户和所有项目的值。

- `~/.gitconfig`：只适用于当前登录用户的配置

- 位于git项目目录中的`.git/config`：适用于特定git项目的配置

#### 3）设置用户名和邮箱

- `git config --global [user.name](http://user.name/)  "zhangguo"`#名称

- `git config --global user.email zhangguo@qq.com`  #邮箱

#### 4）添加或删除配置项

##### 添加配置项

- 例如要在student区域下添加一个名称为height值为198的配置项：`git config --system student.height 198`

  - local 项目级

  - global 当前用户级

  - system 系统级

##### 删除配置项

- 将系统的height配置项移除：`git config --system --unset student.height`

## 三、Git理论基础

### 1. 工作区域

- workpace：需要通过Git进行版本控制的目录和文件，这些目录和文件组成了工作空间

- index/stage：暂存区，用于临时存放改动，只是一个保存即将提交到文件列表信息的文件

- repository：仓库区，安全存放数据的位置，里面有提交到所有版本的数据

- remote：远程仓库，托管代码的服务器

- directory：使用Git管理的一个目录，也就是一个仓库，包含工作空间和Git的管理空间

- .git：存放Git管理信息的目录，初始化仓库的时候自动创建

- local repo：本地仓库，一个存放在本地的版本库

- stash：隐藏，是一个工作状态保存栈，用于保存/恢复workpace中的临时状态

### 2. 工作流程

![image-20221108154103893](C:\Users\Carol\AppData\Roaming\Typora\typora-user-images\image-20221108154103893.png)

- 在工作目录中添加、修改文件

- 将需要进行版本管理的文件放入暂存区域

- 将暂存区域的文件提交到git仓库

- git管理的文件有三种状态：已修改（modified），已暂存（staged），已提交（committed）

## 四、Git操作

### 1. 创建工作目录与常用指令<img src="https://api2.mubu.com/v3/document_image/13f5207d-6daf-401f-a7fb-3f9b4b32ce45-16813133.jpg" alt="img" style="zoom: 80%;" />

### 2. 获得Git仓库

#### 1)创建全新仓库

- 在当前目录新建一个Git代码库

- git init![img](https://api2.mubu.com/v3/document_image/b003b0a3-04a9-44d0-b7a3-9ffbd1be6efd-16813133.jpg)

#### 2)克隆远程仓库

- 克隆远程目录是将远程服务器上的仓库完全镜像一份至本地

- 克隆一个项目和它的整个代码历史（版本信息）git clone [url]

### 3. Git文件操作

#### 1)文件的4种状态

![image-20221108154236211](C:\Users\Carol\AppData\Roaming\Typora\typora-user-images\image-20221108154236211.png)

- ==Untracked==：未跟踪，此文件在文件夹中，但并没有加入到git库，不参与版本控制。==通过git add 状态变为Staged==。

- ==Unmodify==：文件已经入库，未修改，即版本库中的文件快照内容与文件夹中完全一致。这种类型的文件有两种去处，如果它被修改，而变为==Modified==。如果使用==git rm==移出版本库，则成为==Untracked==文件。

- ==Modified==：文件已修改，仅仅是修改，并没有进行其他的操作。这个文件也有两个去处，==通过git add可进入暂存staged状态==，使用==git checkout== 则丢弃修改过，返回到==unmodify==状态，这个==git checkout==即从库中取出文件，覆盖当前修改。

- ==Staged==：暂存状态。==执行git commit则将修改同步到库中==，这时库中的文件和本地文件又变为一致，文件为==Unmodify==状态。执行==git reset HEAD filename==取消暂存，文件状态为==Modified==。

#### 2)查看文件状态

- `git status [filename]`查看指定文件状态

- `git status`查看所有文件状态

#### 3)添加文件与目录

![image-20221108154443563](C:\Users\Carol\AppData\Roaming\Typora\typora-user-images\image-20221108154443563.png)

- 添加指定文件到暂存区
  `git add [file1] [file2] ... `

- 添加指定目录到暂存区，包括子目录
  `git add [dir]`

- 添加当前目录的所有文件到暂存区
  `git add .`

#### 4)移除文件与目录（撤销add）

- 直接从暂存区删除文件，工作区不做出改变 `git rm --cached <file>`![img](https://api2.mubu.com/v3/document_image/d7b01b5d-c7db-4d3a-9de8-79746b8ca5f6-16813133.jpg)

- 通过重写目录树移除add文件
  如果已经用add命令把文件加入stage了，就先需要从stage中撤销`git reset HEAD <file>`
  
- 