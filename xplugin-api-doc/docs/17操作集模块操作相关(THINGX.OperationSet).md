<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.OperationSet)
> THINGX.OperationSet:namespace
```javascript
    //应用系统针对系统操作集模块的相关操作能力
    //主要提供针对应用系统操作集的运行、暂停、停止、恢复等能力

    //THING.BaseObject 相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.OperationSet 解构
    THINGX.OperationSet:namespace
        - run(name:string [, target:THING.BaseObject|string ][, params:object]):Instance    //运行一个操作集
        - stop(name:string):void           //停止一个操作集的运行
        - pause(name:string):void          //暂停一个操作集的运行
        - resume(name:string):void         //恢复一个操作集的运行
        - refresh():void                   //重新读取操作集可视化配置
        Type Definitions
            - Instance  (操作集实例)//Instance 提案 ，未对当前Instance进行具体设计,不推荐直接使用              

```



### *<a><font color="grey">Method</font></a>* THINGX.OperationSet.run
> 运行一个操作集, THINGX.OperationSet.run(name:string [, target:THING.BaseObject|string ][, params:object]):Instance
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 操作集名称 |     
  |target|THING.BaseObject或string|否| - | 孪生体对象 | 
  |params|object|否| - | 操作集存储单元集合 |   
* 类型: THINGX.OperationSet.Instance
* 示例
    ```javascript

        //运行一个操作集 
        //示例1. 运行一个名称为 `开门` 的操作集
        const instance = THINGX.OperationSet.run("开门");
        console.warn("执行运行的操作集实例信息: ", instance);
        //print result: 执行运行的操作集实例信息: Object


        //示例2. 运行一个操作集 `建筑告警` 的操作集
        const building = THING.App.current.query('#一号教学楼')[0];//THING.BaseObject
        const instance = THINGX.OperationSet.run("建筑告警",building);
        console.warn("执行运行的操作集实例信息: ", instance);
        //print result: 执行运行的操作集实例信息: Object

        //示例3. 运行一个操作集 `开启园区行驶汽车监控` 的操作集
        const cars = THING.App.current.query('[name=汽车]');//THING.BaseObject

        cars.forEach((car)=>{

            car.userData?.DATA["汽车分类"] ;

            const params = {
                "color": car.userData.DATA["汽车分类"] === "truck"? "red": "grey",
                "category": car.userData.DATA["汽车分类"]
            };
            const instance = THINGX.OperationSet.run("开启园区行驶汽车监控",car,params);
            console.warn("执行运行的操作集实例信息: ", instance);
            //print result: 执行运行的操作集实例信息: Object

        });
 
    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.OperationSet.stop
> 停止一个操作集的运行, THINGX.OperationSet.stop(name:string):void 
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 操作集名称 |      
* 类型: void
* 示例
    ```javascript

        //停止一个操作集的运行 
        //示例. 停止运行一个名称为 `开门` 的操作集
        THINGX.OperationSet.stop("开门")

    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.OperationSet.pause
> 暂停一个操作集的运行, THINGX.OperationSet.pause(name:string):void 
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 操作集名称 |      
* 类型: void
* 示例
    ```javascript

        //暂停一个操作集的运行
        //示例. 暂停运行一个名称为 `开门` 的操作集
        THINGX.OperationSet.pause("开门")
    ```
    ***
### *<a><font color="grey">Method</font></a>* THINGX.OperationSet.resume
> 恢复一个操作集的运行, THINGX.OperationSet.resume(name:string):void 
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 操作集名称 |      
* 类型: void
* 示例
    ```javascript

        //恢复一个操作集的运行
        //示例. 恢复运行一个名称为 `开门` 的操作集
        THINGX.OperationSet.resume("开门")
    ```
    ***


### *<a><font color="grey">Method</font></a>* THINGX.OperationSet.refresh
> 重新读取操作集可视化配置, THINGX.OperationSet.refresh():Promise.void
 
* 类型: Promise.void
* 示例
    ```javascript

        //重新读取操作集可视化配置
        //示例
        THINGX.OperationSet.refresh();
    ```
    ***

!> 操作集模块操作相关 支持   
**质量保证:** `武帅龙`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  