import { ANIMATE_NAME } from "../../../constant/types";
export declare function useName(): {
    setName: (n: (typeof ANIMATE_NAME)[keyof typeof ANIMATE_NAME]) => void;
    name: import("vue").Ref<string>;
};
