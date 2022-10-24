import LayerPlugin from "@thingjs-x/xplugin-core/dist/plugin/layer/LayerPlugin";
import IndexVue from './index.vue'
import {DisplayTwinManager} from "./controller/DisplayTwinManager";
import {funcAction} from "./controller/FuncAction";
let displayTwinManager = null;
let globalLib = null;
export default class extends LayerPlugin {

    constructor() {
        super(IndexVue); //UI 载入入口
        // super();
        // this.displayTwinManager = null;

    }

    init(){
        globalLib = {
            showObject:(obj)=>{
                // obj._setVisible(true);
                obj.setVisible(true);
            },
            hideObject:(obj )=>{
                // obj._setVisible(false);
                obj.setVisible(false);
            },
            createDecorator:(obj,id,type,config)=>{
                return uinv.objectDecoratorCreator.add(obj, id, type, config);
            },
            removeDecorator:(obj,id)=>{
                uinv.objectDecoratorCreator.remove(obj, id);
            },
            createSelector:(obj,app)=>{
                return new THING.Selector(app).add([obj]);
            },
            fadeInObject:(selector,config)=>{
                uinv.objectFadeEffectManager.show(selector,config);
            },
            convertQueryCondition:(query)=>{
                return uinv.layerManager.convertQueryCondition(query);
            }
        }
        funcAction.setApp(this.app);
        funcAction.setGlobalLib(globalLib);
        displayTwinManager = new DisplayTwinManager(this.app, this.config)
    }

    onActivate() {
        if (!displayTwinManager) {
            this.init();
        };

        displayTwinManager.show();
        console.warn("active");
    }

    onDeactivate() {
        displayTwinManager.hide();
        console.warn("deactive");
    }


};