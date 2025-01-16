<template>
    <el-config-provider :size="dimensionSize" :message="{ max: 1 }">
        <router-view></router-view>
    </el-config-provider>
</template>

<script setup lang="ts">
    import { useTheme } from "@/hooks/theme.ts";
    import { computed } from "vue";
    import useGlobalStore from "@/stores/modules/global.ts";

    const globalStore = useGlobalStore();
    const dimensionSize = computed(() => globalStore.size);
    const { initThemeConfig } = useTheme();

    // 初始化主题
    initThemeConfig();
</script>

<style scoped></style>
