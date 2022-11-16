
!> next stage release plan    
**the function of the new API in the pre release stage is not perfect, and it is not recommended**

## 接口
```java

    # 下一阶段提案列表计划增补API详情
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


```

## 事件

```java

    # 下一阶段提案列表计划增补API详情
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
