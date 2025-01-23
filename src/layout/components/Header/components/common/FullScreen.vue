<template>
    <i-global-icon class="m-r-10px sdu-icon" :size="22" v-if="!globalStore.isFullScreen" name="FullScreen" @click="toggle" />
    <i-global-icon class="m-r-10px sdu-icon" :size="22" v-else name="CloseBold" @click="toggle" />
</template>

<script setup lang="ts">
    import { useFullscreen } from "@vueuse/core";
    import { iGlobalIcon } from "@/components";
    import { watch } from "vue";
    import useGlobalStore from "@/stores/modules/global.ts";

    const globalStore = useGlobalStore();
    const { isFullscreen, toggle } = useFullscreen();

    watch(
        () => isFullscreen.value,
        () => {
            globalStore.setGlobalState("isFullScreen", isFullscreen.value);
        }
    );
</script>

<style scoped></style>
