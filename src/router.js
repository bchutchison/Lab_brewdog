import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Favourites from '@/views/Favourites.vue';

Vue.use(Router);
const router = new Router({
routes: [
  {
    path: '',
    name: 'home',
    component: Home
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: Favourites
  }
]

});

export default router;
