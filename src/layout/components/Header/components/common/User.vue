<template>
    <el-dropdown trigger="click" @command="handleCommand">
        <el-space class="cursor-pointer">
            <el-avatar :src="avatar" :size="25"></el-avatar>
            <span>{{ userName }}</span>
        </el-space>

        <template #dropdown>
            <ElDropdownMenu>
                <!--                <ElDropdownItem> 个人中心 </ElDropdownItem>-->
                <ElDropdownItem command="logout"> 退出登录 </ElDropdownItem>
            </ElDropdownMenu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
    import { computed } from "vue";
    import useUserStore from "@/stores/modules/user.ts";
    import useAuthStore from "@/stores/modules/auth.ts";

    const userStore = useUserStore();
    const authStore = useAuthStore();

    const avatar = computed(() => userStore.userInfo.avatarUrl);
    const userName = computed(() => userStore.userInfo.nickName ?? "Admin");

    const loginOut = () => {
        userStore.$reset();
        authStore.$reset();
        // 退出登录。必须使用replace把页面缓存刷掉。
        window.location.replace("");
    };
    const handleCommand = (command: string) => {
        switch (command) {
            case "logout":
                loginOut();
                break;
        }
    };
</script>

<style scoped></style>
