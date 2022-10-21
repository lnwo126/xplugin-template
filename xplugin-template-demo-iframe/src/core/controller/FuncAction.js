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
        return this.app.query(queryString);
    }

    flyToObject(obj){
        this.app.camera.flyTo(obj);
    }

    selectObject(obj){
        this.app.selection.select(obj);
    }

    clearSelection(){
        this.app.selection.clear();
    }

    changeBusiness(businessName){
        this.globalLib.changeBusiness(businessName);
    }

    activeLayer(layerName){
        this.globalLib.activeLayer(layerName);
    }

    getCurrentLevel() {
        return this.app.level.current;
    }

    convertQueryCondition(queryString){
        return this.globalLib.convertQueryCondition(queryString);
    }



}

const funcAction = new FuncAction();
export {funcAction}

