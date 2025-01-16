/**
 * 获取随机整数
 */
export function randomInt(m: number, n: number) {
    return Math.floor(Math.random() * (m - n) + n);
}

/**
 * 空数据格式化
 */
export function handleFormatter(row: any, column: any, cellValue: any) {
    if (row || column) {
        if (!!cellValue || cellValue === 0) {
            return cellValue;
        } else {
            return "--";
        }
    }
}
