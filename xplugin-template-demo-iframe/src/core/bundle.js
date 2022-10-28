import BundlePluginCore from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginCore";

export default class extends BundlePluginCore {

    constructor() {
        super();

        //设置插件作者为 张光的邮箱
        this.bundle.setAuthor("zhangguang@uino.com");
        //设置插件的能力描述
        this.bundle.setDescription("三方系统通过iframe与ThingJS-X 系统集成,使得三方系统与ThingJS-X可以进行集成交互控制场景与反向驱动数据变化")
        //设置插件版权
        this.bundle.external.thingjsX.setLicense("XXX 科技有限公司版权所有");
    }
}
