import { defineStore } from "pinia";
import { getPermissionInfo } from "@/api/login.ts";
// import { generateRoutes, getAllBreadcrumbList, getShowStaticAndDynamicMenuList } from "@/routers/modules/dynamicRouter.ts";
import { staticRouter } from "@/routers/modules/staticRouter.ts";
import useUserStore from "@/stores/modules/user.ts";

const useAuthStore = defineStore("auth", {
    state: (): any => {
        return {
            // 菜单数据(树性结构)
            recursiveMenuList: [],
            // 面包屑数据
            breadcrumbList: [],
            // 用户角色
            roleList: []
        };
    },
    actions: {
        // 获取后端数据
        async setListRouters() {
            // const res: any = await getPermissionInfo();
            // const { menus, user, roles } = res;
            // // 递归处理菜单数据，将动态路由和静态路由合并
            // this.recursiveMenuList = getShowStaticAndDynamicMenuList(staticRouter).concat(generateRoutes(getShowStaticAndDynamicMenuList(menus)));
            // // 面包屑需要静态和动态所有的数据，无论是否隐藏
            // this.breadcrumbList = staticRouter.concat(generateRoutes(menus));
            // // 设置用户角色信息
            // this.roleList = roles;
            // const userStore = useUserStore();
            // userStore.setUserInfo(user);
        }
    },
    // 计算属性，和vuex是使用一样，getters里面不是方法，是计算返回的结果值
    getters: {
        // 菜单权限列表 ==> 左侧菜单栏渲染，这里的菜单将后端数据进行递归，需要将动态路由 isHide == 0 的隐藏菜单剔除, 将静态路由 isHide == 0 的隐藏菜单剔除
        showMenuList: state => state.recursiveMenuList,
        // 递归处理后的所有面包屑导航列表
        // getBreadcrumbList: state => getAllBreadcrumbList(state.breadcrumbList)
        getBreadcrumbList: state => state.breadcrumbList
    }
});

export default useAuthStore;
