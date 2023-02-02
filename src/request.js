const request = ({url, method = 'get', data, responseType}) => {
    method = method.toUpperCase();

    return new Promise(async (resolve, reject) => {
        fetch(url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            responseType,
            redirect: 'manual'
        }).then(response => {
            if (response.type === 'opaqueredirect') {
                // 发生了重定向被拦截
                return reject('登录状态已失效，请重新登录');
            }
            if (responseType === 'blob') {
                return response.blob();
            }
            return response.json();
        }).then(response => {
            responseStatusHandler(response, resolve, reject);
        }).catch(error => {
            reject(error);
        });
    });
};

// 处理响应数据
const responseStatusHandler = (response, resolve, reject) => {
    if (response) {
        let {errorCode, errorMessage} = response;
        if (errorCode === '410001' || errorCode === 'unkown exception') {
            return reject(new Error(errorMessage || 'Error'));
        }
        return resolve(response);
    }
    reject();
};

export default request;
