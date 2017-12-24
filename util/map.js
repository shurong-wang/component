/**
 * 公共 filter Map
 *
 * 结构: {section: {value: label}}
 *  section: Filter Map 的分组名
 *  value: 作为参数与服务端交互
 *  label: 作为页面元素在前端展示
 * @type {Object}
 */
const filterMap = {

    pattern: {
        // pattern
        DB: 'Double Bottom',
        DT: 'Double Top',
        TB: 'Triple Bottom',

        // candlestick
        'below_the_stomach': 'Below The Stomach',
        'belt_hold_bearish': 'Belt Hold Bearish',
        'belt_hold_bullish': 'Belt Hold Bullish'
    },

    trend: {
        // trend
        bullish: 'Bullish',
        bearish: 'Bearish',

        // for candlestick+
        neutral: 'Neutral'
    },

    universe: {
        // universe
        sp500: 'S&P 500',
        ru1000: 'Russell 1000',
        sp1500: 'S&P 1500',
        ru3000: 'Russell 3000'
    },

    sector: {
        // sector
        'Financials': 'Financials',
        'Materials': 'Materials',
        'Utilities': 'Utilities'
    }
};

/**
 * 全映射 filter Map
 *
 * 结构: {all: {label: value, value: label}, section: {label: value, value: label}}
 * 对 filter Map 进行 label 到 value 反向映射，方便查询
 * @type {Object}
 */
const filterFullMap = Object.entries(filterMap).reduce((filterFullMap, [section, pairs]) => {
    Object.entries(pairs).reduce((section, [label, value]) => {
        section[label] = value;
        section[value] = label;

        filterFullMap.all[label] = value;
        filterFullMap.all[value] = label;

        return section;
    }, filterFullMap[section] = {});

    return filterFullMap;
}, {all: {}});

/**
 * Filter Map 切片
 *
 * 应用分两大模块 ChartPattern 和 Candlestick
 * ChartPattern 和 Candlestick 的 Filter Map 不同
 * 根据差异将公共 Filter Map 进行切片，取得各模块对应的 Filter Map
 *
 * @type {Object}
 */
const FilterMapSlice = {
    chartPattern: {
        trend: [0, 2],
        pattern: [0, 5]
    },
    candlestick: {
        pattern: [5]
    }
};

/**
 * 获取指定模块的 Filter label
 *
 * @param  {string} section          Filter section
 * @param  {string} [type='chartPattern'] 应用功能模块
 * @return {Array}                   Filter label, 格式: [[value, label]]
 */
export function getModuleLabels(section, type = 'chartPattern') {
    const sliceIndex = FilterMapSlice[type] && FilterMapSlice[type][section];
    const labels = Object.entries(filterMap[section] || {});

    return sliceIndex ? labels.slice(...sliceIndex) : labels;
}

/**
 * 获取 Filter label
 *
 * @param  {string} value           Filter value
 * @param  {string} [section='all'] Filter section
 * @return {string}                 Filter label
 */
export function getFilterLabel(value, section = 'all') {
    return filterFullMap[section] && filterFullMap[section][value] || '';
}

/**
 * 获取 Filter vlaue
 *
 * @param  {string} label           Filter label
 * @param  {string} [section='all'] Filter section
 * @return {string}                 Filter value
 */
export function getFilterValue(label, section = 'all') {
    return filterFullMap[section] && filterFullMap[section][label] || '';
}
