import {funcAction} from "../../../src/layer/controller/FuncAction";

var assert = require('chai').assert;
import {ConeManager} from "../../../src/layer/controller/ConeManager";


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
        create:()=>{
            return {
                style:{
                    skipBoundingBox:""
                },
                start:()=>{}
            }
        },
        level: {
            current: {

                query: () => {
                    return [
                        {
                            name: "test1",
                            getAttribute:()=>"",
                            position:[1,1,1]
                        },
                        {
                            name: "test2",
                            getAttribute:()=>"",
                            position:[1,1,1]
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
        createSelector: (obj, app) => {

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
        manager = new ConeManager(app, config);
    });
    this.afterEach(() => {
        }
    );

    it("期待所有对象为两个", function () {
        assert.deepStrictEqual(manager.cones.length,2);
    });

    it("调用show接口，期待所有对象visible为true", function () {
        manager.show();
        manager.cones.forEach(twin => assert.isOk(twin.visible))
    });

    it("调用hide接口，期待所有对象visible为false", function () {
        manager.hide();
        manager.cones.forEach(twin => assert.isNotOk(twin.visible))
    });


});
