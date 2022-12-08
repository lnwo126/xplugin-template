<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*Namespace* 解构(THINGX.Scene)](#namespace-解构thingxscene)

<!-- /code_chunk_output -->




### *<a><font color="grey">Namespace</font></a>* 解构(THINGX.Scene)
> THINGX.Scene:namespace
```javascript
    //场景相关

    // THINGX.Scene 解构
    THINGX.Scene:namespace //support thingjs query syntax expression
        - getCurrent(): THINGX.Scene.Scene       //获取当前场景信息
        - getEntry(): THINGX.Scene.Scene         //获取入口场景信息

    Type Definitions
        - Scene     
            - id:string             // 场景ID(孪生体ID)          
            - name:string           // 场景名称
            - type:string           // 场景类型 PARK 园区、EARTH 地球
            - _CICOD_:string
            - _DBID_:string         

```

### *<a><font color="grey">Method</font></a>* THINGX.Scene.getCurrent
> 获取当前场景信息, THINGX.Scene.getCurrent():Scene
   
* 类型: `object`
* 示例
    ```javascript

        //获取当前场景信息
        //示例. 场景加载完成后,直接调用api 获取当前场景信息

        const scene = THINGX.Scene.getCurrent();
        console.warn("当前场景名称为: %s", scene.name);
        //print result: 当前场景名称为: 优锘产业园

    ```
    ***

### *<a><font color="grey">Method</font></a>* THINGX.Scene.getEntry
> 获取入口场景信息, THINGX.Scene.getEntry():Scene
   
* 类型: `object`
* 示例
    ```javascript

        //获取入口场景信息
        //示例. 获取入口场景信息

        const scene = THINGX.Scene.getEntry();
        console.warn("当前场景名称为: %s", scene.name);
        //print result: 当前场景名称为: 地球

    ```
    ***
