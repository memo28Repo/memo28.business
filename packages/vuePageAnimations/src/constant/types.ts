export const ANIMATE_TYPE = {
    SLIDE: 'slide',
    FADE: 'fade'
} as const


export const ANIMATE_NAME_Slide = {
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
} as const


export const ANIMATE_NAME_Fade = {
    // fade
    Fade_in: 'fade-in',
    // Fade_out: 'fade-out',
    // Fade_in_right: 'fadeIn-right'
} as const
export const ANIMATE_NAME = {
    ...ANIMATE_NAME_Slide,
    ...ANIMATE_NAME_Fade
}
