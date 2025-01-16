import request from "@/utils/http";
import { RequestTypeEnum } from "@/utils/http/http-enum";
import { IMenuVO } from "@/interface/menu.ts";

/**
 * 获取菜单列表
 * @param data 查询条件
 */
export const getMenuList = (data: { name: string }): Promise<any> => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: `system/menu/list`,
        params: data
    });
};

/**
 * 删除菜单
 * @param id 菜单ID
 */
export const deleteMenu = (id: number): Promise<any> => {
    return request.request(
        {
            method: RequestTypeEnum.GET,
            url: `system/menu/delete`,
            params: { id }
        },
        {
            isShowServerErrorMessage: true
        }
    );
};

/**
 * 获取菜单（精简）列表
 */
export const getSimpleMenusList = () => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: `system/menu/simple-list`
    });
};

/**
 * 新增菜单
 * @param data
 */
export const createMenu = (data: IMenuVO) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: `system/menu/create`,
            data
        },
        {
            isShowServerErrorMessage: true
        }
    );
};

/**
 * 获取菜单详情
 * @param id
 */
export const getMenuDetail = (id: number) => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: `system/menu/get`,
        params: { id }
    });
};

/**
 * 更新菜单
 * @param data
 */
export const updateMenu = (data: IMenuVO) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: `system/menu/update`,
            data
        },
        {
            isShowServerErrorMessage: true
        }
    );
};
