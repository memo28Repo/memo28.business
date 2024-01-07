import {useAnimationTypesReturn} from "../../../store/animationTypes/useAnimationTypes";
import {FadeMeta} from "../fadeMeta";

export function useFadeGlobalBeforeEach(animationTypesReturn: useAnimationTypesReturn) {

    function order(meta: FadeMeta) {
        animationTypesReturn.name.setName(meta.fadeType)
    }

    return {order}
}
