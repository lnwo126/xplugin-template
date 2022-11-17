<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a><font color="grey">Namespace</font></a>* 解构(THINGX.System)](#font-colorgreynamespacefont-解构thingxsystem)
- [*<a><font color="grey">Namespace</font></a>* 系统版本库(THINGX.System.Version)](#font-colorgreynamespacefont-系统版本库thingxsystemversion)
  - [*<a><font color="red">Members</font></a>* THINGX.System.Version.成员属性](#font-colorredmembersfont-thingxsystemversion成员属性)
- [*<a><font color="grey">Namespace</font></a>* 系统资源库(THINGX.System.Resource)](#font-colorgreynamespacefont-系统资源库thingxsystemresource)
  - [*<a><font color="red">Members</font></a>* THINGX.System.Resource.成员属性](#font-colorredmembersfont-thingxsystemresource成员属性)
- [*<a><font color="grey">Namespace</font></a>* 系统加载控制库(THINGX.System.Loading)](#font-colorgreynamespacefont-系统加载控制库thingxsystemloading)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Loading.show](#font-colorgreymethodfont-thingxsystemloadingshow)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Loading.hide](#font-colorgreymethodfont-thingxsystemloadinghide)
- [*<a><font color="grey">Namespace</font></a>* 系统提示信息库(THINGX.System.Message)](#font-colorgreynamespacefont-系统提示信息库thingxsystemmessage)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.setConfig](#font-colorgreymethodfont-thingxsystemmessagesetconfig)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.info](#font-colorgreymethodfont-thingxsystemmessageinfo)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.success](#font-colorgreymethodfont-thingxsystemmessagesuccess)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.warning](#font-colorgreymethodfont-thingxsystemmessagewarning)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.error](#font-colorgreymethodfont-thingxsystemmessageerror)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.loading](#font-colorgreymethodfont-thingxsystemmessageloading)
  - [*<a><font color="grey">Method</font></a>* THINGX.System.Message.destory](#font-colorgreymethodfont-thingxsystemmessagedestory)

<!-- /code_chunk_output -->


### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.System)
> THINGX.System:namespace
```javascript
    //系统环境命名空间下暂无具体实现
    //包含三级命名空间4个
    // -系统版本库命名空间(THINGX.System.Version)
    // -系统资源库命名空间(THINGX.System.Resource)
    // -系统加载控制库命名空间(THINGX.System.Loading)
    // -系统提示信息库命名空间(THINGX.System.Message)

    // THINGX.System 解构
    THINGX.System:namespace
        namespaces
            - THINGX.System.Version
            - THINGX.System.Resource
            - THINGX.System.Loading
            - THINGX.System.Message

```
### *<a><font color="grey">Namespace</font></a>* 系统版本库(THINGX.System.Version)
> THINGX.System.Version:namespace
```javascript

    // 便于对应用系统使用相关库的版本描述了解
    // 可用于部分插件的兼容性扩展能力处理
    
    // THINGX.System.Version 解构
    THINGX.System.Version:namespace
        Members
            - version:string    版本号(ThingJS-X)
            - thingjs:string    版本号(ThingJS)
            - marker:string     版本号(标记库)
            - geo:string        版本号(地图) ???? thingjs geo
    
```
#### *<a><font color="red">Members</font></a>* THINGX.System.Version.成员属性
> 获取应用系统版本属性
* 类型: string
* 示例
    ```javascript

        // versions
        // 示例1: 获取ThingJS-X 零代码当前系统版本号
        const version = THINGX.System.Version.version;  
        console.warn("ThingJS-X 零代码系统版本号: %s",version);
        //print result: ThingJS-X 零代码系统版本号: 4.2.0

        // thingjs
        // 示例2: 获取ThingJS-X 零代码当前系统依赖库（thingjs）版本号
        const version = THINGX.System.Version.thingjs;  
        console.warn("ThingJS-X 零代码系统依赖库（thingjs）版本号: %s",version);
        //print result: ThingJS-X 零代码系统依赖库（thingjs）版本号: 1.3.13
       
        // marker
        // 示例: 获取ThingJS-X 零代码当前系统依赖库标记库（marker）版本号
        const version = THINGX.System.Version.marker;  
        console.warn("ThingJS-X 零代码系统依赖库标记库（marker）版本号: %s",version);
        //print result: ThingJS-X 零代码系统依赖库标记库（marker）版本号: 1.5.52

        // geo
        // 示例4: 获取ThingJS-X 零代码当前系统依赖库geo库（geo）版本号
        const version = THINGX.System.Version.geo;  
        console.warn("ThingJS-X 零代码系统依赖库geo库（geo）版本号: %s",version);
        //print result: ThingJS-X 零代码系统依赖库geo库（geo）版本号: 1.3.13                        

    ```
    ***

### *<a><font color="grey">Namespace</font></a>* 系统资源库(THINGX.System.Resource)
> THINGX.System.Resource:namespace
```javascript

    // 使用说明 主要用于获取应用系统资源信息
    // 目前主要提供了相关资源路径的信息
    // 对于资源的其它api能力，可参考最新提案中内容, 
    //也可发送邮件到 zhangguang@uino.com 获取需要支持的资源api
    
    // THINGX.System.Resource 解构
    THINGX.System.Resource:namespace
        Members
            - absoluteRoot:string                   //根资源绝对地址（公共域）
            - relativeRoot:string                   //根资源相对地址（公共域）
            - absoluteRootWithDomain:string         //根资源绝对地址（用户域）
            - relativeRootWithDomain:string         //根资源相对地址（用户域）
```

#### *<a><font color="red">Members</font></a>* THINGX.System.Resource.成员属性
> 获取应用系统资源属性成员
* 类型: string
* 示例
    ```javascript
        
        //absoluteRoot 公共域
        // 示例1: 获取ThingJS-X 零代码系统（公共域）根资源绝对地址
        const absoluteRoot = THINGX.System.Resource.absoluteRoot;  
        console.warn("ThingJS-X 零代码系统（公共域）根资源绝对地址: %s",absoluteRoot);
        //print result: ThingJS-X 零代码系统（公共域）根资源绝对地址: http://192.168.11.78:1662/thing/rsm
      
        //relativeRoot 公共域
        // 示例2: 获取ThingJS-X 零代码系统（公共域）根资源相对地址
        const relativeRoot = THINGX.System.Resource.relativeRoot;  
        console.warn("ThingJS-X 零代码系统（公共域）根资源相对地址: %s",relativeRoot);
        //print result: ThingJS-X 零代码系统（公共域）根资源相对地址: thing/rsm
               
        //absoluteRootWithDomain 用户域
        // 示例3: 获取ThingJS-X 零代码系统（用户域）根资源绝对地址
        const absoluteRootWithDomain = THINGX.System.Resource.absoluteRootWithDomain;  
        console.warn("ThingJS-X 零代码系统（公共域）根资源绝对地址: %s",absoluteRootWithDomain);
        //print result: ThingJS-X 零代码系统（用户域）根资源绝对地址: http://192.168.11.78:1662/thing/rsm/537929337070862
               
        //relativeRootWithDomain 用户域
        // 示例4: 获取ThingJS-X 零代码系统（用户域）根资源相对地址
        const relativeRootWithDomain = THINGX.System.Resource.relativeRootWithDomain;  
        console.warn("ThingJS-X 零代码系统（公共域）根资源相对地址: %s",relativeRootWithDomain);
        //print result: ThingJS-X 零代码系统（用户域）根资源相对地址: thing/rsm/537929337070862
               
    ```
    ***




### *<a><font color="grey">Namespace</font></a>* 系统加载控制库(THINGX.System.Loading)
> THINGX.System.Loading:namespace
```javascript

    // 使用说明 主要用于控制系统加载相关功能
    // 目前主要提供了系统加载显示&隐藏
    
    // THINGX.System.Loading 解构
    THINGX.System.Loading:namespace
        Methods
            - show([url] [,type]):void          //创建并显示系统loading ui
            - hide():void                       //隐藏并销毁系统loading ui

```
#### *<a><font color="grey">Method</font></a>* THINGX.System.Loading.show
> 创建并显示系统加载进度UI THINGX.System.Loading.show([url] [,type]):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |url|string|-| - | 加载资源的路径, 默认使用系统自带</br>http://IP:PORT/thing/screen/video/default.png|   
  |type|string|-| - | 加载资源的类型, </br> gif 动态图 /video 视频 |   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示系统默认加载进度
        THINGX.System.Loading.show();

    ```

    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Loading.hide
> 隐藏并销毁系统加载进度的UI效果 THINGX.System.Loading.hide():void
* 类型: void
* 示例
    ```javascript

        // 示例. 隐藏并销毁系统loading ui效果
        THINGX.System.Loading.hide();

    ```
    ***

### *<a><font color="grey">Namespace</font></a>* 系统提示信息库(THINGX.System.Message)
> THINGX.System.Message:namespace
```javascript

    // 使用说明 主要用于系统提示信息的api
    // 目前主要提供了 提示信息、成功提示、警告提示、错误提示、加载提示、销毁提示、全局配置
    // 提示信息的相关能力
    
    // THINGX.System.Message 解构
    THINGX.System.Message:namespace
        Methods
            - setConfig(config:Config||string):void     
                            //设置全局配置信息提示    #不推荐在插件开发中进行全局设置   
            - info(config:Config||string):void          
                            //显示提示信息
            - success(config:Config||string):void       
                            //显示成功信息
            - warning(config:Config||string):void       
                            //显示警告信息
            - error(config:Config||string):void         
                            //显示错误信息
            - loading(config:Config||string):void       
                            //显示加载信息
            - destory():void                            
                            //销毁当前提示框
        Type Definitions
            - Config (信息配置)               
                - onClose:function              //关闭时的回调
                - content:string                //提示内容
                - closable:boolean              //是否显示关闭按钮 defaultvalue:false
                - duration:number               //默认自动关闭的延时，单位秒

```

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.setConfig
> 配置全局信息提示 THINGX.System.Message.setConfig(config:Config):void
* 参数 (Type Definitions Config || string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例. 配置全局信息提示,系统全局生效   #不推荐在插件开发中进行设置全局配置
        const config = {
            onClose : ()=>{
                console.warn("the message prompt box is closed.");
            },
            content : "操作完成",
            closable : false,
            duration : 2
        };

        //设置全局系统提示信息配置
        THINGX.System.Message.setConfig(config);

    ```
    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.info
> 显示提示信息 THINGX.System.Message.info(config:Config||string):void
* 参数 (Type Definitions Config||string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示提示信息
         THINGX.System.Message.info("配置完成");

        // 示例2. 显示提示信息使用自定义配置
        const config = {
            onClose : ()=>{
                console.warn("info, the message prompt box is closed.");
            },
            content : "操作完成",
            closable : true,        //显示关闭按钮
            duration : 3            //延时 3秒关闭
        };

        THINGX.System.Message.info(config);

    ```
    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.success
> 显示提示成功信息 THINGX.System.Message.success(config:Config||string):void
* 参数 (Type Definitions Config||string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示提示成功信息
         THINGX.System.Message.success("图层变色插件加载成功");

        // 示例2. 显示提示成功信息使用自定义配置
        const config = {
            onClose : ()=>{
                console.warn("info, the message prompt box is closed.");
            },
            content : "图层变色插件加载成功",
            closable : true,        //显示关闭按钮
            duration : 3            //延时 3秒关闭
        };

        THINGX.System.Message.success(config);

    ```
    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.warning
> 显示提示警告信息 THINGX.System.Message.warning(config:Config||string):void
* 参数 (Type Definitions Config||string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示提示警告信息
         THINGX.System.Message.warning("the alarm system is abnormal, please pay attention to the inspection report.");

        // 示例2. 显示提示警告信息使用自定义配置
        const config = {
            onClose : ()=>{
                console.warn("warning, the message prompt box is closed.");
            },
            content : "the alarm system is abnormal, please pay attention to the inspection report.",
            closable : false,       //不显示关闭按钮
            duration : 3            //延时 3秒关闭
        };

        THINGX.System.Message.warning(config);

    ```
    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.error
> 显示提示错误信息 THINGX.System.Message.error(config:Config||string):void
* 参数 (Type Definitions Config||string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示提示错误信息
         THINGX.System.Message.error("system error, please contact the administrator to check.");

        // 示例2. 显示提示警告信息使用自定义配置
        const config = {
            onClose : ()=>{
                console.warn("error, the message prompt box is closed.");
            },
            content : "system error, please contact the administrator to check.",
            closable : false,       //不显示关闭按钮
            duration : 3            //延时 3秒关闭
        };

        THINGX.System.Message.error(config);

    ```
    ***



#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.loading
> 显示提示加载信息 THINGX.System.Message.loading(config:Config||string):void
* 参数 (Type Definitions Config||string)
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |onClose|function|-| - |关闭时的回调,消息提示关闭时的触发函数|   
  |content|string|-| - | 提示内容 |   
  |closable|boolean|false| - | 关闭按钮 |   
  |duration|number|2秒| - | 默认自动关闭的延时,单位秒|   
* 类型: void
* 示例
    ```javascript

        // 示例1. 显示提示加载信息
         THINGX.System.Message.loading("plug-in is loading, please wait.");

        // 示例2. 显示提示警告信息使用自定义配置
        const config = {
            onClose : ()=>{
                console.warn("loading, the message prompt box is closed.");
            },
            content : "plug-in is loading, please wait.",
            closable : false,       //不显示关闭按钮
            duration : 3            //延时 3秒关闭
        };

        THINGX.System.Message.loading(config);

    ```
    ***

#### *<a><font color="grey">Method</font></a>* THINGX.System.Message.destory
> 销毁当前生效中的提示框 THINGX.System.Message.destory():void 
* 类型: void
* 示例
    ```javascript

        // 示例1. 销毁当前生效中的提示框  常与 loading() 配合使用
         THINGX.System.Message.destory();

        // 示例2. 与 loading() 配合使用创建加载提示框, 5秒后销毁该loading 提示框
        //配置loading 提示框参数，加载显示30秒后默认关闭
        const config = {
            onClose : ()=>{
                console.warn("loading, the message prompt box is closed.");
            },
            content : "plug-in is loading, please wait.",
            closable : false,        //不显示关闭按钮
            duration : 30            //延时 20秒关闭
        };
        //显示加载 loading 提示框
        THINGX.System.Message.loading(config);
        //5秒后（定时器推荐使用全局定时器调度管理器创建维护） 销毁loading 提示框 
        THINGX.Timer.addTimeout(()=>{
                //销毁loading 提示框
               THINGX.System.Message.destory(); 
        },5000);

    ```
    ***

!> 系统环境 支持   
**质量保证:** `刘远健`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  
