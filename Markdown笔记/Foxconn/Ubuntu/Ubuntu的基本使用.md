# Ubuntu的基本使用

### 1. 查看文件详细信息

`ls -l`

### 2. 修改文件权限

`sudo chmod 操作对象+权限增减+操作权限 filename`

==操作对象==：u 表示文件拥有者，g 表示组用户，o 表示其它用户，a 表示所有用户

==权限增减==：\+ 表示增加权限、- 表示取消权限、= 表示设定唯一权限

==操作权限==：r 表示可读取，w 表示可写入，x 表示可执行

例：`sudo chmod g+w filename`    表示添加用户组的可写权限

​		  `sudo chmod u-x filename`    表示删除文件拥有者的可执行权限

### 3. 修改文件夹下面所有文件权限

`sudo chmod -R -x filename`

`-R`表示递归修改filename文件夹下所有文件的权限。

==如果需要去掉一个文件夹下面的所有文件的“可执行”权限而不改变文件夹的权限，方法是先使用此命令对文件夹及文件夹下面的所有文件做修改操作，然后单独对文件夹加上“可执行”权限即可。==

### 4. 修改文件夹中指定文件的权限

`sudo chmod a+w *.html`

加上.html文件所有用户的可写入权限

### 4. 查看Ubuntu IP地址

`ip addr`

### 5. 复制文件或文件夹到指定文件夹

`sudo cp -r webui~ /usr/local/thttpd/www`

### 6. 杀掉进程

kill 进程id

### 7. Ubuntu使用中文输入法

命令行输入：`sudo apt-get install language-pack-zh-han*`

在设置中选择语言为中文即可

### 8. 删除文件夹

`sudo rm -rf 文件或文件夹名`

### 9. 查看共享文件夹

`cd /mnt/hgfs/share`

### 10. 查看Ubuntu版本

`uname -a`查看操作系统发行版号和操作系统版本

`uname -v`查看版本号

`lsb_release -a`查看发行版本信息

`cat /etc/issue`查看Linux版本信息及类型

`cat /proc/version`查看Linux内核的信息