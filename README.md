# xplugin-template for ThingJS-X 插件模板代码

```javascript
    // 共计5个子工程模板插件代码
    // 可依据模板插件代码快速进行开发

    /**
     * xplugin-template-core 系统插件模板代码
     * xplugin-template-expand 扩展插件模板代码
     * xplugin-template-layer 场景图层插件模板代码
     * xplugin-template-control 场景控制插件模板代码
     * xplugin-template-panel 面板插件模板代码
     * /

```
> xplugin-template-core 系统插件模板代码
* 系统插件定义
    > </br>
    > 系统通用功能函数库,通用功能函数给其它插件提供通用能力</br>
    > 系统引擎类函数库,完成部分非界面功能的功能加载,拥有完整的生命周期函数,例如：</br>
    > 可通过“websocket 消息监听“系统插件、“iframe 消息监听“系统插件 接收或发送指令,控制或通知场景变化</br>
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
  xplugin-template-core //系统插件模板代码
  | +-- config     //配置目录
  |   --- index.js //配置插件开发的环境信息
  | +-- src        //源代码目录(主要开发目录)
  |   +-- core         //开发主目录
  |     --- bundle.js  //插件资源描述文件
  |     --- index.js   //开发入口文件(主要逻辑)
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
  * /src/core/bundle.js             文件解构
  * /src/core/index.js              文件解构
  * /src/core/debugger.json         文件解构
  * /src/core/index.json            文件解构
  * thingjsx.config.js              文件解构[配]

> xplugin-template-expand 扩展插件模板代码
* 扩展插件定义
    > </br>
    > 带有界面功能的系统插件,不受层级控制影响</br>没有过多的生命周期函数,系统加载完成后进行初始化,例如：</br>
    > 可通过“层级导航”扩展插件,控制场景层级变化或切换、可通过“指南针”扩展插件,展示场景方向或控制场景方向变化</br>
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
  xplugin-template-expand //扩展插件模板代码
  | +-- config         //配置目录
  |   --- index.js     //配置插件开发的环境信息
  | +-- src            //源代码目录(主要开发目录)
  |   +-- expand       //开发主目录
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
  * /src/expand/bundle.js           文件解构
  * /src/expand/index.js            文件解构
  * /src/expand/index.vue           文件解构[新]
  * /src/expand/debugger.json       文件解构
  * /src/expand/index.json          文件解构
  * thingjsx.config.js              文件解构[配]

> xplugin-template-layer 场景图层插件模板代码
* 场景图层插件定义
    > </br>
    > 场景中通过控制孪生体集合,展示其属性信息、空间分布或变化。</br>场景中根据孪生体属性（如温度、空间位置）使其以特定方式呈现（如变色、显示/隐藏）,便于对孪生体进行分析、监控和管理,例如：</br>
    > 可通过“显示配饰”场景图层插件,呈现孪生体空间分布关系或展示相关信息</br>
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
  xplugin-template-layer  //场景图层插件模板代码
  | +-- config         //配置目录
  |   --- index.js     //配置插件开发的环境信息
  | +-- src            //源代码目录(主要开发目录)
  |   +-- layer        //开发主目录
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
  * /src/layer/bundle.js            文件解构
  * /src/layer/index.js             文件解构
  * /src/layer/index.vue            文件解构[新]
  * /src/layer/debugger.json        文件解构
  * /src/layer/index.json           文件解构
  * thingjsx.config.js              文件解构[配]

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

> xplugin-template-panel 面板插件模板代码
* 面板插定义
    > </br>
    > 场景中以面板嵌入图表的形式呈现孪生体属性(或自定义)数据。</br>例如:</br>
    > 可配置“基础信息”孪生体面板插件,呈现孪生体属性相关信息</br>    
    > 可配置“实时数据”孪生体面板插件,呈现孪生体指标相关信息</br>
    > 可配置“反向控制”孪生体面板插件,控制孪生体形态变化</br>
    > 可配置“图表”面板插件,业务激活时显示业务图表区域图表或图表插件</br>
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
  xplugin-template-panel //面板插件模板代码
  | +-- config         //配置目录
  |   --- index.js     //配置插件开发的环境信息
  | +-- src            //源代码目录(主要开发目录)
  |   +-- panel        //开发主目录
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
  * /src/panel/bundle.js            文件解构
  * /src/panel/index.js             文件解构
  * /src/panel/index.vue            文件解构[新]
  * /src/panel/debugger.json        文件解构
  * /src/panel/index.json           文件解构
  * thingjsx.config.js              文件解构[配]
