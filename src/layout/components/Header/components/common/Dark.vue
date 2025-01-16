<template>
    <sdu-global-icon class="m-r-10px sdu-icon" name="Sunny" :size="22" v-if="!globalStore.isDark" @click="handleSwitchDark" />
    <sdu-global-icon class="m-r-10px sdu-icon" name="Moon" :size="22" v-if="globalStore.isDark" @click="handleSwitchDark" />
</template>

<script setup lang="ts">
    import { sduGlobalIcon } from "@/components";
    import useGlobalStore from "@/stores/modules/global.ts";
    import { useTheme } from "@/hooks/theme.ts";

    const globalStore = useGlobalStore();
    const { switchDark } = useTheme();

    const handleSwitchDark = async (event: MouseEvent) => {
        const x = event.clientX;
        const y = event.clientY;
        // 画圆
        const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        if (document.startViewTransition == undefined) {
            /** 明亮和暗黑模式核心逻辑 */
            // 定义图标切换变量(true-月亮，false-太阳)
            globalStore.setGlobalState("isDark", !globalStore.isDark);
            switchDark();
            /** 明亮和暗黑模式核心逻辑 */
        } else {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const transition = document.startViewTransition(() => {
                globalStore.setGlobalState("isDark", !globalStore.isDark);
                switchDark();
            });
            await transition.ready;
            const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`];
            document.documentElement.animate(
                {
                    clipPath: globalStore.isDark ? clipPath : [...clipPath].reverse()
                },
                {
                    duration: 300,
                    easing: "ease-in",
                    pseudoElement: globalStore.isDark ? "::view-transition-new(root)" : "::view-transition-old(root)"
                }
            );
        }
    };
</script>

<style scoped></style>
