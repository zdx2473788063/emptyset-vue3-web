<template>
    <div class="dialog" v-if="showMask" @click="closeDialog" ref="dialogRef">
        <button ref="closeBtn" class="backPage" @click.stop="closeDialog">
            <el-icon :size="20">
                <Close />
            </el-icon>
        </button>
        <div class="dialog-content" @click.stop>
            <!-- 左侧内容 -->
            <div class="left-container" :style="{ width: mediaWidth + 'px' }">
                <slot name="left"></slot>
            </div>
            <!-- 右侧内容 -->
            <div class="right-container" :style="rightStyle">
                <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, nextTick } from "vue";
    import { useRouter } from "vue-router";

    const router = useRouter();

    defineOptions({
        name: "ICard"
    });
    const props = defineProps({
        rightStyle: {
            type: String,
            default: ""
        },
        ifJump: {
            // 是否跳转页面
            type: Boolean,
            default: false
        }
    });

    const showMask = ref(false);
    interface ITarget {
        width: number;
        height: number;
    }
    const loadImg = src => {
        const maxImageHeight = window.innerHeight - 64;
        return new Promise<{ realWidth: number; realHeight: number }>(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = e => {
                const realWidth = (maxImageHeight / (e.target as unknown as ITarget).height) * (e.target as unknown as ITarget).width;
                resolve({
                    realWidth,
                    realHeight: maxImageHeight
                });
            };
        });
    };

    const mediaWidth = ref();
    const zoom = ref();
    let firstInfo: any = {},
        lastInfo: any = {},
        dialogNode: HTMLElement | null = null,
        maskNode: HTMLElement | null = null,
        convertY = 0,
        convertX = 0;
    const openDialog = async (e, id) => {
        // F：记录初始状态的位置，首先为实现该效果，弹窗的初始位置需与卡片重叠，且左侧图片的大小刚好与卡片中的图片大小一致
        firstInfo = e.target.getBoundingClientRect();
        // 点击弹窗，获取当前图片的实际宽高，此处是因为小红书内容弹窗左侧的图片的宽高是动态计算的，所以需要动态获取
        const { realWidth } = await loadImg(e.target.src);
        mediaWidth.value = realWidth;
        // 展示弹窗，获取弹窗的最终状态的位置
        showMask.value = true;
        if (props.ifJump) {
            router.push({
                name: "cardDetail",
                params: {
                    id
                }
            });
        }
        nextTick(() => {
            dialogNode = document.querySelector(".dialog-content") as HTMLElement;
            maskNode = document.querySelector(".dialog") as HTMLElement;
            // L：记录弹窗的最终态的位置和大小信息
            lastInfo = dialogNode?.getBoundingClientRect();

            // I：计算弹窗初始态和最终态的位移差和缩放的比例，并设置到弹窗上
            // 卡片图片与弹窗图片保持一致，所以缩放比例就是卡片图片的宽度与弹窗图片宽度的比例
            // 然后通过计算位移将弹窗移动到卡片的位置
            zoom.value = firstInfo.width / mediaWidth.value;
            convertX = firstInfo.x - lastInfo.x;
            convertY = firstInfo.y - lastInfo.y;

            // P: 设置弹窗到初始状态
            // 注意这里的一个技巧：将缩放放置到translate的前面，这样计算位移就不需要考虑缩放后产生的位移差了
            dialogNode.style.transform = `translate(calc(-50% + ${convertX}px), calc(-50% + ${convertY}px)) scale(${zoom.value}) `;
            dialogNode.style.transformOrigin = "left top";

            // P：下一帧取消回到初始状态的动画效果，则恢复到最终态
            requestAnimationFrame(() => {
                // 最后一定要再次设置元素的宽度，否则关闭弹窗时的宽度过渡不生效
                dialogNode!.style.transition = "transform 0.4s, width 0.4s";
                dialogNode!.style.width = lastInfo.width + "px";
                dialogNode!.style.transform = "";
                maskNode!.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
            });
        });
    };

    const closeBtn = ref();
    const closeDialog = () => {
        closeBtn.value.style.display = "none";
        // F: 记录初始状态
        const dialogFirstInfo = dialogNode?.getBoundingClientRect() as DOMRect;
        // L：设置到最终态
        dialogNode!.style.left = firstInfo.x + "px";
        dialogNode!.style.top = firstInfo.y + "px";
        dialogNode!.style.transition = "none";
        dialogNode!.style.width = mediaWidth.value + "px";
        dialogNode!.style.overflow = "hidden";
        dialogNode!.style.transform = `scale(${zoom.value})`;
        if (props.ifJump) {
            router.back();
        }
        nextTick(() => {
            // F: 记录最终态
            const dialogLastInfo = dialogNode?.getBoundingClientRect() as DOMRect;
            // I: 计算位移
            const convertX = dialogFirstInfo.x - dialogLastInfo.x;
            const convertY = dialogFirstInfo.y - dialogLastInfo.y;
            // P：恢复到初始位置
            dialogNode!.style.width = dialogFirstInfo.width + "px";
            dialogNode!.style.overflow = "visible";
            dialogNode!.style.transform = `translate(${convertX}px, ${convertY}px) scale(1)`;
            // 下一帧过渡到最终状态
            requestAnimationFrame(() => {
                dialogNode!.style.transition = "transform 0.4s, width 0.4s";
                dialogNode!.style.width = mediaWidth.value + "px";
                dialogNode!.style.overflow = "hidden";
                dialogNode!.style.transform = `scale(${zoom.value})`;
                maskNode!.style.backgroundColor = "transparent";
            });
            dialogNode!.addEventListener("transitionend", () => {
                // 动画结束后移除弹窗
                showMask.value = false;
            });
        });
    };
    defineExpose({ openDialog });
</script>

<style lang="scss" scoped>
    .dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        transition: background-color 0.4s;
        z-index: 9999;
        .backPage {
            position: fixed;
            top: 5%;
            left: 3%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 40px;
            border: 1px solid #999;
            cursor: pointer;
            transition: all 0.3s;
            z-index: 2;
        }
        .dialog-content {
            display: flex;
            position: absolute;
            top: 50%;
            left: calc(50% + 160px);
            transform: translate(-50%, -50%) scale(1);
            height: calc(100% - 64px);
            background-color: #fff;
            border-radius: 20px;
            overflow: visible;
            z-index: 1;
            .left-container {
                flex-shrink: 0;
                flex-grow: 0;
                height: 100%;
                border-radius: 20px 0 0 20px;
                overflow: hidden;
            }
            .right-container {
                width: 440px;
                flex-shrink: 0;
                flex-grow: 1;
                border-radius: 0 20px 20px 0;
                overflow: hidden;
            }
        }
    }
</style>
