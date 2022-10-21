import {MessageExecutor} from "./MessageExecutor";
import {QueryType} from "../enum_type/QueryType";
import {funcAction} from "../FuncAction";
import {ExecutorType} from "../enum_type/ExecutorType";

export class ActiveLayerExecutor extends  MessageExecutor{
    constructor(config) {
        super(config);
        this.type = ExecutorType.ACTIVE_LAYER
    }

    action(message){
        const layerNames =this._getLayerNames(message);
        layerNames.forEach(layerName=>{
            funcAction.activeLayer(layerName)
        })
    }

    _getAssignLayerNames(){
        return this.config.layerName.toString().trim().split(',');
    }

    _getLayerNamesFromMessage(message){
        return message.data[this.config.layerPropName].toString().trim().split(',');
    }

    _getLayerNames(message){
        if(this.queryType === QueryType.ASSIGN){
            return this._getAssignLayerNames();
        }else{
            return this._getLayerNamesFromMessage(message);
        }
    }

}