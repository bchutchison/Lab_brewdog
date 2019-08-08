import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import BeersList from '@/views/BeersList.vue';
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
    path: '/beerslist',
    home: 'beerslist',
    component: BeersList
  },
  {
    path: '/favourites',
    home: 'favourites',
    component: Favourites
  }
]

});

export default router;
