<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a><font color="grey">Namespace</font></a>* 解构(THINGX.DigitalTwin)](#font-colorgreynamespacefont-解构thingxdigitaltwin)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.load](#font-colorgreymethodfont--thingxdigitaltwinload)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.show](#font-colorgreymethodfont--thingxdigitaltwinshow)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hide](#font-colorgreymethodfont--thingxdigitaltwinhide)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hasShowPurpose](#font-colorgreymethodfont--thingxdigitaltwinhasshowpurpose)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.showWithSmoothAnimation](#font-colorgreymethodfont--thingxdigitaltwinshowwithsmoothanimation)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hideWithSmoothAnimation](#font-colorgreymethodfont--thingxdigitaltwinhidewithsmoothanimation)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.addColor](#font-colorgreymethodfont--thingxdigitaltwinaddcolor)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.removeColor](#font-colorgreymethodfont--thingxdigitaltwinremovecolor)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.addOpacity](#font-colorgreymethodfont--thingxdigitaltwinaddopacity)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.removeOpacity](#font-colorgreymethodfont--thingxdigitaltwinremoveopacity)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.showPanel](#font-colorgreymethodfont--thingxdigitaltwinshowpanel)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hidePanel](#font-colorgreymethodfont--thingxdigitaltwinhidepanel)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.activateTabOnPanel](#font-colorgreymethodfont--thingxdigitaltwinactivatetabonpanel)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabOnPanel](#font-colorgreymethodfont--thingxdigitaltwingetactivatedtabonpanel)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabIndexOnPanel](#font-colorgreymethodfont--thingxdigitaltwingetactivatedtabindexonpanel)
- [*<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getDistanceToCamera](#font-colorgreymethodfont--thingxdigitaltwingetdistancetocamera)

<!-- /code_chunk_output -->

### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.DigitalTwin)
> THINGX.DigitalTwin:namespace
```javascript
    //应用系统针对孪生体操作提供的相关能力
    //主要提供针对孪生体及其附属能力的api功能

    //THING.BaseObject (相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.DigitalTwin 解构
    THINGX.DigitalTwin:namespace
        Members
        // - 无
        Methods
        - load(DigitalTwin [, isShow]):Promise.<Array.<THING.BaseObject>>               //加载孪生体资源
        - show(DigitalTwin [, purpose]):Array.<THING.BaseObject>                        //显示孪生体
        - hide(DigitalTwin [, purpose]):Array.<THING.BaseObject>                        //隐藏孪生体
        - hasShowPurpose(DigitalTwin [, purpose]):boolean                               //判断孪生体是否带有某个显示目的
        - showWithSmoothAnimation(DigitalTwin,[,Config] [, purpose]):Promise.<Array.<THING.BaseObject>>//显示孪生体(带动画效果)
        - hideWithSmoothAnimation(DigitalTwin,[,Config] [, purpose]):Promise.<Array.<THING.BaseObject>>//隐藏孪生体(带动画效果)
        - addColor(DigitalTwin, purpose, color [, priority] [, traverse] [, intensity]):Array.<THING.BaseObject>//添加颜色到孪生体色栈中
        - removeColor(DigitalTwin, purpose, traverse)Array.<THING.BaseObject>           //从孪生体色栈中移除指定颜色
        - addOpacity(DigitalTwin, purpose, opacity [, priority] [, traverse] [, ignoreTag]):Array.<THING.BaseObject>//添加透明度到孪生体透明栈中
        - removeOpacity(DigitalTwin, purpose [, traverse] [, ignoreTag]):Array.<THING.BaseObject>                   //从孪生体透明栈中移除指定目的的透明度
        - showPanel(DigitalTwin):void 
                                        //显示孪生体面板  (*) 不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin
        - hidePanel(DigitalTwin):void   //隐藏孪生体面板  (*) 不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin
        - activateTabOnPanel(name):void                         //激活当前孪生体面板上(指定)的tab页签
        - getActivatedTabOnPanel():string                       //获取当前在孪生体面板上激活的tab页签名称 
        - getActivatedTabIndexOnPanel():number                  //获取当前在孪生体面板上激活的tab页签索引 
        - getDistanceToCamera(digitalTwin, isRecursive):number  //计算孪生体到摄像机的距离 （米）

        Type Definitions
            - DigitalTwin               孪生体对象(THING.BaseObject)
                -   (相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)
            - Config                    孪生体显示隐藏动画效果配置(效果配置)
                - lerpType:string       插值类型(相关属性 参考thingjs api 插值类型章节: https://docs.thingjs.com/cn/apidocs/THING.html#.LerpType)
                - time:number           动画时间(毫秒/ms) default value: 500ms

```


### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.load
> 加载孪生体资源, THINGX.DigitalTwin.load(DigitalTwin [, isShow]):Promise.<Array.<THING.BaseObject>>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |isShow|boolean|否| true | 加载后是否立即显示 |    
* 类型: Promise.<Array.<THING.BaseObject>>
* 示例
    ```javascript

        //加载孪生体资源

        //示例.

        //TODO 补充加载孪生体资源示例
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.show
> 显示孪生体, THINGX.DigitalTwin.show(DigitalTwin [, purpose]):Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 显示目的 |    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //显示孪生体

        //示例.

        //TODO 补充显示孪生体
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hide
> 隐藏孪生体, THINGX.DigitalTwin.hide(DigitalTwin [, purpose]):Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 显示目的 |    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //隐藏孪生体

        //示例.

        //TODO 补充隐藏孪生体
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hasShowPurpose
> 判断孪生体是否带有某个显示目的, THINGX.DigitalTwin.hasShowPurpose(DigitalTwin [, purpose]):boolean

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked>support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 显示目的 |    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //隐藏孪生体
        //如果存在多个孪生体 则所有孪生体都包含显示目的才返回true

        //示例.

        //TODO
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.showWithSmoothAnimation
> 显示孪生体(带动画效果), THINGX.DigitalTwin.showWithSmoothAnimation(DigitalTwin,[,Config] [, purpose]):Promise.<Array.<THING.BaseObject>> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |config|THINGX.DigitalTwin.Config|否| { lerpType: 'Quartic.In', time: 500 } | 孪生体显示隐藏动画效果配置(效果配置) : Type Definitions|    
  |purpose|string|否| default | 显示目的 |    
* 类型:Promise.<Array.<THING.BaseObject>>
* 示例
    ```javascript

        //显示孪生体(带动画效果)

        //示例.

        //TODO 补充显示孪生体(带动画效果)
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hideWithSmoothAnimation
> 隐藏孪生体(带动画效果), THINGX.DigitalTwin.hideWithSmoothAnimation(DigitalTwin,[,Config] [, purpose]):Promise.<Array.<THING.BaseObject>>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |config|THINGX.DigitalTwin.Config|否|{ lerpType: 'Quartic.Out', time: 500 } | 孪生体显示隐藏动画效果配置(效果配置) : Type Definitions|    
  |purpose|string|否| default | 显示目的 |    
* 类型:Promise.<Array.<THING.BaseObject>>
* 示例
    ```javascript

        //隐藏孪生体(带动画效果)

        //示例.

        //TODO 补充隐藏孪生体(带动画效果)
    ```
    ***



### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.addColor
> 添加颜色到孪生体色栈中, THINGX.DigitalTwin.addColor(DigitalTwin, purpose, color [, priority] [, traverse] [, intensity]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|是| default | 变色的目的（用于取消该次变色） |    
  |color|string|是| default | 十六进制颜色字符串 如'#ff0000' |
  |priority|number|否| 0 | 颜色设置的优先级,[0,1] 数值越小,权重越大 |
  |traverse|boolean|否| false | 是否遍历子元素 |  
  |intensity|number|否| 0.7 | 颜色强度，[0,1] 数值越高变色越明显   |    
* 类型:Promise.<Array.<THING.BaseObject>>
* 示例
    ```javascript

        //添加颜色到孪生体色栈中

        //示例.

        //TODO 
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.removeColor
> 从孪生体色栈中移除指定颜色, THINGX.DigitalTwin.removeColor(DigitalTwin, purpose, traverse)Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|是| default | 变色的目的 |    
  |traverse|boolean|否| false | 是否遍历子元素 |  
* 类型:Promise.<Array.<THING.BaseObject>>
* 示例
    ```javascript

        //从孪生体色栈中移除指定颜色

        //示例.

        //TODO 
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.addOpacity
> 添加透明度到孪生体透明栈中, THINGX.DigitalTwin.addOpacity(DigitalTwin, purpose, opacity [, priority] [, traverse] [, ignoreTag]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|是| - | 透明的目的（用于取消该次透明） |    
  |opacity|number|是| - | 透明度 [0,1]数值越大,透明度越低 |
  |priority|number|否| 0 | 透明设置的优先级,[0,1] 数值越小,权重越大 |
  |traverse|boolean|否| false | 是否遍历子元素 |  
  |ignoreTag|string|否| [inheritOpacity] | 忽略的标签   |    
* 类型:Array.<THING.BaseObject>
* 示例
    ```javascript

        //添加透明度到孪生体透明栈中

        //示例.

        //TODO 
    ```
    ***


### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.removeOpacity
> 从孪生体透明栈中移除指定目的的透明度, THINGX.DigitalTwin.removeOpacity(DigitalTwin, purpose [, traverse] [, ignoreTag]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|是| - | 透明的目的 |    
  |traverse|boolean|否| false | 是否遍历子元素 |  
  |ignoreTag|string|否| [inheritOpacity] | 忽略的标签   |  
* 类型:Array.<THING.BaseObject>
* 示例
    ```javascript

        //从孪生体透明栈中移除指定目的的透明度

        //示例.

        //TODO
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.showPanel
> 显示孪生体面板, THINGX.DigitalTwin.showPanel(DigitalTwin):void 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |      
* 类型:void
* 示例
    ```javascript

        //显示孪生体面板 （孪生体在应用系统中被选中只有单选，无同时选择多个孪生体能力，故在孪生体面板显示时，仅支持单孪生体操作）
        //参数 it's not support for DigitalTwin set
        //参数 it's not support thingjs query syntax expression for DigitalTwin

        //示例.

        //TODO 
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hidePanel
> 隐藏孪生体面板, THINGX.DigitalTwin.hidePanel(DigitalTwin):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |  
* 类型:void
* 示例
    ```javascript

        //隐藏孪生体面板 （孪生体在应用系统中被选中只有单选，无同时选择多个孪生体能力，故在孪生体面板显示时，仅支持单孪生体操作）
        //参数 it's not support for DigitalTwin set
        //参数 it's not support thingjs query syntax expression for DigitalTwin

        //示例.

        //TODO 
    ```
    ***   

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.activateTabOnPanel
> 激活当前孪生体面板上(指定)的tab页签, THINGX.DigitalTwin.activateTabOnPanel(name):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 孪生体面板页签定义名称 |  
* 类型:void
* 示例
    ```javascript

        //激活当前孪生体面板上(指定)的tab页签

        //示例.

        //TODO 
    ```
    ***   
### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabOnPanel
> 获取当前在孪生体面板上激活的tab页签名称 , THINGX.DigitalTwin.getActivatedTabOnPanel():string
* 类型:string
* 示例
    ```javascript

        //获取当前在孪生体面板上激活的tab页签名称

        //示例.

        //TODO 
    ```
    ***   
### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabIndexOnPanel
> 获取当前在孪生体面板上激活的tab页签索引 , THINGX.DigitalTwin.getActivatedTabIndexOnPanel():number
* 类型:number
* 示例
    ```javascript

        //获取当前在孪生体面板上激活的tab页签索引

        //示例.

        //TODO 
    ```
    ***   
### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getDistanceToCamera
> 计算孪生体到摄像机的距离, getDistanceToCamera(digitalTwin, isRecursive):number

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象/ThingJS查询语法</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |    
  |isRecursive|boolean|否| false | 是否遍历子集 |  
* 类型:number
* 示例
    ```javascript

        //计算孪生体到摄像机的距离 （米）

        //示例.

        //TODO 
    ```
    ***   

!> 孪生体操作相关 支持   
**质量保证:** `张迪`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  