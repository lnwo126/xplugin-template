<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a><font color="grey">Namespace</font></a>* 解构(THINGX.Layer)](#font-colorgreynamespacefont-解构thingxlayer)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.hide](#font-colorgreymethodfont-thingxlayerhide)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.show](#font-colorgreymethodfont-thingxlayershow)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.activate](#font-colorgreymethodfont-thingxlayeractivate)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.deactivate](#font-colorgreymethodfont-thingxlayerdeactivate)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.deactivateAll](#font-colorgreymethodfont-thingxlayerdeactivateall)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.refresh](#font-colorgreymethodfont-thingxlayerrefresh)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.getActivatedNames](#font-colorgreymethodfont-thingxlayergetactivatednames)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.getMutexsConfig](#font-colorgreymethodfont-thingxlayergetmutexsconfig)
- [*<a><font color="grey">Method</font></a>* THINGX.Layer.getPanelConfig](#font-colorgreymethodfont-thingxlayergetpanelconfig)

<!-- /code_chunk_output -->


### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.Layer)
> THINGX.Layer:namespace
```javascript
    //应用系统针对系统图层模块的相关操作能力
    //主要提供针对应用系统图层模块的显示、隐藏、激活项、显示业务面板等能力

    //THING.BaseObject (相关属性和方法 可参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.Layer 解构
    THINGX.Layer:namespace
        - hide():void                               //隐藏图层模块
        - show():void                               //显示图层模块
        - activate(name [, purpose]):void           //激活图层项
        - deactivate(name [, purpose]):void         //取消激活图层项
        - deactivateAll():void                      //取消所有已激活的图层
        - refresh():void                            //重新读取可视化配置 并根据当前层级重新创建图层
        - getActivatedNames():Array.<string>        //获取当前层级已激活的图层名称   
        - getMutexsConfig():Array.<string>          //获取图层互斥配置
        - getPanelConfig():PanelConfig              //获取图层面板配置
        
        Type Definitions
            - PanelConfig                           (图层面板配置)        
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

### *<a><font color="grey">Method</font></a>* THINGX.Layer.hide
> 隐藏图层模块,主要指的是图层栏UI隐藏, THINGX.Layer.hide():void
   
* 类型: void
* 示例
    ```javascript

        //隐藏图层模块,主要指的是图层栏UI隐藏
        //示例. 场景加载完成后,直接调用api 隐藏图层(栏)UI模块

        THINGX.Layer.hide();

        //即可将图层栏模块隐藏

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.show
> 显示图层模块,主要指的是图层栏UI显示, THINGX.Layer.show():void
   
* 类型: void
* 示例
    ```javascript

        //显示图层模块,主要指的是图层栏UI显示

        //示例. 由于在 THINGX.Layer.hide() 示例中我们已将图层模块隐藏,直接调用api 显示图层(栏)UI模块，检查结果

        THINGX.Layer.show();

        //即可将图层栏模块显示

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.activate
> 激活图层项,主要指的是激活具体图层项, THINGX.Layer.activate(name [, purpose]):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string 或 Array.\<string>|是| - | 图层名称 |   
  |purpose|string|-| default | 激活目的 |     
* 类型: void
* 示例
    ```javascript

        //激活图层项,主要指的是激活具体图层项
        //注：图层项是可同时激活多项（支持配置互斥关系）

        //示例1. 场景加载完成，无默认激活业务图层，主动调用api进行图层激活（激活`建筑变色`图层）
        THINGX.Layer.activate("建筑变色");

        //示例2. 接示例1，将`显示摄像头`图层、`温度云图`图层 激活
        THINGX.Layer.activate(["显示摄像头", "温度云图"]);

        //示例3. 使用 `智慧消防` 业务 将`温度云图`图层激活
        THINGX.Layer.activate("温度云图", "智慧消防");

    ```
    ***
                             
### *<a><font color="grey">Method</font></a>* THINGX.Layer.deactivate
> 取消图层,主要指的是具体图层项, THINGX.Layer.deactivate(name [, purpose]):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string 或 Array\<string>|是| - | 图层名称 |   
  |purpose|string|-| default | 激活目的 |    
* 类型: void
* 示例
    ```javascript

        //取消图层,主要指的是具体图层项
        //注：图层项是可同时取消多项（支持配置互斥关系）

        //示例1. 取消激活 `建筑变色`图层
        THINGX.Layer.deactivate("建筑变色");

        //示例2. 取消激活 `建筑变色`图层、`显示摄像头`图层
        THINGX.Layer.deactivate(["建筑变色", "显示摄像头"]);

        //示例3. 使用 `智慧消防` 业务 将`温度云图`图层取消
        THINGX.Layer.deactivate("温度云图", "智慧消防");

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.deactivateAll
> 取消所有激活的图层,主要指的是具体图层项, THINGX.Layer.deactivateAll():void
  
* 类型: void
* 示例
    ```javascript

        //取消所有激活的图层,主要指的是具体图层项
        //注：图层项是可同时取消多项（支持配置互斥关系）

        //示例. 取消激活 所有激活的图层
        THINGX.Layer.deactivateAll();

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.refresh
> 刷新图层模块,刷新整个图层模块,会进行最新图层配置的请求获取, THINGX.Layer.refresh():void
   
* 类型: void
* 示例
    ```javascript

        //刷新图层模块,刷新整个图层模块,会进行最新图层配置的请求获取
        //重新读取可视化配置 并根据当前层级重新创建图层

        //示例. 刷新图层模块
        THINGX.Layer.refresh();

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.getActivatedNames
> 获取当前层级已激活的图层名称, THINGX.Layer.getActivatedNames():Array 

* 类型: void
* 示例
    ```javascript

        //获取当前层级已激活的图层名称

        //示例. 获取当前层级已激活的图层名称
        const names = THINGX.Layer.getActivatedName();
        console.warn("当前激活的图层为: %s", ...names);
        //print result: 当前激活的图层为: 建筑变色 显示摄像头 温度云图

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Layer.getMutexsConfig
> 获取图层互斥配置, THINGX.Layer.getMutexsConfig():Array 

* 类型: void
* 示例
    ```javascript

        //获取图层互斥配置

        //示例. 获取图层互斥配置
        const mutexsNames = THINGX.Layer.getMutexsConfig();
        console.warn("互斥图层: %s", ...mutexsNames);
        //print result: 互斥图层: 建筑变色 显示摄像头

    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Layer.getPanelConfig
> 获取图层面板配置,用于相关逻辑等判断, THINGX.Layer.getPanelConfig():PanelConfig

* 类型: void
* 示例
    ```javascript

        //获取图层面板配置,用于相关逻辑等判断

        //示例1. 获取图层面板配置
        const config = THINGX.Layer.getPanelConfig();
        console.warn("当前图层面板的配置属性有: ", config);
        //print result: 当前图层面板的配置属性有: config 对象,TODO 确认好了再进行添加

    ```
    ***

!> 图层模块操作相关 支持   
**质量保证:** `张迪`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  