import {funcAction} from "../../../src/layer/controller/FuncAction";

const {cone} = require("../../../src/layer/controller/cone");
var assert = require('chai').assert;
import * as _ from "lodash";
import {Cone} from "../../../src/layer/controller/Cone";

const sinon = require('sinon');

describe("Cone  test", function () {
    let showObjectInvoked = false;
    let hideObjectInvoked = false;
    let createVideoProbeInvoked = false;
    let createSelectorInvoked = false;
    let fadeInObjectInvoked = false;
    let convertQueryConditionInvoked = false;
    let cone = null;
    let mockGlobalLib = {
        showObject: (obj) => {
            showObjectInvoked = true;
        },
        hideObject: (obj) => {
            hideObjectInvoked = true;
        },

        createSelector: (obj, app) => {
            createSelectorInvoked = true;
        },

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
        hideObjectInvoked = false;
        createVideoProbeInvoked = false;
        createSelectorInvoked = false;
        fadeInObjectInvoked = false;
        convertQueryConditionInvoked = false;
        cone = new Cone({
            name: "test"
        });
    });
    this.afterEach(() => {
        }
    );

    it("实例化Cone对象，期待id不为空", function () {
        assert.isNotOk(_.isNil(cone.id))
    });

    it("调用show接口，期待visible为true,创建VideoProbe，", function () {
        const mockCreateVideoProbe = sinon.stub(funcAction, 'createViewProbe')
            .callsFake(() => {
                createVideoProbeInvoked = true;
                return {
                    style:{
                        skipBoundingBox:""
                    },
                    start:()=>{}
                }
            });
        const mockShowObject = sinon.stub(funcAction, 'showObject')
            .callsFake(() => {
                showObjectInvoked = true;
            });
        cone.show();
        assert.isOk(cone.visible);
        assert.isOk(createVideoProbeInvoked);
        assert.isOk(showObjectInvoked);
        mockCreateVideoProbe.restore();
        mockShowObject.restore();

    });

    it("调用hide接口，期待visible为false，移除标示", function () {
        const mockCreateVideoProbe = sinon.stub(funcAction, 'createViewProbe')
            .callsFake(() => {
                createVideoProbeInvoked = true;
                return {
                    style:{
                        skipBoundingBox:""
                    },
                    start:()=>{}
                }
            });
        const mockShowObject = sinon.stub(funcAction, 'showObject')
            .callsFake(() => {
                showObjectInvoked = true;
            });
        const mockHideObject = sinon.stub(funcAction, 'hideObject')
            .callsFake(() => {
                hideObjectInvoked = true;
            });
        cone.show();
        cone.hide();
        assert.isOk(hideObjectInvoked);
        assert.isNotOk(cone.visible);
        mockCreateVideoProbe.restore();
        mockShowObject.restore();
        mockHideObject.restore();
    });

});
