"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalBeforeEach = void 0;
const useAnimationTypes_1 = require("../store/animationTypes/useAnimationTypes");
const useSlide_globalBeforeEach_1 = require("../features/slide/hooks/useSlide.globalBeforeEach");
const utils_1 = require("@memo28/utils");
const types_1 = require("../constant/types");
function globalBeforeEach(router) {
    router.beforeEach((to) => {
        const animationTypes = (0, useAnimationTypes_1.useAnimationTypes)();
        const toMeta = to.meta;
        // const fromMeta = from.meta as unknown as Meta
        if ((0, utils_1.SNI)(animationTypes.type.type, types_1.ANIMATE_TYPE.SLIDE)) {
            const slideGlobalBeforeEach = (0, useSlide_globalBeforeEach_1.useSlideGlobalBeforeEach)(animationTypes);
            slideGlobalBeforeEach.order(toMeta);
        }
    });
}
exports.globalBeforeEach = globalBeforeEach;
