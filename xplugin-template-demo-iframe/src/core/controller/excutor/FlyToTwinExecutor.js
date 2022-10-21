import {MessageExecutor} from "./MessageExecutor";
import {QueryType} from "../enum_type/QueryType";
import {funcAction} from "../FuncAction";
import {ExecutorType} from "../enum_type/ExecutorType";

export class FlyToTwinExecutor extends MessageExecutor {
    constructor(config) {
        super(config);
        this.type = ExecutorType.FLY_TO_OBJECT
    }

    action(message) {
        const queryString = this._getQueryString(message);
        const obj = funcAction.queryObjects(this._getQueryString(message))[0]
        funcAction.flyToObject(obj);
    }

    _getQueryString(message) {
        if (this.queryType === QueryType.ASSIGN) {
            return this.config.id;
        } else {
            return message.data[this.config.propName]
        }
    }

}