<template>
    <el-tag :type="dictData?.colorType">{{ dictData?.label || "未知" }}</el-tag>
</template>
<script setup lang="ts">
    import { PropType, ref, watch } from "vue";
    import { getDictOptions } from "@/utils/dict.ts";

    defineOptions({
        name: "IDictTag"
    });

    const props = defineProps({
        type: {
            type: String as PropType<string>,
            required: true
        },
        value: {
            type: [String, Number, Boolean] as PropType<string | number | boolean>,
            required: true
        }
    });

    interface DictDataType {
        label: string;
        value: string | number | boolean;
        colorType?: string;
    }
    const dictData = ref<DictDataType>();
    const getDictObj = (dictType: string, value: string) => {
        const dictOptions = getDictOptions(dictType);
        dictOptions.forEach((dict: DictDataType) => {
            if (dict.value == value) {
                dictData.value = dict;
            }
        });
    };

    watch(
        () => props.value,
        () => {
            getDictObj(props.type, props.value?.toString());
        },
        { immediate: true }
    );
</script>
