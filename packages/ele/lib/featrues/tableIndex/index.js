"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexReverseOrder = exports.sortIndexInOrder = void 0;
/**
 *
 * 正序排列索引
 *
 * @public
 */
function sortIndexInOrder(order) {
    return (order.pageNum - 1) * order.pageSize + order.index + 1;
}
exports.sortIndexInOrder = sortIndexInOrder;
/**
 *
 * 倒序排列索引
 *
 * @public
 */
function indexReverseOrder(order) {
    if (order.total < order.pageSize) {
        return order.total - order.index;
    }
    return (order.total -
        (order.pageNum - 1) * order.pageSize -
        order.index);
}
exports.indexReverseOrder = indexReverseOrder;
