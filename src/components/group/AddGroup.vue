<template>
    <div class="container">
        <el-dialog v-model="visible" title="添加分组" width="500">
            <div>
                <el-form label-width="auto" :model="form" :rules="rules" ref="formRef">
                    <el-form-item label="分组名" prop="name">
                        <el-input v-model="form.name" placeholder="请输入分组名" />
                    </el-form-item>
                </el-form>
            </div>
            <template #footer>
                <div class="dialog-footer">
                    <el-button @click="submitForm" type="primary">确 定</el-button>
                    <el-button @click="visible = false">关 闭</el-button>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const visible = ref(false);
const formRef: any = ref<FormInstance>()
const form = reactive({
    name: '',
})

const rules = reactive<FormRules<any>>({
    name: [
        {
            required: true,
            message: '请输入分组名称',
            trigger: 'blur',
        },
    ]
})

const submitForm = async () => {
    if (!formRef.value) return
    await formRef.value.validate((valid: any, fields: any) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = () => {
    if (!formRef.value) return
    formRef.value.resetFields()
}


const open = () => {
    resetForm();
    visible.value = true;
}

defineExpose({
    open
});
</script>

<style scoped lang="scss"></style>