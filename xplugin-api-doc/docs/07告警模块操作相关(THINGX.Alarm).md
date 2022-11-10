<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->




> 一般性解释
```javascript

    //监控过程中发现的报警信息。通常是监控值超过了正常指标范围，或系统宕机等引起的告警，
    //在三维场景中以标记、面板、图表、操作集的形式进行展示。

```



### 告警模块操作相关(THINGX.Alarm)
> THINGX.Alarm:namespace
```javascript

    //告警模块操作相关

    // THINGX.Alarm 解构
    THINGX.Alarm:namespace
        Members
        // - 无
        Methods
            - isInitialized():boolean               //告警系统是否初始化完成
            - activate([purpose:string]):boolean    //激活告警系统
            - deactivate([purpose:string]):boolean  //取消激活告警系统
            - isActivated():boolean                 //告警系统是否激活  
            - getPurposes():Array.<string>          //获取已存在的激活告警系统的目的
            - refresh():void                        //立即进行一次告警请求并刷新告警数据
            - getHighestOnDigitalTwin(digitalTwin, isTraverse:boolean):object  
                                                    //获取孪生体上最高告警级别数据  
            - getLevelConfig():Map.<number, THINGX.Alarm.LevelItemConfig>
                                                    //获取告警级别配置
            - getRequestConfig():THINGX.Alarm.RequestConfig
                                                    //获取告警查询配置
            - setRequestConfig(config:THINGX.Alarm.RequestConfig [, isRemoteData:boolean])
                                                    //设置告警查询配置
            - setRequestInterface(func:AlarmInjectCallback):void       
                                                    //替换系统默认告警接口

        Type Definitions
            LevelItemConfig     //告警等级配置
                - color:string          //告警颜色，十六进制
                - level:number          //告警等级
                - name:string	        //告警级别名称
                - sound:Object	        //告警声音配置
                    - name:string	            //告警声音名称
                    - url:string	            //告警声音资源url
            RequestConfig       //告警请求配置
                - acknowledged:string                 
                        //处理状态 0 未处理， 1 已处理
                - alarmLevel:Array.<number>			
                        //告警级别
                - classNames:Array.<string>           
                        //孪生体业务分类，默认为空数组代表所有
                - dcIds:Array.<string>			    
                        //场景的数据库ID数组（DBID）
                - enableGlobal:boolean	            
                        //开启全局查询，当前层级是地图的话默认true，园区默认false。
                        //当为true时，需要设置dcIds
                - fromCiId:string			            
                        //查询的起始层级的数据库ID（DBID）
                - keyword:string			            
                        //搜索关键词，会匹配孪生体的名称，告警详情
                - orAttrs:Array.<Object>			    
                        //孪生体属性条件筛选 默认空数组代表没有过滤条件
                - sortType:string	
                        //告警排序方式  default value : time-desc ; 
                        //默认按时间倒序 time-asc 告警时间正序/time-desc 
                        //告警级别倒序/level-asc 告警级别正序/level-desc 
            AlarmInjectCallback(param, config)      //告警回调
                - param:THINGX.Alarm.RequestConfig  //告警查询参数
                - config:object                     //请求配置项
                    - timeout:number                //请求配置项{timeout:5000}  default value 5000
            InterfaceData       告警接口返回数据格式
                - code:	number                      //接口返回状态码
                - data: THINGX.Alarm.Data           //告警数据
                - success:boolean                   //接口状态
            Data 告警数据格式
                - alarmDevices:Array.<Object>       //孪生体信息统计
                - alarmInfo:Object                  //告警级别统计
                - alarmPage:Object                  //告警数据


        Example(Data 告警数据格式)
            {
                "alarmDevices": [{
                        "className": "建筑",
                        "id": "871692106107925"
                    }
                ],
                "alarmInfo": {
                    "1": 1,
                    "2": 0,
                    "3": 0,
                    "4": 0
                },
                "alarmPage": {
                    "pageData": [{
                            "firstTime": "2022-09-13 15:39:14",
                            "lastTime": "2022-09-13 15:39:14",
                            "ciClassId": "871692106107925",
                            "des": "查收西安市",
                            "acknowledged": "0",
                            "level": "1",
                            "cidbid": "871692106112974",
                            "kpiName": "保存上档次",
                            "id": "910853340559169",
                            "ciName": "3",
                            "sourceEventId": "1663054754309",
                            "others": ""
                        }
                    ],
                    "pageNum": 1,
                    "pageSize": 100000,
                    "totalPage": 1,
                    "totalSize": 1
                }
            }        



```


##### *<a href="#">#</a>* THINGX.Alarm.isInitialized
> 告警系统是否初始化完成, THINGX.Alarm.isInitialized():boolean
 
* 类型: boolean
* 示例
    ```javascript

        // 告警系统是否初始化完成

        //示例. 获取告警系统初始化完成状态
        const result = THINGX.Alarm.isInitialized();
        console.warn("告警系统初始化完成状态: %s", result);
        //print result: 告警系统初始化完成状态: true

    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.activate
> 激活告警系统, THINGX.Alarm.activate([purpose:string]):boolean
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |purpose|string|-| default | 告警系统激活目的 |    
* 类型: boolean
* 示例
    ```javascript

        // 激活告警系统

        //示例1. 激活告警系统
        THINGX.Alarm.activate();

        //示例2. 园区漫游激活告警系统
        THINGX.Alarm.activate("园区漫游");
    ```
    ***
   
##### *<a href="#">#</a>* THINGX.Alarm.deactivate
> 取消激活告警系统, THINGX.Alarm.deactivate([purpose:string]):boolean
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |purpose|string|-| default | 告警系统激活目的 |    
* 类型: boolean
* 示例
    ```javascript

        // 取消激活告警系统

        //示例1. 取消激活告警系统
        THINGX.Alarm.deactivate();

        //示例2. 园区漫游取消激活告警系统
        THINGX.Alarm.deactivate("园区漫游");
    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.isActivated
