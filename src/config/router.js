import VueRouter from 'vue-router';
const routers = [
    {
        path: '/',
        meta: {
            title: '首页',
        },
        component: (resolve) => require(['../views/index.vue'], resolve),
        children:[
            {
                path: '/client/index',
                meta: {
                    title: 'Redis客户端首页',
                },
                component: (resolve) => require(['../views/client/index.vue'], resolve)
            },{
                path: '/user/index',
                meta: {
                    title: '用户首页',
                },
                component: (resolve) => require(['../views/user/index.vue'], resolve)
            }
        ]
    }, {
        path: '/install',
        meta: {
            title: '初始化',
        },
        component: (resolve) => require(['../views/install.vue'], resolve)
    }, {
        path: "/login",
        meta: {
            title: "登录"
        },
        component: (resolve) => require(['../views/login.vue'], resolve)
    }
];
const RouterConfig = {
    mode: 'history',
    routes: routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        window.document.title = to.meta.title;
    }
    next();
});
export default router;

