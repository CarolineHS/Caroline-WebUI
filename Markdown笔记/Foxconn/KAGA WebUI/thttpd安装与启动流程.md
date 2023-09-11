# Ubuntu18.4安装thttpd并搭建web服务器

thttpd 是一个简单，小型，可移植，快速且安全的 HTTP 服务器，thttpd搭建的Web服务器支持认证、CGI等服务，功能都比较齐全，常用于嵌入式或桌面系统搭建web服务器使用。

简单：它只处理实现HTTP/1.1所需的最小值。也许比最低限度要多一点。

小：它运行时大小也非常小，因为它不fork，并且非常注意内存分配。

可移植性：它可以在大多数类unix操作系统上编译，特别是包括FreeBSD，SunOS 4，Solaris 2，BSD/OS，Linux，OSF。

快速：在典型情况下，它的速度与最好的全功能服务器(Apache、NCSA、Netscape)差不多。在极端负载下，它会快得多。

安全：它不遗余力地保护web服务器免受来自其他站点的攻击和破坏。

它还有一个非常有用的特性(基于url流量的节流)，这是其他服务器目前不具备的。另外，它支持IPv6开箱即用，不需要打补丁。

## 一、thttpd的安装

#### 1. 下载

```
$下载
wget http://www.acme.com/software/thttpd/thttpd-2.29.tar.gz
$解压
tar -zxvf thttpd-2.29.tar.gz
$进入thttpd解压后目录
cd thttpd-2.29/
```

#### 2. 编译&安装

```
./configure
$编译
make
$安装
sudo make install
$添加www组
sudo addgroup www
```

==注意：版本过低可能会下载编译失败！尽量下载高版本==

#### 3. 查看是否安装成功

```
thttpd -V
```

安装成功如下：

```
carol@ubuntu:/usr/local/thttpd$ thttpd -V
thttpd/2.29 23May2018
```

## 二、thttpd的启动

1. 最简单的测试方法不用配置文件，直接输入命令：

```
sudo thttpd -p 80 -d /usr/local/thttpd/www/web-ui/www  -u root
```

==注意：此处的启动路径要改为代码文件web-ui下的www文件路径==

2. 测试thttpd是否成功启动

```
ps aux | grep thttpd
```

3. 如果像这样不能成功启动，则杀掉进程，重新==sudo==开启

```
carol      2395  0.0  0.0  21540   876 pts/0    S+   18:22   0:00 grep --color=auto thttpd
```

```
carol@ubuntu:/usr/local/thttpd$ ps aux | grep thttpd
root       2400  0.0  0.2  22600  2792 ?        Ss   18:24   0:00 thttpd -p 80 -d /usr/local/thttpd/www/web-ui/www -u root
carol      2402  0.0  0.0  21540   972 pts/0    S+   18:24   0:00 grep --color=auto thttpd
```

## 三、web端访问服务

1. 查看Ubuntu IP地址：`ip addr`
2. Ubuntu外浏览器：192.168.187.128
3. Ubuntu内浏览器：127.0.0.1

## 四、修改文件权限

/usr/local/thttpd/www/web-ui/www下的cm、css、generic、images、js、languages、mManagementadb.html、webfonts等目录下文件均要去掉可执行权限。

修改文件夹下面所有文件权限方法：

```
sudo chmod -R -x filename
sudo chmod +x filename
```

`-R`表示递归修改filename文件夹下所有文件的权限。

==如果需要去掉一个文件夹下面的所有文件的“可执行”权限而不改变文件夹的权限，方法是先使用此命令对文件夹及文件夹下面的所有文件做修改操作，然后单独对文件夹加上“可执行”权限即可。==