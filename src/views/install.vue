<style scoped>
    body {
        background-color: gray;
    }

    .el-container {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 300px;
        margin-left: -200px;
        margin-top: -150px;
    }

    .el-form {
        width: 100%;
    }
</style>
<template>
    <el-container>
        <el-header>欢迎使用</el-header>
        <!--<el-main>-->
        <el-form ref="admin" :model="admin" :rules="rules" label-width="90px">
            <el-form-item label="用户名：">
                <el-input :disabled="true" value="admin"></el-input>
            </el-form-item>
            <el-form-item label="密码：" prop="password">
                <el-input v-model="admin.password" type="password" clearable></el-input>
            </el-form-item>
            <el-form-item label="确认密码：" prop="rePassword">
                <el-input v-model="admin.rePassword" type="password" clearable></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('admin')">提交</el-button>
                <el-button @click="resetForm('admin')">重置</el-button>
            </el-form-item>
        </el-form>
        <!--</el-main>-->
    </el-container>
</template>
<script>
    import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";
    import http from '../utils/HttpUtils';
    import configs from '../config/config';

    export default {
        components: {ElHeader},
        data() {
            var checkPassword = (rule, value, callback) => {
                if (value === null || value === '') {
                    callback(new Error('请输入密码'));
                } else if (value.length < 3) {
                    callback(new Error('密码不能低于3位数'));
                } else {
                    callback();
                }
            };
            var checkRePassword = (rule, value, callback) => {
                if (value === null || value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.admin.password) {
                    callback(new Error('两次输入密码不一致'));
                } else {
                    callback();
                }
            };
            return {
                admin: {
                    password: '',
                    rePassword: ''
                },
                rules: {
                    password: [{validator: checkPassword, trigger: 'blur'}],
                    rePassword: [{validator: checkRePassword, trigger: 'blur'}]
                }
            };
        },
        methods: {
            submitForm(formName) {
                var _this = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        http.api.post(configs.API_PATH.SYS_INIT,null,_this.admin,function(res){
                            console.log(res);
                        });
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>