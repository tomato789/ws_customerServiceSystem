<template>
    <div class="container">
        <div class="search">
            <el-input v-model="searchValue" style="width: 100%" placeholder="请输入分组名" :suffix-icon="'Search'" />
        </div>
        <div class="opera">
            <el-button type="success" size="small" @click="createGroup">添加分组</el-button>
            <el-button type="danger" size="small" @click="delGroup">删除分组</el-button>
        </div>
        <div class="list">
            <template v-for="(item, index) in data" :key="index">
                <div @click="onGroupChange(index)"
                    :style="{ 'background': cur == index ? '#409eff' : '#fff', 'color': cur == index ? '#fff' : '#000' }">
                    {{ item.name }}（{{ item.count }}）</div>
            </template>
        </div>
        <app-group ref="addGroupRef"></app-group>
        <delete-group ref="deleteGroupRef"></delete-group>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import AppGroup from "./AddGroup.vue";
import DeleteGroup from "./DeleteGroup.vue";

const searchValue = ref(null);
const cur = ref(0);
const addGroupRef = ref();
const deleteGroupRef = ref();

const data = [
    {
        id: 1,
        name: "分组1",
        count: 10,
    },
    {
        id: 2,
        name: "分组2",
        count: 20,
    },
    {
        id: 3,
        name: "分组3",
        count: 30,
    },
    {
        id: 4,
        name: "分组4",
        count: 40,
    },
    {
        id: 5,
        name: "分组5",
        count: 50,
    },
];

const createGroup = () => {
    addGroupRef.value.open();
};

const delGroup = () => {
    console.log(deleteGroupRef)
        deleteGroupRef.value.open();
};

const onGroupChange = (index: number) => {
    cur.value = index;
};
</script>

<style scoped lang="scss">
.container {
    width: 100%;
    border-right: 1px solid #ddd;

    .search {
        padding: 6px;
    }

    .opera {
        height: 46px;
        text-align: center;
        padding: 10px 6px;
        border-bottom: 1px solid #ddd;
    }

    .list {
        height: calc(100vh - 90px);

        >div {
            text-align: center;
            height: 40px;
            line-height: 40px;
            background: #fff;
            color: #000;
            cursor: pointer;
            border-bottom: 1px solid #ddd;
        }
    }
}
</style>