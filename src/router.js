import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Beers from '@/views/Beers.vue';
import Favourites from '@/views/Favourites.vue';

Vue.use(Router);
const router = new Router({
routes: [
  {
    path: '',
    home: 'home',
    component: Home
  },
  {
    path: '/beers',
    home: 'beers',
    component: Beers
  },
  {
    path: '/favourites',
    home: 'favourites',
    component: Favourites
  }
]

});

export default router;
