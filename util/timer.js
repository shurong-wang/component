/**
 * @file 通用 - 倒计时
 * @author chris<wfsr@foxmail.com>
 */

export default function countdown(delay, fn) {
    let expire = Date.now() + delay * 1000;

    let timer = setInterval(function () {
        let value = Math.round((expire - Date.now()) / 1000);
        if (value < 0) {
            clearInterval(timer);
        }
        else {
            fn(value);
        }
    }, 500);
    return timer;
}
