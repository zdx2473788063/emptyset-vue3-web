/**
 * @description 防止按钮在短时间内被多次点击，使用节流函数限制规定时间内只能点击一次。
 * 使用示例：
 * <button v-throttle="handleClick" >提交</button>
 */
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
    handleClick: () => any;
    disabled: boolean;
}
const throttle: Directive = {
    mounted(el: ElType, binding: DirectiveBinding) {
        const delay = parseInt(<string>binding.arg) || 500;
        const handler = binding.value;
        let lastExecTime = 0;

        el.addEventListener(
            "click",
            () => {
                const now = Date.now();
                if (now - lastExecTime > delay) {
                    handler();
                    lastExecTime = now;
                }
            },
            { passive: false }
        );
    }
};

export default throttle;
