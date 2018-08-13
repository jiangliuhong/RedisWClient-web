<template>
    <el-container>
        <el-header>
            <navmenu></navmenu>
        </el-header>
        <el-container>
            <el-aside width="200px">
                left
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
<script>
    import NavMenu from '~/views/headMenu'

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
        // components() {
        //     return {navmenu: NavMenu};
        // },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>