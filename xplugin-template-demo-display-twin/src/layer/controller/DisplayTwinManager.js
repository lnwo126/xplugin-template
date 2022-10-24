import {funcAction} from "./FuncAction";
import {DisplayTwin} from "./DisplayTwin";

export class DisplayTwinManager {
    constructor(app, config) {
        this.app = app;
        this.config = config;
        this.twins = [];
        this._init();
    }

    _init() {
        const queryString = funcAction.convertQueryCondition(this.config.query.condition);
        this.twins = Array.from(funcAction.queryObjects(queryString)).map(obj => new DisplayTwin(obj));
    }

    show(){
        this.twins.forEach(twin=>twin.show());
    }

    hide(){
        this.twins.forEach(twin=>twin.hide());
    }

}

