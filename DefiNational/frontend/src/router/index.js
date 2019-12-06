import Vue from 'vue'
import Router from 'vue-router'
import CircularCountDownTimer from "vue-circular-count-down-timer";

import Home from '../components/Home.vue'
import Sante from '../components/Sante.vue'
import Logement from '../components/Logement.vue'
import Etudes from '../components/Etudes.vue'
import FAQ from '../components/FAQ.vue'
import Secret from '../components/Secret.vue'
import Level1 from '../components/Level1.vue'
import Level2 from '../components/Level2.vue'
import Level3 from '../components/Level3.vue'
import Level4 from '../components/Level4.vue'
import Level5 from '../components/Level5.vue'
import Level6 from '../components/Level6.vue'
import Level7 from '../components/Level7.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Dashboard from '../components/Dashboard.vue'
import Discussion from "../components/Discussion.vue";
import Forum from "../components/Forum.vue";



Vue.use(Router);
Vue.use(CircularCountDownTimer);

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: Home },
        {path: '/Sante', name: 'Sante', component: Sante },
        {path: '/Logement', name: 'Logement', component: Logement },
        {path: '/Etudes', name: 'Etudes', component: Etudes },
        {path: '/FAQ', name: 'FAQ', component: FAQ },
        {path: '/secret', name: 'Secret', component: Secret },
        {path: '/Level1', name: 'Level1', component: Level1 },
        {path: '/Level2', name: 'Level2', component: Level2 },
        {path: '/Level3', name: 'Level3', component: Level3 },
        {path: '/Level4', name: 'Level4', component: Level4 },
        {path: '/Level5', name: 'Level5', component: Level5 },
        {path: '/Level6', name: 'Level6', component: Level6 },
        {path: '/Level7', name: 'Level7', component: Level7 },
        {path: '/Login', name: 'Login', component: Login },
        {path: '/Register', name: 'Register', component: Register },
        {path: '/Dashboard', name: 'Dashboard', component: Dashboard },
        { path: "/Discussion", name: "Discussion", component: Discussion },
        { path: "/Forum", name: "Forum", component: Forum }
        {path: '/*', redirect: '../../public/404.html' },
    ]
})
