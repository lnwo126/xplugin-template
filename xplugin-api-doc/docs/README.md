
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [THINGX framework of pre release stage](#thingx-framework-of-pre-release-stage)
    - [命名空间(namespace)一栏表](#命名空间namespace一栏表)
    - [事件类型(type)一栏表](#事件类型type一栏表)
    - [事件标签(tag)一栏表](#事件标签tag一栏表)
- [THINGX content of pre release stage](#thingx-content-of-pre-release-stage)
    - [系统调试器(THINGX.Debugger)](#系统调试器thingxdebugger)
    - [系统全局调度器(THINGX.Timer)](#系统全局调度器thingxtimer)
    - [系统环境(THINGX.System)](#系统环境thingxsystem)
    - [系统工具(THINGX.Utils)](#系统工具thingxutils)
    - [告警模块操作相关(THINGX.Alarm)](#告警模块操作相关thingxalarm)
    - [事件标签相关(THINGX.EventTag)](#事件标签相关thingxeventtag)
    - [监控模块操作相关(THINGX.Monitor)](#监控模块操作相关thingxmonitor)
    - [事件模块操作相关(THINGX.EventType)](#事件模块操作相关thingxeventtype)
    - [孪生体操作相关(THINGX.DigitalTwin)](#孪生体操作相关thingxdigitaltwin)
    - [业务模块操作相关(THINGX.Business)](#业务模块操作相关thingxbusiness)
    - [图层模块操作相关(THINGX.Layer)](#图层模块操作相关thingxlayer)
    - [场景控制模块操作相关(THINGX.SceneControl)](#场景控制模块操作相关thingxscenecontrol)
    - [视点动画模块操作相关(THINGX.SnapshotAnimation)](#视点动画模块操作相关thingxsnapshotanimation)
    - [操作集模块操作相关(THINGX.OperationSet)](#操作集模块操作相关thingxoperationset)
    - [标记模块操作相关(THINGX.Marker)](#标记模块操作相关thingxmarker)
    - [插件模块操作相关(THINGX.Plugin)](#插件模块操作相关thingxplugin)
- [THINGX next stage release plan](#thingx-next-stage-release-plan)
    - [增补列表](#增补列表)
    - [支持](#支持)
<!-- /code_chunk_output -->
# THINGX framework of pre release stage

### 命名空间(namespace)一栏表
> pre release stage 命名空间一栏表
```java
    /*** zhangguang@uino.com */
    //总计 20个命名空间 、113个Methods、8个Members
    //二级命名空间 14个
    //三级命名空间 6个
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

### 事件类型(type)一栏表
> pre release stage 事件类型一栏表
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

### 事件标签(tag)一栏表
> pre release stage 事件标签一栏表
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



# THINGX content of pre release stage

> pre release stage 命名空间详情列表

```javascript

```

### 系统调试器(THINGX.Debugger)
[√ 系统调试器(THINGX.Debugger)](./01系统调试器(THINGX.Debugger).md)

### 系统全局调度器(THINGX.Timer)
[√ 系统全局调度器(THINGX.Timer)](./02系统全局调度器(THINGX.Timer).md)

### 系统环境(THINGX.System)
[√ 系统环境(THINGX.System)](./03系统环境(THINGX.System).md)

### 系统工具(THINGX.Utils)
[√ 系统工具(THINGX.Utils)](./04系统工具(THINGX.Utils).md)


### 告警模块操作相关(THINGX.Alarm)
[√ 告警模块操作相关(THINGX.Alarm)](./07告警模块操作相关(THINGX.Alarm).md)

### 事件标签相关(THINGX.EventTag)
[√ 事件标签相关(THINGX.EventTag)](./08事件标签相关(THINGX.EventTag).md)

### 监控模块操作相关(THINGX.Monitor)
[√ 事件监控模块操作相关(THINGX.Monitor)](./09.监控模块与应用系统各模块关系逻辑图-1.png)

### 事件模块操作相关(THINGX.EventType)
[√ 事件监控模块操作相关(THINGX.EventType)](/./10事件模块相关(THINGX.EventType).md)


### 孪生体操作相关(THINGX.DigitalTwin)
[√ 孪生体操作相关(THINGX.DigitalTwin)](./11孪生体操作相关(THINGX.DigitalTwin).md)

### 业务模块操作相关(THINGX.Business)
[√ 业务模块操作相关(THINGX.Business)](./12业务模块操作相关(THINGX.Business).md)

### 图层模块操作相关(THINGX.Layer)
[√ 图层模块操作相关(THINGX.Layer)](./13图层模块操作相关(THINGX.Layer).md)

### 场景控制模块操作相关(THINGX.SceneControl)
[√ 场景控制模块操作相关(THINGX.SceneControl)](./14场景控制模块操作相关(THINGX.SceneControl).md)

### 视点动画模块操作相关(THINGX.SnapshotAnimation)
[√ 视点动画模块操作相关(THINGX.SnapshotAnimation)](./16视点动画模块操作相关(THINGX.SnapshotAnimation).md)


### 操作集模块操作相关(THINGX.OperationSet)
[√ 操作集模块操作相关(THINGX.OperationSet)](./17操作集模块操作相关(THINGX.OperationSet).md)


### 标记模块操作相关(THINGX.Marker)
[√ 标记模块操作相关(THINGX.Marker)](./18标记模块操作相关(THINGX.Marker).md)


### 插件模块操作相关(THINGX.Plugin)
[√ 插件模块操作相关(THINGX.Plugin)](./21插件模块操作相关(THINGX.Plugin).md)



# THINGX next stage release plan

### 增补列表
> next stage release plan 增补列表
```java
    /*** zhangguang@uino.com */
    // the function of the new API in the pre release stage is not perfect, and it is not recommended

    # 下一阶段计划增补API列表详情
    # API接口增补

    //系统错误
    - THINGX.Error:namespace
    //系统上报
    - THINGX.Error.Report:namespace
        Methods
        - negligibleReport();   //上报(可忽略)错误
        - normalReport();       //上报(一般错误)错误
        - criticalReport();     //上报(严重)错误
        - interceptReport();    //上报(阻断)错误
        - print();              //打印上报错误
    //常量库
    - THINGX.CONST:namespace
    //对话框模式工具
    - THINGX.System.Dialog:namespace
    //系统场景库
    - THINGX.System.Scene:namespace
    //空间查询库  (support advanced search and display objects)
    - THINGX.Utils.Search:namespace
    //系统资源库
    - HINGX.System.Resource:namespace
        - getLevelMoudleTreeStruct();       //获取层级功能模块结构数据

    //孪生体模块
    - THINGX.DigitalTwin:namespace
         - getActivatedTabIndexOnPanel();   //获取孪生体面板激活项索引
         - initializeCIData();              //初始化孪生体CIData
         - refresh();                       //孪生体刷新
    //业务模块
    - THINGX.Business:namespace
        - isShown();                        //业务模块显示状态
        - reload();                         //业务模块重载刷新（非远程数据载入）
        //- getActivatedFullName();           //获取激活业务的全名称
        - getTreeStruct();                  //获取业务层级数据
    //图层模块
    - THINGX.Layer:namespace
        - isShown();                        //图层模块显示状态
        - reload();                         //图层模块重载刷新（非远程数据载入）
        - showPanel(name);                  //显示图层配置的业务面板
        - hidePanel(name);                  //隐藏图层配置的业务面板
        // - getActivatedFullNames();          //获取激活图层的全名称
        - getTreeStruct();                  //获取图层层级数据
    //场景控制模块
    - THINGX.SceneControl:namespace
        - isShown();                        //场景控制模块显示状态   
        // - reload() ?                     //场景控制模块重载刷新
        - getTreeStruct();                  //获取场景控制层级数据
    //视点动画模块
    - THINGX.SnapshotAnimation:namespace
        - getAll();                         //获取视点动画列表数据
        - rename(name);                     //视点动画重命名
        - remove(name);                     //删除视点动画
        - getRunningState();                //视点动画运行状态
        // - 缺少视点节点操作API 及对应事件
    //操作集模块
    - THINGX.OperationSet
        - get(name);                                 //获取操作集
        - getStorageCell(name);                      //获取操作集存储单元
        - setRunningInterval(interval);              //设置操作集原子插件的运行间隔
        // - changeRunningInterval(name,interval);   //调整操作集原子插件运行间隔
        // - reload() ?                     
        - getAll();                                  //获取所有操作集列表数据
        // - getAtoms(name)?                         //获取一个操作集的所有操作原子
        // - runAtomByName(setname,atomname[,params]) 必要性
        // - runAtomByIndex(setname,atomidnex,[,params])必要性
        - getTreeStruct();                           //获取操作集层级数据
    //告警模块
    - THINGX.Alarm
        - isEffectActivated();              //告警效果状态
        - activateEffect();                 //激活告警效果
        - deactivateEffect();               //取消告警效果
        - isSoundActivated();               //告警声音状态
        - activateSound();                  //激活告警声音
        - deactivateSound();                //取消告警声音
    //标记模块
    - THINGX.Marker //support thingjs query syntax expression
        // - addWithTag(digitalTwin, tag, type, config);
        // - removeWithTag(digitalTwin, tag);
        // - addWithCondition(condition, config [, businessName]) 不在对外发布计划内

    # API事件增补
    

    - XAlarm告警相关事件
        - XAlarmEffectActivate                  (- app监听)(*)告警效果激活事件
        - XAlarmEffectDeactivate                (- app监听)(*)告警效果取消事件
        - XAlarmSoundActivate                   (- app监听)(*)告警声音激活事件
        - XAlarmSoundDeactivate                 (- app监听)(*)告警声音取消事件
    - XLevel层级切换相关事件
        // - XLoadAfterChangeLevel              相关规范
        // - XLayerRefreshedAfterChangeLevel    相关规范
        // - XCameraFlyEnd ??                   相关规范
        // ** 层级改变后  各业务模块完成事件

    - XBusiness         (app)  
        - XBusinessUIShow                       (- app监听)(*)业务模块显示事件
        - XBusinessUIHide                       (- app监听)(*)业务模块隐藏事件
        - XBusinessPanelShow                    (- app监听)(*)业务面板显示事件
        - XBusinessPanelHide                    (- app监听)(*)业务面板隐藏事件

    - XLayer            (app)   
        - XLayerUIShow                          (- app监听)(*)图层模块显示事件
        - XLayerUIHide                          (- app监听)(*)图层模块隐藏事件
        - XLayerPanelShow                       (- app监听)(*)图层面板显示事件
        - XLayerPanelHide                       (- app监听)(*)图层面板隐藏事件

    - XSceneControl     (app)   
        - XSceneControlUIShow                   (- app监听)(*)场景控制模块显示事件
        - XSceneControlUIHide                   (- app监听)(*)场景控制模块隐藏事件


```
### 支持
> next stage release plan 支持

```javascript
    //ThingJS-X support version
    - 暂未明确

    //内容范围及时间
    - 暂未明确
```