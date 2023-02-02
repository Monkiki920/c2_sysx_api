import {c2_sysx_setConfig} from "./api";

/**
 * 配置初始参数
 */
const init = ({clientId, proxyPrefix}) => {
    c2_sysx_setConfig({clientId, proxyPrefix});
};

export {
    init
};

export {
    c2_sysx_getCaptchaCheckStatus,
    c2_sysx_getCaptchaImageResources,
    c2_sysx_login,
    c2_sysx_getUserInformation,
    c2_sysx_modifyPasswordForceStatus,
    c2_sysx_modifyPassword,
    c2_sysx_logout,
    c2_sysx_getAvatar,
    c2_sysx_getMenus,
    c2_sysx_getPermissions
} from './api';
