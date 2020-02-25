import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Contentnav from '../components/views/Contentnav'

Vue.use(Router)

export default new Router ({
    routes: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
            path: '/contentnav',
            name: 'contentnav',
            component: Contentnav
        }
        
       ]
      
});
