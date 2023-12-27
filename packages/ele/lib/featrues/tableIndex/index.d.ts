export interface orderIndex {
    pageSize: number;
    pageNum: number;
    total: number;
}
/**
 *
 * 正序排列索引
 *
 * @public
 */
export declare function sortIndexInOrder(order: orderIndex): void;
/**
 *
 * 倒序排列索引
 *
 * @public
 */
export declare function indexReverseOrder(order: orderIndex): void;
