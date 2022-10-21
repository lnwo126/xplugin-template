import {funcAction} from "../../../src/core/controller/FuncAction";

var assert = require('chai').assert;
import * as _ from "lodash";
import {MessageExecutor} from "../../../src/core/controller/excutor/MessageExecutor";
import {SelectTwinExecutor} from "../../../src/core/controller/excutor/SelectTwinExecutor";
import {MessageExecuteManager} from "../../../src/core/controller/MessageExecuteManager";
import {ExecutorType} from "../../../src/core/controller/enum_type/ExecutorType";


describe("MessageExecutorManager  test", function () {
    const config = {
        "iframeResponseObject": "",
        "eventName": "test",
        "eventValue": "value",
        "selectObject": {
            "id": "qq",
            "propName": "prop",
            "queryType": "ASSIGN"
        },
        "flyToObject": {
            "id": "",
            "propName": "",
            "queryType": "IFRAME"
        },
        "changeBusiness": {
            "businessName": "",
            "businessPropName": "",
            "queryType": "ASSIGN"
        },
        "activeLayer": {
            "layerName": "",
            "layerPropName": "prop",
            "queryType": "IFRAME"
        },
        "triggerType": "selectObject",
        "collapse_1001": true
    }
    const app = {
        query:()=>{
            return {}
        },
        selection: {
            clear: () => {
            },
            select: () => {
            },
            camera: {
                flyTo: () => {
                }
            }
        },
        level: {
            current: {
                query: () => {
                    return [
                        {
                            name: "test1",
                        },
                        {
                            name: "test2",
                        }
                    ]
                }
            }
        }
    }
    let activeLayerInvoked = false;
    let changeBusinessInvoked = false;
    let mockGlobalLib = {
        activeLayer:(layerName)=>{
            activeLayerInvoked = true;
        },
        changeBusiness:(businessName)=>{
            changeBusinessInvoked = true;
        },

        convertQueryCondition: (query) => {
            return ""
        }
    }
    before(function () {
            funcAction.setApp(app);
            funcAction.setGlobalLib(mockGlobalLib);
        }
    );

    this.beforeEach(function () {
        activeLayerInvoked = false;
        changeBusinessInvoked = false;
    });
    this.afterEach(() => {
        }
    );


    it("示例化管理器", function () {
        const manager = new MessageExecuteManager(app, config)

    });


    it("canHandle,event的值,期待false", function () {
        const message = {
            data: {"data": "ready"}
        }
        const manager = new MessageExecuteManager(app, config)
        const result = manager.canHandle(message);
        assert.isNotOk(result);
    });

    it("canHandle,传eventName跟eventValue,期待true", function () {
        const message = {
            data: {"test": "value", "data": "ready"}
        }
        const manager = new MessageExecuteManager(app, config)
        const result = manager.canHandle(message);
        assert.isOk(result);
    });

    it("action,传message,期待执行", function () {
        const message = {
            data: {"test": "value", "prop": "ready"}
        }
        const manager = new MessageExecuteManager(app, config)
        manager.action(message);
    });

    it("测试激活图层,期待执行", function () {
        const message = {
            data: {"test": "value", "prop": "ready"}
        }
        config.triggerType = ExecutorType.ACTIVE_LAYER;
        const manager = new MessageExecuteManager(app, config)
        manager.action(message);
        assert.isOk(activeLayerInvoked);
    });

    it("测试切换业务,期待执行", function () {
        const message = {
            data: {"test": "value", "prop": "ready"}
        }
        config.triggerType = ExecutorType.CHANGE_BUSINESS;
        const manager = new MessageExecuteManager(app, config)
        manager.action(message);
        assert.isOk(changeBusinessInvoked);
    });

});
