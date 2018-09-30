import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vue2TouchEvents from 'vue2-touch-events';
import './registerServiceWorker';
import 'vue-material-design-icons/styles.css';
import 'firebase'; // Setup firebase app

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
