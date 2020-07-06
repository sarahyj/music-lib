import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';
import firebase from 'firebase';

Vue.use(VueRouter);

const router = new VueRouter({ mode: 'history', routes });

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) next('login');
  else if (!requiresAuth && currentUser) next('dashboard');
  else next();
});

let app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});
