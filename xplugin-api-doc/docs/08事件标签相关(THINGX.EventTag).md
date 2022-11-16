<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a href="#"><font color="grey">#</font></a>* 解构(THINGX.EventTag)](#font-colorgreyfont-解构thingxeventtag)
- [*<a href="#"><font color="grey">#</font></a>*  孪生体选中事件 THING.EventType.Select](#font-colorgreyfont--孪生体选中事件-thingeventtypeselect)
- [*<a href="#"><font color="grey">#</font></a>*  取消选中事件 THING.EventType.Deselect](#font-colorgreyfont--取消选中事件-thingeventtypedeselect)
- [*<a href="#"><font color="grey">#</font></a>*  鼠标移入事件 THING.EventType.MouseEnter](#font-colorgreyfont--鼠标移入事件-thingeventtypemouseenter)
- [*<a href="#"><font color="grey">#</font></a>*  鼠标移除事件 THING.EventType.MouseLeave](#font-colorgreyfont--鼠标移除事件-thingeventtypemouseleave)
- [*<a href="#"><font color="grey">#</font></a>*  进入层级事件 THING.EventType.EnterLevel](#font-colorgreyfont--进入层级事件-thingeventtypeenterlevel)
- [*<a href="#"><font color="grey">#</font></a>*  鼠标滚动事件 THING.EventType.MouseWheel](#font-colorgreyfont--鼠标滚动事件-thingeventtypemousewheel)
- [*<a href="#"><font color="grey">#</font></a>*  鼠标按下事件 THING.EventType.MouseDown](#font-colorgreyfont--鼠标按下事件-thingeventtypemousedown)
- [*<a href="#"><font color="grey">#</font></a>*  层级切换事件 THING.EventType.LevelChange](#font-colorgreyfont--层级切换事件-thingeventtypelevelchange)
- [*<a href="#"><font color="grey">#</font></a>*  正向进入层级 THINGX.EventType.XEnterLevelForward](#font-colorgreyfont--正向进入层级-thingxeventtypexenterlevelforward)
- [*<a href="#"><font color="grey">#</font></a>*  反向退出层级 THINGX.EventType.XLeaveLevelBackward](#font-colorgreyfont--反向退出层级-thingxeventtypexleavelevelbackward)

<!-- /code_chunk_output -->




### *<a href="#"><font color="grey">#</font></a>* 解构(THINGX.EventTag)
> THINGX.EventTag:namespace
```javascript

    // //THING.EventType.Select
    //     - XShowDigitalTwinPanel (显示孪生体面板标签) 
    //     - XShowDigitalTwinDefaultEffect(显示孪生体默认效果) 
    //     - XUpdateMonitorEffect(更新监控效果)
    // //THING.EventType.Deselect
    //     - XHideDigitalTwinPanel (隐藏孪生体面板) 
    //     - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
    // //THING.EventType.MouseEnter
    //     - XShowDigitalTwinTip(显示孪生体提示)
    //     - XShowDigitalTwinDefaultEffect(显示孪生体默认效果)
    // //THING.EventType.MouseLeave
    //     - XHideDigitalTwinTip(隐藏孪生体提示)
    //     - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
    // //THING.EventType.EnterLevel
    //     - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果).BaseObject
    //     - XRefreshLayer(刷新图层).BaseObject

    // //THING.EventType.MouseWheel
    //     - XStopFly(停止飞行)

    // //THING.EventType.MouseDown
    //     - XStopFly(停止飞行)
    
    // // THING.EventType.LevelChange 
    //     - XShowAlarmForBuilding(显示建筑告警)  

    // //THINGX.EventType.XEnterLevelForward 
    //     - XSetBrotherRoomsTransparency(设置兄弟房间透明) 
    //     - XSetFloorTransparency(设置楼层透明 ) .Room
    //     - XSetBrotherTwinsTransparency(设置兄弟孪生体透明) 
    //     - XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding(进入建筑后，只有一层楼则直接进入楼层)  
    //     - XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor(进入楼层后，只有一间房则直接进入房间) 
    // //THINGX.EventType.XLeaveLevelBackward 
    //     - XSetBrotherRoomsNotTransparency(设置兄弟房间不透明) 
    //     - XSetFloorNotTransparency(设置楼层不透明 ) 
    //     - XSetBrotherTwinsNotTransparency(设置兄弟孪生体不透明)  
    //     - XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding(退出楼层后，只有一层楼则直接进入园区)  
    //     - XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor(退出房间后，只有一层楼则直接进入建筑)  
       
```


### *<a href="#"><font color="grey">#</font></a>*  孪生体选中事件 THING.EventType.Select 

```javascript
         - XShowDigitalTwinPanel (显示孪生体面板标签) 
         - XShowDigitalTwinDefaultEffect(显示孪生体默认效果) 
         - XUpdateMonitorEffect(更新监控效果)
```

?> XShowDigitalTwinPanel (显示孪生体面板标签) 
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.Select, null, THINGX.EventTag.XShowDigitalTwinPanel);

```
 
?> XShowDigitalTwinDefaultEffect(显示孪生体默认效果) 
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.Select, '.BaseObject', THINGX.EventTag.XShowDigitalTwinDefaultEffect);

```
?>  ~~XUpdateMonitorEffect(更新监控效果)~~ 弃用
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.Select, '.BaseObject', THINGX.EventTag.XUpdateMonitorEffect);

```

### *<a href="#"><font color="grey">#</font></a>*  取消选中事件 THING.EventType.Deselect

```javascript
    
        - XHideDigitalTwinPanel (隐藏孪生体面板) 
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```


?>  XHideDigitalTwinPanel (隐藏孪生体面板) 
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.Deselect, null, THINGX.EventTag.XHideDigitalTwinPanel);

```
?>  XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
THING.App.current.pauseEvent(THING.EventType.Deselect, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```



### *<a href="#"><font color="grey">#</font></a>*  鼠标移入事件 THING.EventType.MouseEnter

```javascript
    
        - XShowDigitalTwinTip(显示孪生体提示)
        - XShowDigitalTwinDefaultEffect(显示孪生体默认效果)
```
?>  XShowDigitalTwinTip(显示孪生体提示)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseEnter, '.BaseObject', THINGX.EventTag.XShowDigitalTwinTip);

```
?>  XShowDigitalTwinDefaultEffect(显示孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseEnter, '.BaseObject', THINGX.EventTag.XShowDigitalTwinDefaultEffect);

```

### *<a href="#"><font color="grey">#</font></a>*  鼠标移除事件 THING.EventType.MouseLeave

```javascript
    
        - XHideDigitalTwinTip(隐藏孪生体提示)
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```

?>  XHideDigitalTwinTip(隐藏孪生体提示)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseLeave, '.BaseObject', THINGX.EventTag.XHideDigitalTwinTip);

```
?>  XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseLeave, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```


### *<a href="#"><font color="grey">#</font></a>*  进入层级事件 THING.EventType.EnterLevel

```javascript
    
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
        - XRefreshLayer(刷新图层)
```
?>  XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.EnterLevel, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```
?>  XRefreshLayer(刷新图层)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.EnterLevel, '.BaseObject', THINGX.EventTag.XRefreshLayer);

```

### *<a href="#"><font color="grey">#</font></a>*  鼠标滚动事件 THING.EventType.MouseWheel

```javascript
        - XStopFly(停止飞行)
```

?>  XStopFly(停止飞行)
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.MouseWheel, null, THINGX.EventTag.XStopFly);

```

### *<a href="#"><font color="grey">#</font></a>*  鼠标按下事件 THING.EventType.MouseDown

```javascript
        - XStopFly(停止飞行)
```

?>  XStopFly(停止飞行)
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.MouseDown, null, THINGX.EventTag.XStopFly);

```

### *<a href="#"><font color="grey">#</font></a>*  层级切换事件 THING.EventType.LevelChange

```javascript
        - XShowAlarmForBuilding(显示建筑告警)  
```

?>  XShowAlarmForBuilding(显示建筑告警)  
```javascript
    
    //App 操作
    //条件  .Building
    THING.App.current.pauseEvent(THING.EventType.LevelChange, '.Building', THINGX.EventTag.XShowAlarmForBuilding);

```

### *<a href="#"><font color="grey">#</font></a>*  正向进入层级 THINGX.EventType.XEnterLevelForward 

```javascript
        - XSetBrotherRoomsTransparency(设置兄弟房间透明) 
        - XSetFloorTransparency(设置楼层透明 )
        - XSetBrotherTwinsTransparency(设置兄弟孪生体透明) 
        - XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding(进入建筑后，只有一层楼则直接进入楼层)  
        - XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor(进入楼层后，只有一间房则直接进入房间) 
```
?>  XSetBrotherRoomsTransparency(设置兄弟房间透明) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Room', THINGX.EventTag.XSetBrotherRoomsTransparency);

```

?>  XSetFloorTransparency(设置楼层透明)
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Room', THINGX.EventTag.XSetFloorTransparency);

```

?>  XSetBrotherTwinsTransparency(设置兄弟孪生体透明) 
```javascript
    
    //App 操作
    //条件  null
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, null, THINGX.EventTag.XSetBrotherTwinsTransparency);

```
?>  XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding(进入建筑后，只有一层楼则直接进入楼层)
```javascript
    
    //App 操作
    //条件  .Building
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Building', THINGX.EventTag.XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding);

```

?>  XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor(进入楼层后，只有一间房则直接进入房间) 
```javascript
    
    //App 操作
    //条件  .Floor
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Floor', THINGX.EventTag.XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor);

```


### *<a href="#"><font color="grey">#</font></a>*  反向退出层级 THINGX.EventType.XLeaveLevelBackward 

```javascript

        - XSetBrotherRoomsNotTransparency(设置兄弟房间不透明) 
        - XSetFloorNotTransparency(设置楼层不透明 ) 
        - XSetBrotherTwinsNotTransparency(设置兄弟孪生体不透明)  
        - XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding(退出楼层后，只有一层楼则直接进入园区)  
        - XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor(退出房间后，只有一层楼则直接进入建筑)  

```
?>  XSetBrotherRoomsNotTransparency(设置兄弟房间不透明) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XSetBrotherRoomsNotTransparency);

```
?>  XSetFloorNotTransparency(设置楼层不透明 ) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XSetFloorNotTransparency);

```
?>  XSetBrotherTwinsNotTransparency(设置兄弟孪生体不透明) 
```javascript
    
    //App 操作
    //条件  null
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, null, THINGX.EventTag.XSetBrotherTwinsNotTransparency);
```

?>  XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding(退出楼层后，只有一层楼则直接进入园区)
```javascript
    
    //App 操作
    //条件  .Floor
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Floor', THINGX.EventTag.XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding);
```

?>  XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor(退出房间后，只有一层楼则直接进入建筑) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor);
```