# webturn

技术栈：html5+css3+ES6+sass+vue3.0+vue-router+axios+vant

# 搭建开发运行环境：

1.下载最新的node，安装到本地，使用node -v输出版本号即安装成功。

2.设置npm国内淘宝代理，执行npm config set registry https://registry.npm.taobao.org

3.安装vue脚手架npm install -g @vue/cli, 使用vue --version查看版本。

4.执行npm install命令安装依赖包。

5.执行npm run serve启动服务。

6.确保手机与PC处于同一wifi环境下，可以在手机浏览器输入http://localIpaddress:8080打开页面。

7.也可使用chrome浏览器输入http://localIpaddress:8080打开页面，F12打开开发者工具，切换到手机模式查看页面。

8.因网络状态不稳定访问接口时偶尔会报网络超时，重新刷新页面或过一段时间再次尝试即可。


# 相关技术介绍：

1.模块化和组件化开发：config配置模块，http请求和接口模块，commponents组件模块， router路由模块， style样式模块。

2.响应式设计：动态设置html font-size以rem作为相对单位，结合sass的function根据px算出rem单位。

3.移动端1px解决方案：媒体查询解决不同ratio下横线显示略粗问题。

4.http请求基于ES6 promise技术。

5.搜索实现防抖功能避免频繁发送http请求造成性能问题。

6.隐藏横竖向滚动条使界面更美观。
