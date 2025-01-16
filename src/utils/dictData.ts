/**
 * 字典值  后面维护字典表
 */

export const dictData = [
    {
        dictType: "system_member_status",
        label: "启用",
        value: 1,
        colorType: "success"
    },
    {
        dictType: "system_member_status",
        label: "禁用",
        value: -1,
        colorType: "danger"
    },
    {
        dictType: "system_menu_type",
        label: "目录",
        value: "1"
    },
    {
        dictType: "system_menu_type",
        label: "菜单",
        value: "2"
    },
    {
        dictType: "system_menu_type",
        label: "按钮",
        value: "3"
    },
    {
        dictType: "common_status",
        label: "开启",
        value: "0"
    },
    {
        dictType: "common_status",
        label: "关闭",
        value: "1"
    },
    {
        dictType: "system_user_sex",
        label: "男",
        value: "1",
        colorType: "primary"
    },
    {
        dictType: "system_user_sex",
        label: "女",
        value: "2",
        colorType: "danger"
    },
    {
        dictType: "script_ask_type",
        label: "单人本",
        value: "1",
        colorType: "success"
    },
    {
        dictType: "script_ask_type",
        label: "多人本",
        value: "2",
        colorType: "warning"
    },
    // 剧本管理的列表状态
    {
        dictType: "script_status",
        label: "全部",
        value: "-2",
        colorType: "info"
    },
    {
        dictType: "script_status",
        label: "已上架",
        value: "4",
        colorType: "success"
    },
    {
        dictType: "script_status",
        label: "待上架",
        value: "7",
        colorType: "info"
    },
    {
        dictType: "script_status",
        label: "已下架",
        value: "9"
    },
    {
        dictType: "script_order_status",
        label: "待支付",
        value: "0",
        colorType: "warning"
    },
    {
        dictType: "script_order_status",
        label: "已完成",
        value: "30",
        colorType: "success"
    },
    {
        dictType: "script_order_status",
        label: "已取消",
        value: "40",
        colorType: "danger"
    },
    {
        dictType: "script_order_status",
        label: "已使用",
        value: "50",
        colorType: "primary"
    },
    {
        dictType: "script_order_pay_type",
        label: "微信",
        value: "wx_app",
        colorType: "primary"
    },
    {
        dictType: "script_order_pay_type",
        label: "支付宝",
        value: "alipay_app",
        colorType: "primary"
    },
    {
        dictType: "script_order_source",
        label: "未知",
        value: "0"
    },
    {
        dictType: "script_order_source",
        label: "微信小程序",
        value: "10"
    },
    {
        dictType: "script_order_source",
        label: "微信公众号",
        value: "11"
    },
    {
        dictType: "script_order_source",
        label: "H5 网页",
        value: "20"
    },
    {
        dictType: "script_order_source",
        label: "手机 App",
        value: "31"
    },
    {
        dictType: "app_version_publish_status",
        label: "已发布",
        value: "1",
        colorType: "success"
    },
    {
        dictType: "app_version_publish_status",
        label: "未发布 ",
        value: "2",
        colorType: "warning"
    },
    {
        dictType: "app_version_publish_status",
        label: "取消发布",
        value: "3",
        colorType: "danger"
    },
    {
        dictType: "app_banner_position",
        label: "首页轮播图",
        value: "1"
    },
    {
        dictType: "order_refund_status",
        label: "全部",
        value: "-1"
    },
    {
        dictType: "order_refund_status",
        label: "待审核",
        value: "10"
    },
    {
        dictType: "order_refund_status",
        label: "已退款",
        value: "50"
    },
    {
        dictType: "order_refund_status",
        label: "已拒绝",
        value: "62"
    },
    {
        dictType: "app_version_env",
        label: "HotFix",
        value: "HotFix"
    },
    {
        dictType: "app_version_env",
        label: "HotFix_QH",
        value: "HotFix_QH"
    },
    {
        dictType: "app_version_env",
        label: "HotFix_QS",
        value: "HotFix_QS"
    },
    {
        dictType: "app_version_env",
        label: "HotFix_LZ",
        value: "HotFix_LZ"
    },
    {
        dictType: "app_version_env",
        label: "HotFix_IOS",
        value: "HotFix_IOS"
    },

    // 这里是指派状态的数据字典
    {
        dictType: "designate_status",
        label: "全部",
        value: "-2",
        colorType: "success"
    },
    {
        dictType: "designate_status",
        label: "已指派",
        value: "1",
        colorType: "success"
    },
    {
        dictType: "designate_status",
        label: "未指派",
        value: "0",
        colorType: "warning"
    },
    // 这里是任务状态的字典数据
    {
        dictType: "task_status",
        label: "全部",
        colorType: "info",
        value: "-2"
    },
    {
        dictType: "task_status",
        label: "已驳回",
        colorType: "danger",
        value: "-1"
    },
    {
        dictType: "task_status",
        label: "待完成",
        colorType: "warning",
        value: "0"
    },
    {
        dictType: "task_status",
        label: "已提交",
        colorType: "primary",
        value: "1"
    },
    {
        dictType: "task_status",
        label: "已通过",
        colorType: "success",
        value: "2"
    },
    // 这里是审核状态的字典数据
    {
        dictType: "audit_status",
        label: "全部",
        colorType: "info",
        value: "-2"
    },
    {
        dictType: "audit_status",
        label: "待审核",
        colorType: "warning",
        value: "1"
    },
    {
        dictType: "audit_status",
        label: "已驳回",
        colorType: "danger",
        value: "2"
    },
    {
        dictType: "audit_status",
        label: "已通过",
        colorType: "success",
        value: "3"
    },
    // 这里是剧本管理的激活状态
    {
        dictType: "script_active",
        label: "全部",
        colorType: "info",
        value: "-2"
    },
    {
        dictType: "script_active",
        label: "已激活",
        colorType: "success",
        value: "0"
    },
    {
        dictType: "script_active",
        label: "未激活",
        colorType: "warning",
        value: "1"
    },
    // 这里是文创藏品的状态
    {
        dictType: "collection_status",
        label: "全部",
        colorType: "info",
        value: "-2"
    },
    {
        dictType: "collection_status",
        label: "待上架",
        colorType: "info",
        value: "-1"
    },
    {
        dictType: "collection_status",
        label: "已上架",
        colorType: "success",
        value: "1"
    },
    {
        dictType: "collection_status",
        label: "已下架",
        colorType: "warning",
        value: "2"
    },
    // 经销管理的邀请码的类型
    {
        dictType: "invitation_type",
        label: "通用",
        colorType: "success",
        value: "1"
    },
    {
        dictType: "invitation_type",
        label: "特定",
        value: "2"
    },
    // 经销管理的邀请码的状态
    {
        dictType: "invitation_status",
        label: "全部",
        colorType: "info",
        value: "-2"
    },
    {
        dictType: "invitation_status",
        label: "已开启",
        colorType: "success",
        value: "1"
    },
    {
        dictType: "invitation_status",
        label: "已禁用",
        colorType: "info",
        value: "2"
    },
    {
        dictType: "invitation_status",
        label: "已过期",
        colorType: "warning",
        value: "3"
    },
    // 经销管理的邀请码的优惠方式
    {
        dictType: "invitation_sale",
        label: "兑换",
        value: "1"
    },
    // 经销管理的邀请码的详情状态
    {
        dictType: "invitation_detail_status",
        label: "已使用",
        colorType: "info",
        value: "1"
    },
    {
        dictType: "invitation_detail_status",
        label: "未使用",
        value: "0"
    }
];

/**
 * 设置字典数据
 */
export const setDictData = () => {
    const result: {
        [key: string]: {
            label: string;
            value: string;
            colorType?: string;
        }[];
    } = {};
    dictData.forEach((item: any) => {
        const { dictType, label, value, colorType } = item;
        if (!result[dictType]) {
            result[dictType] = [];
        }
        result[dictType].push({ label, value, colorType });
    });
    return result;
};
