import {ref} from 'vue'
import {ANIMATE_TYPE} from '../../../constant/types'

export function useType() {
    const type = ref('')

    function setType(t: typeof ANIMATE_TYPE[ keyof typeof ANIMATE_TYPE]) {
        type.value = t
    }

    return {
        setType,
        type
    }
}
