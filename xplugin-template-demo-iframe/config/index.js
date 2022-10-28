const path = require('path');
const { name } = require("../package.json").defineXPlugin;

const address = require('address');
const LOCALHOST = address.ip() || 'localhost';
const PORT = 1024;

const rootpath = `http://${LOCALHOST}:${PORT}/`;
const buildpath = path.resolve(__dirname, '../dist');
const framepath = path.resolve(__dirname, '../index.js');
const bundlepath = path.resolve(__dirname, '../index.bundle.js');
const archivepath = path.resolve(__dirname, `../lib/${name}.zip`);

const devServer = {
    host: LOCALHOST,
    port: PORT,//设置端口号
    hot: true, // 开启webpack HRM(模块热替换)
    static: buildpath, //编译目录&serverroot
    open: true//自动打开页面
}

const sceneServer = {
    debugger: {
        addr: "http://192.168.1.78:1662/thing/dtwin/index.html?name=%E5%BC%A0%E5%85%89%E5%85%89%E6%B5%8B%E8%AF%95",//场景地址
    },
    // deploy: {//部署信息- 目前暂未支持，todo 
    //     ip: "127.0.0.1",
    //     port: 1662,
    //     account: "",
    //     password: "",
    //     secret: ""
    // }
}

module.exports = {
    buildEvn: {
        rootpath, buildpath, framepath, bundlepath, archivepath
    },
    devServer: devServer,
    sceneServer: sceneServer
}