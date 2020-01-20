import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import('pages/Home')
const DataMapOverView = ()=>import("pages/DataOverview/DataOverview")
const DataMapSearch = ()=>import("pages/AllData/AllData")
Vue.use(Router)

const routes = [
    {
        path: '/',
        component: Home,
        children: [
            //数据地图
            {
                path: '/dm/overview',
                name: 'DataMapOverView',
                component: DataMapOverView,
            },
            //全部数据
            {
                path: '/dm/allData',
                name: 'DataMapSearch',
                component: DataMapSearch,
            }
        ]
    },
    {path: '*', redirect: '/'}
]
export default new Router({
    routes
})
