<template>
    <div class="container">
        <el-dialog v-model="visible" title="翻译配置" width="500">
            <div>
                <el-form label-width="auto" :model="form" :rules="rules" ref="formRef">
                    <el-form-item label="进入翻译：" prop="name">
                        <el-select v-model="form.name1" placeholder="请选择进入翻译">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="发出翻译：" prop="name2">
                        <el-select v-model="form.name2" placeholder="请选择发出翻译">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="群翻译：" prop="name3">
                        <el-switch v-model="form.name3" />
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
    name1: '',
    name2: '',
    name3: false,
})

const rules = reactive<FormRules<any>>({
    name: [
        {
            required: true,
            message: '请选择进入翻译',
            trigger: 'blur',
        },
    ],
    name2: [
        {
            required: true,
            message: '请选择发出翻译',
            trigger: 'blur',
        },
    ],
    name3: [
        {
            required: true,
            message: '请选择是否开启群翻译',
            trigger: 'blur',
        },
    ]
})

const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

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