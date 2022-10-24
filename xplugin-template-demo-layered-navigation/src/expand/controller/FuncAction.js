class FuncAction {
    constructor() {
        this.app = null;
    }

    setApp(app) {
        this.app = app;
    }

    onMouseEnterObject(obj){
        obj.trigger(THING.EventType.MouseEnter);
    }

    onMouseLeaveObject(obj){
        obj.trigger(THING.EventType.MouseLeave);
    }

    changeLevel(obj){
        this.app.level.change(obj);
    }

    backLevel(){
        this.app.level.back();
    }

    queryObjects(queryString) {
        return this.app.query(queryString);
    }

    registerLevelChangeEvent(callback){
        THING.App.current.on('LevelChange', (data) => {
            callback(data);
        }, 'levelChange')
    }


}

const funcAction = new FuncAction();
export {funcAction}

