const routers = [
    {
        path: '/',
        meta: {
            title: '首页',
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }, {
        path: '/install',
        meta: {
            title: '初始化',
        },
        component: (resolve) => require(['./views/install.vue'], resolve)
    }, {
        path: "/login",
        meta: {
            title: "登录"
        },
        component: (resolve) => require(['./views/login.vue'], resolve)
    }
];
export default routers;

