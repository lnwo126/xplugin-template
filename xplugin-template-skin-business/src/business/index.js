import SkinPlugin from "@thingjs-x/xplugin-core/dist/plugin/skin/SkinPlugin";
import IndexVue from './index.vue'

export default class BusinessSkinPlugin extends SkinPlugin {

    constructor() {
        super(IndexVue); //UI 载入入口
    }

};