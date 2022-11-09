<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [场景控制模块操作相关(THINGX.SceneControl)](#场景控制模块操作相关thingxscenecontrol)
    - [*#* THINGX.SceneControl.hide](#-thingxscenecontrolhide)
    - [*#* THINGX.SceneControl.show](#-thingxscenecontrolshow)
    - [*#* THINGX.SceneControl.activate](#-thingxscenecontrolactivate)
    - [*#* THINGX.SceneControl.deactivate](#-thingxscenecontroldeactivate)
    - [*#* THINGX.SceneControl.deactivateAll](#-thingxscenecontroldeactivateall)
    - [*#* THINGX.SceneControl.refresh](#-thingxscenecontrolrefresh)
    - [*#* THINGX.SceneControl.getActivatedNames](#-thingxscenecontrolgetactivatednames)

<!-- /code_chunk_output -->

### 场景控制模块操作相关(THINGX.SceneControl)
> THINGX.SceneControl:namespace
```javascript
    //应用系统针对系统场景控制模块的相关操作能力
    //主要提供针对应用系统场景控制模块的显示、隐藏、激活项等能力

    //THING.BaseObject 相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.SceneControl 解构
    THINGX.SceneControl:namespace
        - hide():void                           //场景控制模块隐藏    
        - show():void                           //场景控制模块显示
        - activate(name):void                   //激活场景控制项
        - deactivate(name):void                 //取消场景控制
        - deactivateAll():void                  //取消所有激活的场景控制
        - refresh():Promise.<boolean>           //重新读取可视化配置 并根据当前层级重新创建场景控制功能
        - getActivatedNames():Array.<string>    //获取当前层级已激活的场景控制名称   

```


##### *<a href="#">#</a>* THINGX.SceneControl.hide
> 隐藏场景控制模块,主要指的是场景控制栏UI隐藏, THINGX.SceneControl.hide():void
   
* 类型: void
* 示例
    ```javascript

        //隐藏场景控制模块,主要指的是场景控制栏UI隐藏
        //示例. 场景加载完成后,直接调用api 隐藏场景控制(栏)UI模块

        THINGX.SceneControl.hide();
        //即可将场景控制栏模块隐藏

    ```
    ***

##### *<a href="#">#</a>* THINGX.SceneControl.show
> 显示场景控制模块,主要指的是场景控制栏UI显示, THINGX.SceneControl.show():void
   
* 类型: void
* 示例
    ```javascript

        //显示场景控制模块,主要指的是场景控制栏UI显示

        //示例. 由于在 THINGX.SceneControl.hide() 示例中我们已将场景控制模块隐藏,直接调用api 显示场景控制(栏)UI模块，检查结果

        THINGX.SceneControl.show();
        //即可将场景控制栏模块显示

    ```
    ***

##### *<a href="#">#</a>* THINGX.SceneControl.activate
> 激活场景控制项,主要指的是激活具体场景控制项, THINGX.SceneControl.activate(name):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string 或 Array.<string>|是| - | 场景控制名称 |      
* 类型: void
* 示例
    ```javascript

        //激活场景控制项,主要指的是激活具体场景控制项

        //示例1.
        THINGX.SceneControl.activate("3D/2D切换");

        //示例2. 
        THINGX.SceneControl.activate(["绕建筑旋转", "楼层展开"]);

    ```
    ***
                             
##### *<a href="#">#</a>* THINGX.SceneControl.deactivate
> 取消图层,主要指的是具体图层项, THINGX.SceneControl.deactivate(name):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string 或 Array.<string>|是| - | 场景控制名称 |   
* 类型: void
* 示例
    ```javascript

        //取消场景控制,主要指的是具体场景控制项

        //示例1. 取消激活 `楼层展开`图层
        THINGX.SceneControl.deactivate("楼层展开");

        //示例2. 取消激活 `楼层展开`图层、`3D/2D切换`图层
        THINGX.SceneControl.deactivate(["楼层展开", "3D/2D切换"]);

    ```
    ***

##### *<a href="#">#</a>* THINGX.SceneControl.deactivateAll
> 取消所有激活的场景控制,主要指的是具体场景控制项, THINGX.SceneControl.deactivateAll():void
  
* 类型: void
* 示例
    ```javascript

        //取消所有激活的场景控制,主要指的是具体场景控制项

        //示例. 取消激活 所有激活的图层
        THINGX.SceneControl.deactivateAll();

    ```
    ***

##### *<a href="#">#</a>* THINGX.SceneControl.refresh
> 刷新整个场景控制模块,会进行最新场景控制配置的请求获取, THINGX.SceneControl.refresh():Promise.Boolean
   
* 类型: void
* 示例
    ```javascript

        //刷新整个场景控制模块,会进行最新场景控制配置的请求获取
        //重新读取可视化配置 并根据当前层级重新创建场景控制
        //注：场景控制项是可同时取消多项

        //示例. 刷新场景控制模块后进行信息打印
        THINGX.SceneControl.refresh().then((result)=>{
            console.warn("场景控制模块刷新完成: %s", result);
        });

        //print result: 场景控制模块刷新完成: true
    ```
    ***

##### *<a href="#">#</a>* THINGX.SceneControl.getActivatedNames
> 获取当前层级已激活的场景控制名称, THINGX.SceneControl.getActivatedNames():Array 

* 类型: void
* 示例
    ```javascript

        //获取当前层级已激活的图层名称

        //示例. 获取当前层级已激活的图层名称
        const names = THINGX.SceneControl.getActivatedName();
        console.warn("当前激活的场景控制为: %s", ...names);
        //print result: 当前激活的场景控制为: 楼层展开 3D/2D切换 四季变换

    ```
    ***