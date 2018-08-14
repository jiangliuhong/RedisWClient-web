<style scoped>
    body {
        background-color: gray;
    }
    .el-container{
        position: absolute;
        left: 50%;
        top: 50%;
        width: 400px;
        height: 300px;
        margin-left: -200px;
        margin-top: -150px;
    }
    .el-form{
        width: 100%;
    }
</style>
<template>
    <el-container>

        <el-form ref="initAdmin" :model="admin" label-width="90px">
            <el-form-item label="用户名：">
                <el-input :disabled="true" value="admin"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input  v-model="admin.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码：">
                <el-input  v-model="admin.rePassword"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>

    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                admin: {
                    password:'',
                    rePassword:''
                }
            }
        },
        methods: {
            subminForm(){

            },
            resetForm(){
                console.log($refs);
                //this.$refs['initAdmin'].resetFields();
            }
        }
    }
</script>