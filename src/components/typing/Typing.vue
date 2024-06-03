<template>
    <div class="container">
        <div class="top">
            <div class="left">
                <el-icon :size="20"><PictureRounded /></el-icon>
                <el-icon :size="20"><Picture /></el-icon>
                <el-icon :size="20"><User /></el-icon>
                <el-icon :size="20"><Phone /></el-icon>
                <el-icon :size="20"><VideoCamera /></el-icon>
            </div>
            <div class="right">
                <el-button type="primary">enter发送，shift+enter换行</el-button>
            </div>
        </div>
        <div class="bottom">
            <div class="typing-area" contenteditable></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

</script>

<style scoped lang="scss">
.container {
    border: 1px solid #ddd;
    .top {
        padding: 6px 12px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ddd;
        .left {
            display: flex;
            align-items: center;
            :deep(.el-icon) {
                margin-right: 10px;
            }
        }
    }
    .bottom {
        .typing-area {
            height: 160px;
            outline: none;
            padding: 12px;
        
        }
    }
}
</style>