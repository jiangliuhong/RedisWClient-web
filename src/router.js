const routers = [
    {
        path: '/',
        meta: {
            title:'首页',
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },{
        path: '/install',
        meta: {
            title:'初始化',
        },
        component: (resolve) => require(['./views/install.vue'], resolve)
    }
];
export default routers;

