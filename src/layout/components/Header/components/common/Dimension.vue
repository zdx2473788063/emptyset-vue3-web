<template>
    <el-dropdown trigger="click" @command="handleSizeChange">
        <i-global-icon class="m-r-10px sdu-icon" :size="22" name="ElementPlus" />
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in dimensionList" :key="item.value" :command="item.value" :disabled="dimensionSize === item.value">
                    {{ item.label }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
    import { iGlobalIcon } from "@/components";
    import { computed } from "vue";
    import useGlobalStore from "@/stores/modules/global.ts";
    import { ElMessage } from "element-plus";

    const globalStore = useGlobalStore();
    const dimensionSize = computed(() => globalStore.size);
    const dimensionList = [
        { label: "默认", value: "default" },
        { label: "大型", value: "large" },
        { label: "小型", value: "small" }
    ];

    const handleSizeChange = (size: string) => {
        if (dimensionSize.value === size) return;
        globalStore.setSize(size);
        ElMessage.success("尺寸已切换为" + size);
    };
</script>

<style scoped></style>
