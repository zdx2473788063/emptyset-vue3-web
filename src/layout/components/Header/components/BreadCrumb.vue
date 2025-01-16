<template>
    <div class="ml-20px">
        <el-breadcrumb :separator-icon="ArrowRight">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.path">
                    <el-link :underline="false" @click="handleBreadcrumb(item, index)">
                        {{ item.meta.title }}
                    </el-link>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script setup lang="ts">
    import { ArrowRight } from "@element-plus/icons-vue";
    import { computed } from "vue";
    import useAuthStore from "@/stores/modules/auth.ts";
    import { useRoute, useRouter } from "vue-router";
    import { HOME_URL } from "@/config";
    const authStore = useAuthStore();
    const route = useRoute();
    const { push } = useRouter();

    const breadcrumbList = computed(() => {
        // let breadcrumbData = authStore.getBreadcrumbList[matched[matched.length - 1].path] ?? [];
        let breadcrumbData = authStore.getBreadcrumbList[route.matched[route.matched.length - 1].path] ?? [];
        // 不需要首页面包屑可删除以下判断
        if (breadcrumbData[0]?.path !== HOME_URL) {
            breadcrumbData = [
                {
                    path: HOME_URL,
                    meta: { icon: "HomeFilled", title: "首页" }
                },
                ...breadcrumbData
            ];
        }
        return breadcrumbData;
    });

    // 点击面包屑
    const handleBreadcrumb = (item: any, index: number) => {
        if (index !== breadcrumbList.value.length - 1) push(item.path);
    };
</script>

<style scoped lang="scss">
    .breadcrumb-enter-active {
        transition: all 0.2s;
    }
    .breadcrumb-enter-from,
    .breadcrumb-leave-active {
        opacity: 0;
        transform: translateX(10px);
    }
</style>
