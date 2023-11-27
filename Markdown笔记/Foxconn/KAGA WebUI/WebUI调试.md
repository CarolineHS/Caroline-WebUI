## WebUI调试

1. 执行 adb shell 

2. 执行 rw 命令

3. exit  退出 adb shell

4. 比如修改了 www/generic/index.html 的代码
   直接可以执行

   ```
   adb push D:\wangbo\kaga\WEB\web20230210\www\generic\index.html /WEBSERVER/www/generic
   ```

其中 D:\wangbo\kaga\WEB\web20230210\ 是本地电脑webui 项目的路径

每次修改完前端代码，查看效果，都要保存并push修改过的代码进板子