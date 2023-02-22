
# @thingjs-x/xplugin-cli

xplugin-cli
```
   xplugin-cli is the Standard Tooling for ThingJS-X Plug-in Development
```

[![NPM](https://img.shields.io/npm/v/@thingjs-x/xplugin-cli?style=flat-square)](https://www.npmjs.com/package/@thingjs-x/xplugin-cli)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)]() 


# 安装
Global Installation

```javascript
   
   npm install -g @thingjs-x/xplugin-cli
   //建议 nodejs version 16+ & npm version 8+
```

# 使用

View scaffold command version       
       
```javascript
   
   //check cli version
   - xplugin -v,-V          -- 查看脚手架版本号 
   //upgrade template code or demo
   - xplugin upgrade        -- 升级更新模板代码或示例
   //help
   - xplugin -h,-help       -- 查看所支持的相关命令
   //create a project
   - xplugin init XXX       -- 创建插件工程

```
Create a project

```javascript

   xplugin create 插件工程名称 
      OR
   xplugin init 插件工程名称

  > 1.选择插件类型:
      * 系统插件模板
      * 扩展插件模板
      * 面板插件模板
      * 场景控制插件模板
      * 场景图层插件模板
      
  > 2.是否使用工程名称作为插件名称?
      是则使用创建名称作为插件名称
      否则输入名称作为插件名称 
      
  > 3.创建完毕,生成插件模板代码,进行插件开发

```

# 能力

Supported ThingJS-X Plug-in Development Template

- [x] 系统插件模板  
- [x] 扩展插件模板
- [x] 面板插件模板
- [x] 场景图层插件模板
- [x] 场景控制插件模板
- [ ] ~~原子插件模板~~
- [ ] ~~界面模板模板~~

# 简介

plug-in for ThingJS-X docs

```javascript
   @thingjs-x/xplugin-cli  是一款用于构建 ThingJS-X(零代码平台) 
   插件扩展能力的用户界面及功能的 JavaScript 框架
   它基于标准 HTML、CSS 和 JavaScript 构建
   同时使用Vue 框架及生态 并提供了一套声明式的、组件化的编程模型
   帮助你高效地开发 ThingJS-X 插件
```






        
       

       



        
        



