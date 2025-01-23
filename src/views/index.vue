<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h1>It's an experiment.</h1>
        <el-button class="rd-10px mt-50px" type="primary" size="large" @click="handleJumpCard">演示卡片展开</el-button>
        <el-button class="rd-10px mt-20px" type="primary" plain size="large" @click="handleJumpFilp">演示不定高渐变展开</el-button>
    </div>
</template>

<script lang="ts" setup>
    import { useRouter } from "vue-router";
    const router = useRouter();
    const handleJumpCard = () => {
        router.push({ name: "card" });
    };

    const handleJumpFilp = () => {
        router.push({ name: "filp" });
    };
</script>

<style lang="scss" scoped></style>
