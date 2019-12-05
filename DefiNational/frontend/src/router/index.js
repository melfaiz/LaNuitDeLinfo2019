import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Player from '../components/Player.vue'
import Club from '../components/Club.vue'
import Sante from '../components/Sante.vue'
import Logement from '../components/Logement.vue'
import Etudes from '../components/Etudes.vue'
import FAQ from '../components/FAQ.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', name: 'Home', component: Home },
        {path: '/Player', name: 'Player', component: Player },
        {path: '/Club', name: 'Club', component: Club },
        {path: '/Sante', name: 'Sante', component: Sante },
        {path: '/Logement', name: 'Logement', component: Logement },
        {path: '/Etudes', name: 'Etudes', component: Etudes },
        {path: '/FAQ', name: 'FAQ', component: FAQ },

    ]
})
