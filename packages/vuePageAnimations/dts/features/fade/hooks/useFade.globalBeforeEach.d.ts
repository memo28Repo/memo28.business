import { useAnimationTypesReturn } from "../../../store/animationTypes/useAnimationTypes";
import { FadeMeta } from "../fadeMeta";
export declare function useFadeGlobalBeforeEach(animationTypesReturn: useAnimationTypesReturn): {
    order: (meta: FadeMeta) => void;
};
