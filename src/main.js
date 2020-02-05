import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Router1 from './components/routingComps/router1.vue';
import Router2 from './components/routingComps/router2.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/router1', component: Router1},
  { path: '/router2', component: Router2}
];

const router = new VueRouter({
routes
});

/** const app = new Vue({
  router
}).$mount('#app'); **/
 new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
