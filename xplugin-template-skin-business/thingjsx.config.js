const XPluginConfig = require("@thingjs-x/xplugin-plugin/dist/XPlugin.config");
const { buildEvn, devServer, sceneServer } = require('./config')

// const devtool = 'cheap-module-source-map';//不建议使用
const mode = process.env.NODE_ENV;
const archive = process.env.NODE_ARCHIVE;//不建议更改
const stats = process.env.NODE_STATS;//统计信息

const xpluginConfig = new XPluginConfig(mode);
xpluginConfig.setArchive(archive);
xpluginConfig.setStats(stats)//统计信息
xpluginConfig.mergeDevServer(devServer);
xpluginConfig.mergeSceneServer(sceneServer);
// xpluginConfig.overwriteTerserOptions({
//     compress: {
//         pure_funcs: []
//     }
// });
module.exports = xpluginConfig.buildConfig(buildEvn);