import {c2_sysx_setConfig} from "./src/api";

/**
 * 配置初始参数
 * @param clientId 客户端id
 * @param proxyPrefix 代理前缀
 */
const c2_sysx_initConfig = ({clientId, proxyPrefix}) => {
    c2_sysx_setConfig({clientId, proxyPrefix});
};

export {
    c2_sysx_initConfig
};

export * from './src/api';
