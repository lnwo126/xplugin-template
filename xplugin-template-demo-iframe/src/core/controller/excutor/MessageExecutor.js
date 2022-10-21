import * as _ from "lodash";
import {QueryType} from "../enum_type/QueryType";
import {funcAction} from "../FuncAction";

export class MessageExecutor {
    constructor(config) {
        this.type = null;

        this.orgConfig = config;

    }

    get queryType(){
        return this.config["queryType"]
    }

    get config(){
        return this.orgConfig[this.type];
    }

    getEventName() {
        return this.orgConfig.eventName;
    }

    getEventValue() {
        return this.orgConfig.eventValue;
    }



    canHandle(data) {
        if (
            _.isNil(this.getEventValue()) ||
            _.isNil(data[this.getEventName()])
        )
            return false;
        return data[this.getEventName()] === this.getEventValue();
    }

    action(message) {

    }


}