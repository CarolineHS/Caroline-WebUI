#### 1. 修改用户目录里的bashrc文件

```
vim ~/.bashrc
```

#### 2. 在文件中插入下列字符串

注意：非root用户，最后的#换成$

```
PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[ 033[00m\]$'

source ~/bin/git_aliases.sh
cd ~
export PATH=$PATH:~/bin/

ps --no-headers --pid 1 | grep --silent docker-init && in_docker=1 || in_docker=0
[ $in_docker = 1 ] && {
	PS1='\[\033[01;36m\][docker] '$PS1
}
```

#### 3. 重新进入系统或刷新bashrc文件，则修改成功

```
. ~/.bashrc
```

