<style type="scss">
    .leftMenu {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        width: 200px;
        position: relative;
        height: 100%;
    }

    .leftList {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        box-sizing: border-box;
        padding-bottom: 40px;
        background-color: #FFFFFF;
    }
    .leftFooter{
        position:absolute;
        width: 100%;
        height: 40px;
        bottom: 0;
        left: 0;
        background-color:#FFFFFF;
        border-top:2px solid #F0F0F0;
        box-sizing: border-box;
        /*padding:1px;*/
    }

    .clientMain {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        padding: 0;
        width: 100%;
    }

    .btnGroup{
        width: 100%;
        height: 100%;
        padding:1px;
        box-sizing: border-box;
    }

    .btnGroup button{
        width: 33.4%;
        height: 35px;
        background-color: #545c64;
        border-color: #545c64;
    }

</style>
<template>
    <el-container>
        <el-aside class="leftMenu">
            <div class="leftList">
                <el-tree :data="dbList" class="" :props="defaultProps" @node-click="handleNodeClick"
                         :render-content="renderContent"></el-tree>
            </div>
            <div class="leftFooter">

                    <el-button-group class="btnGroup">
                        <el-button type="primary" icon="el-icon-xinzeng">添加</el-button>
                        <el-button type="primary" icon="el-icon-daoru">导入</el-button>
                        <el-button type="primary" icon="el-icon-daochu">导出</el-button>
                    </el-button-group>
            </div>
        </el-aside>
        <el-main class="clientMain">Main</el-main>
    </el-container>
</template>
<script>
    export default {
        data() {
            return {
                dbList: [{
                    type:1,
                    className: 'el-icon-redis',
                    label: '一级 1',
                    children: [{
                        className:'el-icon-keys',
                        label: '二级 1-1',
                        children: [{
                            className:'el-icon-Keys',
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
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data);
            },
            renderContent(h, {node, data, store}) {
                return (<span><i class={data.className}></i><span>{node.label}</span></span>);
            }
        }
    };
</script>