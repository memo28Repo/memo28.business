"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSlideGlobalBeforeEach = void 0;
function useSlideGlobalBeforeEach(animationTypesReturn) {
    function order(toMeta) {
        animationTypesReturn.name.setName(toMeta.slideType);
    }
    return {
        order
    };
}
exports.useSlideGlobalBeforeEach = useSlideGlobalBeforeEach;
