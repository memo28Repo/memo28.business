<script lang="ts" setup>
import {useAnimationTypes} from '../../store/animationTypes/useAnimationTypes'
import {ANIMATE_TYPE} from "../../constant/types";

const animationTypes = useAnimationTypes();

animationTypes.type.setType(ANIMATE_TYPE.FADE)

</script>

<template>
  <transition :name="animationTypes.name.name">
    <slot/>
  </transition>
</template>

<style lang="scss" scoped>
.fadeClass {
  transition: all 0.5s;
}
@import "./fade.scss";
</style>
