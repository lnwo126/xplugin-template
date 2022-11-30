<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Namespace* 解构(THINGX.Marker)](#namespace-解构thingxmarker)
- [*Method* THINGX.Marker.add](#method-thingxmarkeradd)
- [*Method* THINGX.Marker.remove](#method-thingxmarkerremove)
- [*Method* THINGX.Marker.show](#method-thingxmarkershow)
- [*Method* THINGX.Marker.hide](#method-thingxmarkerhide)
- [*Method* THINGX.Marker.get](#method-thingxmarkerget)
- [*Method* THINGX.Marker.getPreloadName](#method-thingxmarkergetpreloadname)
- [*Method* THINGX.Marker.getAll](#method-thingxmarkergetall)
- [*Method* THINGX.Marker.getConfig](#method-thingxmarkergetconfig)

<!-- /code_chunk_output -->


### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.Marker)
> THINGX.Marker:namespace
```javascript
    //应用系统针对系统标记模块的相关操作能力

    //THING.BaseObject 相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.Marker 解构
    THINGX.Marker:namespace //support thingjs query syntax expression
        - add(digitalTwin:THING.BaseObject , name:string ):Array.<THING.BaseObject> //增加标记，增加后立即显示
        - remove(digitalTwin:THING.BaseObject, name:string ):boolean                                //移除标记
        - show(digitalTwin:THING.BaseObject, name:string  [, purpose]):Array.<THING.BaseObject>     //显示标记
        - hide(digitalTwin:THING.BaseObject, name:string  [, purpose]):Array.<THING.BaseObject>     //隐藏标记
        - get(digitalTwin:THING.BaseObject, name:string ):THING.BaseObject   （*）//获取已创建的标记 （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）
        - getPreloadName(digitalTwin:THING.BaseObject):THING.BaseObject      （*）//获取孪生体预加载的标记名称 （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）
        - getAll(digitalTwin:THING.BaseObject):Map.<string, THING.BaseObject>（*）//获取孪生体上所有的标记（不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）
        - getConfig(digitalTwin:THING.BaseObject):Map.<string, Object>       （*）//获取孪生体标记配置数据（不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

```

### *<a><font color="grey">Method</font></a>* THINGX.Marker.add
> 给孪生体添加标记, THINGX.Marker.add(digitalTwin:THING.BaseObject[, name:string] ):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |name|string|是| - | 标记名称 </br>可通过THINGX.Marker.getConfig获取孪生体上配置了哪些标记|    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //给孪生体添加标记

        //示例1. 给建筑添加显示名称 `政府-右侧标题-安德` 的标记
        const building = THING.App.current.query('#政府大楼')[0];//THING.BaseObject
        THINGX.Marker.add(building,"政府-右侧标题-安德");
        
        //示例2. 给所有名称为建筑的孪生体添加显示名称 '政府-右侧标题-安德' 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        THINGX.Marker.add("[name=建筑]","政府-右侧标题-安德");

    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Marker.remove
> 移除孪生体标记, THINGX.Marker.remove(digitalTwin:THING.BaseObject, name:string ):boolean 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |name|string|是| - | 标记名称 </br>可通过THINGX.Marker.getConfig获取孪生体上配置了哪些标记|
  
* 类型: boolean
* 示例
    ```javascript

        //移除孪生体标记

        //示例1. 移除建筑添上名称为 `政府-右侧标题-安德` 的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const result = THINGX.Marker.remove(building,"政府-右侧标题-安德");
        console.warn("建筑上政府-右侧标题-安德的标记移除完成: %s", result);
         //print result: 建筑上政府-右侧标题-安德的标记移除完成: true
        
        //示例2. 给所有名称为建筑的孪生体移除 `政府-右侧标题-安德` 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        const result = THINGX.Marker.remove("[name=建筑]","政府-右侧标题-安德");
        console.warn("名称为建筑的孪生体 `政府-右侧标题-安德` 的标记移除完成: %s", result);
        //print result: 名称为建筑的孪生体 `政府-右侧标题-安德` 的标记移除完成: true

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Marker.show
> 孪生体显示标记, THINGX.Marker.show(digitalTwin:THING.BaseObject, name:string  [, purpose]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |name|string|是| - | 标记名称 </br>可通过THINGX.Marker.getConfig获取孪生体上配置了哪些标记|
  |purpose|string|-| default | 显示目的 |
    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //孪生体显示标记

        //示例1. 显示建筑添上名称为 `顶部标题-建筑` 的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        THINGX.Marker.show(building,"顶部标题-建筑");  
        
        //示例2. 给所有名称为建筑的孪生体显示 `顶部标题-建筑` 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        THINGX.Marker.show("[name=建筑]","顶部标题-建筑");

        //示例3. 使用`智慧安防`业务下 给所有名称为路灯的孪生体显示 `顶部标题-路灯` 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        THINGX.Marker.show("[name=路灯]","顶部标题-路灯","智慧安防");

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Marker.hide
> 孪生体隐藏标记, THINGX.Marker.hide(digitalTwin:THING.BaseObject, name:string  [, purpose]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" disabled checked> support thingjs query syntax expression for DigitalTwin |   
  |name|string|是| - | 标记名称 </br>可通过THINGX.Marker.getConfig获取孪生体上配置了哪些标记|
  |purpose|string|-| default | 显示隐藏的目的 |
    
* 类型: Array.<THING.BaseObject>
* 示例
    ```javascript

        //孪生体隐藏标记 ,一般与 THINGX.Marker.show成对使用

        //示例1. 隐藏建筑上名称为 `顶部标题-建筑` 的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        THINGX.Marker.hide(building,"顶部标题-建筑"); 
        
        //示例2. 给所有名称为建筑的孪生体隐藏 `顶部标题-建筑` 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        THINGX.Marker.hide("[name=建筑]","顶部标题-建筑");

        //示例3. 使用`智慧安防`业务下 给所有名称为路灯的孪生体隐藏 `顶部标题-路灯` 的标记，使用 thingjs query syntax expression 
        //support thingjs query syntax expression for DigitalTwin
        THINGX.Marker.hide("[name=路灯]","顶部标题-路灯","智慧安防");

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Marker.get
> 获取孪生体指定名称的标记, THINGX.Marker.get(digitalTwin:THING.BaseObject, name:string ):THING.BaseObject

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS查询语法/不支持孪生体集合</br> <input type="checkbox" disabled> support thingjs query syntax expression for DigitalTwin |   
  |name|string|是| - | 标记名称 </br>可通过THINGX.Marker.getConfig获取孪生体上配置了哪些标记|
    
* 类型: THING.BaseObject
* 示例
    ```javascript

        //获取孪生体指定名称的标记
        //（不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 获取建筑上名称为 `顶部标题-建筑` 的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const buildingMakerInstance = THINGX.Marker.get(building,"顶部标题-建筑");
        console.warn("`顶部标题-建筑` 标记实例: ", buildingMakerInstance);
        // print result: 顶部标题-建筑` 标记实例: THING.BaseObject
 
    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Marker.getPreloadName
> 获取孪生体预加载标记的名称, THINGX.Marker.getPreloadName(digitalTwin:THING.BaseObjec):THING.BaseObject

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS查询语法/不支持孪生体集合</br> <input type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |   
    
* 类型: THING.BaseObject
* 示例
    ```javascript

        //获取孪生体预加载的标记
        //（不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 获取建筑上预加载的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const buildingMakerName = THINGX.Marker.getPreloadName(building);
        console.warn("建筑上预加载标记的名称: ", buildingMakerName);
        // print result: 建筑上预加载的标记实例: THING.BaseObject
 
    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Marker.getAll
> 获取孪生体上所有的标记, THINGX.Marker.getAll(digitalTwin:THING.BaseObject):Map.<string, THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS查询语法/不支持孪生体集合</br> <input type="checkbox" disabled> support thingjs query syntax expression for DigitalTwin |   s
    
* 类型: THING.BaseObject
* 示例
    ```javascript

        //获取孪生体上所有的标记
        // （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 获取建筑上的所有创建的标记
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const buildingMakersInstance = THINGX.Marker.getAll(building);
        console.warn("建筑上的所有创建的标记实例: ", buildingMakersInstance);
        // print result: 建筑上的所有创建的标记实例: Map<string,THING.BaseObject>
 
    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.Marker.getConfig
> 获取孪生体标记配置数据, THINGX.Marker.getConfig(digitalTwin:THING.BaseObject):Map.<string, Object>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS查询语法/不支持孪生体集合</br> <input type="checkbox" disabled > support thingjs query syntax expression for DigitalTwin |   s
    
* 类型: THING.BaseObject
* 示例
    ```javascript

        //获取孪生体标记配置数据
        // （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 获取建筑上的标记配置数据
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const config = THINGX.Marker.getConfig(building);
        console.warn("获取建筑上的标记配置数据: ", config);
        // print result: 获取建筑上的标记配置数据: Map<string,Object>
 
    ```
    ***

!> 标记模块操作相关 支持   
**质量保证:** `武帅龙`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  
