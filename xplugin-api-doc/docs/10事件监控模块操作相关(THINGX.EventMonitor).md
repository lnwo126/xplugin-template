<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [事件监控模块操作相关(THINGX.EventMonitor)](#事件监控模块操作相关thingxeventmonitor)

<!-- /code_chunk_output -->

> 一般性解释
```javascript


    - 监控(术语的解释)
        - 对真实场景中设备实时监控，并可视化展示监控结果。通过与其他监控系统的对接，将监控数据在三维场景中以标记、面板、图表等形式进行展示。 
    - 监控分类(普通监控、事件监控)
        - 普通监控(NormalMonitor)   : 孪生体指标监控,被动激活
        - 事件监控(EventMonitor)    : 孪生体事件监控

```



### 事件监控模块操作相关(THINGX.EventMonitor)
> THINGX.EventMonitor:namespace
```javascript

    //事件监控模块

    // THINGX.EventMonitor 解构
    THINGX.EventMonitor:namespace
        Members
        // - 无
        Methods
            - isActivated():boolean
                        //监控是否激活
            - add(digitalTwin [, purpose]):Array.<THING.BaseObject>
                        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口
            - remove(digitalTwin [, purpose]):Array.<THING.BaseObject>          
                        //将孪生体从监控中移除，当监控中没有孪生体，自动关闭
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


TODO  到底是否需要 事件监控管理器 ，指标推送后即可由EventMonitor触发，无需要进行数据监控指标请求