import Vue from 'vue'
import Router from 'vue-router'

const Home = ()=>import("pages/Home")
// const BloodTable = ()=>import("pages/BloodTable")
import BloodTable from "pages/BloodTable"

Vue.use(Router)

const routes = [
    {
        path: '*',
        component: Home,
    },
    {
        path: '/dm',
        component: BloodTable,
    }
]

export default new Router({
    routes
})
