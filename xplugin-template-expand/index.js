import IndexJS from "./src/expand/index.js";
import IndexJSON from "./src/expand/index.json";
import Debugger from "./src/expand/debugger.json";

//DefinePlugin name & Setting 
const { name } = require('./package.json').defineXPlugin;
const code = new IndexJS();
code.setName(name);

export default {
    code,
    itemConfig: IndexJSON,
    debugger: Debugger,
    deployment: {
        type: "expand",
        operation: "run"//reload.run、run
    }
};

