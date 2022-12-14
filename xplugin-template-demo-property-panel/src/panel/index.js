import PanelPlugin from "@thingjs-x/xplugin-core/dist/plugin/panel/PanelPlugin";
import IndexVue from './index.vue'

export default class extends PanelPlugin {


    #TimerTag = this.instanceName.concat(",X孪生体属性面板刷新监控数据");
    constructor() {
        super(IndexVue); //UI 载入入口

    }

    onActivate(xhost, widget) {
        //面板激活时进行宿主信息设置
        widget.propertys = xhost.userData.DATA;

        //添加监控数据
        THINGX.Timer.addInterval(() => {
            if (xhost.MONITOR) {
                widget.monitor = xhost.MONITOR["_"]["_"];
            }
        }, 1000, this.#TimerTag);

    }

    onDeactivate(xhost, widget) {
        //移除定时调度器
        THINGX.Timer.remove(this.#TimerTag);
    }


};