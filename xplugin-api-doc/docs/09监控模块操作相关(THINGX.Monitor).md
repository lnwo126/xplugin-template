<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [监控模块操作相关(THINGX.Monitor)](#监控模块操作相关thingxmonitor)
    - [*<a href="#">#</a>* THINGX.Monitor.isActivated](#-thingxmonitorisactivated)
    - [*<a href="#">#</a>* THINGX.Monitor.add](#-thingxmonitoradd)
    - [*<a href="#">#</a>* THINGX.Monitor.remove](#-thingxmonitorremove)
    - [*<a href="#">#</a>* THINGX.Monitor.isInMonitorSet](#-thingxmonitorisinmonitorset)
    - [*<a href="#">#</a>* THINGX.Monitor.setRequestInterval](#-thingxmonitorsetrequestinterval)
    - [*<a href="#">#</a>* THINGX.Monitor.setRequestTimeout](#-thingxmonitorsetrequesttimeout)
    - [*<a href="#">#</a>* THINGX.Monitor.refresh](#-thingxmonitorrefresh)
    - [*<a href="#">#</a>* THINGX.Monitor.setRequestInterface](#-thingxmonitorsetrequestinterface)

<!-- /code_chunk_output -->

> 监控模块与应用系统各模块关系逻辑图

![监控模块与应用系统各模块关系逻辑图-1](09.%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97%E4%B8%8E%E5%BA%94%E7%94%A8%E7%B3%BB%E7%BB%9F%E5%90%84%E6%A8%A1%E5%9D%97%E5%85%B3%E7%B3%BB%E9%80%BB%E8%BE%91%E5%9B%BE-1.png)


> 一般性解释
```javascript


    - 监控(术语的解释)
        - 对真实场景中设备实时监控，并可视化展示监控结果。通过与其他监控系统的对接，将监控数据在三维场景中以标记、面板、图表等形式进行展示。 
    - 监控分类(孪生体监控指标、孪生体监控事件)
        - 监控指标数据(MetricsData)   : 孪生体指标监控数据,被动激活,当孪生体被添加监控管理器内即开始按照一定的条件进行监控指标数据的请求获取,获取后的监控数据会置入孪生体集合对象中,用于标记、面板、图表等监控数据的获取。
        - 孪生体监控事件(MetricsEvent)    : 对孪生体事件条件进行进行监控触发，其中条件包括不限于 `<`、`<=`、`=`、`>`、`>=`
    
    - 注意点(对于满足条件的孪生体监控事件在未发生条件改变的时候，仅会触发一次，不推荐在触发操作集中进行指标数据计算)
        - 1. 孪生体监控事件 : 
                MONITOR/_/_/状态/value=绿色 触发操作集 `建筑变绿`
                MONITOR/_/_/状态/value=红色 触发操作集 `建筑变红`
                当指标变化切换时触发操作集
        - 2. 孪生体监控事件 : MONITOR/_/_/温度/value>700  触发操作集 `起风了`
                对于监控指标值 800 900 1000 等都大于700,仅在第一次满足条件时触发操作集 `起风了` ,仅会触发一次,当指标值发生变化且值大于700 则不会再触发操作集                
    - 与之关联的模块(关系)
        - 孪生体集合模块
        - 操作集模块
```



### 监控模块操作相关(THINGX.Monitor)
> THINGX.Monitor:namespace
```javascript

    //普通监控模块

    // THINGX.Monitor 解构
    THINGX.Monitor:namespace
        Members
        // - 无
        Methods
            - add(digitalTwin [, purpose:string] ):Array.<THING.BaseObject>
                        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口
            - remove(digitalTwin [, purpose]):Array.<THING.BaseObject>          
                        //将孪生体从监控中移除，当监控中没有孪生体，监控关闭
            - isActivated():boolean
                        //监控是否激活               
            - isInMonitorSet(digitalTwin):boolean  
                        //孪生体是否在监控集合中
            - setRequestInterval(time:number):void                  
                        //设置监控接口请求间隔时间 （间隔时间，单位秒）
            - setRequestTimeout(time:number):void                  
                        //设置监控接口请求超时时间
            - refresh( [ids]:Array.<string> | string):void
                        //立即通过接口向后端请求监控数据
            - setRequestInterface(func:MonitorInjectCallback):void 
                        //替换系统中默认的监控接口
        
        Type Definitions
            MonitorInjectCallback(param, config)      //监控回调
                - param:object                          //监控查询参数{ciIds:[]}
                    - ciIds:Array.<string>                  //孪生体id集合
                - config:object                         //请求配置项
                    - timeout:number                        //请求配置项{timeout:5000}  default value 5000
            InterfaceData       //监控接口返回数据格式
                - code:	number                      //接口返回状态码
                - data: Object                      //监控数据
                - success:boolean                   //接口状态


    Example(指标数据格式 MONITOR/_/_/指标)    
        
        {
            "code": -1,
            "data": {
                "913456225609343": { //孪生体ID
                    "_": {
                        "_": {//指标
                            "工作电压": {
                                "value": "12.8",
                                "unit": ""
                            }
                        }
                    }
                }
            },
            "success": true
        }

```

##### *<a href="#">#</a>* THINGX.Monitor.isActivated
> 监控是否激活（开启）, THINGX.Monitor.isActivated():boolean
 
* 类型: boolean
* 示例
    ```javascript

        // 监控是否激活（开启）

        //示例. 获取 孪生体指标监控状态
        const result = THINGX.Monitor.isActivated();
        console.warn("监控启用状态: %s", result);
        //print result: 监控启用状态: true

    ```
    ***


##### *<a href="#">#</a>* THINGX.Monitor.add
> 将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口, THINGX.Monitor.add(digitalTwin [, purpose]):Array.<THING.BaseObject>

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" checked disabled> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 监控目的 |     
* 类型: void
* 示例
    ```javascript

        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口
        // 将孪生体添加进监控系统

        //示例1. 给建筑 `B23A` 添加监控
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        THINGX.Monitor.add(building);
        //即普通监控模块 会自动开启监控进行数据请求

        //示例2. 给所有建筑添加监控,使用 thingjs query syntax expression  （监控目的：园区巡游）
        THINGX.Monitor.add('.Building', "园区巡游");
        //即普通监控模块 会自动开启监控进行数据请求

    ```
    ***


##### *<a href="#">#</a>* THINGX.Monitor.remove
> 将孪生体从监控中移除，当监控中没有孪生体，自动关闭监控,remove(digitalTwin [, purpose]):Array.<THING.BaseObject> 

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject或string|是| - | 孪生体对象/ThingJS查询语法</br> <input type="checkbox" checked disabled> support thingjs query syntax expression for DigitalTwin |   
  |purpose|string|否| default | 监控目的 |     
* 类型: void
* 示例
    ```javascript

        //将孪生体从监控中移除，当监控中没有孪生体，自动关闭监控

        //示例1. 移除建筑 `B23A` 监控
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        THINGX.Monitor.remove(building);
        //即普通监控模块移除后，当监控中没有孪生体，自动关闭监控


        //示例2. 移除所有建筑监控,使用 thingjs query syntax expression  （监控目的：园区巡游）
        THINGX.Monitor.remove('.Building', "园区巡游");
        //即普通监控模块移除后，当监控中没有孪生体，自动关闭监控

    ```
    ***

##### *<a href="#">#</a>* THINGX.Monitor.isInMonitorSet
> 孪生体是否在监控集合中, THINGX.Monitor.isInMonitorSet(digitalTwin):boolean

* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |DigitalTwin|THING.BaseObject|是| - | 孪生体对象/不支持ThingJS语法表达式/不支持孪生体集合</br> <input type="checkbox" disabled> support thingjs query syntax expression for DigitalTwin |   
* 类型: boolean
* 示例
    ```javascript

        //孪生体是否在监控集合中
        // （不支持孪生体集合 & it's not support thingjs query syntax expression for DigitalTwin）

        //示例1. 检查建筑 `B23A` 是否处于监控中
        const building = THING.App.current.query('#B23A')[0];//THING.BaseObject
        const result = THINGX.Monitor.isInMonitorSet(building);
        console.warn("建筑 `B23A` 是否处于监控中: %s", result );
        //print result: 建筑 `B23A` 是否处于监控中: true

    ```
    ***


##### *<a href="#">#</a>* THINGX.Monitor.setRequestInterval
> 设置监控接口请求间隔时间 （间隔时间，单位秒）, THINGX.Monitor.setRequestInterval(time:number):void

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
        THINGX.Monitor.setRequestInterval(20);
  
    ```
    ***



##### *<a href="#">#</a>* THINGX.Monitor.setRequestTimeout
> 设置监控接口请求超时时间 （间隔时间，单位秒）, THINGX.Monitor.setRequestTimeout(time:number):void

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
        THINGX.Monitor.setRequestTimeout(60);
  
    ```
    ***

##### *<a href="#">#</a>* THINGX.Monitor.refresh
> 立即通过接口向后端请求监控数据, THINGX.Monitor.refresh( [ids]:Array.<string> | string):void

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
        THINGX.Monitor.add(building);
        THINGX.Monitor.refresh(building.userData._DBID_);
  
    ```
    ***


##### *<a href="#">#</a>* THINGX.Monitor.setRequestInterface
> 替换系统默认告警接口 , THINGX.Monitor.setRequestInterface(func):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |func|THINGX.Monitor.MonitorInjectCallback|-| - | 监控回调 |    

* 类型: void
* 示例
    ```javascript

        // 替换系统默认告警接口  

        //示例1. 替换系统默认告警接口
        // THINGX.Monitor.MonitorInjectCallback
        //          param :  Object
        //          config : Object
        THINGX.Monitor.setRequestInterface((param,config)=>{
            
            //自定义逻辑
            //返回  THINGX.Monitor.InterfaceData

            return THINGX.Monitor.InterfaceData;
        })

    ```
    ***

