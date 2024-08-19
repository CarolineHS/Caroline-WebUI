#### 回退版本

`git reset --soft 版本号`

==`git reset --hard 版本号`==

`git reset --mixed 版本号`

#### 暂存区

暂存区 -> 覆盖 -> 工作区，`git restore 目标文件`

从暂存区移除文件，`git rm --cached 目标文件`

#### 分支

1. 创建分支：`git branch 分支名`
2. 切换分支：`git checkout 分支名`
3. 查看分支：`git branch`

#### 合并与删除

1. 切回要合并的分支master上：`git checkout master`
2. 合并其他分支login-bug：`git merge login-bug`
3. 删除合并后的分支指针login-bug：`git branch -d login-bug`

#### Git远程仓库

1. 注册第三方托管平台网站账号
2. 新建仓库得到==远程仓库Git地址==
3. 本地Git仓库添加远程仓库原点地址
   - `git remote add 远程仓库别名 远程仓库地址`
   - `git remote add origin https://gitee.com/lidongxu/work.git`
4. 本地Git仓库推送版本记录到远程仓库
   - `git push -u 远程仓库别名 本地和远程分支名`
   - `git push -u origin master`
   - 完整写法：`git push --set-upstream origin master:master`

#### Git远程仓库-克隆

`git clone https://gitee.com/lidongxu/work.git`