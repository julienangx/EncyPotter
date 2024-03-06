//Il s'agit du main.js du projet
import { createApp } from 'vue'
import App from './App.vue'

//On importe le router
import router from './router.js'

//On utilise le router
createApp(App).use(router).mount('#app')
