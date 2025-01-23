<template>
    <i-dialog v-model="modelVisible" title="撤回" align-center width="350">
        <div v-loading="formLoading">
            <div>确定要撤回正在进行中的任务？</div>
            <el-checkbox v-model="formState.isReserve" label="保留任务数据" />
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button :disabled="formLoading" @click="modelVisible = false">取消</el-button>
                <el-button :disabled="formLoading" type="primary" @click="handleSubmit"> 确定 </el-button>
            </div>
        </template>
    </i-dialog>
</template>

<script setup lang="ts">
    import { iDialog } from "@/components";
    import { ref, reactive } from "vue";
    import { ElMessage } from "element-plus";
    import { postRecallTask } from "@/api";
    defineOptions({
        name: "AuditForm"
    });

    const emit = defineEmits(["successFully"]);
    const modelVisible = ref(false);
    const formLoading = ref(false);

    const formState = reactive({
        taskListId: "",
        taskType: "",
        isReserve: true
    });

    const open = async (id: string, taskType: string) => {
        formState.taskListId = id;
        formState.taskType = taskType;
        formState.isReserve = true;
        modelVisible.value = true;
    };

    // 审核,通过3 驳回2 待审 1
    const handleSubmit = async () => {
        formLoading.value = true;
        try {
            const res: any = await postRecallTask(formState);
            if (res.code === 200) {
                ElMessage.success("撤回成功");
                emit("successFully");
            }
            return;
        } catch {
            return false;
        } finally {
            formLoading.value = false;
            modelVisible.value = false;
        }
    };
    defineExpose({
        open
    });
</script>

<style scoped lang="scss"></style>
