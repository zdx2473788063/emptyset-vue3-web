import { PINIA_PREFIX } from "@/config";
import { defineStore } from "pinia";

// defineStore方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
const useGlobalStore = defineStore("global", {
    // 开启数据持久化
    persist: {
        // enabled: true, // true 表示开启持久化保存
        key: PINIA_PREFIX + "global", // 默认会以 store 的 id 作为 key
        storage: localStorage
    },
    state() {
        return {
            // 布局模式 (纵向：vertical)
            layout: "vertical",
            // 默认关闭黑暗模式
            isDark: false,
            // 是否折叠菜单
            isCollapse: false,
            // 是否显示面包屑
            showBreadCrumb: false,
            // 菜单是否可展开单个[默认：true仅仅一个]
            uniqueOpened: true,
            // 菜单展开宽度[默认：220px]
            menuWidth: 220,
            // ElementPlus 尺寸大小
            size: "default",
            // 是否全屏
            isFullScreen: false
        };
    },
    actions: {
        // 该函数没有上下文数据，所以获取state中的变量需要使用this
        setCollapse(value: boolean) {
            this.isCollapse = !value;
            return this.isCollapse;
        },
        setBreadCrumb(value: boolean) {
            this.showBreadCrumb = !value;
            return this.showBreadCrumb;
        },
        // 设置ElementPlus尺寸
        setSize(value: string) {
            this.size = value;
        },
        setGlobalState(...args: any) {
            this.$patch({
                [args[0]]: args[1]
            });
        }
    }
});

export default useGlobalStore;
