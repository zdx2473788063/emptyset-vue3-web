<template>
    <div class="sdu-timeline">
        <div class="sdu-timeline-item" v-for="(item, index) in data" :key="index">
            <div class="sdu-timeline-item-icon"></div>
            <div class="sdu-timeline-item-line"></div>
            <div class="sdu-timeline-item-content">
                <div class="item-content-title">{{ item.status }}</div>
                <div class="item-content-desc">{{ item.operateTime }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    // type Props = {
    //     data: Array<any>;
    // };
    //
    // withDefaults(defineProps<Props>(), {});
    const data = [
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        },
        {
            status: "已提交",
            operateTime: "2022-01-01 12:00:00"
        }
    ];
</script>

<style scoped lang="scss">
    .sdu-timeline {
        display: flex;
        flex-wrap: wrap;
        .sdu-timeline-item {
            position: relative;
            padding-right: 10px;
            .sdu-timeline-item-icon {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                background-color: #e4e7ed;
            }
            .sdu-timeline-item-line {
                width: 100%;
                border-top: 1px solid #e4e7ed;
                position: absolute;
                top: 6px;
            }
            .sdu-timeline-item-content {
                .item-content-desc {
                    color: #909399;
                    line-height: 1;
                    font-size: 12px;
                }
            }
        }
    }
</style>
