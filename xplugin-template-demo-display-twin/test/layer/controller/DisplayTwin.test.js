import {funcAction} from "../../../src/layer/controller/FuncAction";

const {DisplayTwin} = require("../../../src/layer/controller/DisplayTwin");
var assert = require('chai').assert;
import * as _ from "lodash";


describe("DisplayTwin  test", function () {
    let showObjectInvoked = false;
    let hideObjectInvoked = false;
    let createDecoratorInvoked = false;
    let removeDecoratorInvoked = false;
    let createSelectorInvoked = false;
    let fadeInObjectInvoked = false;
    let convertQueryConditionInvoked = false;
    let displayTwin = null;
    let mockGlobalLib = {
        showObject: (obj) => {
            showObjectInvoked = true;
        },
        hideObject: (obj) => {
            hideObjectInvoked = true;
        },
        createDecorator: (obj, id, type, config) => {
            createDecoratorInvoked = true;
            return {};
        },
        removeDecorator: (obj, id) => {
            removeDecoratorInvoked = true;
        },
        createSelector: (obj, app) => {
            createSelectorInvoked = true;
        },
        fadeInObject: (selector, config) => {
            fadeInObjectInvoked= true;
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
        createDecoratorInvoked = false;
        removeDecoratorInvoked = false;
        createSelectorInvoked = false;
        fadeInObjectInvoked = false;
        convertQueryConditionInvoked = false;
        displayTwin = new DisplayTwin({
            name:"test"
        });
    });
    this.afterEach(() => {
        }
    );

    it("实例化Twin对象，期待id不为空", function () {

        assert.isNotOk(_.isNil(displayTwin.id))
    });

    it("调用show接口，期待visible为true,创建标示，以及渐隐", function () {

        displayTwin.show();
        assert.isOk(displayTwin.visible);
        assert.isOk(createDecoratorInvoked);
        assert.isOk(fadeInObjectInvoked);
    });

    it("调用hide接口，期待visible为false，移除标示", function () {
        displayTwin.show();
        displayTwin.hide();
        assert.isOk(hideObjectInvoked);
        assert.isOk(removeDecoratorInvoked);
        assert.isNotOk(displayTwin.visible);
    });

});
