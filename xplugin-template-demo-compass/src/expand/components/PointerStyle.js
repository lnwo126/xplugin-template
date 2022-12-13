export default (config, uri) => {
    let defaultValue = { width: "10%", height: "80%" };

    switch (config.compassStyle) {
        case "ande":
            defaultValue = { width: "10%", height: "80%" };
            break;
        case "misi":
            defaultValue = { width: "20%", height: "35%" };
            break;
        case "backEarth":
            defaultValue = { width: "12%", height: "65%" };
            break;
        case "jzgm":
            defaultValue = { width: "10%", height: "80%" };
            break;
        case "tklk":
            defaultValue = { width: "20%", height: "35%" };
            break;
        default:
            defaultValue = { width: "10%", height: "80%" };
            break;
    }
    return {
        "background-image":
            "url(" +
            `${uri}resources/${config.compassStyle}-pointer.png` +
            ")",
        height: `${defaultValue.height}`,
        width: `${defaultValue.width}`,
    };
}