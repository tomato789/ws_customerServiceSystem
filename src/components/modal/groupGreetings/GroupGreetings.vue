<template>
    <div class="container">
        <el-dialog v-model="visible" title="群发招呼" width="1000">
            <div>
                <x-table :listView="listView" @lodaData="lodaData" @selectionChange="selectionChange">
                    <template #opreaLeft>
                        <el-button type="primary">重新发起</el-button>
                        <el-button type="primary">重新发起失败</el-button>
                    </template>
                    <template #opreaRight>
                        <el-button type="primary">首条回复</el-button>
                        <el-button type="success">发起任务</el-button>
                        <el-button type="danger" style="margin-right: 12px;">删除任务</el-button>
                        <el-dropdown>
                            <el-button type="primary">
                                导出未执行数据<el-icon class="el-icon--right"><arrow-down /></el-icon>
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>Action 1</el-dropdown-item>
                                    <el-dropdown-item>Action 2</el-dropdown-item>
                                    <el-dropdown-item>Action 3</el-dropdown-item>
                                    <el-dropdown-item>Action 4</el-dropdown-item>
                                    <el-dropdown-item>Action 5</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </template>
                    <template #operation="{ row }">
                        <div>{{ row.id }}</div>
                    </template>
                </x-table>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="visible = false">关 闭</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { taskListView } from './listView'
import { ListView } from '@/components/common/x-table/ListView';
import XTable from '@/components/common/x-table/XTable.vue';

const listView = reactive(new ListView(taskListView));
const visible = ref(false);

let data: Object[] = []
for (let i = 0; i < 50; i++) {
    data.push({
        id: i,
        name: '任务' + i,
        status: '成功',
        time: '2021-09-09 12:12:12',
        type: '定时任务',
        desc: '这是一条任务日志'
    })
}

const lodaData = () => {
    console.log(`当前是第${listView.listQuery.page}页，每页${listView.listQuery.size}条数据`)
    console.log(`当前查询参数为：`, listView.params)
    listView.loading = true;
    // 根据分页查询数据
    listView.data = data.slice((listView.listQuery.page as any - 1) * (listView.listQuery.size as any), (listView.listQuery.page as any) * (listView.listQuery.size as any));
    if (Object.keys(listView.params).length > 0) {
        // 筛选出符合条件的数据
        listView.data = data.filter((item: any) => {
            for (const key in listView.params) {
                if (item[key].indexOf((listView.params as any)[key]) === -1) {
                    return false;
                }
            }
            return true;
        })
    }
    listView.total = 50;
    setTimeout(() => {
        listView.loading = false;
    }, 200)
}

const open = () => {
    visible.value = true;
    lodaData();
}

const selectionChange = (val: Array<any>) => {
    console.log('selectionChange', val);
}

defineExpose({
    open
});
</script>

<style scoped lang="scss"></style>