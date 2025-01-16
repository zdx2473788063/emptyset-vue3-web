import request from "@/utils/http";
import { RequestTypeEnum } from "@/utils/http/http-enum";
/**
 * 账号密码登录
 * @param data
 * @param data.username 用户名
 * @param data.password 密码
 * @returns { token }
 */
export const loginInByPassword = (data: { username: string; password: string }): Promise<any> => {
    return request.request({
        method: RequestTypeEnum.POST,
        url: `system/auth/login`,
        data
    });
};

/**
 * 获取用户权限信息
 */
export const getPermissionInfo = () => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: "system/auth/get-permission-info"
    });
};

/**
 * 获取菜单列表
 */
export const getListRouters = (): Promise<any> => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: "system/menu/list",
        params: {
            status: 0
        }
    });
};
