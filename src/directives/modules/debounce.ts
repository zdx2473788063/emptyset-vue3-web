/**
 * @description 简而言之就是触发后N秒内不许触发，直到N秒后才可以执行。
 * 使用实例
 * <el-button type="primary" icon="search" plain v-debounce:500="handleSearch">搜索</el-button>
 */
import type { Directive, DirectiveBinding } from "vue";
interface ElType extends HTMLElement {
    handleClick: () => any;
}
const debounce: Directive = {
    mounted(el: ElType, binding: DirectiveBinding) {
        if (typeof binding.value !== "function") {
            throw "callback must be a function";
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        let timer: NodeJS.Timeout;
        const delay = parseInt(<string>binding.arg) || 500;
        const handler = binding.value;

        el.addEventListener(
            "click",
            () => {
                clearTimeout(timer);
                timer = setTimeout(() => {
                    handler();
                }, delay);
            },
            { passive: false }
        );
    }
};

export default debounce;
