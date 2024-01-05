"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useType = void 0;
const vue_1 = require("vue");
function useType() {
    const type = (0, vue_1.ref)('');
    function setType(t) {
        type.value = t;
    }
    return {
        setType,
        type
    };
}
exports.useType = useType;
