
import ExpandPlugin from "@thingjs-x/xplugin-core/dist/plugin/expand/ExpandPlugin";
import IndexVue from './index.vue'
export default class extends ExpandPlugin {
    constructor() {
        super(IndexVue); //UI 载入入口
    }
};