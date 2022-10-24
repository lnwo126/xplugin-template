import {funcAction} from "./FuncAction";
import {createUUID} from "./uuid";

export class DisplayTwin {
    constructor(obj) {
        this.id = createUUID();
        this.obj = obj;
        this.visible = true;
        this.decorator = null;
    }

    show() {
        this.visible = true;
        this._fadeInObj();
        this._createDecorator();
        funcAction.showObject(this.obj);
    }

    hide() {
        this.visible = false;
        this._removeDecorator();
        funcAction.hideObject(this.obj);
    }

    _fadeInObj() {
        funcAction.fadeInObject(this.obj, {
            type: "fadeIn",
            lerpType: 'Quartic.In',
            sType: "x", // 空间排序类型;
            purpose: this.id
        });
    }

    _createDecorator() {
        if (this.decorator) return this.decorator;
        this.decorator = funcAction.createDecorator(this.obj, 'showHeadText_' + this.id, 'Prefab/Default/TextBubble', {
            name: 'TextBubble',
            size: 4,
            keepSize: true, // 保持像素大小
            getMethod: 'presetValue',
            presetValue: this.obj.name,
            layoutOffset: [0, 0.1, 0],
        });
        return this.decorator;
    }

    _removeDecorator() {
        if (this.decorator) {
            funcAction.removeDecorator(this.obj, 'showHeadText_' + this.id)
            this.decorator = null;
        }
    }

}