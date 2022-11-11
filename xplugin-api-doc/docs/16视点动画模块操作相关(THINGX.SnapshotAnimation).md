<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [视点动画模块操作相关(THINGX.SnapshotAnimation)](#视点动画模块操作相关thingxsnapshotanimation)
    - [*#* THINGX.SnapshotAnimation.hide](#-thingxsnapshotanimationhide)
    - [*#* THINGX.SnapshotAnimation.show](#-thingxsnapshotanimationshow)
    - [*#* THINGX.SnapshotAnimation.play](#-thingxsnapshotanimationplay)
    - [*#* THINGX.SnapshotAnimation.pause](#-thingxsnapshotanimationpause)
    - [*#* THINGX.SnapshotAnimation.resume](#-thingxsnapshotanimationresume)
    - [*#* THINGX.SnapshotAnimation.stop](#-thingxsnapshotanimationstop)
    - [*#* THINGX.SnapshotAnimation.setPlayMode](#-thingxsnapshotanimationsetplaymode)

<!-- /code_chunk_output -->

### 视点动画模块操作相关(THINGX.SnapshotAnimation)
> THINGX.SnapshotAnimation:namespace
```javascript
    //应用系统针对系统视点动画模块的相关操作能力
    //主要提供针对应用系统视点动画模块的显示、隐藏、激活项等能力

    //THING.BaseObject 相关属性和方法可 参考thingjs api 物体基类章节: https://docs.thingjs.com/cn/apidocs/THING.BaseObject.html)

    // THINGX.SnapshotAnimation 解构
    THINGX.SnapshotAnimation:namespace
        - hide():void                           //视点动画模块隐藏    
        - show():void                           //视点动画模块显示
        - play(name:string):Promise.<boolean>   //播放视点动画
        - pause():boolean                       //暂停播放视点动画
        - resume():boolean                      //恢复播放视点动画
        - stop():boolean                        //停止播放视点动画
        - setMode(mode:string):boolean          //设置视点动画播放模式 [once:不循环,只执行一次、repeat:不断循环] 

```


##### *<a href="#">#</a>* THINGX.SnapshotAnimation.hide
> 隐藏视点动画模块,主要指的是视点动画栏UI隐藏, THINGX.SnapshotAnimation.hide():void
   
* 类型: void
* 示例
    ```javascript

        //隐藏视点动画模块,主要指的是视点动画栏UI隐藏
        //示例. 场景加载完成后,直接调用api 隐藏视点动画(栏)UI模块

        THINGX.SnapshotAnimation.hide();
        //即可将视点动画栏模块隐藏

    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.show
> 显示视点动画模块,主要指的是视点动画栏UI显示, THINGX.SnapshotAnimation.show():void
   
* 类型: void
* 示例
    ```javascript

        //显示视点动画模块,主要指的是视点动画栏UI显示

        //示例. 由于在 THINGX.SnapshotAnimation.hide() 示例中我们已将视点动画模块隐藏,直接调用api 显示视点动画(栏)UI模块，检查结果

        THINGX.SnapshotAnimation.show();
        //即可将视点动画栏模块显示

    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.play
> 播放视点动画模块,主要指的是视点动画栏UI显示, THINGX.SnapshotAnimation.play(name:string):Promise.Boolean
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 视点动画名称 |    
* 类型: Promise.<boolean>
* 示例
    ```javascript

        //播放视点动画模块,主要指的是播放视点动画

        //示例. 播放`园区巡游`视点动画
        THINGX.SnapshotAnimation.play("园区巡游").then((result)=>{
             console.warn("视点动画播放: %s", result);
        });

    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.pause
> 暂停播放视点动画, THINGX.SnapshotAnimation.pause():boolean
   
* 类型: boolean
* 示例
    ```javascript

        //暂停播放视点动画

        //示例. 暂停播放当前视点动画
        const result = THINGX.SnapshotAnimation.pause();
        console.warn("视点动画暂停播放: %s", result);
        //print result: 视点动画暂停播放: true
        

    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.resume
> 恢复播放视点动画, THINGX.SnapshotAnimation.resume():boolean
   
* 类型: boolean
* 示例
    ```javascript

        //暂停播放视点动画模块

        //示例. 暂停播放当前视点动画
        const result = THINGX.SnapshotAnimation.resume();
        console.warn("视点动画暂停播放: %s", result);
         //print result: 视点动画暂停播放: true
       

    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.stop
> 停止播放视点动画, THINGX.SnapshotAnimation.stop():boolean
   
* 类型: boolean
* 示例
    ```javascript

        //停止播放视点动画

        //示例. 停止播放视点动画
        const result = THINGX.SnapshotAnimation.stop();
        console.warn("视点动画停止播放: %s", result);
        //print result: 视点动画停止播放: true
    ```
    ***

##### *<a href="#">#</a>* THINGX.SnapshotAnimation.setPlayMode
> 设置视点动画播放模式, THINGX.SnapshotAnimation.setPlayMode(mode:string):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |mode|string|否|once  | 设置视点动画播放模式 </br>once:不循环,只执行一次、repeat:不断循环 ,listloop:列表循环 |    
* 类型: void
* 示例
    ```javascript

        //设置视点动画播放模式
        // 视点动画播放模目前支持 once、repeat

        //示例. 循环播放`园区巡游`视点动画
        THINGX.SnapshotAnimation.setPlayMode("repeat");
        THINGX.SnapshotAnimation.play("园区巡游").then((result)=>{
             console.warn("视点动画播放: %s", result);
        });

    ```
    ***