import { setDictData } from "@/utils/dictData.ts";

export enum DICT_TYPE {
    SYSTEM_MEMBER_STATUS = "system_member_status",
    SYSTEM_MENU_TYPE = "system_menu_type",
    COMMON_STATUS = "common_status",
    SYSTEM_USER_SEX = "system_user_sex",
    SCRIPT_ASK_TYPE = "script_ask_type",
    APP_BANNER_POSITION = "app_banner_position",
    SCRIPT_STATUS = "script_status",
    SCRIPT_ORDER_STATUS = "script_order_status",
    SCRIPT_ORDER_PAY_TYPE = "script_order_pay_type",
    SCRIPT_ORDER_SOURCE = "script_order_source",
    APP_VERSION_PUBLISH_STATUS = "app_version_publish_status",
    ORDER_REFUND_STATUS = "order_refund_status",
    APP_VERSION_ENV = "app_version_env",
    DESIGNATE_STATUS = "designate_status",
    TASK_STATUS = "task_status",
    AUDIT_TYPE = "audit_status",
    SCRIPT_ACTIVE = "script_active",
    COLLECTION_STATUS = "collection_status",
    INVITATION_TYPE = "invitation_type",
    INVITATION_STATUS = "invitation_status",
    INVITATION_SALE = "invitation_sale",
    INVITATION_DETAIL_STATUS = "invitation_detail_status"
}

/**
 * 获取字典选项
 * @param dictType
 */
export const getDictOptions = (dictType: string) => {
    return setDictData()[dictType];
};

/**
 * 获取字典选项，并将value转为number类型
 * @param dictType
 */
export const getIntDictOptions = (dictType: string) => {
    const dictOptions = getDictOptions(dictType);
    const dictOption: any = [];
    dictOptions.forEach((item: any) => {
        dictOption.push({
            ...item,
            value: parseInt(item.value)
        });
    });
    return dictOption;
};

/**
 * 获取表格过滤器
 * @param dictType
 */
export const getTableFilter = (dictType: string) => {
    const dictOptions = getDictOptions(dictType);
    const dictOption: any = [];
    dictOptions.forEach((item: any) => {
        dictOption.push({
            text: item.label,
            label: item.label,
            value: item.value + ""
        });
    });
    return dictOption;
};
