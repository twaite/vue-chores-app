import Vue from 'vue';
import Router from 'vue-router';
import MyChores from './views/my-chores.vue';
import AddChore from './views/add-chores.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'chores',
      component: MyChores,
    },
    {
      path: '/add',
      name: 'add',
      component: AddChore,
    },
  ],
});
