/**
 * 这里是路由文件
 */
//引入VueRouter
import VueRouter from "vue-router";
//引入Vue
import Vue from 'vue';

//引入路由所需的组件
// import Home from "@/components/Home";
// import About from "@/components/About";
// import User from "@/components/User";

//懒加载方式加载组件 todo cli4里面打包后没有分开加载 还是一个文件 不知道是为什么
const Home = () => import('@/components/Home');
const About = () => import('@/components/About');
const User = () => import('@/components/User');
const ProFile = () => import('@/components/ProFile');

//子路由
const HomeNews = () => import('@/components/HomeNews');
const HomeMessage = () => import('@/components/HomeMessage');


//安装VueRouter
Vue.use(VueRouter);

//配置路由数组 这个常量必须是routes 因为下面VueRouter中的键必须是routes
const routes = [
    //如果path是空重定向到index
    {
        path: '',
        redirect: '/index.html',
    },
    {
        path: '/index.html',
        component: Home,
        meta: {
            title: '首页',
        },
        //路由专属守卫  仅在该路由生效时被触发 还有一些组件守卫是在组件里写的
        beforeEnter: (to, from, next) => {
            // let confirm = window.confirm('确认进入页面吗');
            let confirm = true;
            if (confirm) {
                next();
            } else {
                next(false);
            }
        }
        ,
        children: [
            {
                path: '',
                redirect: '/index/news.html',
            },
            {
                path: '/index/news.html',
                component: HomeNews,
            },
            {
                path: '/index/message.html',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about.html',
        component: About,
        meta: {
            title: '关于我们',
        }
    },
    {
        path: '/user/:id-:cat_id.html',
        component: User,
        meta: {
            title: '用户',
        }
    },
    {
        path: '/profile.html',
        component: ProFile,
        meta: {
            title: '个人中心',
        }
    }
    ,
    {
        path: '*',
        redirect: '/index.html'
    }
];

//创建VueRouter对象 这个常量必须是router
const router = new VueRouter({
    //默认是hash模式 这里要手动设置为html5 history模式
    mode: 'history',
    //全局指定active-class的自定义类名
    linkActiveClass: 'active',
    //路由规则
    routes
});

/**
 * beforeEach 前置钩子 导航守卫
 * @param to 当前页面
 * @param from 来源页面（上一个页面）
 * @param next 手动执行方法
 */
router.beforeEach((to, from, next) => {
    //使用 matched 是为了防止存在嵌套路由导致undefined的情况
    document.title = to.matched[0].meta.title;
    next();
});

/**
 * afterEach 后置钩子 导航守卫/全局守卫 所有页面通过路由加载时都会执行此函数
 * @param to 当前页面
 * @param from 来源页面（上一个页面）
 */
router.afterEach((to, from) => {
    to.matched;
    from.matched;
    // console.log(to, from)
});

//导出路由对象
export default router;

