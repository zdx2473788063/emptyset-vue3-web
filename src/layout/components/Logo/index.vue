<template>
    <div class="sdu-logo flex items-center justify-center">
        <div class="sdu-logo-img">{{ globalStore.isCollapse ? "标题" : "标题" }}</div>
    </div>
</template>

<script setup lang="ts">
    import useGlobalStore from "@/stores/modules/global.ts";
    const globalStore = useGlobalStore();
</script>

<style scoped lang="scss">
    .sdu-logo {
        width: 100%;
        height: $aside-header-height;
        .sdu-logo-img {
            padding: 6px;
            text-align: center;
            //垂直居中
            display: flex;
            justify-content: center;
            align-items: center;
            background: #c9e0ed;
            border-radius: 8px;
            white-space: nowrap;
            font-size: 13px;
        }
    }
</style>
