<template>
    <div class="container">
        <el-dialog v-model="visible" title="扫码进群" width="1000">

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

const visible = ref(false);

const open = () => {
    visible.value = true;

}

defineExpose({
    open
});
</script>

<style scoped lang="scss">

</style>