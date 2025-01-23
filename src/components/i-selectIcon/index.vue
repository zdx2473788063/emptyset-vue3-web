<template>
    <el-select :model-value="inputValue" placeholder="请选择图标" clearable @clear="() => emit('update:modelValue', '')" class="w-200px">
        <el-option v-for="(item, index) in nameList" :key="index" :label="item" :value="item">
            <div class="w-full flex justify-center" @click="() => emit('update:modelValue', item)">
                <i-icon :name="item" width="35" height="35"></i-icon>
            </div>
        </el-option>
    </el-select>
</template>

<script setup lang="ts">
    import { onMounted, ref, toRef } from "vue";
    import { iIcon } from "@/components";
    const nameList = ref<string[]>([]);
    const getLayerBgs = function () {
        // 获取所有背景图层
        //读取文件的路径 是否遍历文件的子目录 匹配文件正则表达式
        const files: any = import.meta.glob("@/assets/icons/menu/*.svg", { eager: true });
        Object.keys(files).map(x => {
            const list = x.split("/");
            const name = list[list.length - 1].replace(".svg", "");
            nameList.value.push(name);
        });
    };
    const props = defineProps({
        modelValue: {
            require: false,
            type: String
        }
    });
    const emit = defineEmits<(e: "update:modelValue", value: string) => void>();
    const inputValue = toRef(props, "modelValue");
    onMounted(() => {
        getLayerBgs();
    });
</script>

<style scoped></style>
