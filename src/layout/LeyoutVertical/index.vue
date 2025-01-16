<template>
    <el-container class="layout-container h-100vh w-100vw">
        <el-aside class="layout-aside transition-all" :style="{ width: !globalStore.isCollapse ? globalStore.menuWidth + 'px' : settings.asideMenuCollapseWidth }">
            <sdu-logo />
            <el-scrollbar class="layout-scrollbar">
                <el-menu :default-active="activeMenu" :collapse="globalStore.isCollapse" :collapse-transition="false" :unique-opened="globalStore.uniqueOpened" :router="false">
                    <aside-sub-menu :menu-list="menuList" />
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header class="layout-header">
                <sdu-header></sdu-header>
            </el-header>
            <sdu-main />
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import { sduMain, sduHeader, sduLogo, asideSubMenu } from "../components";
    import { computed } from "vue";
    import { useRoute } from "vue-router";
    import useGlobalStore from "@/stores/modules/global.ts";
    import useAuthStore from "@/stores/modules/auth.ts";
    import settings from "@/settings";

    const globalStore = useGlobalStore();
    const route = useRoute();

    const authStore = useAuthStore();

    const activeMenu = computed(() => {
        if (route.query.activeName) {
            return route.query.activeName;
        }
        return (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string;
    });

    const menuList = computed(() => authStore.showMenuList);
</script>

<style scoped lang="scss">
    .layout-container {
        .layout-aside {
            border-right: 0;
            // 左侧布局右边框阴影
            box-shadow: $aside-menu-box-shadow;
            // 左侧菜单层级
            z-index: $layout-aside-z-index;
            // 左侧布局右边距[用于悬浮和选中更明显]
            padding-right: $aside-menu-padding-right;
            // 左侧布局左边距[用于悬浮和选中更明显]
            padding-left: $aside-menu-padding-left;

            background-color: var(--el-menu-bg-color);

            .layout-scrollbar {
                height: calc(100vh - $aside-header-height);
                // 去除菜单右侧边框
                .el-menu {
                    border-right: none;
                }
            }
        }
        .layout-header {
            height: $aside-header-height;
            background-color: var(--el-header-bg-color);
        }
    }
</style>
