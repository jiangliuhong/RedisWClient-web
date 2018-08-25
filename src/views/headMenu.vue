<template>
    <el-menu
            :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.path" >{{item.text}}</el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        data() {
            return {
                defaultActive:'/client/index',
                navList:[
                    {path:'/client/index',text:'控制中心'},
                    {path:'/user/index',text:'用户中心'}
                ]
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                this.$router.push({path:key});
            }
        },
        created:function(){
            this.$router.push({path:this.navList[0].path});
        }
    }
</script>