export default (config, uri) => {

    let defaultValue = { left: "auto", right: "auto", top: "auto", bottom: "auto" };

    switch (config.compassPostion) {
        case "topLeft":
            defaultValue.top = config.topLeftContainer.tl_topMargin + "px";
            defaultValue.left = config.topLeftContainer.tl_leftMargin + "px";
            break;
        case "topRight":
            defaultValue.top = config.topRightContainer.tr_topMargin + "px";
            defaultValue.right = config.topRightContainer.tr_rightMargin + "px";
            break;
        case "bottomLeft":
            defaultValue.bottom = config.bottomLeftContainer.bl_bottomMargin + "px";
            defaultValue.left = config.bottomLeftContainer.bl_leftMargin + "px";
            break;
        case "bottomRight":
            defaultValue.bottom = config.bottomRightContainer.br_bottomMargin + "px";
            defaultValue.right = config.bottomRightContainer.br_rightMargin + "px";
            break;
        default:
            defaultValue.bottom = config.bottomRightContainer.br_bottomMargin + "px";
            defaultValue.right = config.bottomRightContainer.br_rightMargin + "px";
            break;
    }


    return {
        "background-image":
            "url(" +
            `${uri}resources/${config.compassStyle}-bgc.png` +
            ")",
        height: `${config.compassWidth * 2}px`,
        width: `${config.compassWidth * 2}px`,
        left: `${defaultValue.left}`,
        right: `${defaultValue.right}`,
        top: `${defaultValue.top}`,
        bottom: `${defaultValue.bottom}`,
    };


};

