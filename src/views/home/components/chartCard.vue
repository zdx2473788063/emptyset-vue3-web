<template>
    <el-card class="rounded-md dark:bg-black mt-20px" shadow="hover">
        <div ref="refChart" class="h-350px w-full"></div>
    </el-card>
</template>

<script setup lang="ts">
    import * as echarts from "echarts";
    import { onMounted, onUnmounted, ref } from "vue";
    import { randomInt } from "@/utils";

    const refChart = ref();
    const chartInstance = ref();
    // 初始化echarts
    const initChart = () => {
        chartInstance.value = echarts.init(refChart.value);
        const initOption = {
            title: {
                text: "近10日订单量",
                top: "0%"
            },
            grid: {
                top: "12%",
                left: "6%",
                bottom: "6%",
                right: "0"
            },
            tooltip: {
                show: true
            },
            legend: {
                data: ["订单量", "退单量"],
                right: "5%"
            },
            xAxis: [
                {
                    type: "category",
                    axisPointer: {
                        type: "shadow"
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    // 去掉背景横刻度线
                    splitLine: { show: false }
                }
            ],
            series: [
                {
                    name: "订单量",
                    type: "line",
                    tooltip: {
                        valueFormatter: function (value: any) {
                            return value + " V";
                        }
                    },
                    // 圆滑连接
                    smooth: true,
                    itemStyle: {
                        color: "#00f2f1" // 线颜色
                    }
                },
                {
                    name: "退单量",
                    type: "bar",
                    tooltip: {
                        valueFormatter: function (value: any) {
                            return value + " V";
                        }
                    }
                }
            ]
        };
        // 图表初始化配置
        chartInstance.value?.setOption(initOption);
    };

    const xChartData = ref();
    const yChartData = ref();
    // 获取数据
    const getData = () => {
        // 先进行置空
        xChartData.value = [];
        yChartData.value = [];
        let num1 = randomInt(100, 200);
        let num2 = randomInt(200, 500);
        let num3 = randomInt(200, 500);
        let num4 = randomInt(500, 700);
        let num5 = randomInt(500, 700);
        let num6 = randomInt(700, 800);
        let num7 = randomInt(800, 900);
        let num8 = randomInt(900, 1000);
        xChartData.value = ["09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10"];
        yChartData.value.push(num1, num2, num3, num4, num5, num6, num7, num8);
        updateChart();
    };

    // 更新图表
    const updateChart = () => {
        const colorArr = [
            ["#0BA82C", "#4FF778"],
            ["#2E72BF", "#23E5E5"],
            ["#5052EE", "#AB6EE5"],
            ["hotpink", "lightsalmon"]
        ];
        // 处理图表需要的数据
        const dataOption = {
            xAxis: {
                // x轴刻度文字
                data: xChartData.value
            },
            series: [
                {
                    // y轴柱形耗电量数据
                    data: yChartData.value,
                    itemStyle: {
                        //颜色样式部分
                        label: {
                            show: true, //开启数字显示
                            position: "top", //在上方显示数字
                            textStyle: {
                                //数值样式
                                color: "#077EF8" //字体颜色
                                //fontSize: 10, //字体大小
                            }
                        },
                        //   柱状图颜色渐变
                        color: (arg: any) => {
                            let targetColorArr: any;
                            if (arg.value > 700) {
                                targetColorArr = colorArr[0];
                            } else if (arg.value > 500) {
                                targetColorArr = colorArr[1];
                            } else if (arg.value > 200) {
                                targetColorArr = colorArr[2];
                            } else {
                                targetColorArr = colorArr[3];
                            }
                            return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: targetColorArr[0]
                                },
                                {
                                    offset: 1,
                                    color: targetColorArr[1]
                                }
                            ]);
                        }
                    }
                },

                {
                    // y轴折线耗电量数据
                    data: yChartData.value
                }
            ]
        };
        // 图表数据变化配置
        chartInstance.value?.setOption(dataOption);
    };

    // 局部刷新定时器
    const intervalTimer = ref();
    // 定时器
    const getDataTimer = () => {
        intervalTimer.value = setInterval(() => {
            // 执行刷新数据的方法
            getData();
        }, 3000);
    };

    onMounted(() => {
        // 图表初始化
        initChart();
        // 获取接口数据
        getData();
        // 局部刷新定时器
        getDataTimer();
    });

    onUnmounted(() => {
        // 销毁Echarts图表
        chartInstance.value.dispose();
        chartInstance.value = null;
        // 清除局部刷新定时器
        clearInterval(intervalTimer.value);
        intervalTimer.value = null;
    });
</script>

<style scoped></style>
