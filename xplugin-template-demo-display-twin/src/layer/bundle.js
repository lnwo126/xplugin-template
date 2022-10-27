import BundlePluginLayer from "@thingjs-x/xplugin-bundle/dist/plugin/BundlePluginLayer";

export default class extends BundlePluginLayer {

    constructor() {
        super();

        //设置插件作者为 张光的邮箱
        this.bundle.setAuthor("zhangguang@uino.com");
        //设置插件的能力描述
        this.bundle.setDescription("在数字孪生场景/层级中,对孪生体(设备等)进行有效分析,主动控制进行分析的孪生体显示/隐藏")
        //设置插件版权
        this.bundle.external.thingjsX.setLicense("XXX 科技有限公司版权所有");
        //调整默认预览图
        this.bundle.external.setPreview("preview显示孪生体.gif")
    }
}
