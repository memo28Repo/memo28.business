"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFadeGlobalBeforeEach = void 0;
function useFadeGlobalBeforeEach(animationTypesReturn) {
    function order(meta) {
        animationTypesReturn.name.setName(meta.fadeType);
    }
    return { order };
}
exports.useFadeGlobalBeforeEach = useFadeGlobalBeforeEach;
