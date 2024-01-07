import { Meta } from "../../types/meta";
import { ANIMATE_NAME_Slide } from '../../constant/types';
export interface SliceMeta extends Meta {
    slideType: typeof ANIMATE_NAME_Slide[keyof typeof ANIMATE_NAME_Slide];
}
