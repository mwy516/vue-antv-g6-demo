import Vue from 'vue'
import Router from 'vue-router'
import { getToken, setToken, account, clientId } from './auth';
import config from './env'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/iconfont.css'
import { parseUrl } from './utils'

Vue.use(ElementUI, { size: 'mini'});
Vue.use(Router);

export default function (router) {

    if (!process.env.APP_ENV) { // 本地开发
        const query = parseUrl(window.location.search).params
        const queryOutToken = query.token
        const queryAccount = query.account
        if (queryOutToken) {
            const token = queryOutToken.replace(/\//g, '')
            setToken(token)
            setToken(queryAccount, account)
            setToken(clientId, 'clientId')
            router.replace({
                path: location.hash.split('?')[0].replace('#', '')
            })
        }
    }

    if (!getToken()) {
        location.href = config.loginUrl;
    }

    router.beforeEach((to, from, next) => {
        if (!getToken()) {
            location.href = config.loginUrl;
            return;
        } else {
            if (to.name) {
                next();
            } else {
                window.localStorage.setItem('router', to.path);
                next();
            }
        }

    });
    return router;
}
