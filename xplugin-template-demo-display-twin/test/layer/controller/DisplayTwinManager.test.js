import {funcAction} from "../../../src/layer/controller/FuncAction";

const {DisplayTwin} = require("../../../src/layer/controller/DisplayTwin");
var assert = require('chai').assert;
import * as _ from "lodash";
import {DisplayTwinManager} from "../../../src/layer/controller/DisplayTwinManager";


describe("DisplayTwinManager  test", function () {

    let manager = null;
    const config = {
        "pluginName": "test",
        "query": {
            "condition": {
                "uid": "C94C055710E000017E3847D09D006030",
                "name": "建筑",
                "type": 0
            },
            "value": ""
        }
    }
    const app = {
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
    let mockGlobalLib = {
        showObject: (obj) => {

        },
        hideObject: (obj) => {

        },
        createDecorator: (obj, id, type, config) => {
            return {};
        },
        removeDecorator: (obj, id) => {

        },
        createSelector: (obj, app) => {

        },
        fadeInObject: (selector, config) => {

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
        manager = new DisplayTwinManager(app, config);
    });
    this.afterEach(() => {
        }
    );

    it("期待所有对象为两个", function () {
        assert.deepStrictEqual(manager.twins.length,2);
    });

    it("调用show接口，期待所有对象visible为true", function () {
        manager.show();
        manager.twins.forEach(twin => assert.isOk(twin.visible))
    });

    it("调用hide接口，期待所有对象visible为false", function () {
        manager.hide();
        manager.twins.forEach(twin => assert.isNotOk(twin.visible))
    });


});
