export const formatNumber = num => String(num).replace(/(?=[\d,]+)\d(?=(\d{3})+(\.|$))/g, '$&,');
export const formatPrice = num => String(num.toFixed(2)).replace(/(?=[\d,]+)\d(?=(\d{3})+(\.|$))/g, '$&,');


export const formatVol = vol => {
    if (isNaN(vol)) {
        return '-';
    }
    vol = vol - 0;

    if (vol >= 1e12) {
        return (vol / 1e12).toPrecision(3) + 'T';
    }
    if (vol >= 1e9) {
        return (vol / 1e9).toPrecision(3) + 'B';
    }
    if (vol >= 1e6) {
        return (vol / 1e6).toPrecision(3) + 'M';
    }
    if (vol >= 1e3) {
        return (vol / 1e3).toPrecision(3) + 'K';
    }

    return vol.toPrecision(3);
};

export const formatHumanVol = (num, max = 2e7) => {
    num = num | 0;
    if (num < 1e3) {
        return 0 + 'K';
    }

    let value = formatVol(num).replace(/\.0+(?=\D)/, '');
    if (num === max) {
        value += '+';
    }

    return value;
};

export const formatHumanPrice = (num, max = 1000) => {
    num = num | 0;
    let value = formatPrice(num).replace(/\.0+/, '');
    if (num === max) {
        value += '+';
    }

    return '$' + value;
};

export const formatPercent = num => {
    if (isNaN(num)) {
        return num;
    }
    if (num === 0) {
        return 0;
    }
    num = (num * 100).toFixed(2);
    return num + '%';
};

const getLogScaleInfo = (minVal, maxVal) => {
    let minV = minVal ? Math.log(minVal) : minVal;
    let maxV = Math.log(maxVal);

    return [(maxV - minV) / (maxVal - minVal), minV];
};

export const logScaleDenormalize = (curVal, minVal, maxVal) => {
    if (curVal === minVal || curVal === maxVal) {
        return curVal;
    }

    const [scale, minV] = getLogScaleInfo(minVal, maxVal);

    return (Math.log(curVal) - minV) / scale + minVal;
};

export const logScaleNormalize = (curVal, minVal, maxVal) => {
    if (curVal === minVal || curVal === maxVal) {
        return curVal;
    }

    const [scale, minV] = getLogScaleInfo(minVal, maxVal);

    return Math.round(Math.exp(minV + (scale * (curVal - minVal))));
};

export const getSliderRealVal = (curShowVal, minRealVal, maxRealVal, minShowVal, maxShowVal) => {
    let scale = (curShowVal - minShowVal) / (maxShowVal - minShowVal);

    return (maxRealVal - minRealVal) * scale + minRealVal;
};

export const getOriginalSliderRealVal = (curShowVal, minRealVal, maxRealVal, minShowVal, maxShowVal) => {
    return (curShowVal - minRealVal) / (maxRealVal - minRealVal) * (maxShowVal - minShowVal) + minShowVal;
};

export const sortObjectByPropertyValue = object => {
    return Object
        .keys(object)
        .sort((a, b) => object[a] - object[b])
        .reduce((obj, key) => ({
            ...obj,
            [key]: object[key]
        }), {});
};
