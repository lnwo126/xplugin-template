# 插件依赖库
xplugin-bundle
```
xplugin-bundle is the Core Component for ThingJS-X Plug-in Development
```
# @thingjs-x/xplugin-bundle

## 安装
Using npm:

```javascript
$ npm i -g npm
$ npm install --save @thingjs-x/xplugin-bundle
```

## 使用
       
插件引用
```javascript

    //方式一,提供了目前所支持的插件类型
    import BundlePluginCore 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginCore";
    import BundlePluginExpand 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginExpand";
    import BundlePluginPanel 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginPanel";       
    import BundlePluginLayer 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginLayer";
    import BundlePluginControl 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginControl";    
    
    //或方式二有选择性方式引入
    import {
        BundlePluginCore,
        BundlePluginExpand, BundlePluginPanel,
        BundlePluginLayer, BundlePluginControl,
    } from "@thingjs-x/xplugin-bundle";
 
```

插件使用
```javascript
    //以系统插件为例
    //系统插件开发中必须生成插件描述文件
    //该文件的配置需要引入 BundlePluginCore
    import BundlePluginCore 
        from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginCore";
    
    export default class extends BundlePluginCore {

        constructor() {
            super();
            //可调用相关API 进行描述文件扩展
            //例如添加作者可以进行API调用
            this.bundle.setAuthor("zhangguang@uino.com");
            this.bundle.setVersion("1.0.1");
        }

    }

```
## 结构示例
```javascript
    // bundle.json 
    {
        "name": "楼层展开插件",
        "type": "plugin",
        "id": "hzksiucj98kauj",
        "version": "1.0.0",
        "author": "zhangguang@uino.com",
        "description": "楼层展开场景控制插件,主要用于演示3D场景内建筑楼层展开,可进行结构观察",
        "main": "frame.js",
        "dependencies": {
            "thingjs": "1.2.7.17",
            "dpdVersion": ">1.0.2 <=2.3.4"
        },
        "external": {
            "use-standard": "0",
            "encrypt-files": ["frame.js"],
            "standard": "Revision",
            "preview": "./resources/preview.png",
            "thingjs-x": {
                "plugin-type": "layer",
                "license": "北京优锘科技有限公司 版权所有",
                "date": "2022/8/21 14:43:54",
                "extend": {
                    "rTypeGroup": "",
                    "rType": ""
                }
            }
        }
    };
```

## BundlePlugin api list 

```javascript
        // BundlePluginCore,
        // BundlePluginExpand, BundlePluginPanel,
        // BundlePluginLayer, BundlePluginControl,
        以上实现都集成于 BundlePlugin
```

BundlePlugin
```javascript
    import BundlePlugin 
        from "@thingjs-x/xplugin-bundle/dist/bundle/BundlePlugin";

    let bundlePluginInstance = new BundlePlugin("hxzhajkxjajasd", "楼层展开");

    // bundlePluginInstance.toJSON();
    // bundlePluginInstance.setAuthor("zhangguang@uino.com")
    // bundlePluginInstance.setVersion("1.0.1");
    ...
```

```javascript
//@property readonly
- id:string -获取插件唯一标识
- name:string -获取插件名称
- type:string -获取插件类型,plugin
- version:string -version:string;
- external -获取 External 节点实例(External 实例)
- author - 获取插件作者: zhangguang@uino.com
- main - 获取插件入口文件,default-> frame.js
- description:string -获取插件描述
- dependencies:Map - 获取资源依赖信息
//@method
- toJSON() -获取bundle节点 JSON
- addDependencies(libraryName:string,version:string) -添加依赖信息
- setName(name:string) -设置插件插件名称
- setType(type:string) -设置插件插件类型,default:plugin
- setVersion(version:string) - 设置插件版本号,版本号: e.g. 1.0.3
- setDescription(description:string) -设置插件描述信息

```

External 实例

```javascript
//@property readonly
- standard: string - 获取插件开发规范标准
- useStandard:string -获取购买状态
- encryptFiles:Array -获取资源加密文件数组
- thingjsX:ThingJSX -获取ThingJSX 节点实例

```
ThingJSX 实例

```javascript
//@property readonly
- pluginType:string - 获取插件类型
- theme:string - 获取插件主题
- license:string - 获取插件版权信息
- themePath:string -获取插件主题路径
- date:string -获取插件创建时间
- extend -扩展信息节点

//@method
- setPluginType(pluginType: string) -设置插件类型 :core、expand、layer、panel、contorl
- setTheme(theme: string)  -设置插件主题
- setLicense(license: string) -设置版权信息:北京优锘科技有限公司 版权所有

```


## 高级用法
```javascript
    // @thingjs-x/xplugin-bundle 与插件脚手架开发结合使用,可以直接在 bundle.js 文件中使用 json结构
	// 优点: 可读性较强,扩展兼容性强
	// 缺点: 操作性差，容易由于失误造成不必要的问题排查
	// 不推荐使用该开发方式
    // bundle.js 示例
    export default {
        "name": "楼层展开插件",
        "type": "plugin",
        "id": "hzksiucj98kauj",
        "version": "1.0.0",
        "author": "zhangguang@uino.com",
        "description": "楼层展开场景控制插件,主要用于演示3D场景内建筑楼层展开,可进行结构观察",
        "main": "frame.js",
        "dependencies": {
            "thingjs": "1.2.7.17",
            "dpdVersion": ">1.0.2 <=2.3.4"
        },
        "external": {
            "use-standard": "0",
            "encrypt-files": ["frame.js"],
            "standard": "Revision",
            "preview": "./resources/preview.png",
            "thingjs-x": {
                "plugin-type": "layer",
                "license": "北京优锘科技有限公司 版权所有",
                "date": "2022/8/21 14:43:54",
                "extend": {
                    "rTypeGroup": "",
                    "rType": ""
                }
            }
        }
    };
```