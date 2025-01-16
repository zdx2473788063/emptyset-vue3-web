<template>
    <el-icon :size="props.size">
        <component :is="props.name"></component>
    </el-icon>
</template>

<script setup lang="ts">
    interface IGlobalIconProps {
        name?: string;
        size?: number | string;
    }

    const props = withDefaults(defineProps<IGlobalIconProps>(), {
        name: "Sunny",
        size: 18
    });
</script>

<style scoped></style>
