<template>
    <div class="header flex justify-between">
        <div class="flex items-center overflow-hidden whitespace-nowrap">
            <!--左侧菜单展开和折叠图标-->
            <Collapse />
            <!-- 面包屑 -->
            <BreadCrumb v-if="globalStore.showBreadCrumb" class="<md:visible"></BreadCrumb>
        </div>
        <Toolbar />
    </div>
</template>

<script setup lang="ts">
    import Collapse from "@/layout/components/Header/components/Collapse.vue";
    import BreadCrumb from "@/layout/components/Header/components/BreadCrumb.vue";
    import Toolbar from "@/layout/components/Header/components/Toolbar.vue";
    import useGlobalStore from "@/stores/modules/global.ts";
    const globalStore = useGlobalStore();
</script>

<style scoped lang="scss">
    .header {
        height: $aside-header-height;
    }
</style>
