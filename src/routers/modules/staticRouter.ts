import { RouteRecordRaw } from "vue-router";

// import Layout from "@/layout/index.vue";
import { HOME_URL } from "@/config";

/**
 * LayoutRouter (布局路由)
 */
export const layoutRouter: RouteRecordRaw[] = [
    {
        // 登录成功以后展示数据的路由[一级路由，可以将子路由放置Main模块中(核心)]
        path: "/", // 路由访问路径[唯一]
        redirect: HOME_URL, // path路径，<router-link name="/404"> 也是使用path进行跳转
        children: [
            {
                path: HOME_URL, // [唯一]
                component: () => import("@/views/index.vue"),
                meta: {
                    title: "首页", // 标题
                    icon: "HomeFilled", // 图标
                    visible: true, // 代表路由在菜单中是否隐藏，是否隐藏[false 隐藏，true 显示]
                    keepAlive: true // 是否缓存路由数据[true 是，false 否]
                }
            }
        ]
    }
];

export const staticRouter: RouteRecordRaw[] = [
    {
        path: "/index",
        component: () => import("@/views/index.vue"),
        meta: {
            title: "首页"
        }
    },
    {
        path: "/card",
        name: "card",
        component: () => import("@/views/card.vue"),
        children: [
            {
                path: "/card/detail/:id",
                name: "cardDetail",
                component: () => import("@/components/i-card/index.vue"),
                meta: {
                    title: "卡片详情",
                    activeMenu: "/card/detail/:id"
                }
            }
        ],
        meta: {
            title: "卡片展开演示",
            activeMenu: "/card"
        }
    },
    {
        path: "/filp",
        name: "filp",
        component: () => import("@/views/filp.vue"),
        meta: {
            title: "不定高展开动画演示",
            activeMenu: "/filp"
        }
    }
];

/**
 * errorRouter (错误页面路由)
 */
export const errorRouter = [
    {
        path: "/403",
        name: "403",
        component: () => import("@/views/error/403.vue"),
        meta: {
            title: "403页面",
            icon: "QuestionFilled", // 菜单图标
            alwaysShow: true, // 代表路由在菜单中是否隐藏，是否隐藏[false 隐藏，true 显示]
            keepAlive: true // 是否缓存路由数据[true 是，false 否]
        }
    },
    {
        path: "/404",
        name: "404",
        component: () => import("@/views/error/404.vue"),
        meta: {
            title: "404页面",
            icon: "CircleCloseFilled",
            alwaysShow: true,
            keepAlive: true
        }
    },
    {
        path: "/500",
        name: "500",
        component: () => import("@/views/error/500.vue"),
        meta: {
            title: "500页面",
            icon: "WarningFilled",
            alwaysShow: true,
            keepAlive: true
        }
    },
    // 找不到path将跳转404页面
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/error/404.vue")
    }
];
