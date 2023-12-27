export interface orderIndex {
    pageSize: number;
    pageNum: number;
    index: number;
}
/**
 *
 * 正序排列索引
 *
 * @public
 */
export declare function sortIndexInOrder(order: orderIndex): number;
/**
 *
 * 倒序排列索引
 *
 * @public
 */
export declare function indexReverseOrder(order: orderIndex & {
    total: number;
}): number;
