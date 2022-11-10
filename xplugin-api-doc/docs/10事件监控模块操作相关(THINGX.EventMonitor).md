<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [普通监控模块操作相关(THINGX.NormalMonitor)](#普通监控模块操作相关thingxnormalmonitor)
    - [*#* THINGX.NormalMonitor.isActivated](#-thingxnormalmonitorisactivated)
    - [*#* THINGX.NormalMonitor.add](#-thingxnormalmonitoradd)
    - [*#* THINGX.NormalMonitor.remove](#-thingxnormalmonitorremove)
    - [*#* THINGX.NormalMonitor.isInMonitorSet](#-thingxnormalmonitorisinmonitorset)
    - [*#* THINGX.NormalMonitor.setRequestInterval](#-thingxnormalmonitorsetrequestinterval)
    - [*#* THINGX.NormalMonitor.setRequestTimeout](#-thingxnormalmonitorsetrequesttimeout)
    - [*#* THINGX.NormalMonitor.refresh](#-thingxnormalmonitorrefresh)

<!-- /code_chunk_output -->

> 一般性解释
```javascript


    - 监控(术语的解释)
        - 对真实场景中设备实时监控，并可视化展示监控结果。通过与其他监控系统的对接，将监控数据在三维场景中以标记、面板、图表等形式进行展示。 
    - 监控分类(普通监控、事件监控)
        - 普通监控(NormalMonitor)   : 孪生体指标监控,被动激活
        - 事件监控(EventMonitor)    : 孪生体事件监控

```



### 普通监控模块操作相关(THINGX.NormalMonitor)
> THINGX.NormalMonitor:namespace
```javascript

    //普通监控模块

    // THINGX.NormalMonitor 解构
    THINGX.Monitor:namespace
        Members
        // - 无
        Methods
            - add(digitalTwin [, purpose:string] ):Array.<THING.BaseObject>
                        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口
            - remove(digitalTwin [, purpose]):Array.<THING.BaseObject>          
                        //将孪生体从监控中移除，当监控中没有孪生体，监控关闭
            - isActivated():boolean
                        //监控是否激活( 有一个监控开启（激活） 即为 true)                
            - isInMonitorSet(digitalTwin):boolean  
                        //孪生体是否在监控集合中
            - setRequestInterval(time:number):void                  
                        //设置监控接口请求间隔时间 （间隔时间，单位秒）
            - setRequestTimeout(time:number):void                  
                        //设置监控接口请求超时时间
            - refresh( [ids]:Array.<string> | string):void
                        //立即通过接口向后端请求监控数据
            // - setRequestInterface(callback):void   //////???????????????????/TODOOOOOOOOOOOOO
        //                 //替换系统中默认的监控接口
        
        // Type Definitions
        //     CallbackMonitorData

```

##### *<a href="#">#</a>* THINGX.NormalMonitor.isActivated
> 监控是否激活（开启）, THINGX.Business.isActivated():boolean
 
* 类型: boolean
* 示例
    ```javascript

        // 监控是否激活（开启）

        //示例. 获取 孪生体指标监控状态
        const result = THINGX.NormalMonitor.isActivated();
        console.warn("监控启用状态: %s", result);
        //print result: 监控启用状态: true

    ```
    ***


##### *<a href="#">#</a>* THINGX.NormalMonitor.add
> 将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口, THINGX.Business.add(digitalTwin [, purpose]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 监控目的 |     
* 类型: void
* 示例
    ```javascript

        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口

        //示例1. 给建筑 `B23A` 添加监控
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        THINGX.NormalMonitor.add(building);
        //即普通监控模块 会自动开启监控进行数据请求

        //示例2. 给所有建筑添加监控,使用 thingjs query syntax expression  （监控目的：园区巡游）
        const buildings = THING.App.current.query('.building')[0];//THING.BaseObject
        THINGX.NormalMonitor.add(buildings, "园区巡游");
        //即普通监控模块 会自动开启监控进行数据请求

    ```
    ***


##### *<a href="#">#</a>* THINGX.NormalMonitor.remove
> 将孪生体从监控中移除，当监控中没有孪生体，自动关闭监控,remove(digitalTwin [, purpose]):Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" checked> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 监控目的 |     
* 类型: void
* 示例
    ```javascript

        //将孪生体从监控中移除，当监控中没有孪生体，自动关闭监控

        //示例1. 移除建筑 `B23A` 监控
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        THINGX.NormalMonitor.remove(building);
        //即普通监控模块移除后，当监控中没有孪生体，自动关闭监控


        //示例2. 移除所有建筑监控,使用 thingjs query syntax expression  （监控目的：园区巡游）
        const buildings = THING.App.current.query('.building')[0];//THING.BaseObject
        THINGX.NormalMonitor.remove(buildings, "园区巡游");
        //即普通监控模块移除后，当监控中没有孪生体，自动关闭监控

    ```
    ***

##### *<a href="#">#</a>* THINGX.NormalMonitor.isInMonitorSet
> 孪生体是否在监控集合中, THINGX.Business.isInMonitorSet(digitalTwin):boolean

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS语法表达式/不支持孪生体集合</br> <input type="checkbox"> support thingjs query syntax expression for DigitalTwin |   
* 类型: boolean
* 示例
    ```javascript

        //孪生体是否在监控集合中
        // （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 检查建筑 `B23A` 是否处于监控中
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        const result = THINGX.NormalMonitor.isInMonitorSet(building);
        console.warn("建筑 `B23A` 是否处于监控中: %s", result );
        //print result: 建筑 `B23A` 是否处于监控中: true

    ```
    ***


##### *<a href="#">#</a>* THINGX.NormalMonitor.setRequestInterval
> 设置监控接口请求间隔时间 （间隔时间，单位秒）, THINGX.Business.setRequestInterval(time:number):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |time|number|是| - | 间隔时间, 单位秒 |   
* 类型: void
* 示例
    ```javascript

        //设置监控接口请求间隔时间 （间隔时间，单位秒） 默认请求间隔时间 TODO补充

        //示例. 设置 普通监控 接口请求间隔时间 为 20秒
        THINGX.NormalMonitor.setRequestInterval(20);
  
    ```
    ***



##### *<a href="#">#</a>* THINGX.NormalMonitor.setRequestTimeout
> 设置监控接口请求超时时间 （间隔时间，单位秒）, THINGX.Business.setRequestTimeout(time:number):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |time|number|是| - | 间隔时间, 单位秒 |   
* 类型: void
* 示例
    ```javascript

        // 设置监控接口请求超时时间 （间隔时间，单位秒） 默认超时 TODO补充

        //示例. 设置 普通监控 接口请求超时时间 为 60秒 
        THINGX.NormalMonitor.setRequestTimeout(60);
  
    ```
    ***

##### *<a href="#">#</a>* THINGX.NormalMonitor.refresh
> 立即通过接口向后端请求监控数据, THINGX.Business.refresh( [ids]:Array.<string> | string):void

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |ids|Array.<string> 或 string|是| - | 孪生体属性中的 _DBID_ 默认对所有孪生体监控进行请求 |   
* 类型: void
* 示例
    ```javascript

        // 立即通过接口向后端请求监控数据

        //示例. 给建筑 `B23A` 添加监控后, 立即通过接口向后端请求监控数据
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        THINGX.NormalMonitor.add(building);
        THINGX.NormalMonitor.refresh(building._DBID_);
  
    ```
    ***