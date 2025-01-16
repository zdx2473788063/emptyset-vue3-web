<template>
    <el-main class="layout-main">
        <router-view v-slot="{ Component, route }">
            <keep-alive v-if="meta.keepAlive">
                <component :is="Component" :key="route.fullPath" />
            </keep-alive>
            <component v-else :is="Component" :key="route.fullPath" />
        </router-view>
    </el-main>
</template>

<script setup lang="ts">
    import { useRoute } from "vue-router";

    const { meta } = useRoute();
</script>

<style scoped></style>
