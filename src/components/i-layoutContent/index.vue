<template>
    <div class="sdu-layout-content">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    defineOptions({
        name: "ILayoutContent"
    });
</script>

<style scoped lang="scss">
    .sdu-layout-content {
        padding: 20px;
        border-radius: 6px;
        border: 1px solid #e4e7ed;
        background-color: #fff;
        overflow: hidden;
        color: #303133;
        @apply dark:bg-#1d1e1f dark:c-#cfd3dc dark:b-#414243 flex flex-col flex-1;
        transition: 0.3s;
    }
</style>
