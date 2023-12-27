"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notDisableOneDay = exports.disableOneDay = void 0;
const time_1 = require("./time");
const dayjs_1 = __importDefault(require("dayjs"));
/**
 *
 * disable 传入的时间数组
 *
 * @param timeList
 * @param time
 */
function disableOneDay(timeList, time) {
    const times = timeList.map(i => {
        return new Date((0, dayjs_1.default)(i).format(time_1.dayjsFmt));
    });
    return times.some(i => {
        return (0, dayjs_1.default)(i).isSame(time, 'day');
    });
}
exports.disableOneDay = disableOneDay;
/**
 *
 * 不 disable 传入的时间数组
 *
 * @public
 */
function notDisableOneDay(timeList, time) {
    return !disableOneDay(timeList, time);
}
exports.notDisableOneDay = notDisableOneDay;
