import request from "@/utils/http";
import { ContentTypeEnum, RequestTypeEnum } from "@/utils/http/http-enum";

/**
 * 上传接口
 * @param file 上传文件
 */
export const postUploadFile = (file: FormData) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/file/content-upload-file",
            data: file
        },
        {
            timeoutNumber: 120000,
            contentType: ContentTypeEnum.FORM_DATA
        }
    );
};

/**
 * 上传接口（多文件）
 * @param files 上传多文件
 */
export const postUploadFiles = (files: FormData) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/file/content-upload-files",
            data: files
        },
        {
            timeoutNumber: 120000,
            isTransformRequestResult: false,
            contentType: ContentTypeEnum.FORM_DATA
        }
    );
};

// /**
//  * 审核任务
//  * @param taskId 文案任务id
//  * @param status 审核状态 1-待审核 3-审核通过 2-审核不通过
//  * @param reason 审核备注
//  * @param auditType 审核类型 文案: doc 设计： design  模型： model
//  */

/**
 * 审核任务
 * @param params
 */
export const updateAudit = (params: FormData) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/content/audit/update",
            data: params
        },
        {
            timeoutNumber: 120000,
            isTransformRequestResult: false,
            contentType: ContentTypeEnum.FORM_DATA
        }
    );
};

/**
 * 代审
 * @param taskIds 任务id数组
 * @param userId 指派人id
 * @param auditType 指派类别
 */
export const auditAssign = (params: { taskIds: number[]; userId: string; auditType: string }) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/content/audit/assign-to",
            data: params
        },
        {
            isTransformRequestResult: false
        }
    );
};

/**
 * 获取城市列表
 */
export const getCityListByTask = () => {
    return request.request({
        method: RequestTypeEnum.GET,
        url: `system/content/task/city-list`
    });
};

/**
 * 获取省市区
 */
export const postDistrict = (params: { keywords: string }) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/content/doc/task/getCityAddress",
            data: params
        },
        {
            isTransformRequestResult: false
        }
    );
};

/**
 * 撤回任务
 */
export const postRecallTask = (params: { taskListId: string; taskType: string; isReserve: boolean }) => {
    return request.request(
        {
            method: RequestTypeEnum.POST,
            url: "system/content/task/recall-task",
            data: params
        },
        {
            isTransformRequestResult: false
        }
    );
};
