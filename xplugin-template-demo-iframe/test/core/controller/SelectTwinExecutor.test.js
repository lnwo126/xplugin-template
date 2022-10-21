import {funcAction} from "../../../src/core/controller/FuncAction";

var assert = require('chai').assert;
import * as _ from "lodash";
import {MessageExecutor} from "../../../src/core/controller/excutor/MessageExecutor";
import {SelectTwinExecutor} from "../../../src/core/controller/excutor/SelectTwinExecutor";
import {QueryType} from "../../../src/core/controller/enum_type/QueryType";


describe("MessageExecutor  test", function () {
    let showObjectInvoked = false;
    let convertQueryConditionInvoked = false;
    let messageExecutor = null;
    let mockGlobalLib = {
        convertQueryCondition: (query) => {
            convertQueryConditionInvoked = true;
        }
    }
    before(function () {
            funcAction.setGlobalLib(mockGlobalLib);
        }
    );
    this.beforeEach(function () {
        showObjectInvoked = false;
        convertQueryConditionInvoked = false;
        messageExecutor = new SelectTwinExecutor({
            eventName: "test",
            eventValue: "value"
        });
    });
    this.afterEach(() => {
        }
    );

    it("测试queryType是否赋值正确，期待正确", function () {
       let executor = new SelectTwinExecutor({
           eventName: "test",
           eventValue: "value",
           "selectObject": {
               "id": "",
               "propName": "0000",
               "queryType": "ASSIGN"
           },
       })
        assert.deepStrictEqual(executor.queryType,QueryType.ASSIGN);

        executor = new SelectTwinExecutor({
            eventName: "test",
            eventValue: "value",
            "selectObject": {
                "id": "",
                "propName": "0000",
                "queryType": "IFRAME"
            },
        })
        assert.deepStrictEqual(executor.queryType,QueryType.FROM_IFRAME_MESSAGE)
    });

    it("调用canHandle接口，传入不能处理的值，期待false", function () {
        const result = messageExecutor.canHandle({"type": "development", "data": "ready"});
        assert.isNotOk(result);
    });

    it("调用canHandle接口，传入能处理的值，期待true", function () {
        const result = messageExecutor.canHandle({"test": "value", "data": "ready"});
        assert.isOk(result);
    });
});
