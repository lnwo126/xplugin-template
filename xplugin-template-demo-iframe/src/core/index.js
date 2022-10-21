import CorePlugin from "@thingjs-x/xplugin-core/dist/plugin/core/CorePlugin";
import {MessageExecuteManager} from "./controller/MessageExecuteManager";
import {funcAction} from "./controller/FuncAction";

export default class extends CorePlugin {

    constructor() {
        super();
    }

    getGlobalLib() {
        return {
            activeLayer: (layerName) => {
                uinv.layerManager.layer.getButton(layerName).click();
            },
            changeBusiness: (businessName) => {
                uinv.businessManager.change(businessName);
            },
            convertQueryCondition: (query) => {
                return uinv.layerManager.convertQueryCondition(query);
            }
        }
    }

    onInited() {

        funcAction.setApp(this.app);
        funcAction.setGlobalLib(this.getGlobalLib());
        const manager = new MessageExecuteManager(this.app, this.config);
        const config = this.config;
        window.addEventListener('message', function (event) {

            manager.action(event);

        }, false);
    }
}   
