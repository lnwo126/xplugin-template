import IndexJS from "./src/business/index.js";
import IndexJSON from "./src/business/index.json";
import Debugger from "./src/business/debugger.json";

//DefinePlugin name & Setting 
const { name } = require('./package.json').defineXPlugin;
const code = new IndexJS();
code.setName(name);

export default {
    code,
    itemConfig: IndexJSON,
    debugger: Debugger,
    deployment: {
        type: "skin",
        operation: "run"//reload.run、run
    }
};

