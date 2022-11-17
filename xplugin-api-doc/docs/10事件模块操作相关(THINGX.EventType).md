<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [ThingJS-X API 事件列表(48+1个)](#thingjs-x-api-事件列表481个)
    - [*<a><font color="grey">Event</font></a>* 告警事件 THING.EventType.XAlarm](#font-colorgreyeventfont-告警事件-thingeventtypexalarm)
    - [*<a><font color="grey">Event</font></a>* 监控事件 THING.EventType.XMonitor](#font-colorgreyeventfont-监控事件-thingeventtypexmonitor)
    - [*<a><font color="grey">Event</font></a>* 标记事件 THING.EventType.XMarker](#font-colorgreyeventfont-标记事件-thingeventtypexmarker)
    - [*<a><font color="grey">Event</font></a>* 孪生体事件 THING.EventType.XDigitalTwin](#font-colorgreyeventfont-孪生体事件-thingeventtypexdigitaltwin)
    - [*<a><font color="grey">Event</font></a>* 系统加载完成事件 THING.EventType.XLoad](#font-colorgreyeventfont-系统加载完成事件-thingeventtypexload)
    - [*<a><font color="grey">Event</font></a>* 系统层级事件 THING.EventType.XLevel](#font-colorgreyeventfont-系统层级事件-thingeventtypexlevel)
    - [*<a><font color="grey">Event</font></a>* 业务事件 THING.EventType.XBusiness](#font-colorgreyeventfont-业务事件-thingeventtypexbusiness)
    - [*<a><font color="grey">Event</font></a>* 图层事件 THING.EventType.XLayer](#font-colorgreyeventfont-图层事件-thingeventtypexlayer)
    - [*<a><font color="grey">Event</font></a>* 场景控制事件 THING.EventType.XSceneControl](#font-colorgreyeventfont-场景控制事件-thingeventtypexscenecontrol)

<!-- /code_chunk_output -->
# ThingJS-X API 事件列表(48+1个)

```javascript
    // 命名空间下非官方指定命名函数有弃用函数,不推荐使用,未来在ThingJS-X Api V4.3版本中移除
    //ThingJS-X API 命名空间为 THINGX
```

### *<a><font color="grey">Event</font></a>* 告警事件 THING.EventType.XAlarm 

```javascript

    - 正式
        - XAlarm                                (- BaseObject监听)//孪生体告警数据变化
        - XAlarmRemove                          (- BaseObject监听)//移除告警
        - XAlarmDataRequest                     (- app监听)       //告警数据更新，每次请求完成后触发
        - XAlarmChangeUnderCurrentSceneLevel    (- app监听)       //告警在当前场景层级下变化，层级切换，告警数据变化触发
        - XAlarmActivate                        (- app监听)       //激活告警
        - XAlarmDeactivate                      (- app监听)       //取消告警
    - 提案
        - XAlarmEffectActivate                  (- app监听)()    //提案:激活告警效果
        - XAlarmEffectDeactivate                (- app监听)()    //提案:取消告警效果
        - XAlarmSoundActivate                   (- app监听)()    //提案:激活告警声音
        - XAlarmSoundDeactivate                 (- app监听)()    //提案:取消告警声音
```

?> XAlarm (孪生体告警数据变化) 
```javascript

    //监听  BaseObject
    
    // 示例1. 园区告警数据发生变化
    const campus = THING.App.current.query('.Campus')[0];
    campus.on(THINGX.EventType.XAlarm, (ev) => {
        console.warn('XAlarm', '发生告警', ev);
        //print : XAlarm ev 
    });

    // 示例2. TODO

```
?>  XAlarmRemove (移除告警) 
```javascript

    //监听  BaseObject
    
    // 示例1. 园区告警移除
    const campus = THING.App.current.query('.Campus')[0];
    campus.on(THINGX.EventType.XAlarmRemove, (ev) => {
        console.warn('XAlarmRemove', '移除告警', ev);
    });

    // 示例2. TODO

```

?>  XAlarmDataRequest (告警数据更新，每次请求完成后触发) 
```javascript

    //监听  app
    
    // 示例. 告警数据更新，每次请求完成后触发
    THING.App.current.on(THINGX.EventType.XAlarmDataRequest, (ev) => {
        console.warn('XAlarmDataRequest', '请求到告警数据', ev.dbAlarmResult);
        console.warn('XAlarmDataRequest', '请求到告警数据(原始告警数据)', ev.originData);
    });



```

         
?>  XAlarmChangeUnderCurrentSceneLevel (告警在当前场景层级下变化，层级切换，告警数据变化触发) 
```javascript

    //监听  app
    
    // 示例. 告警在场景层级下变化
    THING.App.current.on(THINGX.EventType.XAlarmChangeUnderCurrentSceneLevel, (ev) => {
        console.warn('XAlarmChangeUnderCurrentSceneLevel', '告警在场景层级下变化', ev);
    });

```


      
?>  XAlarmActivate (激活告警) 
```javascript

    //监听  app
    
    // 示例. 激活告警
    THING.App.current.on(THINGX.EventType.XAlarmActivate, (ev) => {
        console.warn('XAlarmActivate', '激活告警', ev);
        console.warn('XAlarmActivate', '激活告警系统最后一次操作的目的', ev.purpose);
    });

```

      
?>  XAlarmDeactivate (取消告警) 
```javascript

    //监听  app
    
    // 示例. 取消告警
    THING.App.current.on(THINGX.EventType.XAlarmDeactivate, (ev) => {
        console.warn('XAlarmDeactivate', '取消告警', ev);
        console.warn('XAlarmDeactivate', '取消告警系统最后一次操作的目的', ev.purpose);
    });

```




### *<a><font color="grey">Event</font></a>* 监控事件 THING.EventType.XMonitor 

```javascript

    - 正式
        - XMonitor                              (- BaseObject监听)  //孪生体监控数据改变事件
        - XMonitorActivate                      (- app监听)         //监控激活事件,当存在需要监控的孪生体后会自动开启监控并触发该事件
        - XMonitorDeactivate                    (- app监听)         //取消监控事件,当没有需要监控的孪生体后会自动关闭监控并触发该事件
        - XMonitorDataRequest                   (- app监听)         //监控数据更新,请求完成事件

```


?>  XMonitor (孪生体监控数据改变事件) 
```javascript

    //监听 BaseObject
    
    // 示例1. 孪生体监控数据改变事件
    THING.App.current.level.current.on(THINGX.EventType.XMonitor, (ev) => {
        console.warn('XMonitor', '监控变化', ev);
        console.warn('XMonitor', '旧的监控数据', ev.oldData);
        console.warn('XMonitor', '新的监控数据', ev.newData);
    });

```

?>  XMonitorActivate (监控激活事件,当存在需要监控的孪生体后会自动开启监控并触发该事件) 
```javascript

    //监听  app
    
    // 示例1. 监控激活事件
    THING.App.current.on(THINGX.EventType.XMonitorActivate, (ev) => {
        console.warn('XMonitorActivate', '激活监控', ev);
    });

```


?>  XMonitorDeactivate (取消监控事件,当没有需要监控的孪生体后会自动关闭监控并触发该事件) 
```javascript

    //监听  app
    
    // 示例1. 取消监控事件
    THING.App.current.on(THINGX.EventType.XMonitorDeactivate, (ev) => {
        console.warn('XMonitorDeactivate', '取消激活监控', ev);
    });

```

?>  XMonitorDataRequest (监控数据更新,请求完成事件) 
```javascript

    //监听  app
    
    // 示例. 监控数据更新,请求完成事件
    THING.App.current.on(THINGX.EventType.XMonitorDataRequest, (ev) => {
        console.warn('XMonitorDataRequest', '请求监控数据', ev);
    });


```


### *<a><font color="grey">Event</font></a>* 标记事件 THING.EventType.XMarker 

```javascript

    - 正式
        - XMarkerLoad                           (- app监听&BaseObject监听)标记加载完成事件
        - XMarkerDestroy                        (- app监听&BaseObject监听)标记销毁完成事件

```

?>  XMonitorDataRequest (标记加载完成事件) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 标记加载完成事件
    THING.App.current.on(THINGX.EventType.XMarkerLoad, (ev) => {
        console.warn('XMarkerLoad', '加载标记完成', ev);
        console.warn('XMarkerLoad marker', '标记对象', ev.marker);//THING.BaseObject	
        console.warn('XMarkerLoad object', '孪生体对象', ev.object);//THING.BaseObject	
    });

```



?>  XMarkerDestroy (标记销毁完成事件) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 标记销毁完成事件
    THING.App.current.on(THINGX.EventType.XMarkerDestroy, (ev) => {
        console.warn('XMarkerDestroy', '标记销毁完成', ev);
        console.warn('XMarkerDestroy marker', '标记对象', ev.marker);//THING.BaseObject	
        console.warn('XMarkerDestroy object', '孪生体对象', ev.object);//THING.BaseObject	
    });

```




### *<a><font color="grey">Event</font></a>* 孪生体事件 THING.EventType.XDigitalTwin 

```javascript

    - 正式
        - XDigitalTwinPanelActivate             (- app监听&BaseObject监听) //激活孪生体面板
        - XDigitalTwinPanelDeactivate           (- app监听&BaseObject监听) //取消激活孪生体面板
        - XDigitalTwinPanelTabActivate          (- app监听&BaseObject监听) //激活孪生体面板标签页(在配置为弹窗模式下生效)
        - XDigitalTwinPanelTabDeactivate        (- app监听&BaseObject监听) //取消激活孪生体面板标签页(在配置为弹窗模式下生效)

```

?>  XDigitalTwinPanelActivate (激活孪生体面板) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活孪生体面板
    THING.App.current.on(THINGX.EventType.XDigitalTwinPanelActivate, (ev) => {
        console.warn('XDigitalTwinPanelActivate', '激活孪生体面板', ev);
        console.warn('XDigitalTwinPanelActivate', '孪生体对象', ev.object);
        console.warn('XDigitalTwinPanelActivate', '面板位置信息', ev.position);
    });

```
?>  XDigitalTwinPanelDeactivate (取消激活孪生体面板) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消激活孪生体面板
    THING.App.current.on(THINGX.EventType.XDigitalTwinPanelDeactivate, (ev) => {
        console.warn('XDigitalTwinPanelDeactivate', '取消激活孪生体面板', ev);
    });

```
?>  XDigitalTwinPanelTabActivate (孪生体面板标签页(在配置为弹窗模式下生效)) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 孪生体面板标签页(在配置为弹窗模式下生效)
    THING.App.current.on(THINGX.EventType.XDigitalTwinPanelTabActivate, (ev) => {
        console.warn('XDigitalTwinPanelTabActivate', '激活孪生体面板标签页', ev);
        console.warn('XDigitalTwinPanelTabActivate', '标签页名称', ev.name);
        console.warn('XDigitalTwinPanelTabActivate', '孪生体对象', ev.object);
    });

```
?>  XDigitalTwinPanelTabDeactivate (取消激活孪生体面板标签页(在配置为弹窗模式下生效)) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 孪生体面板标签页(在配置为弹窗模式下生效)
    THING.App.current.on(THINGX.EventType.XDigitalTwinPanelTabDeactivate, (ev) => {
        console.warn('XDigitalTwinPanelTabDeactivate', '取消激活孪生体面板标签页', ev);
        console.warn('XDigitalTwinPanelTabDeactivate', '标签页名称', ev.name);
        console.warn('XDigitalTwinPanelTabDeactivate', '孪生体对象', ev.object);
    });

```



### *<a><font color="grey">Event</font></a>* 系统加载完成事件 THING.EventType.XLoad 

```javascript

    - 正式
        - XLoad             (- app监听) //系统加载完成

```
?>  XLoad (系统加载完成) 
```javascript

    //监听  app
    
    // 示例. 系统加载完成
    THING.App.current.on(THINGX.EventType.XLoad, () => { 
        console.warn('系统加载完成'); 
    });

```

### *<a><font color="grey">Event</font></a>* 系统层级事件 THING.EventType.XLevel 

```javascript

    - 正式
        - XLeaveLevelBackward                   (- app监听&BaseObject监听) //反向离开层级
        - XEnterLevelForward                    (- app监听&BaseObject监听) //正向进入层级

```

?>  XLeaveLevelBackward (反向离开层级结束) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 反向离开层级结束
    THING.App.current.on(THINGX.EventType.XLeaveLevelBackward, (ev) => {
        console.warn('XLeaveLevelBackward', '反向离开层级结束', ev); 
        //ev.current	THING.BaseObject	当前层级孪生体对象
        //ev.previous	THING.BaseObject	前一层级孪生体对象
    });



```
?>  XEnterLevelForward (正向进入层级) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 正向进入层级
    THING.App.current.on(THINGX.EventType.XEnterLevelForward, (ev) => {
        console.warn('XEnterLevelForward', '正向进入层级', ev);
        //ev.current	THING.BaseObject	当前层级孪生体对象
        //ev.previous	THING.BaseObject	前一层级孪生体对象
    });


```

### *<a><font color="grey">Event</font></a>* 业务事件 THING.EventType.XBusiness 

```javascript

    - 正式
        - XBeforeRefreshBusiness                (- app监听&BaseObject监听) //刷新业务之前
        - XBusinessRefreshed                    (- app监听&BaseObject监听) //刷新业务完成
        - XBeforeActivateBusinessItem           (- app监听&BaseObject监听) //激活业务之前
        - XBusinessItemActivated                (- app监听&BaseObject监听) //激活业务
        - XBeforeDeactivateBusinessItem         (- app监听&BaseObject监听) //取消业务之前
        - XBusinessItemDeactivated              (- app监听&BaseObject监听) //取消业务
    - 提案
        - XBusinessUIShow                       (- app监听)(*)
        - XBusinessUIHide                       (- app监听)(*)
        - XBusinessPanelShow                    (- app监听)(*)
        - XBusinessPanelHide                    (- app监听)(*)
```

?>  XBeforeRefreshBusiness (刷新业务之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 刷新业务之前
    THING.App.current.one(THINGX.EventType.XBeforeRefreshBusiness, (ev) => {
        console.warn('XBeforeRefreshBusiness', '刷新业务之前', ev); 
        //ev.currentLevel	THING.BaseObject	当前层级
        //ev.lastSpaceName	string	之前的业务空间名称
        //ev.businesses	Array.<Object>	所有业务信息
    });

```

?>  XBusinessRefreshed (刷新业务完成) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 刷新业务完成
    THING.App.current.one(THINGX.EventType.XBusinessRefreshed, (ev) => {
        console.warn('XBusinessRefreshed', '刷新业务完成', ev); 
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.lastSpaceName	string	之前的业务空间名称
        // ev.spaceName	string	业务空间名称
        // ev.businesses	Array.<Object>	所有业务信息        
    });

```


?>  XBeforeActivateBusinessItem (激活业务之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活业务之前
    THING.App.current.one(THINGX.EventType.XBeforeActivateBusinessItem, (ev) => {
        console.warn('XBeforeActivateBusinessItem', '激活业务之前', ev); 
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.spaceName	string	业务空间名称
        // ev.name	string	业务名称
        // ev.businesses	Array.<Object>	所有业务信息
    });

```


?>  XBusinessItemActivated (激活业务) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活业务
    THING.App.current.one(THINGX.EventType.XBusinessItemActivated, (ev) => {
        console.warn('XBusinessItemActivated', '激活业务', ev); 
        // ev.businesses	Array.<Object>	所有业务信息
    });

```

?>  XBeforeDeactivateBusinessItem (取消业务之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消业务之前
    THING.App.current.one(THINGX.EventType.XBeforeDeactivateBusinessItem, (ev) => {
        console.warn('XBeforeDeactivateBusinessItem', '取消业务之前', ev); 
        // ev.businesses	Array.<Object>	所有业务信息
        // ev.name	string	取消激活的业务名称
    });

```

?>  XBusinessItemDeactivated (取消业务) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消业务
    THING.App.current.one(THINGX.EventType.XBusinessItemDeactivated, (ev) => {
        console.warn('XBusinessItemDeactivated', '取消业务', ev); 
        // ev.businesses	Array.<Object>	所有业务信息
        // ev.name	string	取消激活的业务名称
    });

```

### *<a><font color="grey">Event</font></a>* 图层事件 THING.EventType.XLayer 

```javascript

    - 正式
        - XBeforeRefreshLayer                   (- app监听&BaseObject监听)//刷新图层之前
        - XLayerRefreshed                       (- app监听&BaseObject监听)//刷新图层
        - XBeforeActivateLayerItem              (- app监听&BaseObject监听)//激活图层之前
        - XLayerItemActivated                   (- app监听&BaseObject监听)//激活图层
        - XBeforeDeactivateLayerItem            (- app监听&BaseObject监听)//取消激活图层之前
        - XLayerItemDeactivated                 (- app监听&BaseObject监听)//取消图层
    - 提案
        - XLayerUIShow                          (app)(*)
        - XLayerUIHide                          (app)(*)
        - XLayerPanelShow                       (app)(*)
        - XLayerPanelHide                       (app)(*)
```

?>  XBeforeRefreshLayer (刷新图层之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 刷新图层之前
    THING.App.current.on(THINGX.EventType.XBeforeRefreshLayer, (ev) => {
        console.warn('XBeforeRefreshLayer', '刷新图层之前', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.isRequest	Array.<Object>	是否请求了新的图层配置数据
    });

```

?>  XLayerRefreshed (刷新图层) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 刷新图层
    THING.App.current.on(THINGX.EventType.XLayerRefreshed, (ev) => {
        console.warn('XLayerRefreshed', '刷新图层', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.isRequest	Array.<Object>	是否请求了新的图层配置数据
        // ev.layers	Array.<Object>	图层结构
    });

```

?>  XBeforeActivateLayerItem (激活图层之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活图层之前
    THING.App.current.on(THINGX.EventType.XBeforeActivateLayerItem, (ev) => {
        console.warn('XBeforeActivateLayerItem', '激活图层之前', ev);
        // ev.name	THING.BaseObject	当前图层名称
        // ev.layers	THING.BaseObject	图层列表
    });

```
?>  XLayerItemActivated (激活图层) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活图层
    THING.App.current.on(THINGX.EventType.XLayerItemActivated, (ev) => {
        console.warn('XLayerItemActivated', '激活图层', ev);
        // ev.name	THING.BaseObject	当前图层名称
        // ev.layers	THING.BaseObject	图层列表
    });

```
?>  XBeforeDeactivateLayerItem (取消激活图层之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消激活图层之前
    THING.App.current.on(THINGX.EventType.XBeforeDeactivateLayerItem, (ev) => {
        console.warn('XBeforeDeactivateLayerItem', '取消激活图层之前', ev);
        // ev.name	THING.BaseObject	当前图层名称
        // ev.layers	THING.BaseObject	图层列表
    });

```
?>  XLayerItemDeactivated (取消激活图层) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消激活图层之前
    THING.App.current.on(THINGX.EventType.XLayerItemDeactivated, (ev) => {
        console.warn('XLayerItemDeactivated', '取消激活图层之前', ev);
        // ev.name	THING.BaseObject	当前图层名称
        // ev.layers	THING.BaseObject	图层列表
    });

```

### *<a><font color="grey">Event</font></a>* 场景控制事件 THING.EventType.XSceneControl 

```javascript

    - 正式
        - XBeforeRefreshSceneControl            (- app监听&BaseObject监听) //刷新场景控制之前
        - XSceneControlRefreshed                (- app监听&BaseObject监听) //场景控制刷新完成
        - XBeforeActivateSceneControlItem       (- app监听&BaseObject监听) //激活场景控制之前
        - XSceneControlItemActivated            (- app监听&BaseObject监听) //激活场景控制
        - XBeforeDeactivateSceneControlItem     (- app监听&BaseObject监听) //取消激活场景控制之前
        - XSceneControlItemDeactivated          (- app监听&BaseObject监听) //取消激活场景控制
    - 提案
        - XSceneControlUIShow                   (app)(*)
        - XSceneControlUIHide                   (app)(*)
```



?>  XBeforeRefreshSceneControl (刷新场景控制之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 刷新场景控制之前
    THING.App.current.on(THINGX.EventType.XBeforeRefreshSceneControl, (ev) => {
        console.warn('XBeforeRefreshSceneControl', '刷新场景控制之前', ev);
        //ev.currentLevel	THING.BaseObject	当前层级
    });

```
?>  XSceneControlRefreshed (场景控制刷新完成) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 场景控制刷新完成
    THING.App.current.on(THINGX.EventType.XSceneControlRefreshed, (ev) => {
        console.warn('XSceneControlRefreshed', '场景控制刷新完成', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.names	THING.BaseObject	当前层级场景控制插件名称
    });

```
?>  XBeforeActivateSceneControlItem (激活场景控制之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活场景控制之前
    THING.App.current.on(THINGX.EventType.XBeforeActivateSceneControlItem, (ev) => {
        console.warn('XBeforeActivateSceneControlItem', '激活场景控制之前', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.name	Array.<Object>	场景控制名称          
    });

```
?>  XSceneControlItemActivated (激活场景控制) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 激活场景控制
    THING.App.current.on(THINGX.EventType.XSceneControlItemActivated, (ev) => {
        console.warn('XSceneControlItemActivated', '激活场景控制', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.name	Array.<Object>	场景控制名称              
    });

```
?>  XBeforeDeactivateSceneControlItem (取消激活场景控制之前) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消激活场景控制之前
    THING.App.current.on(THINGX.EventType.XBeforeDeactivateSceneControlItem, (ev) => {
        console.warn('XBeforeDeactivateSceneControlItem', '取消激活场景控制之前', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.name	Array.<Object>	场景控制名称      
    });

```

?>  XSceneControlItemDeactivated (取消激活场景控制) 
```javascript

    //监听  app&BaseObject
    
    // 示例. 取消激活场景控制
    THING.App.current.on(THINGX.EventType.XSceneControlItemDeactivated, (ev) => {
        console.warn('XSceneControlItemDeactivated', '取消激活场景控制', ev);
        // ev.currentLevel	THING.BaseObject	当前层级
        // ev.name	Array.<Object>	场景控制名称      
    });

```

!> 事件模块操作相关 支持      
**质量保证:** `赵海建`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  