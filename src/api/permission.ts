import request from "@/utils/http";
import { RequestTypeEnum } from "@/utils/http/http-enum";
import { PermissionAssignRoleMenuReqVO } from "@/interface/permission.ts";

/**
 * 给角色分配菜单权限
 * @param data PermissionAssignRoleMenuReqVO
 */
export const assignRoleMenu = (data: PermissionAssignRoleMenuReqVO) => {
    return request.request({
        method: RequestTypeEnum.POST,
        url: "system/permission/assign-role-menu",
        data
    });
};

/**
 * 获取角色菜单权限列表
 * @param roleId 角色ID
 */
export const getRoleMenuList = (roleId: number) => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: `system/permission/list-role-menus`,
        params: {
            roleId
        }
    });
};
