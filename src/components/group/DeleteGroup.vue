<template>
    <div class="container">
        <el-dialog v-model="visible" title="删除分组" width="700">
            <div>
                <x-table :listView="listView" @lodaData="lodaData">
                    <template #opreaLeft>
                    </template>
                    <template #opreaRight>
                    </template>
                    <template #operation="{ row }">
                        <div>{{ row.id }}</div>
                    </template>
                </x-table>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { listConfig } from './listView'
import { ListView } from '@/components/common/x-table/ListView';
import XTable from '@/components/common/x-table/XTable.vue';
const visible = ref(false);
const listView = reactive(new ListView(listConfig));

const lodaData = () => {

}

const open = () => {
    visible.value = true;
}

defineExpose({
    open
});
</script>

<style scoped lang="scss"></style>