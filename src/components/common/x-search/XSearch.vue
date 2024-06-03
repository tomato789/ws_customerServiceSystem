<template>
    <div class="container">
        <el-form :inline="true">
            <el-row :gutter="20">
                <template v-for="(item, index) in listView.searchConfig.options">
                    <el-col :span="6">
                        <template v-if="item.type == 'select'">
                            <el-form-item :label="item.showLabel ? `${item.label}：` : ''" style="width: 100%">
                                <el-select v-model="listView.params[item.value]" :placeholder="`请选择${item.label}`"
                                    style="width: 100%" clearable>
                                    <el-option v-for="node in item.dictData" :key="node.value" :label="node.label"
                                        :value="node.value" />
                                </el-select>
                            </el-form-item>
                        </template>
                        <template v-else>
                            <el-form-item :label="item.showLabel ? `${item.label}：` : ''" style="width: 100%">
                                <el-input v-model="listView.params[item.value]" :placeholder="`请输入${item.label}`"
                                    clearable style="width: 100%" />
                            </el-form-item>
                        </template>
                    </el-col>
                </template>
                <el-col :span="getColCount()" style="display: flex;justify-content: flex-end;align-items: flex-start;">
                    <el-button type="primary" @click="search()">搜索</el-button>
                    <el-button @click="reset()">重置</el-button>
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    listView: {
        type: Object as () => any,
        required: true
    }
})


const emit = defineEmits(['search']);

const search = () => {
    emit('search')
}

const reset = () => {
    for (const key in props.listView.params) {
        props.listView.params[key] = '';
    }
    emit('search')
}

const getColCount = () => {
    const optionsCount = props.listView.searchConfig.options.length;
    console.log(24 - optionsCount * 6);
    return 24 - optionsCount * 6;
}




</script>

<style scoped lang="scss">
.container {
    :deep(.el-form-item) {
        margin-bottom: 8px;
    }
}
</style>