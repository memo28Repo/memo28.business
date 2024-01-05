import { Meta } from "../../types/meta";
export interface SliceMeta extends Meta {
    slideType: 'forward' | 'back' | 'top' | 'bottom';
}
