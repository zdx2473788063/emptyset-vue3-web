import { App } from "vue";

import throttle from "./modules/throttle";
import debounce from "./modules/debounce";
import auth from "./modules/auth";

const directivesList: any = {
    throttle,
    debounce,
    auth
};

const directives = {
    install: function (app: App<Element>) {
        Object.keys(directivesList).forEach(key => {
            // 注册所有自定义指令
            app.directive(key, directivesList[key]);
        });
    }
};

export default directives;
