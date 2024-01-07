import {Meta} from "../../types/meta";
import {ANIMATE_NAME_Fade} from "../../constant/types";

export interface FadeMeta extends Meta {
    fadeType: typeof ANIMATE_NAME_Fade[keyof typeof ANIMATE_NAME_Fade];
}
