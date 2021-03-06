import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
import nota from "./components/mainNota.vue"
import noticias from "./components/noticias.vue"
import olimpicos from "./components/olimpicos.vue"


Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/notas', component: nota },
  { path: '/noticias', component: noticias },
  { path: '/olimpicos', component: olimpicos },
  { path: "/*" , component: olimpicos }
]

const router = new VueRouter({
  routes 
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
