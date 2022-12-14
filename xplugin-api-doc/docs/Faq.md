# FAQ

## 系统上禁止运行脚本的错
?> `npm install -g @thingjs-x/xplugin-cli` 系统上禁止运行脚本的错误         
可参考解决方案: https://blog.csdn.net/itopit/article/details/127284105

![系统上禁止运行脚本的错误](./resources/faq/1.系统禁止运行脚本.png "系统禁止运行脚本")



## 地址或端口被占用
?> `listen EADDRINUSE: address already in use x.x.x.x:1024` 地址或端口被占用         
由于在当前地址端口1024已经启动服务,无法同时启动相关端口,故解决方案为将已启动占用端口的服务停止在进行`npm run start` 服务启动

![地址或端口被占用](./resources/faq/2.地址或端口被占用.png "地址或端口被占用")

## 开发环境可用性检测
?> `npm run test`  检测插件工程依赖环境的可用性         
由于各客户端下载安装开发脚手架后及相关依赖是否可达的检查工作,以确保开发插件环境一致     
`passed` 环境即可用,`其它提示信息` 依据信息进行相关依赖的升级与调整

![开发环境可用性检测](./resources/faq/3.环境检查.png "开发环境可用性检测")




