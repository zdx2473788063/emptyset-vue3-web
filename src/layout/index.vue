<template>
    <div>
        <component :is="LayoutComponent[layout]" v-if="!isMobile" />
    </div>
</template>

<script setup lang="ts">
    import { type Component, computed } from "vue";
    import LayoutVertical from "./LeyoutVertical/index.vue";
    import useGlobalStore from "@/stores/modules/global.ts";
    import { useScreenStore } from "@/hooks/screen.ts";

    type LayoutType = "vertical" | string;
    const LayoutComponent: Record<LayoutType, Component> = {
        vertical: LayoutVertical
    };

    // 全局主题仓库
    const globalStore = useGlobalStore();
    // 获取布局格式
    const layout = computed(() => globalStore.layout);

    // 获取当前为[移动端、IPad、PC端]仓库，阔以使用 watchEffect(() => {}) 进行监听。
    const { isMobile } = useScreenStore();
</script>

<style scoped></style>
