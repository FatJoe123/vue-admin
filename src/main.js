/* JS库 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import babelpolyfill from 'babel-polyfill'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'

/* CSS */
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.min.css'

/* 组件 */
import App from './App'

/* JS方法 */
import store from './vuex/store'
import routes from './common/Router'
import Config from './common/Config'
import userUtil from './common/userUtil'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);

//进度条
NProgress.configure({ showSpinner: false });

//路由配置
const router = new VueRouter({
    routes
});

router.beforeEach((to, from, next) => {
    /*
    NProgress.start();
    if (to.path == '/login') {
        userUtil.sid('')
    }
    let user = userUtil.sid()
    if (!user && to.path != '/login'&&to.path != '/404') {
        next({ path: '/login' })
    } else {
        next()
    }
     */
    NProgress.start();
    next()
});

router.afterEach(transition => {
    NProgress.done();
});

//ajax公共配置
Vue.http.options = { emulateJSON: true, root: Config.host };
Vue.http.interceptors.push(function(request, next) {
    request.body.mailiSid = userUtil.sid()
    next((response) => {
        if (!response.ok) {
            this.$message.error(Config.ajaxError)
        } else if (response.body.code === 999) {
            userUtil.sid('')
            this.$router.push('/login')
        }
        return response;
    });
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
