## 一、在Ubuntu上安装docker

```
sudo apt update
sudo apt install docker-ce
sudo usermod –aG docker ${USER}
```

## 二、安装编译环境

#### 1. 从SVN上下载2个文件

地址：svn://10.187.47.221/Software/T99W444/SW/build_tools/docker
文件：mydocker.sh
文件：docker-9x07-v2.1.tar.gz

#### 2. 将docker镜像安装到Ubuntu系统上

```
docker load -i docker-9x07-v2.1.tar.gz
```

#### 3. 将脚本mydocker.sh拷贝你的目录里，一般是 ~/bin/ 下面

```
cp mydocker.sh ~/bin/
export PATH=$PATH:~/bin  【这句最好可以加到 ~/.bashrc 文件里面，以便自动设置PATH】
```

![image-20230303092041291](C:\Users\25589\AppData\Roaming\Typora\typora-user-images\image-20230303092041291.png)

## 三、开始编译代码

#### 1. 进入docker编译环境

```
mydocker.sh <你的用户名>
```

#### 2. 进到代码目录，你的代码放在哪个目录就进哪个目录

```
cd kaga/T99W444/
```

#### 3. 开始编译

```
./build.sh all
```

