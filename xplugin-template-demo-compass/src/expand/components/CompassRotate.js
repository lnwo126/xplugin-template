
/**
 *  摄像机 target: 目标点位置
 *  摄像机 position: 镜头位置（眼睛位置）
 *  摄像机 distance: 摄像机镜头和观察点的距离
 *  */

export default (fromEarth) => {

    if (fromEarth) {
        return THING.App.current.camera.getCameInfo().heading;
    }

    let target = THING.App.current.camera.target;
    let position = THING.App.current.camera.position;
    //镜头位置保持与目标点在同一水平面
    let position1 = [position[0], target[1], position[2]];


    //计算方向
    let east_west = null;
    let north_south = null;
    if (target[0] > position1[0]) {
        east_west = 1;      // 东
    } else if (target[0] < position1[0]) {
        east_west = -1;     // 西
    } else {
        east_west = 0;      // 中
    }

    if (target[2] > position1[2]) {
        north_south = -1;   // 南
    } else if (target[2] < position1[2]) {
        north_south = 1;    // 北
    } else {
        north_south = 0;    // 中
    }

    //摄像机镜头和观察点的距离
    const distance = THING.Math.getDistance(target, position1);
    if (east_west === 1 && north_south === 1) {             //看向东北
        return -parseInt(
            Math.acos(Math.abs(target[2] - position1[2]) / distance) *
            (180 / Math.PI)
        );
    } else if (east_west === 1 && north_south === -1) {     //看向东南
        return -parseInt(
            Math.acos(Math.abs(target[0] - position1[0]) / distance) *
            (180 / Math.PI)
        ) - 90;
    } else if (east_west === -1 && north_south === -1) {    //看向西南
        return 90 + parseInt(
            Math.acos(Math.abs(target[0] - position1[0]) / distance) *
            (180 / Math.PI)
        );
    } else if (east_west === -1 && north_south === 1) {     //看向西北    
        return parseInt(
            Math.acos(Math.abs(position1[2] - target[2]) / distance) *
            (180 / Math.PI)
        );
    }
}