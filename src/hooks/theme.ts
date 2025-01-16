import { asideTheme, menuTheme } from "@/config/theme.ts";
import { storeToRefs } from "pinia";
import useGlobalStore from "@/stores/modules/global.ts";

export const useTheme = () => {
    const globalStore = useGlobalStore();
    const { isDark } = storeToRefs(globalStore);
    // 设置侧边栏样式
    const setAsideTheme = () => {
        let type = "light";
        if (isDark.value) type = "dark";
        const theme = asideTheme[type!];
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value as string | null);
        }
        setMenuTheme();
    };

    // 设置菜单样式
    const setMenuTheme = () => {
        let type = "light";
        if (isDark.value) type = "dark";
        const theme = menuTheme[type!];
        for (const [key, value] of Object.entries(theme)) {
            document.documentElement.style.setProperty(key, value as string | null);
        }
    };

    // 切换暗黑模式 ==> 默认暗黑
    const switchDark = () => {
        // 获取HTML根节点
        const html = document.documentElement as HTMLElement;
        if (isDark.value) html.setAttribute("class", "dark");
        else html.setAttribute("class", "");
        setAsideTheme();
    };

    // 初始化主题配置
    const initThemeConfig = () => {
        switchDark();
    };
    return {
        initThemeConfig,
        setAsideTheme,
        switchDark
    };
};
