<template>
    <el-dialog v-bind="$attrs" append-to-body :close-on-click-modal="false" :close-on-press-escape="false">
        <template v-for="(_, name) in $slots" #[name]>
            <slot :name="name"></slot>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
    defineOptions({
        name: "IDialog"
    });
</script>

<style scoped></style>
