<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [普通监控模块操作相关(THINGX.NormalMonitor)](#普通监控模块操作相关thingxnormalmonitor)

<!-- /code_chunk_output -->

> 一般性解释
```javascript


    - 监控(术语的解释)
        - 对真实场景中设备实时监控，并可视化展示监控结果。通过与其他监控系统的对接，将监控数据在三维场景中以标记、面板、图表等形式进行展示。 
    - 监控分类(普通监控、事件监控)
        - 普通监控(NormalMonitor)
        - 事件监控(EventMonitor)

```



### 普通监控模块操作相关(THINGX.NormalMonitor)
> THINGX.NormalMonitor:namespace
```javascript

    //普通监控模块

    THINGX.NormalMonitor
    THINGX.EventMonitor

    // THINGX.NormalMonitor 解构
    THINGX.NormalMonitor:namespace
        Members
        // - 无
        Methods
            - add(digitalTwin, monitorName, monitorKeys [, purpose], config):Array.<THING.BaseObject>
                        //将孪生体添加到监控中，当监控中有孪生体，自动开启并请求后台接口
            - remove(digitalTwin [, purpose]):Array.<THING.BaseObject>          
                        //将孪生体从监控中移除，当监控中没有孪生体，自动关闭
            - isInMonitorSet(digitalTwin [, type]):boolean  //孪生体是否在监控集合中
            - setRequestInterval(time):void                  //设置监控接口请求间隔时间 （间隔时间，单位秒）
            - setRequestTimeout(time):void                  //设置监控接口请求超时时间
            - refresh( [ids])


```


1. 有一个 监控容器  ，向容器中添加孪生体
   1. 如果容器中有孪生体，自动开始请求监控数据
   2. 请求后设置给该孪生体
2. 将孪生体移除监控中，容器内没有孪生体那么停止请求数据
   