export interface orderIndex {
    pageSize: number,
    pageNum: number,
    index: number
}

/**
 *
 * 正序排列索引
 *
 * @public
 */
export function sortIndexInOrder(order: orderIndex) {
    return (order.pageNum - 1) * order.pageSize + order.index + 1
}


/**
 *
 * 倒序排列索引
 *
 * @public
 */
export function indexReverseOrder(order: orderIndex & { total: number }) {
    if (order.total < order.pageSize) {
        return order.total - order.index;
    }
    return (
        order.total -
        (order.pageNum - 1) * order.pageSize -
        order.index
    );
}
