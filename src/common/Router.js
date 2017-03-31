import Login from '../pages/Login.vue'
import Main from '../pages/Main.vue'
import Home from '../pages/Home.vue'
import NotFound from '../pages/404.vue'

let routes = [{
    path: '/login',
    component: Login
}, {
    name: '管理后台',
    path: '/',
    redirect: '/home',
    component: Main,
    children: [{
        name: '首页',
        path: '/home',
        component: Home
    }, {
        name: '测试 组件',
        path: '/page1',
        component: resolve => require(['../pages/test/page1.vue'], resolve)
    }]
}, {
    path: '/404',
    component: NotFound
}, {
    path: '*',
    redirect: { path: '/404' }
}];

export default routes