> 告警系统是否激活  , THINGX.Alarm.isActivated():boolean

* 类型: boolean
* 示例
    ```javascript

        // 告警系统是否激活  

        //示例1. 告警系统是否激活
        const result = THINGX.Alarm.isActivated();
        console.warn("告警系统激活状态: %s", result);
        //print result: 告警系统激活状态: true
    ```
    ***


##### *<a href="#">#</a>* THINGX.Alarm.getPurposes
> 获取已存在的激活告警系统的目的  , THINGX.Alarm.getPurposes():Array.<string>

* 类型: boolean
* 示例
    ```javascript

        // 获取已存在的激活告警系统的目的  

        //示例1. 获取已存在的激活告警系统的目的
        const purposes = THINGX.Alarm.getPurposes();
        console.warn("当前激活告警系统目的有: %s", purposes);
        //print result: 当前激活告警系统目的有: default,园区漫游
    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.refresh
> 立即进行一次告警请求并刷新告警数据 , THINGX.Alarm.refresh():void 

* 类型: void
* 示例
    ```javascript

        // 立即进行一次告警请求并刷新告警数据  

        //示例. 
        THINGX.Alarm.refresh();

    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.getHighestOnDigitalTwin
> 获取孪生体上最高告警级别数据, THINGX.Alarm.getHighestOnDigitalTwin(digitalTwin, isTraverse:boolean):object
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |digitalTwin|THING.BaseObject|是| - | 孪生体对象 |    
  |isTraverse|boolean|-| false | 是否遍历该孪生体的孩子 |    
* 类型: boolean
* 示例
    ```javascript

        // 获取孪生体上最高告警级别数据

        //示例1. 获取 `一号教学楼` 上最高告警级别数据
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const alarm = THINGX.Alarm.getHighestOnDigitalTwin(building);
        console.warn("一号教学楼上最高告警级别数据: ", alarm);


        //示例2. 获取 `一号教学楼` 包括楼层、房间等设备 上最高告警级别数据
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const alarm = THINGX.Alarm.getHighestOnDigitalTwin(building,true);
        console.warn("一号教学楼上(楼层、房间等设备)最高告警级别数据: ", alarm);
    ```
    ***


##### *<a href="#">#</a>* THINGX.Alarm.getLevelConfig
> 获取告警级别配置   , THINGX.Alarm.getLevelConfig():Map.<level:number, THINGX.Alarm.LevelItemConfig>

* 类型: Map.<level:number, THINGX.Alarm.LevelItemConfig>
* 示例
    ```javascript

        // 获取告警级别配置  

        //示例. 
        const map = THINGX.Alarm.getLevelConfig();
        map.forEach((item,key)=>{
            console.warn(" %s 级高级配置 ", key, item);
            //item 类型详情查看 Type Definitions ：  THINGX.Alarm.LevelItemConfig
        })


    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.getRequestConfig
> 获取告警查询配置   , THINGX.Alarm.getRequestConfig():THINGX.Alarm.RequestConfig

* 类型: THINGX.Alarm.RequestConfig
* 示例
    ```javascript

        // 获取告警查询配置  

        //示例. 
        const config = THINGX.Alarm.getRequestConfig();
        console.warn("获取告警查询配置 ", config);
        // config类型详情查看 Type Definitions ： THINGX.Alarm.RequestConfig

    ```
    ***
##### *<a href="#">#</a>* THINGX.Alarm.setRequestConfig
> 设置告警查询配置   , THINGX.Alarm.setRequestConfig(config:THINGX.Alarm.RequestConfig [, isRemoteData:boolean]):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |config|THINGX.Alarm.RequestConfig|-| - | 告警查询配置,详情查看 Type Definitions ： THINGX.Alarm.RequestConfig |    
  |isRemoteData|boolean|-| true |	立即请求告警 |    
* 类型: void
* 示例
    ```javascript

        // 设置告警查询配置  

        //示例1. 设置查询告警级别为 1,2,3 级的告警
        const config = THINGX.Alarm.setRequestConfig({
            alarmLevel: [1,2,3]
        });

        //示例2. 设置查询孪生体业务分类为 '温湿度感应器' 的告警数据
        const config = THINGX.Alarm.setRequestConfig({
            classNames: ['温湿度感应器']
        });

        //示例3. 根据孪生体属性筛选告警
        const config = THINGX.Alarm.setRequestConfig({
           orAttrs:[{ "key": '业务分类', "value":"空调", "optType": 1 }]
        });

    ```
    ***

##### *<a href="#">#</a>* THINGX.Alarm.setRequestInterface
> 替换系统默认告警接口 , THINGX.Alarm.setRequestInterface(func):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |func|THINGX.Alarm.AlarmInjectCallback|-| - | 告警回调 |    

* 类型: void
* 示例
    ```javascript

        // 替换系统默认告警接口  

        //示例1. 替换系统默认告警接口
        // THINGX.Alarm.AlarmInjectCallback
        //          param :  THINGX.Alarm.RequestConfig     
        //          config : Object
        THINGX.Alarm.setRequestInterface((param,config)=>{
            
            //自定义逻辑
            //返回  THINGX.Alarm.InterfaceData

            return THINGX.Alarm.InterfaceData
        })

    ```
    ***


