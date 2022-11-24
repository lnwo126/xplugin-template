
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [API \& 插件开发指南说明](#api--插件开发指南说明)
  - [命名空间(Namespace)](#命名空间namespace)
  - [事件类型(EventType)](#事件类型eventtype)
  - [事件标签(EventTag)](#事件标签eventtag)
- [插件开发脚手架(XPlugin-cli)](#插件开发脚手架xplugin-cli)
- [pre release stage](#pre-release-stage)
- [next stage release](#next-stage-release)
- [contact \& support](#contact--support)
<!-- /code_chunk_output -->
# API & 插件开发指南说明

## 命名空间(Namespace)
?> pre release stage 命名空间一栏表
```java
    //总计 `21`个命名空间 、`113`个Methods、`8`个Members
    //二级命名空间 `15`个
    //三级命名空间 `6`个
```

|||||||
|-|-|-|-|-|-|
||命名空间|描述|分类|Methods|Members|
|-|THINGX.Debugger|调试器| 系统工具(较高优先级) | 2|-|
|-|THINGX.Timer|调度器| 系统工具(较高优先级) |6|-|
|-|THINGX.System|| 系统环境 |-|-|
||THINGX.System.Version|系统版本库| 系统环境 |-|4|
||THINGX.System.Resource|系统资源库| 系统环境  |4|4|
||THINGX.System.Loading|系统加载控制库| 系统环境 |2|-|
||THINGX.System.Message|系统提示信息库| 系统环境 |7|-|
|-|THINGX.Utils|| 系统工具 |-|-|
||THINGX.Utils.Http|数据请求库| 系统工具 |2|-|
||THINGX.Utils.Space|空间计算库| 系统工具 |1|-|
|-|THINGX.DigitalTwin|孪生体操作相关| 系统功能模块 |16|-|
|-|THINGX.Alarm|告警模块操作相关| 系统告警模块 |11|-|
|-|THINGX.Monitor|监控模块操作相关| 系统监控模块 |8|-|
|-|THINGX.Business|业务模块操作相关| 系统功能模块 |9|-|
|-|THINGX.Layer|图层模块操作相关| 系统功能模块 |9|-|
|-|THINGX.SceneControl|场景控制模块操作相关| 系统功能模块 |7|-|
|-|THINGX.SnapshotAnimation|视点动画模块操作相关| 系统功能模块 |7|-|
|-|THINGX.OperationSet|操作集模块操作相关| 系统功能模块 |5|-|
|-|THINGX.Marker|标记模块操作相关| 系统功能模块 |8|-|
|-|THINGX.Plugin|插件模块操作相关| 系统功能模块 |9|-|
|-|THINGX.Earth|地球城市操作相关| 系统功能模块 |3|-|

## 事件类型(EventType)
?> pre release stage 事件类型一栏表
```javascript
    
    //共计53个事件，其中正式发版事件 36个、提案事件 17个、预发版事件 0个
    release event 共计 36个
    //    pre release event 共计 0个
    //    proposal event 共计 17个

    //阶段 pre release、 release、 proposal
    - pre release ( 预发版 )
    - release (正式版)
    - proposal ( 提案阶段 this scheme is only provided and may or may not be adopted in the future )
```

|||||||
|-|-|-|-|-|-|
||事件名称|描述|当前阶段|应用监听|孪生体监听|
|-|XAlarm|告警事件||||
||THINGX.EventType.XAlarm|告警数据发生变化事件|release| <input type="checkbox" disabled>| <input type="checkbox" checked disabled>|
||THINGX.EventType.XAlarmRemove|移除告警事件|release|<input type="checkbox" disabled>| <input type="checkbox" checked disabled>|
||THINGX.EventType.XAlarmDataRequest|告警数据更新</br>请求完成事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled >|
||THINGX.EventType.XAlarmChangeUnderCurrentSceneLevel|告警在当前场景层级下</br>变化层级切换</br>告警数据变化事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmActivate|激活告警|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmDeactivate|取消告警|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmEffectActivate|激活告警效果|proposal|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmEffectDeactivate|取消告警效果|proposal|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmSoundActivate|激活告警声音|proposal|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XAlarmSoundDeactivate|取消告警声音|proposal|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
|-|XMonitor|监控事件||||
||THINGX.EventType.XMonitor|监控数据改变事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XMonitorActivate|监控激活事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XMonitorDeactivate|取消监控事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XMonitorDataRequest|监控数据更新,请求完成事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
|-|XMarker|标记事件||||
||THINGX.EventType.XMarkerLoad|标记加载完成事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XMarkerDestroy|标记销毁完成事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
|-|XDigitalTwin|孪生体相关事件||||
||THINGX.EventType.XDigitalTwinPanelActivate|孪生体面板激活事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XDigitalTwinPanelDeactivate|孪生体面板取消事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XDigitalTwinPanelTabActivate|孪生体面板页签激活事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
||THINGX.EventType.XDigitalTwinPanelTabDeactivate|孪生体面板页签取消事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
|-|XLoad|加载事件||||
||THINGX.EventType.XLoad|应用系统加载完成事件|release|<input type="checkbox" checked disabled>|<input type="checkbox" disabled>|
|-|XLevel|层级事件||||
||THINGX.EventType.XLeaveLevelBackward|反向离开层级|release|<input type="checkbox" checked disabled>|<input type="checkbox" checked disabled>|
||THINGX.EventType.XEnterLevelForward|正向进入层级|release|<input type="checkbox" checked disabled>|<input type="checkbox" checked disabled>|
||~~THINGX.EventType.XLoadAfterChangeLevel~~|~~层级改变后</br>业务模块加载完成事件~~|~~proposal~~|-|-|
||~~THINGX.EventType.XLayerRefreshedAfterChangeLevel~~|~~层级切换后</br>图层刷新完成~~|~~proposal~~|||
||~~THINGX.EventType.XCameraFlyEnd~~|~~层级切换后</br>相机飞行完成事件~~|~~proposal~~|-|-|
|-|XBusiness|业务模块事件||||
||THINGX.EventType.XBeforeRefreshBusiness|业务模块刷新之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessRefreshed|业务模块刷新事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeActivateBusinessItem|业务激活之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessItemActivated|业务激活事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeDeactivateBusinessItem|业务取消之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessItemDeactivated|业务取消事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessUIShow|业务模块显示事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessUIHide|业务模块隐藏事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessPanelShow|业务面板显示事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBusinessPanelHide|业务面板隐藏事件|proposal|<input type="checkbox" checked disabled>|-|
|-|XLayer|图层模块事件||||
||THINGX.EventType.XBeforeRefreshLayer|图层模块刷新之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerRefreshed|图层模块刷新事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeActivateLayerItem|图层激活之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerItemActivated|图层激活事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeDeactivateLayerItem|图层取消之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerItemDeactivated|图层取消事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerUIShow|图层模块显示事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerUIHide|图层模块隐藏事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerPanelShow|图层面板显示事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XLayerPanelHide|图层面板隐藏事件|proposal|<input type="checkbox" checked disabled>|-|
|-|XSceneControl|场景控制模块事件||||
||THINGX.EventType.XBeforeRefreshSceneControl|场景控制模块刷新之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XSceneControlRefreshed|场景控制模块刷新事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeActivateSceneControlItem|场景控制激活之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XSceneControlItemActivated|场景控制激活事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XBeforeDeactivateSceneControlItem|场景控制取消激活之前事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XSceneControlItemDeactivated|场景控制取消事件|release|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XSceneControlUIShow|场景控制模块显示事件|proposal|<input type="checkbox" checked disabled>|-|
||THINGX.EventType.XSceneControlUIHide|场景控制模块隐藏事件|proposal|<input type="checkbox" checked disabled>|-|

## 事件标签(EventTag)
?> pre release stage 事件标签一栏表
```javascript
   

```

|||||||
|-|-|-|-|-|-|
||事件名称📝|事件标签🏷️|条件|描述|当前阶段|
||Select|-|-|孪生体选中事件|-|
|-|-|<strong>XShowDigitalTwinPanel</strong>|-|显示孪生体面板标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XShowDigitalTwinDefaultEffect</strong>|.BaseObject|显示孪生体默认效果标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XUpdateMonitorEffect</strong>|.BaseObject|更新监控效果标签|<p style="color:gray;">proposal</p>|
||Deselect|-|-|孪生体取消选中事件|-|
|-|-|<strong>XHideDigitalTwinPanel</strong>|-|隐藏孪生体面板标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XHideDigitalTwinDefaultEffect</strong>|.BaseObject|隐藏孪生体默认效果标签|<p style="color:gray;">proposal</p>|
||MouseEnter|-|-|鼠标移入事件|-|
|-|-|<strong>XShowDigitalTwinTip</strong>|.BaseObject|显示孪生体提示标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XShowDigitalTwinDefaultEffect</strong>|.BaseObject|显示孪生体默认效果标签|<p style="color:gray;">proposal</p>|
||MouseLeave|-|-|鼠标离开事件|-|
|-|-|<strong>XShowDigitalTwinTip</strong>|.BaseObject|隐藏孪生体提示标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XHideDigitalTwinDefaultEffect</strong>|.BaseObject|隐藏孪生体默认效果标签|<p style="color:gray;">proposal</p>|
||EnterLevel|-|-|进入层级事件|-|
|-|-|<strong>XHideDigitalTwinDefaultEffect</strong>|.BaseObject|隐藏孪生体默认效果标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XRefreshLayer</strong>|.BaseObject|刷新图层标签|<p style="color:gray;">proposal</p>|
||MouseWheel|-|-|鼠标滚动事件|-|
|-|-|<strong>XStopFly</strong>|-|停止飞行标签|<p style="color:gray;">proposal</p>|
||MouseDown|-|-|鼠标按下事件|-|
|-|-|<strong>XStopFly</strong>|-|停止飞行标签|<p style="color:gray;">proposal</p>|
||LevelChange|-|-|层级切换事件|-|
|-|-|<strong>XShowAlarmForBuilding</strong>|.Building|显示建筑告警标签|<p style="color:gray;">proposal</p>|
||XEnterLevelForward|-|-|正向进入层级事件|-|
|-|-|<strong>XSetBrotherRoomsTransparency</strong>|.Room|设置兄弟房间透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XSetFloorTransparency</strong>|.Room|设置楼层透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XSetBrotherTwinsTransparency</strong>|-|设置兄弟孪生体透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XEnterFloorDirectAfterEnterBuildingIfOneFloorInBuilding</strong>|.Building|进入建筑后，只有一层楼则直接进入</br>楼层标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XEnterRoomDirectAfterEnterFloorIfOneRoomInFloor</strong>|.Floor|进入楼层后，只有一间房则直接进入</br>房间标签|<p style="color:gray;">proposal</p>|
||XLeaveLevelBackward|-|-|反向离开层级事件|-|
|-|-|<strong>XSetBrotherRoomsNotTransparency</strong>|.Room|设置兄弟房间不透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XSetFloorNotTransparency</strong>|.Room|设置楼层不透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XSetBrotherTwinsNotTransparency</strong>|-|设置兄弟孪生体</br>不透明标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XEnterCampusDirectAfterLeaveFloorIfOneFloorInBuilding</strong>|.Floor|退出楼层后，只有一层楼则直接进入</br>园区标签|<p style="color:gray;">proposal</p>|
|-|-|<strong>XEnterBuildingDirectAfterLeaveRoomIfOneRoomInFloor</strong>|.Room|退出房间后，只有一层楼则直接进入</br>建筑标签|<p style="color:gray;">proposal</p>|



# 插件开发脚手架(XPlugin-cli)
?>  xplugin-cli is the Standard Tooling for ThingJS-X Plug-in Development
```javascript
    npm install -g @thingjs-x/xplugin-cli
```
[√ 插件开发脚手架(XPlugin-cli)](xplugin-cli.md)


# pre release stage

?> pre release stage <a href="#/pre-release-stage-content">命名空间详情列表</a>

```javascript
    // 参考 THINGX content of pre release stage 目录索引
```
[√ 命名空间详情列表](pre-release-stage-content)



# next stage release

!> next stage release plan    
**the function of the new API in the pre release stage is not perfect, and it is not recommended**

```javascript
    // 参考 next-stage-release 目录索引
```
[√ 最新提案](next-stage-release)



# contact & support
?> 联系我们获得支持   
**关于api 使用中的问题或错误欢迎联系我们进行反馈**
- Follow 👨🏻‍💻 @zhangguang on [![U知](./lib/uzhi.png)U知](https://wiki.uino.com/personal/1791) and [![Github](./lib/github.svg)Github](https://github.com/GuangGuangZhang/xplugin-template) for announcements
- Create a 💬 GitHub issue for bug reports, feature requests, or questions
- Add a ⭐️ star on GitHub and promote the project