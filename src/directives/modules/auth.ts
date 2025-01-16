/**
 * v-auth
 * 按钮权限指令
 */
import useAuthStore from "@/stores/modules/auth.ts";
import type { Directive, DirectiveBinding } from "vue";

const auth: Directive = {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        const { value } = binding;
        const authStore = useAuthStore();
        const adminButtons = ["*"];
        if ((Array.isArray(value) && value.some((permission: string) => authStore.roleList.includes(permission))) || JSON.stringify(authStore.roleList) === JSON.stringify(adminButtons)) {
            // 如果用户拥有指定权限，或者用户是管理员，则显示按钮
        } else {
            // 否则隐藏按钮
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            el.parentNode && el.parentNode.removeChild(el);
        }
    }
};

export default auth;
