// 定义是否折叠小仓库[选择式Api写法]
import { defineStore } from "pinia";
import { PINIA_PREFIX } from "@/config";

interface iTokenInfo {
    accessToken: string;
    expiresTime: number;
    refreshToken: string;
    userId: number;
    firstLogin?: boolean;
}
interface iUserState {
    token: string;
    tokenInfo: iTokenInfo;
    userInfo: {
        userId: string;
        avatarUrl: string;
        nickName: string;
        deptId: string | null;
    };
}

// defineStore方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
const useUserStore = defineStore("user", {
    // 开启数据持久化
    persist: {
        key: PINIA_PREFIX + "user", // 默认会以 store 的 id 作为 key
        storage: localStorage
    },
    // 存储数据state
    state: (): iUserState => {
        return {
            token: "",
            tokenInfo: {
                accessToken: "",
                expiresTime: 0,
                refreshToken: "",
                userId: 0
            },
            userInfo: {
                userId: "0",
                avatarUrl: "",
                nickName: "",
                deptId: null
            }
        };
    },
    // 该函数没有上下文数据，所以获取state中的变量需要使用this
    actions: {
        // Set Token
        setToken(token: string) {
            this.token = token;
        },
        setTokenInfo(info: any) {
            this.tokenInfo = info;
            this.setToken(info?.accessToken);
        },
        setUserInfo(info: any) {
            this.userInfo = info;
        },
        clearUserInfo() {
            this.userInfo = { userId: "0", avatarUrl: "", nickName: "", deptId: null };
            this.token = "";
            this.tokenInfo = {
                accessToken: "",
                expiresTime: 0,
                refreshToken: "",
                userId: 0
            };
        }
    }
});

// 对外暴露方法
export default useUserStore;
