<template>
    <!-- 有下级，用el-sub-menu，无下级用el-menu-item -->
    <template v-for="item in menuList" :key="item.path">
        <!-- 非叶子节点 -->
        <el-sub-menu v-if="item.children?.length" :index="item.path">
            <template #title>
                <!-- <sdu-icon v-if="props?.collapse" name="sdu-menu-left" width="20" height="20"></sdu-icon> -->
                <span v-text="item.meta?.title"></span>
            </template>
            <aside-sub-menu :menu-list="item.children" />
        </el-sub-menu>
        <!-- 叶子节点[功能节点] -->
        <el-menu-item v-else :index="item.path" @click="handleMenuRouter(item)">
            <template #title>
                <!-- <sdu-icon v-if="props?.collapse" name="sdu-menu-left" width="20" height="20"></sdu-icon> -->
                <span v-text="item.meta?.title"></span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
    // import { sduIcon } from "@/components";
    import { useRouter } from "vue-router";

    defineOptions({
        name: "AsideSubMenu"
    });
    type Props = {
        menuList: any[];
    };
    withDefaults(defineProps<Props>(), {});

    const { push } = useRouter();
    const handleMenuRouter = (menu: any) => {
        push(menu.path);
    };
</script>

<style scoped lang="scss">
    .el-menu-item {
        height: $aside-menu-height !important;
        margin-bottom: $aside-menu-margin-bottom;
        font-weight: $aside-menu-font-weight;
        --el-menu-item-height: $aside-menu-height;

        /* 设置用户禁止选中 */
        user-select: none;
        border-left: $aside-menu-border-left solid transparent;
        border-radius: $aside-menu-border-left;

        color: var(--el-menu-text-color);

        i {
            transform: translate($aside-menu-font-icon-translate); // 图标偏移
        }
        span {
            transform: translate($aside-menu-font-icon-translate); // 文字偏移
        }

        // 设置鼠标悬停时el-menu-item的样式
        &:hover {
            color: var(--el-menu-hover-text-color);
            background: var(--el-menu-hover-bg-color);

            border-radius: $aside-menu-border-left;
        }

        // 设置选中el-menu-item时的样式
        &.is-active {
            color: var(--el-menu-active-text-color);
            background: var(--el-menu-active-bg-color);
            border-left: $aside-menu-border-left solid var(--el-menu-border-left-color);
        }
    }
    // 子节点
    :deep(.el-sub-menu__title) {
        height: $aside-menu-height;
        font-weight: $aside-menu-font-weight;
        margin-bottom: $aside-menu-margin-bottom;

        /* 设置用户禁止选中 */
        user-select: none;
        border-left: $aside-menu-border-left solid transparent;
        border-radius: $aside-menu-border-left;

        color: var(--el-menu-text-color);

        i {
            transform: translate($aside-menu-font-icon-translate); // 图标偏移
        }
        span {
            transform: translate($aside-menu-font-icon-translate); // 文字偏移
        }
    }
</style>
<style lang="scss">
    /* 子级菜单字体高亮，父级菜单也高亮 */
    .el-sub-menu.is-active > .el-sub-menu__title {
        color: var(--el-menu-active-text-color) !important;
    }

    /* icon图标也跟着变 */
    .el-sub-menu.is-active > .el-sub-menu__title i {
        color: var(--el-menu-active-text-color) !important;
    }
</style>
