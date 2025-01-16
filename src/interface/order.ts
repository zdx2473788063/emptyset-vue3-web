export interface IOrderDetail {
    /**
     * 剧本名称
     */
    askName: string;
    /**
     * 剧本价格
     */
    askPrice: number;
    /**
     * 剧本类型
     */
    askType: string;
    /**
     * 购买数量
     */
    buyCount: number;
    /**
     * 剧本封面
     */
    coverUrl: string;
    /**
     * 下单时间
     */
    createTime: string;
    /**
     * 订单完成时间
     */
    finishTime: null;
    /**
     * 创客名称
     */
    makerNames: string;
    /**
     * 订单编号
     */
    orderId: string;
    /**
     * 订单状态
     */
    orderStatus: number;
    /**
     * 支付时间
     */
    payTime: string;
    /**
     * 支付方式
     */
    payType: string;
    /**
     * 用户手机号
     */
    phone: string;
    /**
     * 订单金额
     */
    price: number;
    /**
     * 备注
     */
    remark: null;
    /**
     * 用户Id
     */
    userId: string;
    /**
     * 用户名
     */
    userName: string;
    [property: string]: any;
}
