import { createApp } from 'vue'
import App from './App.vue'

import './css/styles.css'
import './css/animations.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faHeartBroken, faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart, faHeartBroken)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
