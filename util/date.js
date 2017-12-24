/**
 * 格式化的日期
 *
 * @param {string} date 日期
 * @param {number} type 模式
 * @return {string} 格式化的日期
 */
export const formatDate = (date, type = 3) => {
    date = date + '';
    type = type - 0;
    const regexp = date.includes('-')
        ? /(\d{2})\-(\d{2})\-(\d{4})/
        : /(\d{4})(\d{2})(\d{2})/;
    const replacement = ['$2-$3', '$1-$3', '$1-$2', '$2-$3-$1'][type] || date;
    return date.replace(regexp, replacement);
};
