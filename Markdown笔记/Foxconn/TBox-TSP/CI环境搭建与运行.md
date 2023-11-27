phpstudy启动Nginx

创建域名，将tbox项目文件夹放到phpstudy_pro/WWW文件夹下，

```
application/helpers/common_helper.php文件修改function common_get_app_ctl_prefix中的return "car"为return "index.php/Pages"

function common_get_app_ctl_prefix(){
    // return "car";
    return "index.php/Pages";
}
```

然后浏览器打开 http://localhost:8080/tbox/ 即可本地访问TSP页面，

http://localhost:8080/tbox/index.php/Pages/orbit 为车辆轨迹数据（虚拟），只能用假数据，不能与后台连接。

120.79.4.217

阿里云远程登录：账户名：webber，密码：Foxconn123

可远程修改前端代码，查看实时状态与轨迹

Tbox通过TSP服务与PHP和Web进行数据交互，所以本地无法进行开发，因为没有TSP服务。