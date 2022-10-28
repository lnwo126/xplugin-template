//导入统一功能的命名定义
import { __ACTIONS__ } from "./__ACTIONS__";
export default class {

    #message;
    #__supported__;
    #__purpose__ = "_default_";
    constructor() {

        //获取所支持的能力
        const { ACTIVATE, DEACTIVATE, DEACTIVATE_ALL, SHOW, HIDE, REFRESH } = __ACTIONS__;
        this.#__supported__ = { ACTIVATE, DEACTIVATE, DEACTIVATE_ALL, SHOW, HIDE, REFRESH };
    }
    /**
     * 图层激活
     * 支持同时激活多个图层
     *      - THINGX.Layer.activate(name [, purpose]); 激活图层
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.activate__anchor
     */
    Activate() {
        const parameters = this.#convertParametersToArrayData();
        parameters.forEach((item,) => {
            let targetObjectArray = new Array();
            targetObjectArray.push(item.target);
            const purpose = item.purpose || this.#__purpose__;
            THINGX.Layer.activate(targetObjectArray, purpose);
        });
    }

    /**
     * 取消激活图层
     *      -  THINGX.Layer.deactivate(name[, purpose]); 取消激活图层
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.deactivate__anchor
     */
    Deactivate() {

        const parameters = this.#convertParametersToArrayData();
        parameters.forEach((item,) => {
            let targetObjectArray = new Array();
            targetObjectArray.push(item.target);
            const purpose = item.purpose || this.#__purpose__;
            THINGX.Layer.deactivate(targetObjectArray, purpose);
        });
    }
    /**
     * 取消所有激活的图层
     *      - THINGX.Layer.deactivateAll(); 取消所有激活的图层
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.deactivateAll__anchor
     */
    DeactivateAll() {
        //由于取消业务不需要任何参数,无需进行参数校验,直接访问API即可
        THINGX.Layer.deactivateAll();
    }

    /**
     * 整个图层模块的显示
     *      - THINGX.Layer.show();显示图层模块
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.show__anchor
     */
    Show() {
        THINGX.Layer.show();
    }
    /**
     * 整个图层模块的隐藏
     *      - THINGX.Layer.hide();隐藏图层模块
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.hide__anchor
     */
    Hide() {
        THINGX.Layer.hide();
    }
    /**
     * 整个图层模块的显示
     *      - THINGX.Layer.refresh();重新读取可视化配置 并根据当前层级重新创建图层
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Layer.html#.refresh__anchor
     */
    Refresh() {
        THINGX.Layer.refresh();
    }


    SemanticParser(message) {
        this.#message = message;

        const { action } = message;

        switch (action) {
            case this.#__supported__.ACTIVATE:
                this.Activate();
                break;
            case this.#__supported__.DEACTIVATE:
                this.Deactivate();
                break;
            case this.#__supported__.DEACTIVATE_ALL:
                this.DeactivateAll();
                break;
            case this.#__supported__.SHOW:
                this.Show();
                break;
            case this.#__supported__.HIDE:
                this.Hide();
                break;
            case this.#__supported__.REFRESH:
                this.Refresh();
                break;
            default: {
                console.warn(`%c [ iframe 消息监听器 ] Only the following methods are supported: ${Object.values(this.#__supported__)}.`, 'background: #FFFF37');
                console.warn('%c [ iframe 消息监听器 ] There is no running method, please check whether the input is correct', 'background: #FFFF37');
            }
        }
    }

    //转换语义化参数格式
    //进行格式处理,支持批量操作
    #convertParametersToArrayData() {

        let returndata = new Array();
        const { parameters } = this.#message;
        if (Array.isArray(parameters)) {
            return parameters;
        }
        if (Object.prototype.toString.call(parameters) === '[object Object]') {
            if (!(parameters?.target &&
                parameters.target !== undefined)) {
                console.warn('%c [ iframe 消息监听器 ] parameters::target Illegal parameter data ', 'background: #FFFF37');
                return returndata;
            }
            returndata.push(parameters);
            return returndata;
        }
        return returndata
    }
}