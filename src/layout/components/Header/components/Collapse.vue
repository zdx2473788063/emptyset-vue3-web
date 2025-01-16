<template>
    <div style="display: flex; align-items: center" @click="changeCollapseIcon">
        <sdu-icon name="sdu-menu-left" width="20" height="20" v-if="!globalStore.isCollapse"></sdu-icon>
        <sdu-icon name="sdu-menu-right" width="20" height="20" v-if="globalStore.isCollapse"></sdu-icon>
    </div>
</template>

<script setup lang="ts">
    import { sduIcon } from "@/components";
    import useGlobalStore from "@/stores/modules/global.ts";

    const globalStore = useGlobalStore();

    const changeCollapseIcon = () => {
        globalStore.isCollapse = globalStore.setCollapse(globalStore.isCollapse);
    };
</script>

<style lang="scss" scoped></style>
