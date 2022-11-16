
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

  - [教程示例模板(显示孪生体插件)](#教程示例模板显示孪生体插件)
  - [效果展示](#效果展示)
  - [资源介绍](#资源介绍)
  - [使用场景](#使用场景)
- [开发帮助(我的第一个场景图层插件::显示孪生体)](#开发帮助我的第一个场景图层插件显示孪生体)
	- [插件能力](#插件能力)
	- [文件解构说明](#文件解构说明)
	- [开发注意事项](#开发注意事项)
	- [插件开发逻辑](#插件开发逻辑)
	- [打包上传及部署](#打包上传及部署)
	- [错误及特别注意 🧐](#错误及特别注意-)

<!-- /code_chunk_output -->




## 教程示例模板(显示孪生体插件)
> 插件类型: 场景图层插件
```text
   在数字孪生场景/层级中,对孪生体(设备等)进行有效分析,主动控制进行分析的孪生体显示/隐藏
```

## 效果展示
<img src="./resources/tutorial/preview显示孪生体.gif" width = "960" height = "540" alt="显示孪生体" />

## 资源介绍

> 配置项说明
 
||名称|描述|必填|多选|
|-|----|----|----|----|
|基础配置||||
||应用孪生体集合|隐藏显示被控的孪生体集合|是|是|
|显示效果||||
||出场效果|出现时孪生体的特效展示</br>支持:淡入、直接出现、向上生长、垂直下落、缩放、标记模型出场动画、随机||-|
||出场排序|出现孪生体时顺序可按三维空间轴的正向逆向或圆形展开和收起</br>支持:无、沿X轴正向、沿X轴逆向	、沿X轴收起、沿X轴展开、沿Y轴正向、沿Y轴逆向、沿Y轴收起	、沿Y轴展开、沿Z轴正向	、沿Z轴逆向、沿Z轴收起	、沿Z轴展开、圆形收起、圆形展开||-|
||出场插值|出现孪生体时的特效速度</br>支持:恒定加速度、越来越快、越来越慢、先快后慢||-|
||离场效果|隐藏时孪生体的特效展示</br>支持:淡出、直接隐藏	、缩放、向上飞出、向下压缩、标记模型离场动画、随机||-|
||离场排序|隐藏孪生体时顺序可按三维空间轴的正向逆向或圆形展开和收起</br>支持:无、沿X轴正向、沿X轴逆向	、沿X轴收起、沿X轴展开、沿Y轴正向、沿Y轴逆向、沿Y轴收起	、沿Y轴展开、沿Z轴正向	、沿Z轴逆向、沿Z轴收起	、沿Z轴展开、圆形收起、圆形展开||-|
||离场插值|隐藏孪生体时的特效速度</br>支持:恒定加速度、越来越快、越来越慢、先快后慢||-|



## 使用场景
> 显示孪生体插件使用场景
```text
   当进入某个场景或层级时，能默认隐藏某些设备(或指定孪生体)，只有主动触发时才显示。实现对场景中设备的分布进行有效分析
```
> 场景应用案例

>> 案例介绍
```javascript
   园区管理人员需要掌握充电桩的分布情况
```
>> 配置步骤
```javascript
  第1步：添加孪生体集合。通过孪生体分类新建"充电桩"孪生体集合。
  第2步：添加图层。新建一个图层"显示孪生体"，并在园区层级添加一个显示孪生体图层，图层名称为"显示充电桩"，关联孪生体集合选择"充电桩"。配置项应用孪生体集合为 "充电桩"
```
>> 效果展示

<img src="./resources/tutorial/充电桩效果展示.gif" width = "1911" height = "934" alt="充电桩效果展示" />



# 开发帮助(我的第一个场景图层插件::显示孪生体)

## 插件能力
> 在数字孪生场景/层级中,对孪生体(设备等)进行有效分析,主动控制进行分析的孪生体显示/隐藏


## 文件解构说明
> /src/layer/index.js 开发入口文件(主要逻辑)
```javascript
	/**
	 * 该文件提供了相关图层生命周期函数,可进行插件逻辑功能实现
	 *
	 * onInstall 		-- 场景未加载前进行插件资源加载安装
	 * onInited			-- 图层层级切换发生改变
	 * onActivate 		-- 图层按钮被激活
	 * onDeactivate 	-- 图层按钮激活状态被取消
	 * onUninstall 		-- 图层插件被卸载安装
	 * 
	 */
	
	// 图层激活后该函数被调用	
	 onActivate(widget,layer){
	 	console.warn("^_^:%s 图层被激活",layer.name);
	 }

	 ...
	 ...
```

> /src/layer/index.json 配置项控件文件
```javascript
	
	//插件配置项能力属于ThingJS 插件重要组成部分,需要对该部门内容有一定的了解
	//可参考 ThingJS-X 零代码-X4 插件/开发指南/ThingJS-X插件开发规范/ThingJS-X插件配置项介绍
	//U知地址:  https://wiki.uino.com/book/thingjsx40-plugin/634e85f03f63452f069b8cb9.html

	/**
	 * 	配置项控件可视化工具
	 *	为配置项开发提效进行了配置项规范的工具化落地,可参考使用工具快速完成配置项设计开发工作
	 *	离线配置项工具下载地址: http://10.100.32.63/xelement/xelement.zip
	 *	下载后解压安装(推荐管理员)即可使用,使用方式和方法请参考工具内文档
	 *	
	 */

	
```

> /src/layer/bundle.js 插件资源描述文件
```javascript

	//插件资源描述文件是针对插件资源进行描述解释的文件
	//相关描述信息可参考插件开发规范,资源描述文件介绍部分
	//可设置插件相关的作者、版权、入口文件等信息
	
	/**
	 * 在进行该文件开发处理时,可以忽略该文件使用
	 * 该文件支持两种开发方式,默认使用javacript 方式,
	 * 另一种可以是直接粘贴json格式内容
	 */
	
	//方式一(引入描述文件库SDK,通过API进行设置):
	
	import BundlePluginLayer from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginLayer";

	export default class extends BundlePluginLayer {

	    constructor() {
	        super();

	        //设置插件作者为 张光的邮箱
	        this.bundle.setAuthor("zhangguang@uino.com");
	        //设置插件的能力描述
	        this.bundle.setDescription("在数字孪生场景/层级中,对孪生体(设备等)进行有效分析,主动控制进行分析的孪生体显示/隐藏")
	        //设置插件版权
	        this.bundle.external.thingjsX.setLicense("XXX 科技有限公司版权所有");
	    }
	}


	//方式二(JSON结构):
	{
	    "name": "显示孪生体",
	    "type": "plugin",
	    "id": "6987950438838435840",
	    "version": "1.0.0",
	    "author": "zhangguang@uino.com",
	    "description": "在数字孪生场景/层级中,对孪生体(设备等)进行有效分析,主动控制进行分析的孪生体显示/隐藏",
	    "main": "frame.js",
	    "dependencies": {
	        "thingjs": "1.2.7.17",
	        "dpdVersion": ">1.0.2 <=2.3.4"
	    },
	    "external": {
	        "use-standard": "0",
	        "encrypt-files": [
	            "frame.js"
	        ],
	        "standard": "Revision",
	        "preview": "./resources/preview.png",
	        "thingjs-x": {
	            "plugin-type": "layer",
	            "license": "XXX 科技有限公司版权所有",
	            "date": "2022/10/25 11:47:59",
	            "extend": {}
	        }
	    }
	}

```
> /config/index.js 环境配置文件(不建议进行更改的文件)

```javascript
	//目前该文件中主要配置了 ThingJS-X 环境地址
	//开发者可更改该地址进行环境切换
	//也可在实时运行环境下进行更改
```


## 开发注意事项
> 1. 插件开发前需要具备插件相关概念的了解及如何在ThingJS-X 系统使相关插件的方法论
```javascript
	可参考: (零代码ThingJS-X4) https://wiki.uino.com/book/thingjs-x40
	可参考: (零代码-X4 插件章节) https://wiki.uino.com/book/thingjsx40-plugin
```
> 2. 注意私有变量和私有方法的使用
```javascript
	如果使用@thingjs-x/xplugin-cli 开发插件,推荐使用 es6 class 针对私有变量和方法的最新提案

	? Why not use the "private" keyword, like Java or C#? #14
	一方面简化写法,另一方面出于性能考虑
	可参考：https://github.com/tc39/proposal-private-fields/issues/14

```
> 3. ThingJS-X 插件开发API 使用参考
```javascript

	ThingJS-X 插件开发前应先熟悉ThingJS-X API，以便于实现定制开发扩展能力的实现
	同时需要了解 ThingJS 低代码相关API,ThingJS-X API 是对ThingJS API的能力扩展
	以增强ThingJS API 在业务侧相关能力的补充,可定制开发功能更加丰富的ThingJS-X插件

	一定要注意两套API 命名空间不同,
	ThingJS API 在插件开发内被暴露于场景全局,THING 命名空间下
	ThingJS-X API 在插件开发内被暴露于场景全局, THINGX 命名空间下
	THING 命名空间API 的使用(可参考: https://docs.thingjs.com/cn/apidocs/)
	THINGX 命名空间API 的使用(可参考: http://192.168.1.96/thingjs-x-api/THINGX.html)

```
> 4. 禁用uinv （即将弃用,强烈不推荐使用,推荐使用THINGX）
```javascript
	//主要针对有过 ThingJS-X 4.0 以下版本开发的同学,习惯性的使用 uinv命名空间
	//该空间即将弃用不再支持,在将来版本中很快会被移除,所以不再推荐使用,切记、切记
```
> 5. ThingJS-X 插件开源模板
```javascript
	针对ThingJS-X 最新开发规范及对应插件开源模板&开源示例
	可直接访问参考: 
		https://github.com/GuangGuangZhang/xplugin-template 
		或
		https://gitee.com/GuangGuangZhang/xplugin-template 	(备份仓库,定期同步)
	该仓库代码是遵循了ThingJS-X 最新开发规范撰写的插件模板,一方面可以用于借鉴学习,另一方面
	可直接fork示例代码快速修改满足插件交付(或生产)需求
```

> 6. 环境配置(高级)
	
```javascript
	/config/index.js 离线开发场景配置文件

	该文件为环境配置文件,开发环境场景相关可在该文件下进行配置
```	

> 7. 环境检查(一般主要针对首次开发插件的环境检查)

```javascript
	//开发工具包推荐使用 nodejs version 16+ & npm version 8+
	//首次开发插件的环境经常性已经安装了相关nodejs版本
	//打包插件报错找不到原因,针对首次开发插件的开发者
	//在构建脚手架开发工具包创建插件工程后,可使用如下命令进行环境检测
	npn run test 进行环境依赖检查,确保开发环境处于插件开发要求内
	- INFO  XPlugin  linux OS : xplugin compile environment probe passed.  检测通过符合插件开发要求
	- 提示需要依赖相关版本nodejs等信息,则检测不通过,需要进行相关依赖版本的安装
```

## 插件开发逻辑
> 以 显示孪生体插件为例 进行插件开发流程介绍

>> 1. 依据插件能力需求进行插件设计
```javascript
		显示孪生体能力主要逻辑为激活某一图层按钮,可以进行孪生体的隐藏/显示
		涉及到 THINGX 相关api为 某一个(或分类)孪生体显示/隐藏
		孪生体标记添加、显示、移除、隐藏等操作
		经API 查询后可使用

		#DigitalTwin
		THINGX.DigitalTwin.show(digitalTwin [, purpose]);//显示孪生体
		THINGX.DigitalTwin.hide(digitalTwin [, purpose]);//隐藏孪生体
		可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.DigitalTwin.html

		#Marker
		THINGX.Marker.add(digitalTwin, name, isExcludeModel);//添加孪生体标记并显示
		THINGX.Marker.remove(digitalTwin, name);//移除孪生体标记
		THINGX.Marker.show(digitalTwin, name [, purpose]);//显示孪生体标记
		THINGX.Marker.hide(digitalTwin, name [, purpose]);//隐藏孪生体标记
		THINGX.Marker.getConfig(digitalTwin);//获取孪生体标记配置数据
		可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Marker.html

		#EventType
		THING.App.current.on 
	          -注册事件,可参考: https://docs.thingjs.com/cn/apidocs/THING.App.html#on
	    THINGX.EventType.LeaveLevelBackward 
	          -反向离开层级,可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.EventType.html 
	          -更多事件类型,参考 THINGX.EventType 命名空间

	    #Plugin
	    THINGX.Plugin.getDigitalTwinsWithConfigData
	          -通过元控件配置数据获取孪生体     
	          -推荐使用该方法,可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Plugin.html#.getDigitalTwinsWithConfigData__anchor

        设计步骤思路拆解(让我思考思考)
        	1. 选择指定孪生体集合			
        			-输入配置项为 多条件标记 选择器 		
        			-孪生体配置标记需要
        	2. 获取孪生体集合进行 THINGX API 调用控制孪生体显示隐藏
        			-由于该插件的定义功能为显示孪生体,默认则需要将符合条件的孪生体隐藏
        			-插件的激活将符合条件的孪生体及其标记进行显示
        			-插件的取消激活将符合条件的孪生体及其标记进行隐藏(恢复)
        			-插件的卸载释放插件内存占用和进行场景孪生体及标记的恢复
        			-插件的安装则进行补充逻辑及功能的实现
        	3. 更多高级功能设计(扩展)
        			-可继续对配置项进行能力扩展,例如效果显示配置参数
        			-针对相关新增配置参数调用符合条件的API或添加效果控制功能
```
>> 2. 配置项控件设计

<img src="./resources/tutorial/显示孪生体配置项.png" width="482" height="471" alt="显示孪生体配置项">

```javascript
	应用孪生体集合
		-- 用于控制显示/隐藏的孪生体(或设备)
	显示效果
		-- 孪生体(或设备)显示隐藏的效果动画::
		-- 该教程代码为教学理解方便未对该部分功能实现,学习者学习后可对该功能能力进行扩展开发实现

```

>> 3. 入口主逻辑开发&快速开始

```javascript
	/***
	 * 1. 具体逻辑代码可详细阅读 /src/layer/index.js 开发入口文件(主要逻辑)
	 * 2. 快速开始可继续阅读或直接访问: https://wiki.uino.com/book/thingjsx40-plugin/63564184cd00484b78b06a1a.html
	 * 3. 使用插件开发工具包访问地址: https://www.npmjs.com/package/@thingjs-x/xplugin-cli
	 */
	
	1. 安装工具包脚手架 npm install -g @thingjs-x/xplugin-cli
	2. 创建工程,选择开发插件的模板
	   
		> xplugin init 插件工程名称

		> 选择插件类型:
			* 系统插件模板
			* 扩展插件模板
			* 面板插件模板
			* 场景控制插件模板
			* 场景图层插件模板
			
		> 是否使用工程名称作为插件名称?
			是则使用创建名称作为插件名称
			否则输入名称作为插件名称 
			
		> 创建完毕,生成插件模板代码,进行插件开发

	3. 工具包命令一览
		- npm install          -- to install dependencies
		- npm run test         -- environmental testing,测试运行环境是否满足要求
		- npm run dev          -- to build the project for development
		- npm run start        -- to run the project
		- npm run mocha        -- to perform a unit test
		- npm run build:prod   -- to build the project for production
		- npm run build:pack   -- to pack the project for production
		- xplugin upgrade      -- 升级模板代码	

	4. 创建完成工程后进入工程目录,参考模板代码及相关命令进行开发即可
		- 首先执行 npm install 安装依赖
		- 再次执行 npn run test 进行环境依赖检查,确保开发环境处于插件开发要求内(一般主要针对首次开发插件的环境检查)
		- 然后可进行逻辑开发
			
```

## 打包上传及部署

```javascript
	- npm run build:pack   -- to pack the project for production
	使用该命令打包插件工程后,在该工程下生成lib目录内的插件zip压缩包
	将该压缩包上传到部署的ThingJS-X 环境即可使用
```


## 错误及特别注意 🧐

> 1. 配置项控件使用错误(需要简单了解配置项相关内容)

> 2. 禁用uinv （即将弃用,强烈不推荐使用,推荐使用THINGX）

> 3. npm run test 检测插件工程依赖环境的可用性









