import request from './request';
import {
    _avatarApi,
    _captchaCheckStatusApi,
    _captchaImageResourcesApi,
    _loginApi,
    _logoutApi,
    _menusApi, _modifyPasswordApi, _modifyPasswordForceStatusApi,
    _permissionsApi,
    _userInformationApi
} from './url';

let _clientId = null;
let _proxyPrefix = null;

/**
 * 设置配置信息
 * @param clientId 客户端id
 * @param proxyPrefix 代理前缀
 */
const c2_sysx_setConfig = ({clientId, proxyPrefix}) => {
    _clientId = clientId;
    _proxyPrefix = proxyPrefix;
    console.log('配置完成');
};

/**
 * 判断是否需要验证码登录
 * @param account 账号
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
 * @param random 随机数
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
 * @param account 账号
 * @param password 密码
 * @param captchaText 验证码
 * @param captchaKey 验证码标识
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
 * @param password 新密码
 * @param confirmPwd 确认密码
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
    c2_sysx_getPermissions
};
