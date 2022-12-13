import ControlPlugin from "@thingjs-x/xplugin-core/dist/plugin/control/ControlPlugin";

import activateImage from "./resources/activate.png";
import deactivateImage from "./resources/deactivate.png";

export default class extends ControlPlugin {


    #buildings;
    constructor() {
        super();

        //设置场景控制背景图icon
        this.setActivateImage(activateImage);
        this.setDeactivateImage(deactivateImage);
    }

    onInited() {
        this.#buildings = THING.App.current.query(".Building");
    }

    onActivate() {

        const currentlevel = THING.App.current.level.current.type;
        /**
         * 园区或建筑层级 建筑展开生效，其它层级不做处理
         *  - 园区层级建筑层级可以查看建筑展开
         *  - 且将建筑外立面进行隐藏
         *  - 去除楼层天花板
         */
        if (currentlevel === "Campus" || currentlevel === "Building") {
            this.#buildings.objects.forEach(building => {
                building.facades?.objects.forEach(facade => {
                    facade.visible = false;
                });
                building.floors?.objects.forEach(floor => {
                    floor.visible = true;
                    floor.showAllRoofs(false);//去除楼层天花板
                });
                building.expandFloors();
            });
            return true;
        }

        //其它层级不做处理
        return true;

    }
    onDeactivate() {
        const currentlevel = THING.App.current.level.current.type;
        //在建筑层级，对外立面隐藏，去除楼层天花板进行建筑收起
        if (currentlevel === "Building") {
            this.#buildings.objects.forEach(building => {
                building.facades?.objects.forEach(facade => {
                    facade.visible = false;
                });
                building.floors?.objects.forEach(floor => {
                    floor.visible = true;
                    floor.showAllRoofs(false);
                });
                building.unexpandFloors();
            });
            return true;
        }

        //其它层级直接收起展开的建筑即可
        this.#buildings.objects.forEach(building => {
            building.unexpandFloors();
        })

        return true;

    }
    onUninstall() {
        //清除建筑信息
        this.#buildings = null;
    }
}
