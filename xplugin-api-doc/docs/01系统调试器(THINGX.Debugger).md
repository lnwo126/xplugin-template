<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [*<a><font color="grey">Namespace</font></a>*  解构(THINGX.Debugger)](#font-colorgreynamespacefont--解构thingxdebugger)
- [*<a><font color="grey">Method</font></a>*  THINGX.Debugger.getLevel](#font-colorgreymethodfont--thingxdebuggergetlevel)
- [*<a><font color="grey">Method</font></a>*  THINGX.Debugger.setLevel](#font-colorgreymethodfont--thingxdebuggersetlevel)

<!-- /code_chunk_output -->

###  *<a><font color="grey">Namespace</font></a>*  解构(THINGX.Debugger)
> THINGX.Debugger:namespace
```javascript

    // 使用说明 （由于应用系统或插件在日志输出的规范性操作上无法按照统一约束开发要求进行操作、
    // 造成系统加载大量日志或非规范日志,导致性能等相关问题,故该API 作用较大应该进行重点学习和使用。）
    // 该系统需要对ThingJS-X 系统使用的开发者、实施人员重点了解的API
    // 以帮助其在调试系统过程中排查问题

    
    //  THINGX.Debugger 解构
    THINGX.Debugger:namespace
        Members
        // - console : overwrite
        // - consoleWhiteList : ['debug', 'log', 'info', 'warn', 'error']
        Methods
        - getLevel():string                                //获取调试等级
        - setLevel(level:string [, storage:boolean]):void  //设置调试等级
    
```
!> **注意**     
`禁止`在`插件代码`开发中使用该api`命名空间`内接口

### *<a><font color="grey">Method</font></a>*  THINGX.Debugger.getLevel
> 获取调试等级  THINGX.Debugger.getLevel()
* 类型: string
* 示例
    ```javascript
        const level = THINGX.Debugger.getLevel();  
        console.warn(level);
    ```
    ***

### *<a><font color="grey">Method</font></a>*  THINGX.Debugger.setLevel
> 设置调试等级  THINGX.Debugger.setLevel([level:string][,storage:boolean]) 
* 参数
  ||||||
  |-|-|-|-|-|
  |名称|类型|必填|默认值|描述|
  |level|string|-| warn |console打印等级</br>顺序为:</br>error> warn > info > log > debug|
  |storage|boolean|-|false| 存储到local storage中，下次进入直接生效 |
  				
* 类型: void
* 示例
    ```javascript
    //示例1.
        THINGX.Debugger.setLevel('debug');
    //示例2.
        THINGX.Debugger.setLevel('debug',true);
    ```
    ***

!> 系统调试器 支持   
**质量保证:** `刘远健`    
**审核校正:** `唐鑫` 、`张光光`  
**问题反馈:** `张明雷(zhangminglei@uino.com)`  