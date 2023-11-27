#### 你有一个空的存储库

You have an empty repository

首先，您需要在终端中运行这些命令。

To get started you will need to run these commands in your terminal.

#### 首次配置Git

Configure Git for the first time

```
git config --global user.name "X2001612 何双"
git config --global user.email "shuang.he@mail.foxconn.com"
```

#### 使用您的存储库

Working with your repository

我只想克隆这个存储库

I just want to clone this repository

如果您只想克隆这个空存储库，请在终端中运行此命令。

If you want to simply clone this empty repository then run this command in your terminal.

```
git clone https://fiscm-cns.myfiinet.com/scm/t99w497_00_w_wan_lte_cpe_tbox/fn_tsp_web.git
```

#### 我的代码已准备好推送

My code is ready to be pushed

如果您已经准备好将代码推送到此存储库，请在终端中运行它。

If you already have code ready to be pushed to this repository then run this in your terminal.

```
// 进入项目目录
cd existing-project
// 初始化Git仓库
git init
// 添加文件到暂存区
git add --all
// 初始提交
git commit -m "Initial Commit"
// 添加远程存储库的引用origin
git remote add origin https://fiscm-cns.myfiinet.com/scm/t99w497_00_w_wan_lte_cpe_tbox/fn_tsp_web.git
// 将代码推送到远程存储库的dev分支，-u表示建立本地分支与远程分支的跟踪关系，使以后的推送和拉取更容易
git push -u origin HEAD:dev
```

#### 我的代码已被 Git 跟踪

My code is already tracked by Git

如果您的代码已被 Git 跟踪，则将此存储库设置为要推送到的“origin”。

If your code is already tracked by Git then set this repository as your "origin" to push to.

```
// 进入项目目录
cd existing-project
// 更新origin引用的URL，将其指向新的远程存储库
git remote set-url origin https://fiscm-cns.myfiinet.com/scm/t99w497_00_w_wan_lte_cpe_tbox/fn_tsp_web.git
// 将所有本地分支推送到远程存储库，并建立跟踪关系
git push -u origin --all
// 推送本地 tags 到远程存储库
git push origin --tags
```

