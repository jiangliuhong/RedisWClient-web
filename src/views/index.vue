<style lang="scss">
    html,body,wrapper{
        height:100%;
        overflow:hidden;
    }
    .header{
        height:100px;
        position:absolute;
        top:0;
        left:0;
        right:0;
        background-color: rgb(84, 92, 100);
        line-height: 60px;
        color: #fff;
        padding: 0;
    }
    .main{
        position:absolute;
        left:0;
        top:60px;
        bottom:60px;
        padding: 0;
        width: 100%;
    }
    .footer{
        position:absolute;
        left:0;
        bottom:0;
        right:0;
        height:60px;
        background-color: rgb(84, 92, 100);
        text-align: center;

        span{
            display:block;
            color: #fff;
            line-height: 60px;
            height: 60px;
            overflow:hidden;
            font-family:"Helvetica Neue";
            font-size: 10px;
        }
    }
    .name {
        height: 60px;
        font-size: 22px;
        padding-left: 20px;
        padding-right: 20px;
        /*border-color: rgba(238, 241, 146, 0.3);*/
        /*border-right-width: 1px;*/
        /*border-right-style: solid;*/
        img {
            width: 40px;
            float: left;
            margin: 10px 10px 10px 18px;
        }
        .txt {
            color: #fff;
        }
    }
    .user {
        text-align: right;
        padding-right: 35px;
        float: right;
        .userinfo-inner {
            cursor: pointer;
            color:#fff;
            img {
                width: 40px;
                height: 40px;
                border-radius: 20px;
                margin: 10px 0px 10px 10px;
                float: right;
            }
        }
    }
</style>
<template>
    <el-container>
        <el-header class="header">
            <el-row>
                <!--<el-col :span="4"><span class="name">RedisWClient</span></el-col>-->
                <el-col :span="3" class="name">RedisWClient</el-col>
                <el-col :span="17"><navmenu></navmenu></el-col>
                <el-col :span="4" class="user">
                    <el-dropdown trigger="hover">
                        <span class="el-dropdown-link userinfo-inner"><img src="../assets/image/user.png" /> Admin</span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>我的消息</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>

        </el-header>
        <el-main class="main">
            <router-view style="height: 100%;width: 100%"></router-view>
        </el-main>
        <el-footer class="footer">
            <span>by jiangliuhong  ,  ja_rome@163.com</span>
        </el-footer>
    </el-container>
</template>
<script>
    import NavMenu from '~/views/headMenu';
    import router from '../config/router';
    //console.log($router);
    router.push({path:'/client/index'});
    export default {
        components: {
            'navmenu': NavMenu
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>