
export class Level{
    constructor(obj) {
        this.id = obj.id;
        this.children = [];
        this.parent = null;
        this.type = obj.type;
        this.thingObject = obj
    }

    getDisplayData(){
        return {
            id:this.id,
            type:this.type,
            name:this.thingObject.name,
            children:this.children.map(child=>child.getDisplayData())
        }
    }
}