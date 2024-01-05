"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useName = void 0;
const vue_1 = require("vue");
function useName() {
    const name = (0, vue_1.ref)('');
    function setName(n) {
        name.value = n;
    }
    return {
        setName,
        name
    };
}
exports.useName = useName;
