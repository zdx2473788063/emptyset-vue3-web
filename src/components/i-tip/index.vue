<template>
    <div class="text-box" :style="`width:${width}px`" ref="textBoxRef">
        <div class="text">{{ text }}</div>
    </div>
</template>

<script lang="ts" setup>
    import { getCurrentInstance } from "vue";

    defineProps({
        text: {
            type: String,
            required: true
        },
        width: {
            type: Number,
            default: 300
        }
    });
    const instance = getCurrentInstance();

    const mouseEnter = e => {
        const info = e.target.getBoundingClientRect();
        const targetNode = instance?.refs.textBoxRef as HTMLElement;
        // F：记录初始状态的位置和尺寸 默认就是初始状态 height: 0
        // L: 执行代码让动画进入最终状态，并记录最终状态的位移和大小
        // 不定高，则设置高度为auto，并通过getBoundingClientRect获取最终高度
        targetNode.style.height = "auto";
        const lastInfo = targetNode.getBoundingClientRect();
        // I：计算最终状态和初始状态的位移和尺寸差异，并应用反向变换
        // P：执行动画，先让元素恢复到初始状态，再使用transition让元素从初始状态过渡到最终状态
        targetNode.style.height = "0";
        targetNode.style.transition = "height 0.3s";
        targetNode.style.left = info.left + "px";
        targetNode.style.top = info.top + info.height + 10 + "px";

        // 过渡到最终状态，下一帧执行，给动画一点缓冲时间
        requestAnimationFrame(() => {
            targetNode.style.height = lastInfo.height + "px";
        });
    };

    const mouseLeave = () => {
        const targetNode = instance?.refs.textBoxRef as HTMLElement;

        requestAnimationFrame(() => {
            targetNode.style.height = "0";
        });
    };

    defineExpose({ mouseEnter, mouseLeave });
</script>

<style lang="scss" scoped>
    .text-box {
        height: 0;
        overflow: hidden;
        border-radius: 10px;
        background-color: #fff;
        box-sizing: border-box;
        position: absolute;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
        .text {
            padding: 10px;
        }
    }
</style>
