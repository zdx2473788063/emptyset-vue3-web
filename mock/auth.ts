// 菜单路由权限[menuType[1-目录 2-菜单页面 3-按钮权限]当等于2时才是页面]
export const listRouters = [
    // 系统管理
    {
        id: 1,
        name: "系统管理",
        path: "/system",
        parentId: 0,
        alwaysShow: true,
        component: null,
        componentName: null,
        icon: "",
        keepAlive: true,
        visible: true,
        children: [
            {
                id: 2,
                name: "用户管理",
                path: "/system/user",
                parentId: 1,
                alwaysShow: true,
                component: "system/user/index",
                componentName: "SystemUser",
                icon: "",
                keepAlive: true,
                visible: true
            },
            {
                id: 3,
                name: "菜单管理",
                path: "/system/menu",
                parentId: 1,
                alwaysShow: true,
                component: "system/menu/index",
                componentName: "SystemMenu",
                icon: "",
                keepAlive: true,
                visible: true
            },
            {
                id: 4,
                name: "角色管理",
                path: "/system/role",
                parentId: 1,
                alwaysShow: true,
                component: "system/role/index",
                componentName: "SystemRole",
                icon: "",
                keepAlive: true,
                visible: true
            }
        ]
    }
];

export const loginInfo = {
    userId: 247,
    accessToken: "553b044c69a34867a016b757079d7d8b",
    refreshToken: "f686983ae21442589cfc66f0313d2c90",
    expiresTime: 1724314239610,
    firstLogin: false
};

export default [
    // 获取路由接口
    {
        url: "/admin-api/system/auth/get-permission-info", //请求地址
        method: "get", //请求方式
        response: () => {
            // 获取请求体携带过来用户ID
            return {
                code: 200,
                msg: "获取成功",
                data: {
                    menus: listRouters,
                    permissions: [],
                    roles: [],
                    user: {}
                }
            };
        }
    },
    // 获取角色数据
    {
        url: "/admin-api/system/auth/login", //请求地址
        method: "post", //请求方式
        response: () => {
            return { code: 200, msg: "信息获取成功", data: loginInfo };
        }
    }
];
