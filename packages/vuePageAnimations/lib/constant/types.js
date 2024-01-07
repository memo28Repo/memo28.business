"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ANIMATE_NAME = exports.ANIMATE_NAME_Fade = exports.ANIMATE_NAME_Slide = exports.ANIMATE_TYPE = void 0;
exports.ANIMATE_TYPE = {
    SLIDE: 'slide',
    FADE: 'fade'
};
exports.ANIMATE_NAME_Slide = {
    // 滑动效果
    Slide_Left: 'slide-left',
    Slide_Right: 'slide-right',
    Slide_Top: 'slide-top',
    Slide_Bottom: 'slide-bottom',
    // 滑动模糊效果
    Slide_Left_Blurred: 'slide-left-blurred',
    Slide_Right_Blurred: 'slide-right-blurred',
    Slide_Top_Blurred: 'slide-top-blurred',
    Slide_Bottom_Blurred: 'slide-bottom-blurred',
};
exports.ANIMATE_NAME_Fade = {
    // fade
    Fade_in: 'fade-in',
    // Fade_out: 'fade-out',
    // Fade_in_right: 'fadeIn-right'
};
exports.ANIMATE_NAME = Object.assign(Object.assign({}, exports.ANIMATE_NAME_Slide), exports.ANIMATE_NAME_Fade);
