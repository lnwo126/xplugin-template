/***
    统一功能的命名定义
        active              激活 
        unactive            取消激活
        add                 添加
        remove              移除
        show                显示
        hide                隐藏
        pause               暂停
        recover             恢复
***/
const __ACTIONS__ = {
    'ADD': 'add',
    'REMOVE': 'remove',
    'ACTIVATE': 'activate',
    'DEACTIVATE': 'deactivate',
    'EXPAND': 'expand',
    'UNEXPAND': 'unexpand',
    'SHOW': 'show',
    'HIDE': 'hide',
    'REFRESH': 'refresh',
    'PLAY': 'play',
    'RUN': 'run',
    'STOP': 'stop',
    'PAUSE': 'pause',
    'RECOVER': 'recover',
    'SETTING_EFFECT': 'setting.effect',
    'SETTING_STATE': 'setting.state',
    'SELECT': 'select',
    'DESELECT': 'deselect',
    'DEACTIVATE_ALL': 'deactivate.all',
    'MOVE_PATH': 'move.path',
    'MOVE_TO': 'move.to',
    'MOVE_STOP': 'move.stop',
    'FLY_IN': 'fly.in',
    'FLY_TO': 'fly.to',
    'FLY_LEVEL': 'fly.level',
    'FLY_LONLAT': 'fly.lonlat',
    'FLY_POSITION': 'fly.position',
    'ADD_COLOR': 'add.color',
    'REMOVE_COLOR': 'remove.color'
};


export { __ACTIONS__ };
