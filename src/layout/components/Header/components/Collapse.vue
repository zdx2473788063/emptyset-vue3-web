<template>
    <div style="display: flex; align-items: center" @click="changeCollapseIcon">
        <i-icon name="sdu-menu-left" width="20" height="20" v-if="!globalStore.isCollapse"></i-icon>
        <i-icon name="sdu-menu-right" width="20" height="20" v-if="globalStore.isCollapse"></i-icon>
    </div>
</template>

<script setup lang="ts">
    import { iIcon } from "@/components";
    import useGlobalStore from "@/stores/modules/global.ts";

    const globalStore = useGlobalStore();

    const changeCollapseIcon = () => {
        globalStore.isCollapse = globalStore.setCollapse(globalStore.isCollapse);
    };
</script>

<style lang="scss" scoped></style>
