import {ref} from 'vue'
import {ANIMATE_NAME} from "../../../constant/types";

export function useName() {
    const name = ref('')

    function setName(n: typeof ANIMATE_NAME[keyof typeof ANIMATE_NAME]) {
        name.value = n
    }

    return {
        setName,
        name
    }
}
