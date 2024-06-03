<template>
    <div class="container">
        <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane :name="1" label="翻译助手">
                <div class="translate">
                    <el-select v-model="value" placeholder="请选择" style="width: 120px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <el-icon class="icon">
                        <Sort />
                    </el-icon>
                    <el-select v-model="value1" placeholder="请选择" style="width: 120px">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="translate-area">
                    <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 6 }" placeholder="请输入内容"></el-input>
                </div>
            </el-tab-pane>
            <el-tab-pane :name="2" label="快捷回复">

            </el-tab-pane>
            <el-tab-pane :name="3" label="好友信息">

            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeName = ref(1)
const value = ref('')
const value1 = ref('')
const options = [
    {
        value: '选项1',
        label: '黄金糕'
    },
    {
        value: '选项2',
        label: '双皮奶'
    },
    {
        value: '选项3',
        label: '蚵仔煎'
    },
    {
        value: '选项4',
        label: '龙须面'
    },
    {
        value: '选项5',
        label: '北京烤鸭'
    }
]
</script>

<style scoped lang="scss">
.container {
    height: 100%;
    :deep(.el-tabs) {
        height: 100%;
    }
    .translate {
        display: flex;
        align-items: center;
        .icon {
            flex: 1;
            transform: rotate(90deg);
        }
    }
    .translate-area {
        margin-top: 12px;
    }
}
</style>