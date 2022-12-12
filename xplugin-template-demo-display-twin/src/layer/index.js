import LayerPlugin from "@thingjs-x/xplugin-core/dist/plugin/layer/LayerPlugin";

// import IndexVue from './index.vue'

// let LayerMarkCache = null; 变量的声明方式推荐写入类中,不推荐该使用方法

export default class extends LayerPlugin {

    //图层孪生体标记缓存器,用于优化孪生体标记的二次加载
    //类的私有变量的声明方式（推荐使用）
    #LayerMarkCache = new Map();

    constructor() {
        // super(IndexVue); 
        //由于显示孪生体插件无图例等UI界面,无需进行 IndexVue界面的载入,使用无参的构造方法
        super();
    }

    /**
     * 场景图层插件安装完成
     *      -系统加载进行载入安装执行一次(3D场景载入前执行)
     */
    onInstall() {

        const { digitalTwinsSelector } = this.config;

        //@deprecated  弃用禁用的API,即将从产品目录移除,非常非常不推荐使用
        //uinv.layerManager.convertQueryCondition(digitalTwinsSelector)


        /**
         * 注册反向离开层级
         * 
         * * THING.App.current.on 
         *      -注册事件,可参考: https://docs.thingjs.com/cn/apidocs/THING.App.html#on
         * * THINGX.EventType.LeaveLevelBackward 
         *      -反向离开层级,可参考: http://123.124.196.193:2023/api/index.html#/10%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.EventType)?id=event-%e7%b3%bb%e7%bb%9f%e5%b1%82%e7%ba%a7%e4%ba%8b%e4%bb%b6-thingeventtypexlevel 
         *      -更多事件类型,参考 THINGX.EventType 命名空间
         * * THINGX.Plugin.getDigitalTwinsWithConfigData
         *      -通过元控件配置数据获取孪生体     
         *      -推荐使用该方法,可参考: http://123.124.196.193:2023/api/index.html#/21%E6%8F%92%E4%BB%B6%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.Plugin)?id=method-thingxplugingetdigitaltwinswithconfigdata
         * * THINGX.Marker.getConfig
         *      -获取孪生体标记配置数据
         *      -推荐使用该方法,可参考: http://123.124.196.193:2023/api/index.html#/18%E6%A0%87%E8%AE%B0%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.Marker)?id=method-thingxmarkergetconfig
         * * THINGX.Marker.hide
         *      -隐藏孪生体标记
         *      -注意标记的隐藏和显示无法创建或移除标记,创建移除标记需要参考标记方法add、remove
         *      -隐藏标记推荐使用该方法,可参考: http://123.124.196.193:2023/api/index.html#/18%E6%A0%87%E8%AE%B0%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.Marker)?id=method-thingxmarkerhide
         * Future Attention
         * * onDeactivate 
         *      -中无法处理 THING.App.current.level.current (由于存在场景幕布,也不推荐在图层onDeactivate函数中使用 current)
         *       
         */
        THING.App.current.on(THINGX.EventType.LeaveLevelBackward, (ev) => {
            const { previous } = ev;
            //通过元控件配置数据获取孪生体
            const DigitalTwins = THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector, previous);

            //计算当前层级需要处理的孪生体数据
            const currenttype = previous.type;
            const filterDigitalTwins = DigitalTwins.filter(element => { return element.parent.type === currenttype || element.type === currenttype });

            //通过计算筛选后的孪生体进行标记的隐藏
            //存在系统标记操控原因,将该逻辑代码置于宏任务中
            setTimeout(() => {
                filterDigitalTwins.forEach(element => {
                    //获取孪生体标记配置数据
                    const digitalTwinsMarks = THINGX.Marker.getConfig(element);
                    Object.keys(digitalTwinsMarks).forEach(markLabel => {
                        //筛选生效的标记名称进行隐藏
                        const selectorMarks = this.config.digitalTwinsSelector.filter(m => { return m.value === markLabel });
                        selectorMarks.forEach(selectorMark => {
                            //if (this.#LayerMarkCache.get(element.id)) {
                            THINGX.Marker.hide(element, selectorMark.value);
                            // }
                        });
                    });
                });
            });
        });


    }

    /**
     * 场景图层插件初始化执行
     *      -插件实例化执行载入:: 场景或业务加载初始化调用
     *      -插件刷新执行载入:: 图层刷新按钮调用、API调用
     *      -层级切换执行载入:: 场景切换层级调用
     */
    onInited() {

        const { digitalTwinsSelector } = this.config;

        //通过条件选择器配置值,获取孪生体
        const DigitalTwins = THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector, THING.App.current.level.current);

        /**
         * 计算当前层级下一层级符合条件的孪生体数据,进行孪生体数据的隐藏
         * 
         * Future Attention
         *      -由于孪生体显示隐藏存在继承性,开发阶段可进行插件数据筛选优化操作
         *      -如果不进行数据筛选处理,造成孪生体数据无效设置显示隐藏状态
         * 
         */
        const currenttype = this.app.level.current.type;
        const filterDigitalTwins = DigitalTwins.filter(element => { return element.parent.type === currenttype || element.type === currenttype });
        THINGX.DigitalTwin.hide(filterDigitalTwins);
    }

    /**
     * 场景图层插件激活函数
     *      -插件按钮执行调用
     *      -层级切换执行调用
     */
    onActivate() {

        const { digitalTwinsSelector } = this.config;

        //通过条件选择器配置值,获取孪生体
        const DigitalTwins = THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector, THING.App.current.level.current);

        /**
         * 计算当前层级符合条件被隐藏的孪生体进行显示
         * 
         * * THINGX.Marker.show
         *      -显示孪生体标记
         *      -注意标记的隐藏和显示无法创建或移除标记,创建移除标记需要参考标记方法add、remove
         *      -隐藏标记推荐使用该方法,可参考: http://123.124.196.193:2023/api/index.html#/18%E6%A0%87%E8%AE%B0%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.Marker)?id=method-thingxmarkershow
         */
        const currenttype = this.app.level.current.type;
        const filterDigitalTwins = DigitalTwins.filter(element => { return element.parent.type === currenttype || element.type === currenttype });

        // THINGX.DigitalTwin.show(this.app.level.current);//是否处理自身外立面等
        THINGX.DigitalTwin.show(filterDigitalTwins);

        /***
         * 通过计算筛选后的孪生体进行标记的显示 
         * 标记操作API ,可参考API标记模块: http://123.124.196.193:2023/api/index.html#/18%E6%A0%87%E8%AE%B0%E6%A8%A1%E5%9D%97%E6%93%8D%E4%BD%9C%E7%9B%B8%E5%85%B3(THINGX.Marker)
         * * THINGX.Marker.show
         * * THINGX.Marker.hide
         * * THINGX.Marker.add
         * * THINGX.Marker.remove
         * 
         * #LayerMarkCache
         *      -图层标记名称缓存管理器
         *      -用于优化二次性能加载
         * 
         */
        filterDigitalTwins.forEach(element => {
            const digitalTwinsMarks = THINGX.Marker.getConfig(element);
            Object.keys(digitalTwinsMarks).forEach(markLabel => {
                //获取孪生体标记配置数据
                const selectorMarks = this.config.digitalTwinsSelector.filter(m => { return m.value === markLabel });
                selectorMarks.forEach(selectorMark => {
                    //筛选生效的标记名称进行显示
                    //添加 markcache 进行简单性能优化,提升二次载入性能
                    if (this.#LayerMarkCache.get(element.id)) {
                        //缓存管理存在即可进行显示
                        THINGX.Marker.show(element, selectorMark.value);
                    } else {
                        //不存在进行孪生体标记的添加创建,添加后将创建的孪生体标记是否继承父类显示设置为否,标记的显隐藏由程序逻辑进行控制
                        let mark = THINGX.Marker.add(element, selectorMark.value);
                        mark[0].inheritVisible = false;
                        this.#LayerMarkCache.set(element.id, selectorMark.value);
                    }
                });
            });
        });
    }

    /**
     * 场景图层插件取消激活函数
     *      -插件按钮执行调用
     *      -层级切换(前)执行调用
     *      -不推荐在该函数内执行获取当前层级孪生体等操作
     */
    onDeactivate() {

        const { digitalTwinsSelector } = this.config;
        //通过条件选择器配置值,获取孪生体
        const DigitalTwins = THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector, THING.App.current.level.current);

        //计算需要恢复隐藏的孪生体数据进行隐藏,由于存在场景幕布,孪生体标记的隐藏置于反向离开层级完成事件内处理
        const currenttype = this.app.level.current.type;
        const filterDigitalTwins = DigitalTwins.filter(element => { return element.parent.type === currenttype });//|| element.type === previoustype 

        // THINGX.DigitalTwin.hide(this.app.level.current);
        THINGX.DigitalTwin.hide(filterDigitalTwins);
    }

    /**
     * 场景图层插件卸载完成
     *      -场景配置面板删除图层调用
     *      -图层的删除会将执行全部 图层场景插件实例的卸载方法
     *      -该函数能够保证代码的健壮及功能完整性(推荐使用)
     */
    onUninstall() {

        const { digitalTwinsSelector } = this.config;
        //通过条件选择器配置值,获取孪生体
        //恢复被操作的孪生体数据(该示例仅完成当前层级的孪生体恢复,具体需依据具体需求进行调整)
        const DigitalTwins = THINGX.Plugin.getDigitalTwinsWithConfigData(digitalTwinsSelector, THING.App.current.level.current);
        THINGX.DigitalTwin.show(DigitalTwins);

        //移除图层孪生体标记缓存管理器
        //释放相关内存空间(保证代码的稳定性)
        for (var [key, value] of this.#LayerMarkCache) {
            const d = this.app.query(`[id=${key}]`);
            THINGX.Marker.remove(d[0], value);
            //this.#LayerMarkCache.remove(d[0].id);
        }
        this.#LayerMarkCache = undefined;
    }

};