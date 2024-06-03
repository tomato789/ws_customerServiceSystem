<template>
    <div class="container">
        <el-scrollbar height="100vh">
            <div class="top">
                <div v-for="(item, index) in topMenu" :key="index" class="item" @click="menuClick(item)">
                    <el-icon size="24">
                        <component :is="item.icon"></component>
                    </el-icon>
                    <span>{{ item.text }}</span>
                </div>
            </div>
            <div class="bottom">
                <div v-for="(item, index) in bottomMenu" :key="index" class="item" @click="menuClick(item)">
                    <el-icon size="24">
                        <component :is="item.icon"></component>
                    </el-icon>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus'


const emit = defineEmits(["menuClick"]);

const topMenu = [
    { icon: "Document", text: "任务日志" },
    { icon: "Download", text: "导入好友" },
    { icon: "Phone", text: "群发招呼" },
    { icon: "User", text: "群发好友" },
    { icon: "Monitor", text: "群发群聊" },
    { icon: "FullScreen", text: "扫码进群" },
    { icon: "Avatar", text: "账号管理" },
    { icon: "FolderOpened", text: "操作日志" },
];

const bottomMenu = ref(
    [
        { icon: "Edit", text: "翻译" },
        { icon: "Microphone", text: "声音", isMute: false },
        { icon: "SwitchButton", text: "退出" },
    ]
);

const menuClick = (menu: any) => {
    // 传递给父组件
    if (menu.text == '声音') {
        menu.isMute = !menu.isMute;
        menu.icon = menu.isMute ? 'Mute' : 'Microphone';
        // 处理声音
        return;
    } else if (menu.text == '退出') {
        ElMessageBox.confirm(
            '确定退出登录吗?',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }
        ).then(() => {
            // 退出登录
        }).catch(() => {})
        return;
    }
    emit("menuClick", menu);
};
</script>

<style scoped lang="scss">
.container {
    height: 100%;
    width: 64px;

    >div {
        height: auto;
        min-height: 100%;
        background: #2c304d;

        :deep(.el-scrollbar__view) {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .top {
            margin-top: 16px;
        }

        .top,
        .bottom {
            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: #fff;
                height: 64px;
                cursor: pointer;
                font-size: 12px;

                >span {
                    margin-top: 6px;
                }
            }

            .item:hover {
                background: #376fc4;
            }
        }

        .bottom {
            .item {
                font-size: 24px;
            }
        }
    }
}
</style>