import {funcAction} from "./FuncAction";
import {Cone} from "./Cone";

export class ConeManager {
    constructor(app, config) {
        this.app = app;
        this.config = config;
        this.cones = [];
        this._init();
    }

    _init() {
        const queryString = funcAction.convertQueryCondition(this.config.query.condition);
        this.cones = Array.from(funcAction.queryObjects(queryString)).map(obj => new Cone(obj));
    }

    show(){
        this.cones.forEach(twin=>twin.show());
    }

    hide(){
        this.cones.forEach(twin=>twin.hide());
    }

}

