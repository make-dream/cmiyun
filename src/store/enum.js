//状态-订单
export const PRODUCT_STATUS = {
    INQUIRY : 'Inquiry', //询价
    PENDIGN_CONFIRM : 'Pending Confirm', //等待确认
    PENDIGN_CONFIG : 'Pending Config', //等待配置
    SUCCESSFUL : 'Successful', //成功
    CANCELED : 'Canceled', //取消
    UNSUBSCRIBE : 'Unsubscribe' //退订
}

//状态-工单/配置单
export const WORK_STATUS = {
    INQUIRY : 'Inquiry', //询价
    PENDIGN_CONFIRM : 'Pending Confirm', //等待确认
    PENDIGN_CONFIG : 'Pending Config', //等待配置
    SUCCESSFUL : 'Config Successful', //配置成功
    CANCELED : 'Canceled', //取消
    UNSUBSCRIBE : 'Unsubscribe' //退订
}

/**
 * 类型
 * 
 * 1 : 标准
 * 2 : 定制
 */
export const TYPE = {
    STANDARD : 1,
    CUSTOMIZED : 2
}

/**
 * 获取-订单状态
 * 
 * -2 : 退订
 * -1 : 取消
 *  0 : 询价
 *  1 : 等待确认
 *  2 : 等待配置
 *  3 : 成功
 */
export const PRODUCT_STATUS_NUB = {
    '-2' : PRODUCT_STATUS.UNSUBSCRIBE,
    '-1' : PRODUCT_STATUS.CANCELED,
    '0' : PRODUCT_STATUS.INQUIRY,
    '1' : PRODUCT_STATUS.PENDIGN_CONFIRM,
    '2' : PRODUCT_STATUS.PENDIGN_CONFIG,
    '3' : PRODUCT_STATUS.SUCCESSFUL
}

/**
 * 获取-工单/配置单状态
 * 
 * -2 : 退订
 * -1 : 取消
 *  0 : 询价
 *  1 : 等待确认
 *  2 : 等待配置
 *  3 : 配置成功
 */
export const WORK_STATUS_NUB = {
    '-2' : WORK_STATUS.UNSUBSCRIBE,
    '-1' : WORK_STATUS.CANCELED,
    '0' : WORK_STATUS.INQUIRY,
    '1' : WORK_STATUS.PENDIGN_CONFIRM,
    '2' : WORK_STATUS.PENDIGN_CONFIG,
    '3' : WORK_STATUS.SUCCESSFUL
}

/**
 * 产品ID
 * 
 */
export const PRODUCT_ID_NAME = {
    SD_WAN : 'product1',
    CLOUD_CONNECT : 'product2',
    CLOUD_CONNECT_CLOUD_TO_CLOUD : 'product3',
    CLOUD_CONNECT_ON_PREMISE_TO_CLOUD : 'product4',
    ELASTIC_COMPUTE_SERVICE : 'product5',
    CLOUD_CONNECT_BASIC : 'createProduct'
}

//获取-订单状态-方法
export function getProductStatusByNub (status) {
    return PRODUCT_STATUS_NUB[status];
}

//获取-订单状态-方法
export function getWorkStatusByNub (status) {
    return WORK_STATUS_NUB[status];
}