<style type="scss">
    .leftMenu {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        width: 200px;
        position: relative;
        height: 100%;
        border-right: 1px solid #e4e7ed;
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

    .tabCard{
        background-color: white;
        height: 100%;
    }
    .tabPane{
        height: 100%;
    }

    .content{
        padding: 10px;
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
        <el-main class="clientMain">
            <el-tabs v-model="keyName" type="card" class="tabCard" closable @tab-remove="removeTab">
                <el-tab-pane v-for="(item, index) in keyTabs" :key="item.name" :label="item.title" :name="item.name" class="content" >
                    <el-row style="float: left;box-sizing: border-box;padding: 0 10px 20px 10px;">
                        <el-col >
                            <span >名称:</span>
                            <el-input style="width: 300px;margin-left: 10px;" ></el-input>
                            <span style="padding-left: 10px;"><el-button>重命名</el-button> <el-button>删除</el-button> <el-button>刷新</el-button></span>
                        </el-col>
                    </el-row>
                    <div style="width: 100%;height: 100%;padding:10px;box-sizing: border-box;">
                        <el-input type="textarea" :rows="10" ></el-input>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-main>
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
                },
                keyName:'1',
                keyTabs:[
                    {
                        title: 'Tab 1',
                        name: '1',
                        content: 'Tab 1 content'
                    }, {
                        title: 'Tab 2',
                        name: '2',
                        content: 'Tab 2 content'
                    }
                ]
            }
        },
        methods: {
            handleNodeClick(data) {
               // this.addTab('test');
            },
            renderContent(h, {node, data, store}) {
                return (<span><i class={data.className}></i><span>{node.label}</span></span>);
            },
            addTab(targetName) {
                let newTabName = ++this.tabIndex + '';
                this.keyTabs.push({
                    title: 'New Tab',
                    name: newTabName,
                    content: 'New Tab content'
                });
                this.keyName = newTabName;
            },
            removeTab(targetName) {
                let tabs = this.keyTabs;
                let activeName = this.keyName;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                        if (tab.name === targetName) {
                            let nextTab = tabs[index + 1] || tabs[index - 1];
                            if (nextTab) {
                                activeName = nextTab.name;
                            }
                        }
                    });
                }
                this.keyName = activeName;
                this.keyTabs = tabs.filter(tab => tab.name !== targetName);
            }
        }
    };
</script>