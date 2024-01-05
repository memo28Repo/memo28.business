import {defineStore} from "pinia";
import {useType} from './hooks/useType'
import {useName} from "./hooks/useName";

export const useAnimationTypes = defineStore("animationTypes", () => {
    const type = useType()
    const name = useName();

    return {
        type,
        name
    }
})


export type useAnimationTypesReturn = ReturnType<typeof useAnimationTypes>
