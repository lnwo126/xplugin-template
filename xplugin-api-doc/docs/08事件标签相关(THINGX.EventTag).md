<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [事件标签相关(THINGX.EventTag)](#事件标签相关thingxeventtag)
  - [孪生体选中事件 THING.EventType.Select](#孪生体选中事件-thingeventtypeselect)
  - [取消选中事件 THING.EventType.Deselect](#取消选中事件-thingeventtypedeselect)
  - [鼠标移入事件 THING.EventType.MouseEnter](#鼠标移入事件-thingeventtypemouseenter)
  - [鼠标移除事件 THING.EventType.MouseLeave](#鼠标移除事件-thingeventtypemouseleave)
  - [进入层级事件 THING.EventType.EnterLevel](#进入层级事件-thingeventtypeenterlevel)
  - [鼠标滚动事件 THING.EventType.MouseWheel](#鼠标滚动事件-thingeventtypemousewheel)
  - [鼠标按下事件 THING.EventType.MouseDown](#鼠标按下事件-thingeventtypemousedown)
  - [层级切换事件 THING.EventType.LevelChange](#层级切换事件-thingeventtypelevelchange)
  - [正向进入层级 THINGX.EventType.XEnterLevelForward](#正向进入层级-thingxeventtypexenterlevelforward)
  - [反向退出层级 THINGX.EventType.XLeaveLevelBackward](#反向退出层级-thingxeventtypexleavelevelbackward)

<!-- /code_chunk_output -->




### 事件标签相关(THINGX.EventTag)
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


#### 孪生体选中事件 THING.EventType.Select 

```javascript
         - XShowDigitalTwinPanel (显示孪生体面板标签) 
         - XShowDigitalTwinDefaultEffect(显示孪生体默认效果) 
         - XUpdateMonitorEffect(更新监控效果)
```

> *<a href="#">#</a>* XShowDigitalTwinPanel (显示孪生体面板标签) 
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.Select, null, THINGX.EventTag.XShowDigitalTwinPanel);

```
 
> *<a href="#">#</a>* XShowDigitalTwinDefaultEffect(显示孪生体默认效果) 
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.Select, '.BaseObject', THINGX.EventTag.XShowDigitalTwinDefaultEffect);

```
> *<a href="#">#</a>* XUpdateMonitorEffect(更新监控效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.Select, '.BaseObject', THINGX.EventTag.XUpdateMonitorEffect);

```

#### 取消选中事件 THING.EventType.Deselect

```javascript
    
        - XHideDigitalTwinPanel (隐藏孪生体面板) 
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```


> *<a href="#">#</a>* XHideDigitalTwinPanel (隐藏孪生体面板) 
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.Deselect, null, THINGX.EventTag.XHideDigitalTwinPanel);

```
> *<a href="#">#</a>* XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
THING.App.current.pauseEvent(THING.EventType.Deselect, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```



#### 鼠标移入事件 THING.EventType.MouseEnter

```javascript
    
        - XShowDigitalTwinTip(显示孪生体提示)
        - XShowDigitalTwinDefaultEffect(显示孪生体默认效果)
```
> *<a href="#">#</a>* XShowDigitalTwinTip(显示孪生体提示)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseEnter, '.BaseObject', THINGX.EventTag.XShowDigitalTwinTip);

```
> *<a href="#">#</a>* XShowDigitalTwinDefaultEffect(显示孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseEnter, '.BaseObject', THINGX.EventTag.XShowDigitalTwinDefaultEffect);

```

#### 鼠标移除事件 THING.EventType.MouseLeave

```javascript
    
        - XHideDigitalTwinTip(隐藏孪生体提示)
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```

> *<a href="#">#</a>* XHideDigitalTwinTip(隐藏孪生体提示)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseLeave, '.BaseObject', THINGX.EventTag.XHideDigitalTwinTip);

```
> *<a href="#">#</a>* XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.MouseLeave, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```


#### 进入层级事件 THING.EventType.EnterLevel

```javascript
    
        - XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
        - XRefreshLayer(刷新图层)
```
> *<a href="#">#</a>* XHideDigitalTwinDefaultEffect(隐藏孪生体默认效果)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.EnterLevel, '.BaseObject', THINGX.EventTag.XHideDigitalTwinDefaultEffect);

```
> *<a href="#">#</a>* XRefreshLayer(刷新图层)
```javascript
    
    //App 操作
    //条件 .BaseObject  (.Building、.Floor、.Room ...)
    THING.App.current.pauseEvent(THING.EventType.EnterLevel, '.BaseObject', THINGX.EventTag.XRefreshLayer);

```

#### 鼠标滚动事件 THING.EventType.MouseWheel

```javascript
        - XStopFly(停止飞行)
```

> *<a href="#">#</a>* XStopFly(停止飞行)
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.MouseWheel, null, THINGX.EventTag.XStopFly);

```

#### 鼠标按下事件 THING.EventType.MouseDown

```javascript
        - XStopFly(停止飞行)
```

> *<a href="#">#</a>* XStopFly(停止飞行)
```javascript
    
    //App 操作
    //条件 null
    THING.App.current.pauseEvent(THING.EventType.MouseDown, null, THINGX.EventTag.XStopFly);

```

#### 层级切换事件 THING.EventType.LevelChange

```javascript
        - XShowAlarmForBuilding(显示建筑告警)  
```

> *<a href="#">#</a>* XShowAlarmForBuilding(显示建筑告警)  
```javascript
    
    //App 操作
    //条件  .Building
    THING.App.current.pauseEvent(THING.EventType.LevelChange, '.Building', THINGX.EventTag.XShowAlarmForBuilding);

```

#### 正向进入层级 THINGX.EventType.XEnterLevelForward 

```javascript
        - XSetBrotherRoomsTransparency(设置兄弟房间透明) 
        - XSetFloorTransparency(设置楼层透明 )
        - XSetBrotherTwinsTransparency(设置兄弟孪生体透明) 
        - XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding(进入建筑后，只有一层楼则直接进入楼层)  
        - XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor(进入楼层后，只有一间房则直接进入房间) 
```
> *<a href="#">#</a>* XSetBrotherRoomsTransparency(设置兄弟房间透明) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Room', THINGX.EventTag.XSetBrotherRoomsTransparency);

```

> *<a href="#">#</a>* XSetFloorTransparency(设置楼层透明)
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Room', THINGX.EventTag.XSetFloorTransparency);

```

> *<a href="#">#</a>* XSetBrotherTwinsTransparency(设置兄弟孪生体透明) 
```javascript
    
    //App 操作
    //条件  null
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, null, THINGX.EventTag.XSetBrotherTwinsTransparency);

```
> *<a href="#">#</a>* XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding(进入建筑后，只有一层楼则直接进入楼层)
```javascript
    
    //App 操作
    //条件  .Building
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Building', THINGX.EventTag.XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding);

```

> *<a href="#">#</a>* XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor(进入楼层后，只有一间房则直接进入房间) 
```javascript
    
    //App 操作
    //条件  .Floor
    THING.App.current.pauseEvent(THINGX.EventType.XEnterLevelForward, '.Floor', THINGX.EventTag.XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor);

```


#### 反向退出层级 THINGX.EventType.XLeaveLevelBackward 

```javascript

        - XSetBrotherRoomsNotTransparency(设置兄弟房间不透明) 
        - XSetFloorNotTransparency(设置楼层不透明 ) 
        - XSetBrotherTwinsNotTransparency(设置兄弟孪生体不透明)  
        - XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding(退出楼层后，只有一层楼则直接进入园区)  
        - XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor(退出房间后，只有一层楼则直接进入建筑)  

```
> *<a href="#">#</a>* XSetBrotherRoomsNotTransparency(设置兄弟房间不透明) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XSetBrotherRoomsNotTransparency);

```
> *<a href="#">#</a>* XSetFloorNotTransparency(设置楼层不透明 ) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XSetFloorNotTransparency);

```
> *<a href="#">#</a>* XSetBrotherTwinsNotTransparency(设置兄弟孪生体不透明) 
```javascript
    
    //App 操作
    //条件  null
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, null, THINGX.EventTag.XSetBrotherTwinsNotTransparency);
```

> *<a href="#">#</a>* XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding(退出楼层后，只有一层楼则直接进入园区)
```javascript
    
    //App 操作
    //条件  .Floor
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Floor', THINGX.EventTag.XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding);
```

> *<a href="#">#</a>* XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor(退出房间后，只有一层楼则直接进入建筑) 
```javascript
    
    //App 操作
    //条件  .Room
    THING.App.current.pauseEvent(THINGX.EventType.XLeaveLevelBackward, '.Room', THINGX.EventTag.XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor);
```