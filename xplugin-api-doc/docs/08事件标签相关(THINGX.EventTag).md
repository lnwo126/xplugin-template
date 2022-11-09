<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [事件标签相关(THINGX.EventTag)](#事件标签相关thingxeventtag)

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
       
       

       XShowAlarmForBuilding????
```