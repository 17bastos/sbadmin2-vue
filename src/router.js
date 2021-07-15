import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/pages/Login'
import ForgotPassword from './components/pages/ForgotPassword'
import NotFound from './components/pages/NotFound'
import Register from './components/pages/Register'
import Blank from './components/pages/Blank'
import Panel from './components/admin-panel/Panel'
import Colors from './components/utilities/Colors'
import MainContent from './components/admin-panel/MainContent'
import Borders from './components/utilities/Borders'
import Animations from './components/utilities/Animations'
import Other from './components/utilities/Other'
import Buttons from './components/components/Buttons'
import Cards from './components/components/Cards'
import Tables from './components/Tables'
import Charts from './components/Charts'

Vue.use(Router)

export default new Router({
    routes: [{
        path: "/",
        component: Panel,
        children: [{
            path: "",
            component: MainContent
        }, {
            path: "utilities/colors",
            component: Colors
        }, {
            path: "utilities/borders",
            component: Borders
        }, {
            path: "utilities/animations",
            component: Animations
        }, {
            path: "utilities/other",
            component: Other
        }, {
            path: "components/buttons",
            component: Buttons
        }, {
            path: "components/cards",
            component: Cards
        }, {
            path: "not-found",
            component: NotFound
        }, {
            path: "blank",
            component: Blank
        }, {
            path: "tables",
            component: Tables
        }, {
            path: "charts",
            component: Charts
        }]
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/forgot-password",
        component: ForgotPassword
    }, {
        path: "/register",
        component: Register
    }]
})