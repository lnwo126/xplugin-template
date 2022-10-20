import IndexJS from "./src/layer/index.js";
import IndexJSON from "./src/layer/index.json";
import Debugger from "./src/layer/debugger.json";

//DefinePlugin name & Setting 
const { name } = require('./package.json').defineXPlugin;
const code = new IndexJS();
code.setName(name);

export default {
    code,
    itemConfig: IndexJSON,
    debugger: Debugger,
    deployment: {
        type: "layer",
        operation: "run"//reload.run、run
    }
};

