import {dayjsFmt, timeTypes} from "./time";
import dayjs from 'dayjs'

/**
 *
 * disable 传入的时间数组
 *
 * @param timeList
 * @param time
 */
export function disableOneDay(timeList: timeTypes[], time: Date) {
    const times: Date[] = timeList.map(i => {
        return new Date(dayjs(i).format(dayjsFmt))
    })
    return times.some(i => {
        return dayjs(i).isSame(time, 'day')
    })
}


/**
 *
 * 不 disable 传入的时间数组
 *
 * @public
 */
export function notDisableOneDay(timeList: timeTypes[], time: Date) {
    return !disableOneDay(timeList, time)
}
