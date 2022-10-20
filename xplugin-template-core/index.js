import IndexJS from "./src/core/index.js";
import IndexJSON from "./src/core/index.json";
import DebuggerJSON from "./src/core/debugger.json";

//DefinePlugin name & Setting 
const { name } = require('./package.json').defineXPlugin;
const code = new IndexJS();
code.setName(name);

export default {
    code,
    itemConfig: IndexJSON,
    debugger: DebuggerJSON,
    deployment: {
        type: "core",
        operation: "reload.run"//reload.run、run
    }
};