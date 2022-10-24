import ExpandPlugin from "@thingjs-x/xplugin-core/dist/plugin/expand/ExpandPlugin";
import IndexVue from './index.vue'
import { levelManager} from "./controller/LevelManager";
import {funcAction} from "./controller/FuncAction";
export default class extends ExpandPlugin {
    constructor() {
        // super(NavTreeNode); //UI 载入入口
        super(IndexVue);
    }
    
    onActivate(){
        const loadSceneName = uinv.productInfo._NAME_;
        if(loadSceneName !== this.config.sceneName)
            return ;
        funcAction.setApp(this.app);
        levelManager.setConfig(this.config);
        levelManager.parse();
        levelManager.initWebData();
        levelManager.registerLevelChangeEvent();
    }

};