import { ANIMATE_TYPE } from '../../../constant/types';
export declare function useType(): {
    setType: (t: (typeof ANIMATE_TYPE)[keyof typeof ANIMATE_TYPE]) => void;
    type: import("vue").Ref<string>;
};
