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

    showObject(obj){
        this.globalLib.showObject(obj);
    }

    hideObject(obj){
        this.globalLib.hideObject(obj);
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

    fadeInObject(obj,config){
        this.globalLib.fadeInObject(this.createSelector(obj),config);
    }

    createSelector(obj){
        return this.globalLib.createSelector(obj,this.app);
    }

    removeDecorator(obj,id){
        this.globalLib.removeDecorator(obj,id)
    }

    createDecorator(obj,id,type,config){
        return this.globalLib.createDecorator(obj,id,type,config);
    }
}

const funcAction = new FuncAction();
export {funcAction}

