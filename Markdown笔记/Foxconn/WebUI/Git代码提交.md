## Git代码提交

- 建一个KAGA文件夹，右键Git bash
- 登录到远程服务器：`ssh heshuang@10.187.47.169`密码：Foxconn123
- 克隆远程仓库项目到本地：`git clone git@10.187.47.169:projects/T99W444.git`
  密码：Foxconn123
- `git pull --rebase` 拉取最新的代码
- 修改的代码上传到169我的目录下：`scp -P /path/filename username@servername:/path`上传本地文件到服务器
- `git diff`对比修改过的文件与新代码的区别，然后将新代码下载下来与自己的代码进行合并
- 上传替换原本的仓库里的`/KAGA/T99W444/apps_proc/foxconn/fx-www`下的www代码
- `git add .`添加文件到git
- `git diff --cached`检查具体的提交内容
- `git commit`提交代码，打开编辑器，详细书写commit message，前面要加一个WebUI
- `git push`推送到远程仓库，第一次push提示让我配置用户，配置即可（`git config --global user.email`等等）