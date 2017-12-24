// 判断是否合法 JSON
const isSafeJSON = (json) => {
    if ({}.toString.call(json) === '[object Object]') {
        for (let key in json) {
            return true;
        }
    }
    return false;
};

const genSafeJSON = (resp, safeResp) => {
    for (const key in resp) {
        safeResp[key] = resp[key];
    }
    return safeResp;
};

const filterData = (data) => {
    let filterData = {};
    for (let i in data) {
        if (null === data[i] || undefined === data[i]) {
            continue;
        }
        filterData[i] = (typeof data[i] === 'string') ?
            data[i].trim() :
            data[i];
    }
    return filterData;
};

export async function requestUtil(url, data = null, isUpload = false) {
    const msg = data ? '提交信息' : '获取数据';
    const safeResp = {
        status: -500,
        data: `请求错误，${msg}失败`
    };

    try {
        // 发送数据请求，接收返回数据
        response = data ?
            (isUpload ? await post(url, data, () => {}, true) : await post(url, data)) :
            await get(url);
        // 安全数据格式处理，避免因数据格式问题引发异常闪退
        return genSafeJSON(response, safeResp);
    } catch (e) {
        return safeResp;
    }
}

// 调用
export async function getUser(url, data) {
    return await requestUtil(url, data, true);
}