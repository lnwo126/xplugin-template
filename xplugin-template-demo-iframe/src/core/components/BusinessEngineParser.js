//导入统一功能的命名定义
import { __ACTIONS__ } from "./__ACTIONS__";
export default class {

    #message;
    #__supported__;

    constructor() {

        //获取所支持的能力
        const { ACTIVATE, DEACTIVATE } = __ACTIONS__;
        this.#__supported__ = { ACTIVATE, DEACTIVATE };
    }
    /**
     * 业务激活（系统业务同时仅有一个业务能够被激活,不能同时激活多个业务，参考: ThingJS-X 业务模块介绍）
     * 业务的激活其本质是对业务的切换
     *      - THINGX.Business.activate(name); 业务激活
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Business.html#.activate__anchor
     *      - THINGX.Business.getActivated(); 获取当前激活的业务信息
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Business.html#.getActivated__anchor
     */
    Activate() {
        const validationresult = this.#validation();
        if (!validationresult) {
            return false;
        }

        // 可进行逻辑校验, 例如激活业务的能力，该业务已处于激活状态,那么我们可以
        // 提前进行判断拦截, 然后输出消息提醒即可,无需要进行API的重复调用
        // 是否添加校验逻辑, 依据具体需求和能力来确定
        // if (THINGX.Business.getActivated()?.name === parameters.target) {
        //     console.warn('%c [ iframe 消息引擎 ] The service is already active.', 'background: #FFFF37');
        //     return false;
        // }

        //激活目标（target为业务名称）
        const { target } = this.#message.parameters;
        THINGX.Business.activate(target);
    }

    /**
     * 业务取消激活
     *      - THINGX.Business.deactivate(); 取消当前激活的业务
     *      可参考: http://123.124.196.193:2023/thingjs-x-api/THINGX.Business.html#.deactivate__anchor
     */
    Deactivate() {

        //由于取消业务不需要任何参数,无需进行参数校验,直接访问API即可
        THINGX.Business.deactivate();
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
            default: {
                console.warn(`%c [ iframe 消息监听器 ] Only the following methods are supported: ${Object.values(this.#__supported__)}.`, 'background: #FFFF37');
                console.warn('%c [ iframe 消息监听器 ] There is no running method, please check whether the input is correct', 'background: #FFFF37');
            }
        }
    }
    /**
     * 检验参数的合法性,为调试错误等进行消息提醒
     * @param {校验参数} parameters 
     */
    #validation() {

        const { parameters } = this.#message;

        //e.g. : 参数非空及的校验
        // if (!(parameters?.target &&
        //     parameters.target !== undefined)) {
        //     console.warn('%c [ iframe 消息监听器 ] parameters:target Illegal parameter data', 'background: #FFFF37');
        //     return false;
        // }

        //e.g. : 参数格式的校验
        // if (Array.isArray(parameters)) {
        //     console.warn('%c [ iframe 消息监听器] Illegal parameter data ,the argument requires an object, but an array is entered.', 'background: #FFFF37');
        //     return false;
        // }

        return true;
    }
}