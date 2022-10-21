import {MessageExecutor} from "./MessageExecutor";
import {QueryType} from "../enum_type/QueryType";
import {funcAction} from "../FuncAction";
import {ExecutorType} from "../enum_type/ExecutorType";

export class SelectTwinExecutor extends  MessageExecutor{
    constructor(config) {
        super(config);
        this.type = ExecutorType.SELECT_OBJECT
    }

    action(message){
        funcAction.clearSelection();
        const queryString =this._getQueryString(message);
        const obj = funcAction.queryObjects(queryString)[0]
        funcAction.selectObject(obj);
    }

    _getQueryString(message){
        if(this.queryType === QueryType.ASSIGN){
            return this.config.id;
        }else{
            return message.data[this.config.propName]
        }
    }

}