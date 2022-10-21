import {MessageExecutor} from "./MessageExecutor";
import {QueryType} from "../enum_type/QueryType";
import {funcAction} from "../FuncAction";
import {ExecutorType} from "../enum_type/ExecutorType";

export class ChangeBusinessExecutor extends  MessageExecutor{
    constructor(config) {
        super(config);
        this.type = ExecutorType.CHANGE_BUSINESS
    }

    action(message){
        const businessName =this._getBusinessName(message);
        funcAction.changeBusiness(businessName);
    }

    _getBusinessName(message){
        if(this.queryType === QueryType.ASSIGN){
            return this.config.businessName;
        }else{
            return message.data[this.config.businessPropName];
        }
    }

}