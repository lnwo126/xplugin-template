class FuncAction {
    constructor() {
        this.app = null;
        this.globalLib = null;
    }

    setApp(app) {
        this.app = app;
    }

    setGlobalLib(lib){
        this.globalLib = lib;
    }

    queryObjects(queryString) {
        return this.app.level.current.query(queryString);
    }

    getCurrentLevel() {
        return this.app.level.current;
    }

    convertQueryCondition(queryString){
        return this.globalLib.convertQueryCondition(queryString);
    }

    showObject(obj){
        this.globalLib.showObject(obj);
    }

    hideObject(obj){
        this.globalLib.hideObject(obj);
    }
    createSelector(){
        return this.globalLib.createSelector(this.app);
    }

    removeViewProbe(cone,id){
        cone.destory();
    }

    createViewProbe(obj,id){
        return this.app.create({
            type: 'ViewProbe',
            name: id,
            debug: false,
            outerColor: 0xffd700,
            innerScanning: true,
            scanningNum: [10, 20],
            parent: obj,
            angles: [0, 180, 0, 'XYZ'],
            fov: obj.getAttribute('userData/_FOV_') * 1 || 30, //纵向投影角
            far: obj.getAttribute('userData/_FAR_') * 1 || 25, // 远截面
            aspect: 1.5, // 投影长宽比
            near: 0.2, // 近截面
            position: obj.position,
            complete: (ev) => {
                ev.object.style.skipBoundingBox = true;
            }
        });
    }
}

const funcAction = new FuncAction();
export {funcAction}

