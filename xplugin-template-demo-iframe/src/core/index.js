import CorePlugin from "@thingjs-x/xplugin-core/dist/plugin/core/CorePlugin";

import BusinessEngineParser from "./components/BusinessEngineParser";
import LayerEngineParser from "./components/LayerEngineParser";

export default class extends CorePlugin {


    #BusinessEngineParser;
    #LayerEngineParser;
    constructor() {
        super();
    }

    onInstall() {
        this.#BusinessEngineParser = new BusinessEngineParser();
        this.#LayerEngineParser = new LayerEngineParser();
    }
    onLoaded() {

        console.info('%c [ IFRAME消息监听器 ] loaded', 'background:skyblue');

        /**添加校验,当场景不被作为子页面嵌入的情况下,直接停止相关代码的注册执行 */
        if (window && window.self === window.top) {
            console.warn('%c [ IFRAME消息监听器 ] The non embedded ThingJS-X service does not need to initialize the iframe message listener core management module', 'background: #FFFF37');
            this.#BusinessEngineParser = null;
            this.#LayerEngineParser = null;
            return false;
        };



        window.addEventListener("message", (event) => {

            // source – 消息源，消息的发送窗口/iframe。
            // origin – 消息源的URI(可能包含协议、域名和端口)，用来验证数据源。
            // data – 发送方发送给接收方的数据。

            if (!event && event.data) {
                return false;
            }
            if (!(event.data instanceof Object)) {
                console.warn('%c [ IFRAME消息监听器 ] Illegal message format. Please ensure that the message format meets the requirements of iframe message listener', 'background: #FFFF37');
                return false;
            }


            const { type } = event.data;

            switch (type) {
                case 'business':
                    console.group(" [ IFRAME消息监听器 ] ThingJS-X Plus::iframe");
                    console.info('%c BusinessEngineParser is ready', 'background:#ccffcc;');
                    this.#BusinessEngineParser.SemanticParser(event.data);
                    console.info("%c BusinessEngineParser execution complete. ", 'background:#ccffcc;');
                    console.groupEnd();
                    break;
                case 'layer':
                    console.group(" [ IFRAME消息监听器 ] ThingJS-X Plus::iframe");
                    console.info('%c LayerEngineParser is ready', 'background:#ccffcc;');
                    this.#LayerEngineParser.SemanticParser(event.data);
                    console.info("%c LayerEngineParser execution complete. ", 'background:#ccffcc;');
                    console.groupEnd();
                    break;
                default:
                    console.log("...");
            }


            //通知加载完成,发送加载完成到顶层窗口
            let returnMessageEvent = {
                type: 'ThingJS-X::IframeMessageEngineLoaded',
                message: ' [ IFRAME消息监听器 ] 初始化完成，可以进行ThingJS-X::iframe postmessage 通信.'
            };
            console.info('%c [ IFRAME消息监听器 ] ::DONE:: to return the message: ', 'background: #ccffcc;', returnMessageEvent);
            window.top.postMessage(returnMessageEvent, "*");
        });
    }

    onUninstall() {
        this.#BusinessEngineParser = null;
        this.#LayerEngineParser = null;
    }

}   
