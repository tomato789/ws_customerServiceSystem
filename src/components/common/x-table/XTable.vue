<template>
    <div class="container">
        <div class="search" v-if="listView.searchConfig.open">
            <x-search :listView="listView" @search="search"></x-search>
        </div>
        <div class="oprea">
            <div class="left">
                <slot name="opreaLeft"></slot>
            </div>
            <div class="right">
                <slot name="opreaRight"></slot>
            </div>
        </div>
        <div class="list">
            <el-table :data="listView.data" style="width: 100%" :height="listView.height" :border="listView.border"
                v-loading="listView.loading" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" v-if="listView.selection" />
                <el-table-column :prop="item.prop" :label="item.label" :width="item.width"
                    v-for="(item, index) in listView.columns" :key="index" />
                <el-table-column label="操作" :fixed="listView.operation.fixed" :width="listView.operation.width" v-if="listView.operation.open" :align="'center'">
                    <template #default="scope">
                        <slot name="operation" :row="scope.row"></slot>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination" v-if="listView.pagination.open">
                <el-pagination v-model:current-page="listView.listQuery.page"
                    v-model:page-size="listView.listQuery.size" :background="true" layout="prev, pager, next"
                    :total="listView.total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import XSearch from '../x-search/XSearch.vue'

const props =  defineProps({
    listView: {
        type: Object as () => any,
        required: true
    }
})

const search = () => {
    props.listView.listQuery.page = 1;
    emit('lodaData')
}

const emit = defineEmits(['lodaData', 'selectionChange']);

const handleSizeChange = () => {
    emit('lodaData')
}

const handleCurrentChange = () => {
    emit('lodaData')
}

const handleSelectionChange = (val: Array<any>) => {
    emit('selectionChange', val)
}

</script>

<style scoped lang="scss">
.container {
    .pagination {
        margin-top: 12px;
    }

    .search {
        margin-bottom: 6px;
    }

    .oprea {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
    }
}
</style>