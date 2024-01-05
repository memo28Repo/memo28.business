import { useAnimationTypesReturn } from "../../../store/animationTypes/useAnimationTypes";
import { SliceMeta } from "../sliceMeta";
export declare function useSlideGlobalBeforeEach(animationTypesReturn: useAnimationTypesReturn): {
    order: (toMeta: SliceMeta) => void;
};
