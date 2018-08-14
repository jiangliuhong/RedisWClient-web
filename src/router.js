const routers = [
    {
        path: '/',
        mate: {
            title:'首页',
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path: '/install',
        mate: {
            title:'初始化',
        },
        component: (resolve) => require(['./views/install.vue'], resolve)
    }
];
export default routers;

