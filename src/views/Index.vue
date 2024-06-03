<template>
    <div style="display: flex;">
        <div class="nav">
            <nav-menu @menuClick="menuClick"></nav-menu>
        </div>
        <div class="content">
            <div class="group">
                <Group></Group>
            </div>
            <div class="session">
                <Session></Session>
            </div>
            <div class="typing">
                <Typing></Typing>
            </div>
            <div class="functional">
                <Functional></Functional>
            </div>
        </div>
        <!-- 任务日志 -->
        <Task ref="taskRef"></Task>
        <!-- 导入好友 -->
        <ImportFriends ref="importFriendsRef"></ImportFriends>
        <!-- 群发好友 -->
        <GroupSendFriends ref="groupSendFriendsRef"></GroupSendFriends>
        <!-- 群发招呼 -->
        <GroupGreetings ref="groupGreetingsRef"></GroupGreetings>
        <!-- 群发群聊 -->
        <GroupChats ref="groupChatsRef"></GroupChats>
        <!-- 操作日志 -->
        <Log ref="logRef"></Log>
        <!-- 账号管理 -->
        <Account ref="accountRef"></Account>
        <!-- 扫码进群 -->
        <ScanCode ref="scanCodeRef"></ScanCode>
        <!-- 翻译 -->
        <Translate ref="translateRef"></Translate>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/navMenu/NavMenu.vue'
import Task from '@/components/modal/task/Task.vue'
import Group from '@/components/group/Group.vue'
import Session from '@/components/session/Session.vue'
import Typing from '@/components/typing/Typing.vue'
import Functional from '@/components/functional/Functional.vue'
import ImportFriends from '@/components/modal/importFriends/ImportFriends.vue'
import GroupSendFriends from '@/components/modal/groupSendFriends/GroupSendFriends.vue'
import GroupGreetings from '@/components/modal/groupGreetings/GroupGreetings.vue'
import GroupChats from '@/components/modal/groupChats/GroupChats.vue'
import Log from '@/components/modal/log/Log.vue'
import Account from '@/components/modal/account/Account.vue'
import ScanCode from '@/components/modal/scanCode/ScanCode.vue'
import Translate from '@/components/modal/translate/Translate.vue'
import { ref } from 'vue';

const taskRef = ref();
const importFriendsRef = ref();
const groupSendFriendsRef = ref();
const groupGreetingsRef = ref();
const groupChatsRef = ref();
const logRef = ref();
const accountRef = ref();
const scanCodeRef = ref();
const translateRef = ref();

const menuClick = (menu: any) => {
    if (menu.text === '任务日志') {
        taskRef.value.open();
    } else if (menu.text === '导入好友') {
        importFriendsRef.value.open();
    } else if (menu.text === '群发好友') {
        groupSendFriendsRef.value.open();
    } else if (menu.text === '群发招呼') {
        groupGreetingsRef.value.open();
    } else if (menu.text === '群发群聊') {
        groupChatsRef.value.open();
    } else if (menu.text === '操作日志') {
        logRef.value.open();
    } else if (menu.text === '账号管理') {
        accountRef.value.open();
    } else if (menu.text === '扫码进群') {
        scanCodeRef.value.open();
    } else if (menu.text === '翻译') {
        translateRef.value.open();
    }
}

</script>

<style scoped lang="scss">
.nav {
    height: 100vh;
    width: 64px;
}
.content {
    flex: 1;
    display: flex;
    .group {
        width: 200px;
    }
    .session {
        width: 400px;
        padding: 6px;
    }
    .typing {
        flex: 1;
        // border-right: 1px solid #ddd;
        padding: 6px;
    }
    .functional {
        width: 310px;
        padding: 6px;
    }
}
</style>
