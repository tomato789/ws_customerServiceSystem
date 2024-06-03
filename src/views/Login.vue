<template>
    <div class="container">
        <div class="login-content">
            <div class="left"></div>
            <div class="right">
                <div class="title">{{ appConfig.loginTitle }} </div>
                <el-form ref="ruleFormRef" style="max-width: 600px" :model="form" :rules="rules" label-width="auto">
                    <el-form-item prop="account">
                        <el-input v-model="form.account" size="large" type="text" :prefix-icon="User" clearable placeholder="请输入账号" />
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="form.password" size="large" type="password" :prefix-icon="Lock" clearable placeholder="请输入密码" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="login(ruleFormRef)">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Lock, User } from '@element-plus/icons-vue'
import { onMounted, ref, reactive } from 'vue';
import type { FormInstance, FormRules } from 'element-plus'
import appConfig from '@/config/Index'
import router from '@/router';

const ruleFormRef = ref<FormInstance>()

const form = reactive({
    account: 'admin',
    password: 'admin',
})

const rules = reactive<FormRules<typeof form>>({
    account: [{ required: true, trigger: 'blur', message: '请输入账号' }],
    password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
})

const login = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            // 跳转到路由home
            router.push({ name: 'home' })
        } else {
            console.log('error submit!', fields)
        }
    })
}

onMounted(() => {
    console.log(appConfig);
});
</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    width: 100%;
    background-image: url('../assets/images/login-bg.png');
    background-size: 100px 80px;
    background-position: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-content {
        display: grid;
        grid-template-columns: repeat(2, 465px);
        grid-template-rows: 520px;
        border-radius: 10px;
        box-shadow: 1px 1px 10px #c4cade;
        overflow: hidden;

        .left {
            background-image: url('../assets/images/login.png');
            background-size: cover;
        }

        .right {
            padding: 0 40px 32px 40px;
            background-color: #FFFFFF;

            .title {
                margin-top: 50px;
                padding: 20px;
                display: flex;
                justify-content: center;
                font-size: 32px;
                font-weight: bold;
                height: 100px;
                align-items: center;
                margin-bottom: 20px;
            }

            :deep(.el-button) {
                width: 100%;
                height: 40px;
                font-size: 16px;
                background-color: #294aa5;
                border-color: #294aa5;
            }

            :deep(.el-form-item) {
                margin-bottom: 35px
            }
        }
    }
}
</style>
