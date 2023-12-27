import { timeTypes } from './time';
/**
 *
 * 禁用开始时间之前的所有时间
 *
 * @public
 */
export declare function disableStartRange(start: timeTypes, data: Date): boolean;
/**
 *
 * 禁用结束时间之后的所有时间
 *
 * @public
 */
export declare function disableEndRange(end: timeTypes, data: Date): boolean;
