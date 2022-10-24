import LayerPlugin from "@thingjs-x/xplugin-core/dist/plugin/layer/LayerPlugin";
import {funcAction} from "./controller/FuncAction";
import {ConeManager} from "./controller/ConeManager";
//import IndexVue from './index.vue'

export default class extends LayerPlugin {
    #globalLib;
    #manager;
    constructor() {
        //super(IndexVue); //UI 载入入口
        super();
    }
    
    init() {
        this.#globalLib = {
            showObject: (obj) => {
                obj.setVisible(true);
            },
            hideObject: (obj) => {
                obj.setVisible(false);
            },
            createSelector: (app) => {
                return new THING.Selector(app);
            },
            convertQueryCondition: (query) => {
                return uinv.layerManager.convertQueryCondition(query);
            }
        }
        funcAction.setApp(this.app);
        funcAction.setGlobalLib(this.#globalLib);
        this.#manager = new ConeManager(this.app, this.config)
    }
    
    onActivate() {
        if (!this.#manager) {
            this.init();
        }
        this.#manager.show();
    }
    
    onDeactivate() {
        this.#manager.hide();
    }
    
};