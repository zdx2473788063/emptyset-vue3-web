<template>
    <div class="sdu-flex">
        <sdu-layout-content>
            <el-row class="mt-20px">
                <div class="flex w-full justify-between">
                    <div class="font-600 ml-20px text-18px">标题</div>
                </div>
            </el-row>
        </sdu-layout-content>
    </div>
</template>

<script setup lang="ts">
    import { sduLayoutContent } from "@/components";

    const handleClickDownload = (name: string) => {
        const anchor = document.createElement("a");
        anchor.download = `${name}.xls`;
        anchor.href = `${import.meta.env.BASE_URL}template/${name}.xls`;
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        setTimeout(() => {
            anchor.click();
            document.body.removeChild(anchor);
            setTimeout(() => {
                self.URL.revokeObjectURL(anchor.href);
            }, 250);
        }, 66);
    };
</script>

<style scoped></style>
