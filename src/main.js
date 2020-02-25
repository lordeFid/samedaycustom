import Vue from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'

import 'ant-design-vue/dist/antd.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'


Vue.use(VueSidebarMenu)

library.add(faSpinner)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(Antd);

new Vue({
render: h => h(App),
}).$mount('#app')
