<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Namespace* 解构(THINGX.SnapshotAnimation)](#namespace-解构thingxsnapshotanimation)
- [*Method* THINGX.SnapshotAnimation.hide](#method-thingxsnapshotanimationhide)
- [*Method* THINGX.SnapshotAnimation.show](#method-thingxsnapshotanimationshow)
- [*Method* THINGX.SnapshotAnimation.play](#method-thingxsnapshotanimationplay)
- [*Method* THINGX.SnapshotAnimation.pause](#method-thingxsnapshotanimationpause)
- [*Method* THINGX.SnapshotAnimation.resume](#method-thingxsnapshotanimationresume)
- [*Method* THINGX.SnapshotAnimation.stop](#method-thingxsnapshotanimationstop)
- [*Method* THINGX.SnapshotAnimation.setPlayMode](#method-thingxsnapshotanimationsetplaymode)

<!-- /code_chunk_output -->

### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.SnapshotAnimation)
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
        - pause():void                          //暂停播放视点动画
        - resume():void                         //恢复播放视点动画
        - stop():void                           //停止播放视点动画
        - setPlayMode(mode:string):void         //设置视点动画播放模式 [once:不循环,只执行一次、repeat:不断循环] 

```


### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.hide
> 隐藏视点动画模块,主要指的是视点动画栏UI隐藏, THINGX.SnapshotAnimation.hide():void
   
* 类型: `void`
* 示例
    ```javascript

        //隐藏视点动画模块,主要指的是视点动画栏UI隐藏
        //示例. 场景加载完成后,直接调用api 隐藏视点动画(栏)UI模块

        THINGX.SnapshotAnimation.hide();
        //即可将视点动画栏模块隐藏

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.show
> 显示视点动画模块,主要指的是视点动画栏UI显示, THINGX.SnapshotAnimation.show():void
   
* 类型: `void`
* 示例
    ```javascript

        //显示视点动画模块,主要指的是视点动画栏UI显示

        //示例. 由于在 THINGX.SnapshotAnimation.hide() 示例中我们已将视点动画模块隐藏,直接调用api 显示视点动画(栏)UI模块，检查结果

        THINGX.SnapshotAnimation.show();
        //即可将视点动画栏模块显示

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.play
> 播放视点动画模块,主要指的是视点动画栏UI显示, THINGX.SnapshotAnimation.play(name:string):Promise.Boolean
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |name|string|是| - | 视点动画名称 |    
* 类型: `Promise.<Boolean>`
* 示例
    ```javascript

        //播放视点动画模块,主要指的是播放视点动画

        //示例. 播放`园区巡游`视点动画
        THINGX.SnapshotAnimation.play("园区巡游").then((result)=>{
             console.warn("视点动画播放: %s", result);
        });

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.pause
> 暂停播放视点动画, THINGX.SnapshotAnimation.pause():void
   
* 类型: `void`
* 示例
    ```javascript

        //暂停当前视点动画

        //示例. 暂停播放当前视点动画
        THINGX.SnapshotAnimation.pause();

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.resume
> 恢复播放视点动画, THINGX.SnapshotAnimation.resume():void
   
* 类型: `void`
* 示例
    ```javascript

        //恢复当前视点动画

        //示例. 暂停播放当前视点动画
        THINGX.SnapshotAnimation.resume();

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.stop
> 停止播放视点动画, THINGX.SnapshotAnimation.stop():boolean
   
* 类型: `void`
* 示例
    ```javascript

        //停止播放当前视点动画

        //示例. 停止播放视点动画
        THINGX.SnapshotAnimation.stop();

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.SnapshotAnimation.setPlayMode
> 设置视点动画播放模式, THINGX.SnapshotAnimation.setPlayMode(mode:string):void
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |mode|string|否|once  | 设置视点动画播放模式 </br>once:不循环,只执行一次、loop:单个循环 、listloop:列表循环 |    
* 类型: void    
* 示例
    ```javascript

        // 设置视点动画播放模式

        // 示例. 循环播放`园区巡游`视点动画 
        // 注: 列表循环以 `园区巡游` 视点动画播放开始
        THINGX.SnapshotAnimation.setPlayMode("listloop");
        THINGX.SnapshotAnimation.play("园区巡游").then((result)=>{
             console.warn("视点动画播放: %s", result);
        });

    ```
    ***

!> 视点动画模块操作相关 支持   
**质量保证:** `武帅龙`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  