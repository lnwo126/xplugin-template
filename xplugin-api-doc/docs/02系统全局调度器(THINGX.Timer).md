
<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a href="#"><font color="grey">#</font></a>*  解构(THINGX.Timer)](#font-colorgreyfont--解构thingxtimer)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.addInterval](#font-colorgreyfont--thingxtimeraddinterval)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.addTimeout](#font-colorgreyfont--thingxtimeraddtimeout)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.remove](#font-colorgreyfont--thingxtimerremove)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.removeAll](#font-colorgreyfont--thingxtimerremoveall)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.get](#font-colorgreyfont--thingxtimerget)
- [*<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.getAll](#font-colorgreyfont--thingxtimergetall)
<!-- /code_chunk_output -->

###  *<a href="#"><font color="grey">#</font></a>*  解构(THINGX.Timer)
> THINGX.Timer:namespace
```javascript

    // 系统全局调度器为了统一管理 宏任务中的 定时器、延时器等函数
    // 在系统插件或应该开发中,涉及定时器、延时器等函数宏任务时, 推荐统一使用该命名空间调度器进行管理使用
    // 该系统调度器函数需要对ThingJS-X 系统使用的开发者重点了解的API
    // 以帮助其在系统开发过程中进行规范开发,能够辅以错误定位、错误排查

    //THINGX.Timer 解构
    THINGX.Timer:namespace
        Members
        // - timers:Array.<Instance> //proposal 提案 
        Methods
        - addInterval(callback:function,delay:number,name:string[,params:any]):string     
                //添加重复执行定时器
        - addTimeout(callback:function,delay:number,name:string[,params:any]):string      
                //添加一次性执行定时器
        - remove(name:string):boolean                                                     
                //移除特定定时器
        - removeAll():void                                                              
                //移除所有定时器
        - get(id):Instance||null                                                        
                //获取特定定时器
        - getAll():Array.<Instance>                                                     
                //获取所有定时器
        // - has(id:string):boolean                                                     
                //检查定时器是否已存在 ,proposal 提案 
        
        Type Definitions
            - Instance                  实例
                - callback:function     执行函数
                - delay:number          延迟时间(毫秒/ms)
                - id:string             唯一标识
                - type:string           调度器类型[  interval、timeout ]
                - params:Array<any>     回调函数参数
                
```

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.addInterval
> 添加重复(或循环)执行定时器 THINGX.Timer.addInterval(callback:function,delay:number[,id:string,params:Array<any>])
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |callback|function|是| - |定时器执行函数|
  |delay|number|是|-| 定时器延时时间(毫秒/ms) |
  |id|string|是|-| 唯一标识,默认自动生成匿名唯一标识 |
  |params|Array<any>|-|-| 回调函数参数 |      
  	  
* 类型: string
* 示例
    ```javascript

        //示例1. 每隔 15s 执行一次打印输出(给定唯一标识)
        //return value interval unique identifier （返回指定的定时器唯一标识:forklift）
        const timerid = THINGX.Timer.addInterval(()=>{
            console.warn("use the layer plug-in to change the color of the forklift model.");
        },1500,"forklift");
        console.wran(" unique identifier : %s ", timerid);
        
        //示例2. 每隔 15s 执行一次打印输出 (给定唯一标识和模型颜色)
        //return value interval unique identifier （返回指定的定时器唯一标识:forklift-color）
        const timerid = THINGX.Timer.addInterval((params)=>{
            params?.foreach((element)=>{
                console.warn("the forklift turned from yellow to %s.",element);
            });      
        },1500,"forklift-color",['red','green']);
        console.wran(" unique identifier : %s ", timerid);

    ```
    ***

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.addTimeout
> 添加一次执行定时器 THINGX.Timer.addTimeout(callback:function,delay:number[,id:string,params:Array<any>])
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |callback|function|是| - |定时器执行函数|
  |delay|number|是|-| 定时器延时时间(毫秒/ms) |
  |id|string|是|-| 唯一标识,默认自动生成匿名唯一标识 |
  |params|Array<any>|-|-| 回调函数参数 |      
  	  
* 类型: string
* 示例
    ```javascript

        //示例1. 延时 10s 后执行一次打印输出(给定唯一标识)（仅执行一次）
        //return value interval unique identifier （返回指定的定时器唯一标识:forklift）
        const timerid = THINGX.Timer.addTimeout(()=>{
            console.warn("use the layer plug-in to change the color of the forklift model.");
        },1000,"forklift");
        console.wran(" unique identifier : %s ", timerid);
        
        //示例2. 延时 10s 后执行一次打印输出 (给定唯一标识和模型颜色)（仅执行一次）
        //return value interval unique identifier （返回指定的定时器唯一标识:forklift-color）
        const timerid = THINGX.Timer.addTimeout((params)=>{
            params?.foreach((element)=>{
                console.warn("the forklift turned from yellow to %s.",element);
            });      
        },1000,"forklift-color",['red','green']);
        console.wran(" unique identifier : %s ", timerid);



    ```
    ***

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.remove
> 移除特定(指定)定时器 THINGX.Timer.remove(id:string)
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |id|string|是| - |定时器唯一标识|   
  	  
* 类型: boolean
* 示例
    ```javascript

        //示例：移除特定(指定:forklift 叉车)定时器
        const result = THINGX.Timer.remove("forklift");
        console.warn("移除延时器 `forklift` : %s", result);
    
    ```
    ***

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.removeAll
> 移除Timer调度器内所有定时器 THINGX.Timer.removeAll()
<!-- * 参数: 无
* 类型: 无 -->
* 示例
    ```javascript

        //示例：移除Timer调度器内所有定时器
        THINGX.Timer.removeAll();

    ```
    ***

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.get
> 获取特定定时器实例  THINGX.Timer.get(id):Instance||null   
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |id|string|是| - |定时器唯一标识|   
  	  
* 类型: Instance （Timer: Type Definitions）
* 示例
    ```javascript

        //示例：获取特定(指定：forklift)定时器实例
        const instance = THINGX.Timer.get("forklift");

        console.warn("`forklift` 定时器实例 : ",instance);
        //实例结构参考 系统调试器(THINGX.Timer) Type Definitions
        
    ```
    ***

###  *<a href="#"><font color="grey">#</font></a>*  THINGX.Timer.getAll
> 获取Timer调度器内所有定时器 THINGX.Timer.getAll()
* 类型: Array.<Instance> （Timer: Type Definitions）
* 示例
    ```javascript

        //示例：获取Timer调度器内所有定时器
         const instances = THINGX.Timer.getAll();
        //打印输出获取到的 定时器实例
         instances?.foreach((instance,index)=>{
            console.warn("第 %s 个定时器实例 %s: ", index, instance);
            //实例结构参考 系统调试器(THINGX.Timer) Type Definitions
         });

    ```
    ***