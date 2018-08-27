<style type="scss">
    .leftMenu {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
        width: 200px;
        position:absolute;
        height: 100%;
        /*overflow:hidden;*/
    }

    .leftList {
        /*position:absolute;*/
        height: 100%;
        bottom:60px;
        top: 0px;
        width: 100%;
        /*float: left;*/
    }

    .leftFooter{
        /*position:absolute;*/
        width: 100%;
        height: 60px;
        /*float: left;*/
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
            <div class="leftList">
                <el-tree :data="dbList" class="" style="height: 100%;" :props="defaultProps" @node-click="handleNodeClick"
                     :render-content="renderContent"></el-tree>
            </div>
            <div class="leftFooter">sssss</div>
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