<template>
    <div class="relative">
        <el-button class="absolute top-50vh left-50vw -translate-50%" type="primary" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">展开按钮</el-button>
        <i-tip
            ref="tipRef"
            text="‌FLIP动画的原理是通过计算元素在布局变化前后的位置和尺寸差异，然后应用反向变换来模拟元素的移动，最后播放动画，从而实现流畅的过渡效果。
            FLIP技术的优势在于它提供了一种高效的方式来动态改变DOM元素的位置和尺寸，同时赋予动效，从而增强用户体验。通过FLIP技术，开发者可以更专注于布局变化，而无需手动计算和应用变换，简化了动画开发的复杂度，提高了开发效率。"
        />
    </div>
</template>

<script lang="ts" setup>
    import { iTip } from "@/components";
    import { ref } from "vue";

    const tipRef = ref();
    const handleMouseEnter = e => {
        tipRef.value?.mouseEnter(e);
    };

    const handleMouseLeave = () => {
        tipRef.value?.mouseLeave();
    };
</script>

<style lang="scss" scoped></style>
