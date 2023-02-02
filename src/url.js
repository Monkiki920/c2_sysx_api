const _captchaCheckStatusApi = '/ws/isCaptcha';
const _captchaImageResourcesApi = random => `/c2ssocaptcha/${random}/captchaimage`;
const _loginApi = '/oauth2/login';
const _userInformationApi = '/ws/getSubject';
const _logoutApi = '/ws/logout';
const _avatarApi = id => `/sysx/v1/userdata/list?ids=${id}`;
const _menusApi = '/sysx/v1/menus';
const _permissionsApi = '/sysx/v1/permissions';
const _modifyPasswordForceStatusApi = '/sso/v1/oauth2securitypolicy/securitypolicy';
const _modifyPasswordApi = '/ws/updatePwd';

export {
  _captchaCheckStatusApi,
  _captchaImageResourcesApi,
  _loginApi,
  _userInformationApi,
  _logoutApi,
  _avatarApi,
  _menusApi,
  _permissionsApi,
  _modifyPasswordForceStatusApi,
  _modifyPasswordApi,
};
