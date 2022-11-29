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

