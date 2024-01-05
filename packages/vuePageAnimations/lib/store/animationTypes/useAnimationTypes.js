"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAnimationTypes = void 0;
const pinia_1 = require("pinia");
const useType_1 = require("./hooks/useType");
const useName_1 = require("./hooks/useName");
exports.useAnimationTypes = (0, pinia_1.defineStore)("animationTypes", () => {
    const type = (0, useType_1.useType)();
    const name = (0, useName_1.useName)();
    return {
        type,
        name
    };
});
