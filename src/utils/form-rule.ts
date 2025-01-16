import { Ref, unref } from "vue";

export const required = (message: string, trigger = ["blur", "change"]) => ({
    required: true,
    message,
    trigger
});

export const rules = {
    phone: {
        pattern: /^(13[0-9]|14[01456879]|15[0-3,5-9]|16[2567]|17[0-8]|18[0-9]|19[0-3,5-9])\d{8}$/,
        message: "请填写正确的手机号",
        trigger: "blur"
    },
    number: {
        pattern: /^\d+$/,
        message: "填写内容必须是纯数字",
        trigger: "blur"
    },
    email: {
        pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        message: "请填写正确的邮箱地址",
        trigger: "blur"
    },
    price: {
        pattern: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
        message: "请输入正确的价格,保留两位小数",
        trigger: "blur"
    }
};

/**
 * 对整个表单的内容进行校验
 * @param formRef 表单绑定的ref
 * @returns
 */
export function useFormValid<T extends NonNullable<unknown> = any>(formRef: Ref<any>) {
    async function validForm() {
        const form = unref(formRef);
        if (!form) return;
        const data = await form.validate();
        return data as T;
    }

    return {
        validForm
    };
}
