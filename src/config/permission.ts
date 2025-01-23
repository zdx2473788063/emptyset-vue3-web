import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import router from "@/routers";
import nprogress from "@/utils/nprogress.ts";
// import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config/index.ts";
// import useUserStore from "@/stores/modules/user.ts";
// import useAuthStore from "@/stores/modules/auth.ts";

/**
 * @description 前置路由
 */
router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    // const userStore = useUserStore();
    // const authStore = useAuthStore();
    // 1、NProgress 开始
    nprogress.start();

    // 2、标题切换，没有防止后置路由，是因为页面路径不存在，title会变成undefined
    const title = import.meta.env.VITE_WEB_TITLE;
    document.title = to.meta.title || title;

    // // 3、判断是访问登陆页，有Token访问当前页面，token过期访问接口，axios封装则自动跳转登录页面，没有Token重置路由到登陆页。
    // if (to.path.toLocaleLowerCase() === LOGIN_URL) {
    //     // 有Token访问当前页面
    //     if (userStore.token) {
    //         return next(from.fullPath);
    //     }
    //     // TODO: 清空用户登录信息和菜单信息
    //     userStore.$reset();
    //     return next();
    // }

    // // 4、判断访问页面是否在路由白名单地址[静态路由]中，如果存在直接放行。
    // if (ROUTER_WHITE_LIST.includes(to.path)) return next();

    // // 5、判断是否有 Token，没有重定向到 login 页面。
    // if (!userStore.token) return next({ path: LOGIN_URL, replace: true });

    // // 6、如果没有菜单列表，就重新请求菜单列表并添加动态路由。
    // if (!authStore.showMenuList.length) {
    //     return next({ ...to, replace: true });
    // }

    // 7、正常访问页面。
    next();
});

/**
 * @description 路由跳转错误
 */
router.onError(error => {
    // 结束全屏动画
    nprogress.done();
    console.warn("路由错误", error.message);
});

/**
 * @description 后置路由
 */
router.afterEach(() => {
    // console.log("后置守卫", to, from);
    // 结束全屏动画
    nprogress.done();
});
