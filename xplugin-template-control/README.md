> xplugin-template-control 场景控制插件模板代码
* 场景控制插件定义
    > </br>
    > 浏览控制场景的角度和方式及场景内孪生体在场景中的呈现形式</br>
    > 可实现浏览场景时转换不同角度,例如:</br>
    > 可通过“第一人称角度”场景控制插件,呈现第一人称场景视角</br>
    > 可实现浏览场景时控制孪生体形态,例如:</br>
    > 可通过“楼层展开”场景控制插件,呈现建筑楼层分离形态,以便观察</br>
    > </br>
* 相关命令
  ```javascript
    - npm install          -- to install dependencies
    - npm run test         -- environmental testing,测试运行环境是否满足要求
    - npm run dev          -- to build the project for development
    - npm run start        -- to run the project
    - npm run build:prod   -- to build the project for production
    - npm run build:pack   -- to pack the project for production
  ```
* 包含的主要文件
  ```javascript
  xplugin-template-control //场景控制插件模板代码
  | +-- config         //配置目录
  |   --- index.js     //配置插件开发的环境信息
  | +-- src            //源代码目录(主要开发目录)
  |   +-- control      //开发主目录
  |     --- bundle.js  //插件资源描述文件
  |     --- index.js   //开发入口文件(主要逻辑)
  |     --- index.vue  //开发UI相关vue主文件  
  |     --- index.json //配置项控件文件
  |     --- debugger.json //配置项控件调试文件
  |     +-- components    //子(组件)文件目录,拆分逻辑推荐使用
  |     +-- resources     //资源文件,资源图片等信息目录 
  | --- thingjsx.config.js//插件资源打包编译配置文件
  | --- README.md         //插件使用说明文档
  | --- package.json      //构建文件
  | --- index.js          //插件模板逻辑文件(未了解学习插件规范的情况下,不推荐修改,修改可能造成打包后的插件无法使用)
  | --- index.bundle.js   //插件模板描述文件逻辑(未了解学习插件规范的情况下,不推荐修改,修改可能造成打包后的插件无法使用)

  ```
  * /config/index.js                文件解构[配]
  * /src/control/bundle.js          文件解构
  * /src/control/index.js           文件解构
  * /src/control/index.vue          文件解构[新]
  * /src/control/debugger.json      文件解构
  * /src/control/index.json         文件解构
  * thingjsx.config.js              文件解构[配]

# TODO 需要开发者依据开发内容进行文档补充整理(完善具体插件相关内容介绍等)

# 资源名称,例如: 楼层展开
> 插件类型: 场景控制插件
```text
   插件简介
```

# 效果展示
<img src="./src/control/resources/preview.png" width = "200" height = "200" alt="效果预览图" />

# 资源介绍
  
# 使用场景