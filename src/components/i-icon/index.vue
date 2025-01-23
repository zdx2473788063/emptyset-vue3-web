<template>
    <svg :style="{ width: width + 'px', height: height + 'px' }">
        <use :xlink:href="prefix + name" :fill="color"></use>
    </svg>
</template>

<script setup lang="ts">
    defineOptions({
        name: "IIcon"
    });
    defineProps({
        prefix: {
            type: String,
            default: "#icon-"
        },
        // svg矢量图的名字
        name: String,
        // svg图标的颜色
        color: {
            type: String,
            default: ""
        },
        // svg宽度
        width: {
            type: String,
            default: "18"
        },
        // svg高度
        height: {
            type: String,
            default: "18"
        }
    });
</script>

<style scoped></style>
