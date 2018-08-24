<style type="scss">
    .leftMenu {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        width: 200px;
    }

    .leftList{
        height: 100%;
    }

    .clientMain {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        padding: 0;
        width: 100%;
    }
</style>
<template>
    <el-container>
        <el-aside class="leftMenu">
            <el-tree :data="data" class="leftList" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-aside>
        <el-main class="clientMain">Main</el-main>
    </el-container>
</template>
<script>
    export default {
        data(){
            return {
                data: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            };
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            }
        }
    };
</script>