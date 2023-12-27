import { timeTypes } from "./time";
/**
 *
 * disable 传入的时间数组
 *
 * @param timeList
 * @param time
 */
export declare function disableOneDay(timeList: timeTypes[], time: Date): boolean;
/**
 *
 * 不 disable 传入的时间数组
 *
 * @public
 */
export declare function notDisableOneDay(timeList: timeTypes[], time: Date): boolean;
