import { cloneDeep } from "lodash-es";
import router from "@/routers";
import Layout from "@/layout/index.vue";
import useAuthStore from "@/stores/modules/auth.ts";
import useUserStore from "@/stores/modules/user.ts";
import { LOGIN_URL } from "@/config";

export const initDynamicRouter = async () => {
    const userStore = useUserStore();
    const authStore = useAuthStore();
    try {
        // 获取路由信息
        await authStore.setListRouters();

        // 判断是否有权限访问管理端
        if (authStore.recursiveMenuList === null || authStore.recursiveMenuList.length === 0) {
            userStore.$reset();
            await router.replace(LOGIN_URL);
            return;
        }

        // 把数据扁平化
        const flatListRouters = flattenRoutes(authStore.recursiveMenuList);
        // 3、添加动态路由[扁平化一级路由数据]
        flatListRouters.forEach((item: any) => {
            router.addRoute("layout", item);
        });
    } catch { }
};

/**
 * @description 使用递归过滤出需要渲染在左侧菜单动态数据的列表 (需剔除 alwaysShow === false 隐藏的菜单)
 * @param menuList
 */
export function getShowStaticAndDynamicMenuList(menuList: any): any {
    let newMenuList: any = cloneDeep(menuList);
    return newMenuList.filter((item: any) => {
        return item.visible || item.meta.visible;
    });
}
// /**
//  * @description 使用递归过滤出需要渲染在左侧菜单动态数据的列表 (需剔除 visible === false 隐藏的菜单)
//  * @param menuList
//  */
// export function getShowStaticAndDynamicMenuList(menuList: any): any {
//     return menuList
//         .map((item: any) => {
//             if (item.visible) {
//                 if (item.children && item.children.length) {
//                     item.children = getShowStaticAndDynamicMenuList(item.children);
//                 }
//                 return item;
//             }
//             return null;
//         })
//         .filter((item: any) => item !== null);
// }

/**
 * @description 生成路由列表
 * @param data
 */
export function generateRoutes(data: any[]) {
    const modules = import.meta.glob("@/views/**/*.vue");
    const routeList: any = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item && !router.hasRoute(item.path)) {
            const componentTemplate = item.component;
            const route: any = {
                path: item.path,
                name: item.componentName,
                component: item.component ? modules[`/src/views/${componentTemplate}.vue`] : Layout,
                children: item.children ? generateRoutes(item.children) : [],
                meta: {
                    title: item.name,
                    icon: item.icon,
                    keepAlive: item.keepAlive,
                    alwaysShow: item.alwaysShow
                }
            };
            if (item.type === 1) {
                route.redirect = getRedirect(item.path, item.children);
            }
            routeList.push(route);
        }
    }
    return routeList;
}

export const getRedirect = (parentPath: string, children: any[]) => {
    if (!children || children.length == 0) {
        return parentPath;
    }
    const path = generateRoutePath(children[0].path);
    // 递归子节点
    if (children[0].children) return getRedirect(path, children[0].children);
    else return path;
};
const generateRoutePath = (path: string) => {
    if (!path.startsWith("/")) {
        path = "/" + path;
    }
    return path;
};

/**
 * @description 扁平化路由
 * @param routes
 */
function flattenRoutes(routes: any[]) {
    let flatRoutes: any = [];
    function flatten(route: any) {
        flatRoutes.push(route);
        if (route.children) {
            route.children.forEach((child: any) => flatten(child));
        }
    }

    routes.forEach(route => flatten(route));
    return flatRoutes;
}

/**
 * @description 递归获取面包屑
 * @param menuList 菜单列表
 * @param parent 父级菜单
 * @param result 处理后的结果
 */
export const getAllBreadcrumbList = (menuList: any, parent = [], result: { [key: string]: any } = {}) => {
    for (const item of menuList) {
        result[item.path] = [...parent, item];
        if (item.children) getAllBreadcrumbList(item.children, result[item.path], result);
    }
    return result;
};
