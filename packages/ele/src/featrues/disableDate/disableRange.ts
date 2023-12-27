import {dayjsFmt, timeTypes} from './time'
import dayjs from "dayjs";

/**
 *
 * 禁用开始时间之前的所有时间
 *
 * @public
 */
export function disableStartRange(start: timeTypes, data: Date) {
    const startTime = new Date(dayjs(start).format(dayjsFmt)).getTime()
    return data.getTime() < startTime
}


/**
 *
 * 禁用结束时间之后的所有时间
 *
 * @public
 */
export function disableEndRange(end: timeTypes, data: Date) {
    return !disableStartRange(end, data)
}
