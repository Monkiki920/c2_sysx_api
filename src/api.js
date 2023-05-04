import request from './request';
import {
    _avatarApi,
    _captchaCheckStatusApi,
    _captchaImageResourcesApi,
    _loginApi,
    _logoutApi,
    _menusApi,
    _modifyPasswordApi,
    _modifyPasswordForceStatusApi,
    _permissionsApi,
    _userInformationApi,
    _userMechanismApi,
    _userRolesApi
} from './url';

let _clientId = null;
let _proxyPrefix = null;

/**
 * 设置配置信息
 * @param option
 * @param option.clientId 客户端id
 * @param option.proxyPrefix 代理前缀
 */
const c2_sysx_setConfig = ({clientId, proxyPrefix}) => {
    _clientId = clientId;
    _proxyPrefix = proxyPrefix;
};

/**
 * 判断是否需要验证码登录
 * @param option
 * @param option.account 账号
 */
const c2_sysx_getCaptchaCheckStatus = ({account = ''} = {}) => {
    return request({
        url: _proxyPrefix + _captchaCheckStatusApi,
        method: 'post',
        data: {
            account
        }
    });
};

/**
 * 获取图形验证码
 * @param option
 * @param option.random 随机数
 */
const c2_sysx_getCaptchaImageResources = ({random}) => {
    return request({
        url: _proxyPrefix + _captchaImageResourcesApi(random),
        params: {
            rnd: Math.random()
        },
        responseType: 'blob'
    });
};

/**
 * 账号登录
 * @param option
 * @param option.account 账号
 * @param option.password 密码
 * @param option.captchaText 验证码
 * @param option.captchaKey 验证码标识
 */
const c2_sysx_login = ({account, password, captchaText = '', captchaKey} = {}) => {
    let clientId = _clientId || '0';
    return request({
        url: _proxyPrefix + _loginApi,
        method: 'post',
        data: {
            account,
            password,
            clientId,
            captchaKey,
            captchaText
        }
    });
};

/**
 * 获取用户信息
 */
const c2_sysx_getUserInformation = _ => {
    return request({
        url: _proxyPrefix + _userInformationApi,
    });
};

/**
 * 获取是否强制修改密码
 */
const c2_sysx_modifyPasswordForceStatus = _ => {
    return request({
        url: _proxyPrefix + _modifyPasswordForceStatusApi,
    });
};

/**
 * 修改密码
 * @param option
 * @param option.password 新密码
 * @param option.confirmPwd 确认密码
 */
const c2_sysx_modifyPassword = ({password, confirmPwd}) => {
    return request({
        url: _proxyPrefix + _modifyPasswordApi,
        method: 'post',
        data: {
            newPwd: password,
            confirmPwd,
        }
    });
};

/**
 * 退出登录
 */
const c2_sysx_logout = _ => {
    return request({
        url: _proxyPrefix + _logoutApi,
    });
};

/**
 * 获取用户头像
 * @param option
 * @param option.id 用户id
 */
const c2_sysx_getAvatar = ({id = ''}) => {
    return request({
        url: _proxyPrefix + _avatarApi(id),
    });
};

/**
 * 获取用户路由权限
 */
const c2_sysx_getMenus = _ => {
    return request({
        url: _proxyPrefix + _menusApi,
    });
};

/**
 * 获取用户的按钮权限
 */
const c2_sysx_getPermissions = _ => {
    return request({
        url: _proxyPrefix + _permissionsApi,
    });
};

/**
 * 获取用户的角色
 */
const c2_sysx_getUserRoles = id => {
    return request({
        url: _proxyPrefix + _userRolesApi(id)
    });
};

/**
 * 获取用户机构
 * @param id 用户id
 * @param mechanism 用户机构标识
 */
const c2_sysx_getUserMechanism = ({ id, mechanism }) => {
    return request({
        url: _proxyPrefix + _userMechanismApi(id, mechanism)
    });
};

export {
    c2_sysx_setConfig,
    c2_sysx_getCaptchaCheckStatus,
    c2_sysx_getCaptchaImageResources,
    c2_sysx_login,
    c2_sysx_getUserInformation,
    c2_sysx_modifyPasswordForceStatus,
    c2_sysx_modifyPassword,
    c2_sysx_logout,
    c2_sysx_getAvatar,
    c2_sysx_getMenus,
    c2_sysx_getPermissions,
    c2_sysx_getUserRoles,
    c2_sysx_getUserMechanism
};
