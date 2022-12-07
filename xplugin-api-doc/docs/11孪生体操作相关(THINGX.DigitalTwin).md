<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Namespace* 解构(THINGX.DigitalTwin)](#namespace-解构thingxdigitaltwin)
- [*Method*  THINGX.DigitalTwin.load](#method--thingxdigitaltwinload)
- [*Method*  THINGX.DigitalTwin.show](#method--thingxdigitaltwinshow)
- [*Method*  THINGX.DigitalTwin.hide](#method--thingxdigitaltwinhide)
- [*Method*  THINGX.DigitalTwin.hasShowPurpose](#method--thingxdigitaltwinhasshowpurpose)
- [*Method*  THINGX.DigitalTwin.showWithSmoothAnimation](#method--thingxdigitaltwinshowwithsmoothanimation)
- [*Method*  THINGX.DigitalTwin.hideWithSmoothAnimation](#method--thingxdigitaltwinhidewithsmoothanimation)
- [*Method*  THINGX.DigitalTwin.addColor](#method--thingxdigitaltwinaddcolor)
- [*Method*  THINGX.DigitalTwin.removeColor](#method--thingxdigitaltwinremovecolor)
- [*Method*  THINGX.DigitalTwin.addOpacity](#method--thingxdigitaltwinaddopacity)
- [*Method*  THINGX.DigitalTwin.removeOpacity](#method--thingxdigitaltwinremoveopacity)
- [*Method*  THINGX.DigitalTwin.showPanel](#method--thingxdigitaltwinshowpanel)
- [*Method*  THINGX.DigitalTwin.hidePanel](#method--thingxdigitaltwinhidepanel)
- [*Method*  THINGX.DigitalTwin.activateTabOnPanel](#method--thingxdigitaltwinactivatetabonpanel)
- [*Method*  THINGX.DigitalTwin.getActivatedTabOnPanel](#method--thingxdigitaltwingetactivatedtabonpanel)
- [*Method*  THINGX.DigitalTwin.getActivatedTabIndexOnPanel](#method--thingxdigitaltwingetactivatedtabindexonpanel)
- [*Method*  THINGX.DigitalTwin.getDistanceToCamera](#method--thingxdigitaltwingetdistancetocamera)

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
* 类型: `Promise.<Array.<THING.BaseObject>>`
* 示例
    ```javascript

        //加载孪生体资源

        //示例. 加载园区中的停车位, 并立即显示
        const twins = THING.App.current.query('[twinType=停车位]')
        THINGX.DigitalTwin.load(twins, true);
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
* 类型: `Array.<THING.BaseObject>`
* 示例
    ```javascript

        //显示孪生体

        //示例1. 显示所有建筑孪生体
        const buildings = THINGX.DigitalTwin.show(".Building");
        console.warn("显示的建筑孪生体为: %s", ...buildings);
        //print result: 显示的建筑孪生体为: 建筑1孪生体,建筑2孪生体...

        //示例2. 园区漫游显示所有建筑孪生体
        const buildings = THINGX.DigitalTwin.show(".Building", "园区漫游");
        console.warn("显示的建筑孪生体为: %s", ...buildings);
        //print result: 显示的建筑孪生体为: 建筑1孪生体,建筑2孪生体...

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
* 类型: `Array.<THING.BaseObject>`
* 示例
    ```javascript

        //隐藏孪生体

        //示例1. 由于在 THINGX.DigitalTwin.show() 示例中我们将建筑以 园区漫游 的目的隐藏, 此时示例1的api是不生效的
        const buildings = THINGX.DigitalTwin.hide(".Building");
        console.warn("隐藏的建筑孪生体为: %s", ...buildings);
        //print result: 隐藏的建筑孪生体为: 建筑1孪生体,建筑2孪生体...

        //示例2. 由于示例2的目的和显示建筑时目的相同, 则此时api生效, 园区漫游隐藏所有建筑孪生体,
        const buildings = THINGX.DigitalTwin.hide(".Building", "园区漫游");
        console.warn("隐藏的建筑孪生体为: %s", ...buildings);
        //print result: 隐藏的建筑孪生体为: 建筑1孪生体,建筑2孪生体...
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
* 类型: `boolean`
* 示例
    ```javascript

        //如果存在多个孪生体 则所有孪生体都包含显示目的才返回true

        //示例1. 判断建筑是否有 园区漫游 显示目的
        const bool = THINGX.DigitalTwin.hasShowPurpose(".Building", "园区漫游")
        console.warn("建筑是否有园区漫游显示目的: %s", bool);
        //print result: 建筑是否有园区漫游显示目的: true
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
* 类型:`Promise.<Array.<THING.BaseObject>>`
* 示例
    ```javascript

        //显示孪生体(带动画效果)

        //示例. 在0.5s内由隐藏匀速过渡到显示孪生体
        THINGX.DigitalTwin.showWithSmoothAnimation('.Building', { lerpType: 'Linear', time: 500 })
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
* 类型:`Promise.<Array.<THING.BaseObject>>`
* 示例
    ```javascript

        //隐藏孪生体(带动画效果)

        //示例. 在0.5s内由显示匀速过渡到隐藏孪生体
        THINGX.DigitalTwin.hideWithSmoothAnimation('.Building', { lerpType: 'Linear', time: 500 })
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
  |priority|number|否| 0 | 颜色设置的优先级,数值越大,权重越大,同权重下后设置的会覆盖前设置的 |
  |traverse|boolean|否| false | 是否遍历子元素 |  
  |intensity|number|否| 0.7 | 颜色强度, [0,1] 数值越高变色越明显   |    
* 类型: `Array.<THING.BaseObject>`
* 示例
    ```javascript

        //添加颜色到孪生体色栈中

        //示例1. 给楼层添加红色
        THINGX.DigitalTwin.addColor('.Floor', '红色', '#ff0000');
        
        //示例2. 接示例1 给楼层添加黄色 由于数值越大权重越大,此时楼层是黄色
        THINGX.DigitalTwin.addColor('.Floor', '黄色', '#ffff00', 1);

        //示例3. 给楼层及楼层子元素添加绿色
        THINGX.DigitalTwin.addColor('.Floor', '绿色', '#00ff00', 2, true);
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
* 类型: `Array.<THING.BaseObject>`
* 示例
    ```javascript

        //从孪生体色栈中移除指定颜色

        //示例1. 给楼层移除红色 由于上例中楼层黄色优先级高，移除后楼层仍然是黄色
        THINGX.DigitalTwin.removeColor('.Floor', '红色');
        
        //示例2. 接示例1 给楼层及楼层子元素移除绿色 此时楼层颜色为黄色
        THINGX.DigitalTwin.removeColor('.Floor', '绿色', true);

        //示例2. 接示例2 给楼层移除黄色 此时楼层颜色恢复默认
        THINGX.DigitalTwin.removeColor('.Floor', '黄色');
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
  |opacity|number|是| - | 透明度 [0,1]数值越大,透明度越高 |
  |priority|number|否| 0 | 透明设置的优先级,[0,1] 数值越大,权重越大 |
  |traverse|boolean|否| false | 是否遍历子元素 |  
  |ignoreTag|string|否| [inheritOpacity] | 忽略的标签   |    
* 类型:`Array.<THING.BaseObject>`
* 示例
    ```javascript

        //添加透明度到孪生体透明栈中

        //示例1. 将楼层及楼层子元素透明
        THINGX.DigitalTwin.addOpacity('.Floor', '透明', 0, 0, true);

        //示例2. 将楼层半透明, 楼层子元素仍是透明状态
        THINGX.DigitalTwin.addOpacity('.Floor', '半透明', 0.5, 1);

        //示例3. 将楼层不透明 接示例2 由于权重没有示例2大, 此时楼层还是半透明
        THINGX.DigitalTwin.addOpacity('.Floor', '不透明', 1, 0);
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
* 类型:`Array.<THING.BaseObject>`
* 示例
    ```javascript

        //从孪生体透明栈中移除指定目的的透明度

        //示例1. 移除楼层及楼层子元素透明状态, 此时楼层是半透明状态
        THINGX.DigitalTwin.removeOpacity('.Floor', '透明', 0, 0, true);

        //示例2. 移除楼层半透明状态
        THINGX.DigitalTwin.removeOpacity('.Floor', '半透明', 0.5, 1);

        //示例3. 移除楼层不透明, 此时楼层透明度恢复默认
        THINGX.DigitalTwin.removeOpacity('.Floor', '不透明', 1, 0);
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.showPanel
> 显示孪生体面板, THINGX.DigitalTwin.showPanel(DigitalTwin):void 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |      
* 类型:`void`
* 示例
    ```javascript

        //显示孪生体面板 （孪生体在应用系统中被选中只有单选，无同时选择多个孪生体能力，故在孪生体面板显示时，仅支持单孪生体操作）
        //参数 it's not support for DigitalTwin set
        //参数 it's not support thingjs query syntax expression for DigitalTwin

        //示例. 显示烟感的孪生体面板
        const twin = THING.App.current.query('#烟感')[0];
        if (twin) {
            THINGX.DigitalTwin.showPanel(twin);
        }

    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.hidePanel
> 隐藏孪生体面板, THINGX.DigitalTwin.hidePanel(DigitalTwin):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |  
* 类型:`void`
* 示例
    ```javascript

        //隐藏孪生体面板 （孪生体在应用系统中被选中只有单选，无同时选择多个孪生体能力，故在孪生体面板显示时，仅支持单孪生体操作）
        //参数 it's not support for DigitalTwin set
        //参数 it's not support thingjs query syntax expression for DigitalTwin

        //示例. 隐藏烟感的孪生体面板
        const twin = THING.App.current.query('#烟感').objects[0];
        if (twin) {
            THINGX.DigitalTwin.hidePanel(twin);
        }
    ```
    ***   

### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.activateTabOnPanel
> 激活当前孪生体面板上(指定)的tab页签(只在弹窗模式下生效, 且面板为显示状态), THINGX.DigitalTwin.activateTabOnPanel(name):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 孪生体面板页签定义名称 |  
* 类型:void
* 示例
    ```javascript

        //激活当前孪生体面板上(指定)的tab页签

        //示例1. 激活 `基础信息` 页签
        THINGX.DigitalTwin.activateTabOnPanel("基础信息");

        //示例2. 激活 `告警信息` 页签, 此时由基础信息切换到告警信息页签
        THINGX.DigitalTwin.activateTabOnPanel("告警信息");
    ```
    ***   
### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabOnPanel
> 获取当前在孪生体面板上激活的tab页签名称(只在弹窗模式下生效) , THINGX.DigitalTwin.getActivatedTabOnPanel():string
* 类型:`string`
* 示例
    ```javascript

        //获取当前在孪生体面板上激活的tab页签名称

        //示例. 获取当前在孪生体面板上激活的tab页签名称
        const name = THINGX.DigitalTwin.getActivatedTabOnPanel();
        console.warn("当前在孪生体面板上激活的tab页签名称为: %s", name);
        //print result:当前在孪生体面板上激活的tab页签名称为: 告警信息
    ```
    ***   
### *<a><font color="grey">Method</font></a>*  THINGX.DigitalTwin.getActivatedTabIndexOnPanel
> 获取当前在孪生体面板上激活的tab页签索引 , THINGX.DigitalTwin.getActivatedTabIndexOnPanel():number
* 类型:`number`
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
  |DigitalTwin|THING.BaseObject~~或string~~|是| - | 孪生体对象</br> <input  type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |    
  |isRecursive|boolean|否| false | 是否遍历子集 |  
* 类型:`number`
* 示例
    ```javascript

        //计算孪生体到摄像机的距离 （米）

        //示例. 计算选中的孪生体到摄像机的距离
        const dtwin = THING.App.current.selection.objects[0];
        if (dtwin) {
            const distance = THINGX.DigitalTwin.getDistanceToCamera(dtwin);
            console.warn("选中的孪生体到摄像机的距离为: %s", distance);
            //print result:选中的孪生体到摄像机的距离为: 3.404914526788503
        }
    ```
    ***   

!> 孪生体操作相关 支持   
**质量保证:** `张迪`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  