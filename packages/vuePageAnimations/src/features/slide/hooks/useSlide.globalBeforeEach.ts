import {useAnimationTypesReturn} from "../../../store/animationTypes/useAnimationTypes";
import {SliceMeta} from "../sliceMeta";

export function useSlideGlobalBeforeEach(animationTypesReturn: useAnimationTypesReturn) {


    function order(toMeta: SliceMeta) {
        animationTypesReturn.name.setName(toMeta.slideType)
    }

    return {
        order
    }
}
