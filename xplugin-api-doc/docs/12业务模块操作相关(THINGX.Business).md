<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Namespace* 解构(THINGX.Business)](#namespace-解构thingxbusiness)
- [*Method* THINGX.Business.hide](#method-thingxbusinesshide)
- [*Method* THINGX.Business.show](#method-thingxbusinessshow)
- [*Method* THINGX.Business.activate](#method-thingxbusinessactivate)
- [*Method* THINGX.Business.deactivate](#method-thingxbusinessdeactivate)
- [*Method* THINGX.Business.refresh](#method-thingxbusinessrefresh)
- [*Method* THINGX.Business.showPanel](#method-thingxbusinessshowpanel)
- [*Method* THINGX.Business.hidePanel](#method-thingxbusinesshidepanel)
- [*Method* THINGX.Business.getActivatedName](#method-thingxbusinessgetactivatedname)
- [*Method* THINGX.Business.getPanelConfig](#method-thingxbusinessgetpanelconfig)

<!-- /code_chunk_output -->


### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.Business)
> THINGX.Business:namespace
```javascript
    //应用系统针对系统业务模块的相关操作能力
    //主要提供针对应用系统业务模块的显示、隐藏、激活项、显示业务面板等能力

    //THING.BaseObject (相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.Business 解构
    - THINGX.Business:namespace
        - hide():void                               //隐藏业务模块
        - show():void                               //显示业务模块
        - activate(name):void                       //激活业务
        - deactivate():void                         //取消业务
        - refresh():Promise.<boolean>               //刷新业务模块
        - showPanel(name):void                      //显示业务面板
        - hidePanel(name):void                      //隐藏业务面板
        - getActivatedName():void                   //获取当前激活的业务名称
        - getPanelConfig():PanelConfig              //获取业务面板配置

        Type Definitions
            - PanelConfig                           (业务面板配置信息)          
                - width:number                      //面板宽度 （px）  
                - spacing:number                    //面板间距 （px）     
                - aero:boolean                      //面板磨砂 true/false
                - position:object                   //面板位置
                    - top:number                    //距上 （px）
                    - bottom:number                 //距下 （px）
                - background:object                 //面板背景  
                    - type:string                   //类型 color/image           
                    - value:string                  //背景

```
### *<a><font color="grey">Method</font></a>* THINGX.Business.hide
> 隐藏业务模块,主要指的是业务栏UI隐藏, THINGX.Business.hide():void
   
* 类型: `void`
* 示例
    ```javascript

        //隐藏业务模块,主要指的是业务栏UI隐藏

        //示例. 场景加载完成后,直接调用api 隐藏业务(栏)UI模块
        THINGX.Business.hide();
        //即可将业务栏模块隐藏

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Business.show
> 显示业务模块,主要指的是业务栏UI显示, THINGX.Business.show():void
   
* 类型: void
* 示例
    ```javascript

        //显示业务模块,主要指的是业务栏UI显示

        //示例. 由于在 THINGX.Business.hide() 示例中我们已将业务模块隐藏,直接调用api 显示业务(栏)UI模块，检查结果

        THINGX.Business.show();

        //即可将业务栏模块显示

    ```
    ***
                       
### *<a><font color="grey">Method</font></a>* THINGX.Business.activate
> 激活业务,主要指的是激活具体业务项, THINGX.Business.activate(name):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 业务名称 |   
* 类型: `void`
* 示例
    ```javascript

        //激活业务,主要指的是激活具体业务项
        //注：业务项之间是互斥关系，同一时有且仅有一项业务被激活, 不可同时激活多个业务
        //  当一个业务激活时，已存在激活的业务会被取消，然后激活当前业务

        //示例1. 场景加载完成，无默认激活业务，主动调用api进行业务激活（激活智慧消防业务）
        THINGX.Business.activate("智慧消防");
        //即可将业务激活同时业务关联的相关内容被触发，例如：业务面板也会被激活显示

        //示例2. 接示例1，将`智慧安防`业务激活
        THINGX.Business.activate("智慧安防");
        //即可将业务激活同时业务关联的相关内容被触发，业务面板和激活的业务项会被切换，原业务项`智慧消防`会被取消

    ```
    ***
                             
### *<a><font color="grey">Method</font></a>* THINGX.Business.deactivate
> 取消业务,主要指的是具体业务项, THINGX.Business.deactivate():void
   
* 类型: `void`
* 示例
    ```javascript

        //取消业务,主要指的是具体业务项
        //注：业务项之间是互斥关系，同一时有且仅有一项业务被激活, 不可同时激活多个业务
        //  当一个业务激活时，已存在激活的业务会被取消，然后激活当前业务
        //  由于业务项是互斥关系，所以在取消业务时不需要进行业务名称参数的传递

        //示例. 场景加载完成，默认激活`智慧消防`业务，主动调用api进行业务取消
        THINGX.Business.deactivate();
        //即可将激活的业务取消，同时关联的相关内容被触发，例如：已经激活的业务面板也会被取消（隐藏）

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Business.refresh
> 刷新业务模块,刷新整个业务模块,会进行最新业务配置的请求获取, THINGX.Business.refresh():Promise.Boolean
   
* 类型: `void`
* 示例
    ```javascript

        //刷新业务模块,刷新整个业务模块,会进行最新业务配置的请求获取
        //注：与 THINGX.Business.reload 提案不同，reload不会进行数据的获取，仅仅使用当前配置数据刷新业务模块

        //示例. 刷新业务模块后进行信息打印
        THINGX.Business.refresh().then((result)=>{
            console.warn("业务模块刷新完成: %s", result);
        });

        //print result: 业务模块刷新完成: true

    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Business.showPanel
> 显示业务面板, THINGX.Business.showPanel(name):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 业务名称 |   
* 类型: `void`
* 示例
    ```javascript

        //显示业务面板
        //注：业务项之间是互斥关系，同一时有且仅有一项业务被激活, 不可同时激活多个业务
        //  当一个业务激活时，已存在激活的业务会被取消，然后激活当前业务

        //示例1. 场景加载完成，无默认激活业务，主动调用api进行业务面板显示（显示`智慧消防`业务面板）
        THINGX.Business.showPanel("智慧消防");
        //即可将业务面板显示并不会激活业务项，仅仅显示面板

        //示例2. 接示例1，将`智慧安防`业务面板显示
        THINGX.Business.showPanel("智慧安防");
        //即可将业务面板显示并不会激活业务项，仅仅显示面板

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Business.hidePanel
> 隐藏业务面板, THINGX.Business.hidePanel(name):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|-| - | 业务名称 ,为空隐藏所有已显示面板|   
* 类型: `void`
* 示例
    ```javascript

        //隐藏业务面板

        //示例1. （隐藏所有已显示的业务面板）
        THINGX.Business.hidePanel();

        //示例2. （隐藏`智慧消防`业务面板）
        THINGX.Business.hidePanel("智慧消防");
        //即可将业务面板隐藏并不会取消业务项，仅仅隐藏业务面板

    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Business.getActivatedName
> 获取当前激活的业务名称, THINGX.Business.getActivatedName():string 

* 类型: `string`
* 示例
    ```javascript

        //获取当前激活的业务名称

        //示例1. 获取当前已被激活的业务，用来做一些显示或逻辑判断
        const name = THINGX.Business.getActivatedName();
        console.warn("当前激活的业务为: %s", name);
        //print result: 当前激活的业务为: 智慧安防

        //示例2. 激活智慧消防业务,获取当前已被激活的业务
        const name = THINGX.Business.getActivatedName();
        console.warn("当前激活的业务为: %s", name);
        //print result: 当前激活的业务为: 智慧消防

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Business.getPanelConfig
> 获取业务面板配置,用于相关逻辑等判断, THINGX.Business.getPanelConfig():PanelConfig
支持
* 类型: void
* 示例
    ```javascript 
    ```   
    ***

!> 业务模块操作相关 支持   
**质量保证:** `张迪`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  
       