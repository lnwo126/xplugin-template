import {funcAction} from "./FuncAction";
import {SelectTwinExecutor} from "./excutor/SelectTwinExecutor";
import {ExecutorType} from "./enum_type/ExecutorType";
import {FlyToTwinExecutor} from "./excutor/FlyToTwinExecutor";
import {ActiveLayerExecutor} from "./excutor/ActiveLayerExecutor";
import {ChangeBusinessExecutor} from "./excutor/ChangeBusinessExecutor";

export class MessageExecuteManager {
    constructor(app, config) {
        this.app = app;
        this.config = config;
        this.executor = null;
        this._init();
    }

    _init() {
        this.executor = this._getExecutor(this.config.triggerType);
    }

    action(message) {
        if (this.canHandle(message)) {
            this.executor.action(message);
        }
    }

    canHandle(message) {
        return this.executor.canHandle(message.data);
    }

    _getExecutor(triggerType) {
        switch (triggerType) {
            case ExecutorType.SELECT_OBJECT:
                return new SelectTwinExecutor(this.config);
            case ExecutorType.FLY_TO_OBJECT:
                return new FlyToTwinExecutor(this.config);
            case ExecutorType.ACTIVE_LAYER:
                return new ActiveLayerExecutor(this.config);
            case ExecutorType.CHANGE_BUSINESS:
                return new ChangeBusinessExecutor(this.config);
        }
        return null;
    }

}

