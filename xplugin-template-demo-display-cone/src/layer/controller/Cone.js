import {funcAction} from "./FuncAction";
import {createUUID} from "./uuid";

export class Cone {
    constructor(obj) {
        this.id = createUUID();
        this.obj = obj;
        this.visible = true;
        this.videoProbeThingJSObj = null;
    }

    show() {
        this.visible = true;
        this._createVideoProbeThingJSObj();
        funcAction.showObject(this.videoProbeThingJSObj);
    }

    hide() {
        this.visible = false;
        funcAction.hideObject(this.videoProbeThingJSObj);
    }


    _createVideoProbeThingJSObj() {
        if (this.videoProbeThingJSObj) return this.videoProbeThingJSObj;
        this.videoProbeThingJSObj = funcAction.createViewProbe(this.obj, this.id);
        this.videoProbeThingJSObj.style.skipBoundingBox = true;
        this.videoProbeThingJSObj.start( funcAction.createSelector(), true, true, true);
        return this.videoProbeThingJSObj;
    }

    _removeVideoProbeThingJSObj() {
        if (this.videoProbeThingJSObj) {
            funcAction.removeViewProbe(this.videoProbeThingJSObj)
            this.videoProbeThingJSObj = null;
        }
    }

}