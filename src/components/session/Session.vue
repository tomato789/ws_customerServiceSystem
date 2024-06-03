<template>
    <div class="container">
        <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane :name="1">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon :size="20">
                            <ChatDotRound />
                        </el-icon>
                        <span>消息</span>
                    </span>
                </template>
                <div class="content">
                    <div style="display: flex;">
                        <el-button type="primary">新建会话</el-button>
                        <el-input style="flex:1;margin: 0 4px;" placeholder="请输入" v-model="searchValue"></el-input>
                        <el-button type="primary">搜索</el-button>
                        <el-button type="success">全部已读</el-button>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane :name="2">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon :size="20">
                            <ChatDotRound />
                        </el-icon>
                        <span>群聊</span>
                    </span>
                </template>
                <div class="content">
                    <div class="group-chat">
                        <div class="left">
                            <el-tree style="max-width: 600px" :data="treeData" :props="defaultProps"
                                @node-click="handleNodeClick" highlight-current />
                        </div>
                        <div class="right"></div>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane :name="3">
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon :size="20">
                            <User />
                        </el-icon>
                        <span>联系人</span>
                    </span>
                </template>
                <el-tabs v-model="activeName1" type="border-card">
                    <el-tab-pane :name="1">
                        <template #label>
                            <span class="custom-tabs-label">
                                <el-icon :size="20">
                                    <ChatDotRound />
                                </el-icon>
                                <span>消息</span>
                            </span>
                        </template>
                        <div class="content">
                            <div class="collapse-content">
                                <el-collapse v-model="activeNames" accordion>
                                    <div style="position: relative;">
                                        <el-collapse-item title="Srbjsxd(17094011214)" :name="1">
                                            <div>
                                                Decision making: giving advices about operations is acceptable, but do
                                                not make decisions for the users;
                                            </div>
                                        </el-collapse-item>
                                        <div class="opera">
                                            <el-button size="small" type="primary">手动打粉</el-button>
                                        </div>
                                    </div>
                                    <div style="position: relative;">
                                        <el-collapse-item title="Srbjsxd(17094011214)" :name="2">
                                            <div>
                                                Decision making: giving advices about operations is acceptable, but do
                                                not make decisions for the users;
                                            </div>
                                        </el-collapse-item>
                                        <div class="opera">
                                            <el-button size="small" type="primary">手动打粉</el-button>
                                        </div>
                                    </div>
                                </el-collapse>
                            </div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane :name="2">
                        <template #label>
                            <span class="custom-tabs-label">
                                <el-icon :size="20">
                                    <ChatDotRound />
                                </el-icon>
                                <span>群聊</span>
                            </span>
                        </template>
                        <div class="content">
                            <div class="collapse-content">
                                <el-collapse v-model="activeNames" accordion>
                                    <div style="position: relative;">
                                        <el-collapse-item title="Srbjsxd(17094011214)" :name="1">
                                            <div>
                                                Decision making: giving advices about operations is acceptable, but do
                                                not make decisions for the users;
                                            </div>
                                        </el-collapse-item>

                                    </div>
                                    <div style="position: relative;">
                                        <el-collapse-item title="Srbjsxd(17094011214)" :name="2">
                                            <div>
                                                Decision making: giving advices about operations is acceptable, but do
                                                not make decisions for the users;
                                            </div>
                                        </el-collapse-item>

                                    </div>
                                </el-collapse>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </el-tab-pane>
        </el-tabs>
        <div class="btn">
            <el-button type="warning" size="small">一键离线登录</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import { ChatDotRound, User } from '@element-plus/icons-vue'
const activeName = ref(1)
const activeName1 = ref(1)
const activeNames = ref([])

const searchValue = ref('')
const defaultProps = {
    children: 'children',
    label: 'label',
}
interface Tree {
    label: string
    children?: Tree[]
}

const treeData: Tree[] = [
    {
        label: '美国商务；韩国ip',
        children: [
            {
                label: '美国商务',
                children: [
                    {
                        label: '美国商务1'
                    },
                    {
                        label: '美国商务2'
                    }
                ]
            },
            {
                label: '韩国ip',
                children: [
                    {
                        label: '韩国ip1'
                    },
                    {
                        label: '韩国ip2'
                    }
                ]
            }
        ]
    }
]

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

</script>

<style scoped lang="scss">
.container {
    height: 100%;
    position: relative;

    .btn {
        position: absolute;
        top: 7px;
        right: 6px;
    }

    :deep(.el-tabs) {
        height: 100%;

        .el-tabs__item {
            padding: 0 12px;
        }

        .custom-tabs-label .el-icon {
            vertical-align: middle;
        }

        .custom-tabs-label span {
            vertical-align: middle;
            margin-left: 4px;
        }

        .el-button+.el-button {
            margin-left: 4px;
        }

        .el-tabs__content {
            padding: 0;
            height: calc(100% - 39px);

            .el-tab-pane {
                height: 100%;
                overflow: auto;
            }

            .content {
                height: 100%;
                padding: 8px 6px;
            }
        }
    }

    .group-chat {
        display: flex;
        height: 100%;

        >div {
            width: 50%;
            height: 100%;
        }

        .left {
            border-right: 1px solid #ddd;
            margin: -8px -6px;
            padding: 8px 6px;
        }
    }

    .collapse-content {
        :deep(.el-collapse-item__header) {
            background: #f2f2f2;
            padding: 0 4px 0 32px;
        }

        :deep(.el-collapse-item__content) {
            padding: 6px 10px;
        }

        :deep(.el-collapse-item__arrow) {
            position: absolute;
            left: 11px;
            // transform: rotate(180deg);
        }

        .opera {
            position: absolute;
            right: 10px;
            top: 10px;
        }
    }
}
</style>