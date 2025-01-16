<template>
    <div class="flex items-center justify-center">
        <!-- 尺寸配置-->
        <dimensions />
        <!-- 明亮/暗黑模式切换-->
        <dark />
        <!-- 全屏图标-->
        <full-screen />
        <!-- 头像-->
        <user />
    </div>
</template>

<script setup lang="ts">
    import { dimensions, dark, fullScreen, user } from "./common";
</script>

<style scoped></style>
