<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [插件模块操作相关(THINGX.Plugin)](#插件模块操作相关thingxplugin)
    - [*#* THINGX.Plugin.getPluginSetWithType](#-thingxplugingetpluginsetwithtype)
    - [*#* THINGX.Plugin.getPluginsWithType](#-thingxplugingetpluginswithtype)
    - [*#* THINGX.Plugin.getPluginWithTypeAndName](#-thingxplugingetpluginwithtypeandname)
    - [*#* THINGX.Plugin.getPluginWithInstanceId](#-thingxplugingetpluginwithinstanceid)
    - [*#* THINGX.Plugin.showViewWithInstanceId](#-thingxpluginshowviewwithinstanceid)
    - [*#* THINGX.Plugin.hideViewWithInstanceId](#-thingxpluginhideviewwithinstanceid)
    - [*#* THINGX.Plugin.activateWithInstanceId](#-thingxpluginactivatewithinstanceid)
    - [*#* THINGX.Plugin.deactivateWithInstanceId](#-thingxplugindeactivatewithinstanceid)
    - [*#* THINGX.Plugin.getDigitalTwinsWithConfigData](#-thingxplugingetdigitaltwinswithconfigdata)
    - [*#* THINGX.Plugin.BasePlugin](#-thingxpluginbaseplugin)
    - [*#* THINGX.Plugin.BasePluginSet](#-thingxpluginbasepluginset)

<!-- /code_chunk_output -->

### 插件模块操作相关(THINGX.Plugin)
> THINGX.Plugin:namespace
```javascript
    //应用系统针对系统插件模块的相关操作能力

    //THING.BaseObject 相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.Plugin 解构
    THINGX.Plugin:namespace //support thingjs query syntax expression
        Members
            - Type:Type
        Methods    
            - getPluginSetWithType(type:string):BasePluginSet               //通过插件类型获取插件集合
            - getPluginsWithType(type:string):Array.<BasePlugin>            //通过插件类型获取插件列表
            - getPluginWithTypeAndName(type:string, name:string):BasePlugin //通过插件类型和名称获取插件
            - getPluginWithInstanceId(uuid):BasePlugin                      //通过插件实例ID获取插件
            - showViewWithInstanceId(uuid):void                             //通过插件实例ID显示插件界面
            - hideViewWithInstanceId(uuid):void                             //通过插件实例ID隐藏插件界面
            - activateWithInstanceId(uuid):void                             //通过插件实例ID取消激活插件
            - deactivateWithInstanceId(uuid):                               //通过插件实例ID取消激活插件
            - getDigitalTwinsWithConfigData(values [, level], includeSelf [, distinct]):Array.<THING.BaseObject> 
                                                                            //通过元组件数据获取孪生体
        Type Definitions
            - Type (插件分类类型)               
                - SYSTEM:string                 //系统插件; default value : core
                - EXPAND:string                 //扩展插件; default value : expand
                - LAYER:string                  //场景图层插件;default value : layer
                - CONTROL:string                //场景控制插件;default value : control
                - PANEL:string                  //面板插件;default value : panel
        Class
            - BasePlugin        //插件基类
                Members
                    - <readonly> config :Map.<string, any>      //插件相关的用户配置
                    - <readonly> setting :Map.<string, any>     //插件相关的系统配置
                    - <readonly> id :string                     //插件唯一标识
                    - <readonly> name :string                   //插件名称
                    - <readonly> uuid :string                   //插件实例id
                    - <readonly> fullId :string                 //获取插件全id，id+uuid
                    - <readonly> type :THINGX.Plugin.Type       //插件类型
                    - <readonly> resourcePath :string           //插件资源相对路径
                    - <readonly> resourceFullPath :string       //插件资源全路径 
            - BasePluginSet     //插件集合
                Methods
                    - getPluginWithName(name:string):THINGX.Plugin.BasePlugin  //通过插件实例名称获取插件
                    - getPluginWithID(id:string):THINGX.Plugin.BasePlugin      //通过插件唯一标识获取插件
                    - getPluginWithUuid(uuid:string):THINGX.Plugin.BasePlugin  //通过插件uuid获取插件
    

```


##### *<a href="#">#</a>* THINGX.Plugin.getPluginSetWithType
> 通过插件类型获取插件集合, THINGX.Plugin.getPluginSetWithType(type:string):BasePluginSet

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |type|THINGX.Plugin.Type|是| - | 插件类型 (Type Definitions - Type)|   
* 类型: BasePluginSet
* 示例
    ```javascript

        //通过插件类型获取插件集合

        //示例 获取扩展插件集合
        const type = THINGX.Plugin.Type.EXPAND;
        const set = THINGX.Plugin.getPluginSetWithType(type);
        // set: THINGX.Plugin.BasePluginSet  相关能耐参考 Class THINGX.Plugin.BasePluginSet 插件集合类


    ```
    ***

##### *<a href="#">#</a>* THINGX.Plugin.getPluginsWithType
> 通过插件类型获取插件列表, THINGX.Plugin.getPluginsWithType(type:string):Array.<BasePlugin>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |type|THINGX.Plugin.Type|是| - | 插件类型 (Type Definitions - Type)|   
* 类型: Array.<BasePlugin>
* 示例
    ```javascript

        //通过插件类型获取插件列表

        //示例 获取扩展插件列表
        const type = THINGX.Plugin.Type.EXPAND;
        const set = THINGX.Plugin.getPluginsWithType(type);
        // set: Array.<THINGX.Plugin.BasePlugin>  相关能耐参考 Class THINGX.Plugin.BasePlugin 

    ```
    ***
##### *<a href="#">#</a>* THINGX.Plugin.getPluginWithTypeAndName
> 通过插件类型和名称获取插, THINGX.Plugin.getPluginWithTypeAndName(type:string, name:string):BasePlugin

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |type|THINGX.Plugin.Type|是| - | 插件类型 (Type Definitions - Type)|   
  |name|string|是| - | 插件名称:层级导航| 
* 类型: BasePlugin
* 示例
    ```javascript

        //通过插件类型和名称获取插

        //示例 获取扩展插件集合
        const type = THINGX.Plugin.Type.EXPAND;
        const xplugin = THINGX.Plugin.getPluginWithTypeAndName(type, "层级导航");
        // xplugin: THINGX.Plugin.BasePlugin 相关能耐参考 Class THINGX.Plugin.BasePlugin 

    ```
    ***

##### *<a href="#">#</a>* THINGX.Plugin.getPluginWithInstanceId
> 通过插件实例ID获取插件, THINGX.Plugin.getPluginWithInstanceId(uuid:string):BasePlugin

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |uuid|string|是| - | 插件实例ID | 
* 类型: BasePlugin
* 示例
    ```javascript

        //通过插件实例ID获取插件

        //示例 获取扩展插件实例
        const type = THINGX.Plugin.Type.EXPAND;
        const xplugin = THINGX.Plugin.getPluginWithInstanceId('插件实例uuid');
        // xplugin: THINGX.Plugin.BasePlugin 相关能耐参考 Class THINGX.Plugin.BasePlugin 

    ```
    ***

##### *<a href="#">#</a>* THINGX.Plugin.showViewWithInstanceId
> 通过插件实例ID显示插件界面, THINGX.Plugin.showViewWithInstanceId(uuid):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |uuid|string|是| - | 插件实例ID | 
* 类型: void
* 示例
    ```javascript

        //通过插件实例ID显示插件界面

        //示例 
        THINGX.Plugin.showViewWithInstanceId('插件实例uuid');
        
    ```
    ***

##### *<a href="#">#</a>* THINGX.Plugin.hideViewWithInstanceId
> 通过插件实例ID隐藏插件界面, THINGX.Plugin.hideViewWithInstanceId(uuid):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |uuid|string|是| - | 插件实例ID | 
* 类型: void
* 示例
    ```javascript

        //通过插件实例ID隐藏插件界面

        //示例 
        THINGX.Plugin.hideViewWithInstanceId('插件实例uuid');
        
    ```
    ***
  
##### *<a href="#">#</a>* THINGX.Plugin.activateWithInstanceId
> 通过插件实例ID取消激活插件, THINGX.Plugin.activateWithInstanceId(uuid):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |uuid|string|是| - | 插件实例ID | 
* 类型: void
* 示例
    ```javascript

        //通过插件实例ID取消激活插件

        //示例 
        THINGX.Plugin.activateWithInstanceId('插件实例uuid');
        
    ```
    ***  
  
##### *<a href="#">#</a>* THINGX.Plugin.deactivateWithInstanceId
> 通过插件实例ID取消激活插件, THINGX.Plugin.deactivateWithInstanceId(uuid):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |uuid|string|是| - | 插件实例ID | 
* 类型: void
* 示例
    ```javascript

        //通过插件实例ID取消激活插件

        //示例 
        THINGX.Plugin.deactivateWithInstanceId('插件实例uuid');
        
    ```
    ***  

##### *<a href="#">#</a>* THINGX.Plugin.getDigitalTwinsWithConfigData
> 通过元组件数据获取孪生体, THINGX.Plugin.getDigitalTwinsWithConfigData(values [, level] [, includeSelf] [, distinct]):Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|  
  |values|Array.<object> 或 object |是| - | 元控件数据 | 
  |level|THING.BaseObject|否| THING.App.current | 查询层级 | 
  |includeSelf|string|否| false | 是否包含根自己 | 
  |distinct|string|否| true | 是否去重 |       
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //通过插件实例ID取消激活插件

        //示例 筛选孪生体集合
            //debugger.json 配置后由控件配置器配置
        const digitalTwinsSelector =  [
            {
                "condition": ".Building"
            },
            {
                "condition": ".Floor"
            }
        ];

       const DigitalTwins =  THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector);
       
       console.warn("查询筛选到的孪生体对象集合", DigitalTwins);
       // print result: 查询筛选到的孪生体对象集合 THING.BaseObject
           
    ```
    ***  

##### *<a href="#">#</a>* THINGX.Plugin.BasePlugin
> 插件基类, Class: THINGX.Plugin.BasePlugin   
* 类型: Class
* 示例
    ```javascript

        //插件基类,提供了一个插件实例相关配置属性信息
            Members
                - <readonly> config :Map.<string, any>      //插件相关的用户配置
                - <readonly> setting :Map.<string, any>     //插件相关的系统配置
                - <readonly> id :string                     //插件唯一标识
                - <readonly> name :string                   //插件名称
                - <readonly> uuid :string                   //插件实例id
                - <readonly> fullId :string                 //获取插件全id，id+uuid
                - <readonly> type :string                   //插件类型
                - <readonly> resourcePath :string           //插件资源相对路径
                - <readonly> resourceFullPath :string       //插件资源全路径 

    ```
    ***  
##### *<a href="#">#</a>* THINGX.Plugin.BasePluginSet
> 插件集合, Class: THINGX.Plugin.BasePluginSet   
* 类型: Class
* 示例
    ```javascript

        //插件集合
        //该集合目前提供了插件的 实例获取，可通过 插件实例名称、插件唯一标识、插件实例id

        Methods
            - getPluginWithName(name:string):THINGX.Plugin.BasePlugin  //通过插件实例名称获取插件
            - getPluginWithID(id:string):THINGX.Plugin.BasePlugin      //通过插件唯一标识获取插件
            - getPluginWithUuid(uuid:string):THINGX.Plugin.BasePlugin  //通过插件uuid获取插件


        // 获取插件实例后进行相关能力操作  result: THINGX.Plugin.BasePlugin

    ```
    ***  
