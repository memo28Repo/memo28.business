"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disableEndRange = exports.disableStartRange = void 0;
const time_1 = require("./time");
const dayjs_1 = __importDefault(require("dayjs"));
/**
 *
 * 禁用开始时间之前的所有时间
 *
 * @public
 */
function disableStartRange(start, data) {
    const startTime = new Date((0, dayjs_1.default)(start).format(time_1.dayjsFmt)).getTime();
    return data.getTime() < startTime;
}
exports.disableStartRange = disableStartRange;
/**
 *
 * 禁用结束时间之后的所有时间
 *
 * @public
 */
function disableEndRange(end, data) {
    return !disableStartRange(end, data);
}
exports.disableEndRange = disableEndRange;
