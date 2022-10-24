import {funcAction} from "./FuncAction";
import {Level} from "./Level";
import * as _ from "lodash";
import {LevelType} from "./enum_type/LevelType";

export class LevelManager {
    constructor(config) {
        this.setConfig(config);
        this.webNode = null;
        this.levels = [];
        this.topLevels = [];
        this.levelTypes = [
            LevelType.CAMPUS,
            LevelType.BUILDING,
            LevelType.FLOOR,
            LevelType.ROOM
        ];
 
    }
    
    setConfig(config) {
        this.config = config;
    }
    
    initWebData() {
        this.webNode.init();
    }
    
    create(obj) {
        const level = new Level(obj);
        this.levels.push(level);
        return level;
    }
    
    registerLevelChangeEvent() {
        const that = this;
        funcAction.registerLevelChangeEvent(function (data) {
            const changeToLevelID = data.current.id;
            const path = that.getPathIndexesByAppointLevel(changeToLevelID)
            that.webNode.changeLevelByPath(path);
        });
    }
    
    changeLevel(id) {
        const level = this.find(id);
        funcAction.changeLevel(level.thingObject);
    }
    
    find(id) {
        return this.levels.find(level => level.id === id);
    }
    
    getPathIndexesByAppointLevel(id) {
        let level = this.find(id);
        const result = [];
        while (level !== null) {
            const index = this.getLevelIndexInParent(level);
            result.push(index);
            level = level.parent;
        }
        return _.reverse(result);
    }
    
    getLevelIndexInParent(level) {
        const parent = level.parent;
        let children = null;
        if (_.isNil(parent)) {
            children = this.topLevels;
        } else {
            children = parent.children;
        }
        return children.indexOf(level);
    }
    
    onMouseEnter(id) {
        const level = this.find(id);
        funcAction.onMouseEnterObject(level.thingObject);
    }
    
    onMouseLeave(id) {
        const level = this.find(id);
        funcAction.onMouseLeaveObject(level.thingObject);
    }
    
    getDisplayData() {
        return this.topLevels.map(level => level.getDisplayData());
    }
    
    parse() {
        const config = this.config;
        const that = this;
        const startLevelQueryString = config.startLevel ? config.startLevel : ".Campus";
        const endLevelQueryString = config.endLevel ? config.endLevel : ".Room";
        const endLevelType = endLevelQueryString.replace('.', '');
        this.topLevels = Array.from(funcAction.queryObjects(startLevelQueryString))
            .map(obj => {
                const level = that.create(obj);
                level.children = this._parseChildren(level, endLevelType);
                return level;
            });
    }
    
    _parseChildren(level, endLevelType, isEnd = false) {
        if (isEnd) return;
        if (level.type === endLevelType) isEnd = true;
        const that = this;
        const children = Array.from(level.thingObject.children);
        const levelChildren = children
            .filter(child => !isEnd)
            .filter(child => that.levelTypes.includes(child.type))
            .map(child => {
                const childLevel = that.create(child);
                childLevel.children = that._parseChildren(childLevel, endLevelType);
                return childLevel;
            });
        levelChildren.forEach(levelChild => levelChild.parent = level);
        level.children = levelChildren;
        return levelChildren;
    }
    
    
}

export const levelManager = new LevelManager();
