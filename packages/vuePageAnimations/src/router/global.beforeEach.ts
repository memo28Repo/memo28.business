import {Router} from 'vue-router'
import {useAnimationTypes} from "../store/animationTypes/useAnimationTypes";
import {useSlideGlobalBeforeEach} from "../features/slide/hooks/useSlide.globalBeforeEach";
import {SNI} from '@memo28/utils'
import {ANIMATE_TYPE} from "../constant/types";
import {Meta} from "../types/meta";
import {SliceMeta} from "../features/slide/sliceMeta";
import {useFadeGlobalBeforeEach} from "../features/fade/hooks/useFade.globalBeforeEach";
import {FadeMeta} from "../features/fade/fadeMeta";

export function globalBeforeEach(router: Router) {
    router.beforeEach((to) => {
        const animationTypes = useAnimationTypes();
        const toMeta = to.meta as unknown as Meta
        // const fromMeta = from.meta as unknown as Meta

        if (SNI(animationTypes.type.type, ANIMATE_TYPE.SLIDE)) {
            const slideGlobalBeforeEach = useSlideGlobalBeforeEach(animationTypes);
            slideGlobalBeforeEach.order(toMeta as SliceMeta)
        }

        if (SNI(animationTypes.type.type, ANIMATE_TYPE.FADE)) {
            const fadeGlobalBeforeEach = useFadeGlobalBeforeEach(animationTypes);
            fadeGlobalBeforeEach.order(toMeta as FadeMeta)
        }
    })
}
