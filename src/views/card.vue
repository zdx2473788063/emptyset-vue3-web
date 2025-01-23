<template>
    <div class="animation-page">
        <div class="w-300px h-100vh fixed bg-red color-white flex justify-center items-center">左侧导航栏</div>
        <div class="flip-animation">
            <div v-for="item in 35" :key="item" ref="domRef" class="flip-card relative cursor-pointer" @click="handleOpen($event, item)">
                <img src="@/assets/images/example/1.png" />
            </div>
        </div>
    </div>
    <i-card ref="cardRef" :if-jump="true" right-style="display:flex;justify-content:center;align-items:center">
        <template #left>
            <img class="left-img" :src="imageUrl" />
        </template>
        <template #right> loading... </template>
    </i-card>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { iCard } from "@/components";

    const cardRef = ref();
    const imageUrl = ref("");
    const handleOpen = (event, id) => {
        imageUrl.value = event.target.src;
        cardRef.value?.openDialog(event, id);
    };
</script>

<style lang="scss" scoped>
    .animation-page {
        display: flex;
        .flip-animation {
            display: grid;
            grid-template-columns: repeat(6, 250px);
            grid-gap: 10px;
            margin-left: 320px;
            padding-top: 20px;
            padding-bottom: 10px;
            width: calc(100vw - 320px);
        }
    }
    .flip-card {
        > img {
            width: 100%;
            border-radius: 20px;
        }
    }

    .left-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
</style>
