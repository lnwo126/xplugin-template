import IndexJS from "./src/control/index.js";
import IndexJSON from "./src/control/index.json";
import Debugger from "./src/control/debugger.json";

//DefinePlugin name & Setting 
const { name } = require('./package.json').defineXPlugin;
const code = new IndexJS();
code.setName(name);

export default {
    code,
    itemConfig: IndexJSON,
    debugger: Debugger,
    deployment: {
        type: "control",
        operation: "run"//reload.run、run
    }
};

